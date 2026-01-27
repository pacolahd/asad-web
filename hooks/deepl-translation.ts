import type { CollectionAfterChangeHook, GlobalAfterChangeHook } from 'payload';
import { translateText } from '@/lib/deepl';

type LocaleCode = 'en' | 'fr';

interface TranslationConfig {
  localizedFields: string[];
  collectionSlug?: string;
}

/**
 * Creates an afterChange hook that auto-translates localized fields
 * when content is saved in one language.
 */
export function createTranslationHook(config: TranslationConfig): CollectionAfterChangeHook {
  return async ({ doc, req, operation, collection }) => {
    const collectionSlug = config.collectionSlug || collection?.slug;
    console.log(`[Translation Hook] Running for ${collectionSlug}, operation: ${operation}, locale: ${req.locale}`);

    // Prevent infinite loop - skip if this is a translation update
    if (req.context?.skipTranslation) {
      console.log('[Translation Hook] Skipping - this is a translation update');
      return doc;
    }

    // Only run on update operations (not create)
    // During create, the document may not be fully committed yet
    // The admin UI typically triggers an update immediately after create anyway
    if (operation !== 'update') {
      console.log(`[Translation Hook] Skipping - operation is ${operation}, not update`);
      return doc;
    }

    // Get the current locale from the request
    const currentLocale = (req.locale || 'en') as LocaleCode;
    const targetLocale: LocaleCode = currentLocale === 'en' ? 'fr' : 'en';

    console.log(`[Translation Hook] Source locale: ${currentLocale}, Target locale: ${targetLocale}`);

    // Check if auto-translation is enabled (via query param or setting)
    const autoTranslate = req.query?.autoTranslate !== 'false';
    if (!autoTranslate) {
      console.log('[Translation Hook] Auto-translate disabled via query param');
      return doc;
    }

    const { payload } = req;
    const updates: Record<string, unknown> = {};
    let hasUpdates = false;

    // Fetch the document in the target locale once
    // Note: For new documents, this might not have target locale data yet
    let targetDoc: Record<string, unknown> | null = null;
    try {
      targetDoc = await payload.findByID({
        collection: collectionSlug as string,
        id: doc.id,
        locale: targetLocale,
        depth: 0,
      });
    } catch {
      // Document might not exist in target locale yet, that's okay
    }

    // For each localized field, translate and include in updates
    for (const field of config.localizedFields) {
      const sourceValue = doc[field];
      console.log(`[Translation Hook] Field "${field}" = "${sourceValue}" (type: ${typeof sourceValue})`);

      // Skip if source is empty
      if (!sourceValue || typeof sourceValue !== 'string') {
        console.log(`[Translation Hook] Skipping field "${field}" - empty or not a string`);
        continue;
      }

      const targetValue = targetDoc?.[field];

      // Only translate if target is empty or same as source (untranslated)
      if (!targetValue || targetValue === sourceValue) {
        const translated = await translateText(sourceValue, currentLocale);
        // Always include the field in updates - use translation if different, otherwise source
        // This ensures required fields always have a value in target locale
        updates[field] = translated || sourceValue;
        hasUpdates = true;
        console.log(`[Translation Hook] Field "${field}" translated: "${sourceValue}" -> "${updates[field]}"`);
      }
    }

    // If we have updates, save them to the target locale
    if (hasUpdates) {
      console.log(`[Translation Hook] Saving translations to ${targetLocale}:`, updates);
      console.log(`[Translation Hook] Document ID: ${doc.id} (type: ${typeof doc.id}), Collection: ${collectionSlug}`);

      // Defer the translation update to avoid interfering with file uploads
      // This allows the S3 upload to complete before we update the document
      const docId = doc.id;
      const slug = collectionSlug as string;
      const fieldsToUpdate = { ...updates };
      const targetLoc = targetLocale;
      const fieldCount = Object.keys(updates).length;

      setImmediate(async () => {
        try {
          await payload.update({
            collection: slug,
            id: docId,
            locale: targetLoc,
            data: fieldsToUpdate,
            depth: 0,
            context: { skipTranslation: true }, // Prevent infinite loop
          });
          console.log(`[Translation Hook] Auto-translated ${fieldCount} fields to ${targetLoc}`);
        } catch (error) {
          console.error('[Translation Hook] Failed to save auto-translation:', error);
        }
      });
    } else {
      console.log('[Translation Hook] No updates needed');
    }

    return doc;
  };
}

/**
 * Creates an afterChange hook for globals that auto-translates localized fields
 */
export function createGlobalTranslationHook(config: TranslationConfig): GlobalAfterChangeHook {
  return async ({ doc, req, global }) => {
    console.log(`[Translation Hook - Global] Running, locale: ${req.locale}`);

    // Prevent infinite loop - skip if this is a translation update
    if (req.context?.skipTranslation) {
      console.log('[Translation Hook - Global] Skipping - this is a translation update');
      return doc;
    }

    const currentLocale = (req.locale || 'en') as LocaleCode;
    const targetLocale: LocaleCode = currentLocale === 'en' ? 'fr' : 'en';

    console.log(`[Translation Hook - Global] Source locale: ${currentLocale}, Target locale: ${targetLocale}`);

    const autoTranslate = req.query?.autoTranslate !== 'false';
    if (!autoTranslate) {
      console.log('[Translation Hook - Global] Auto-translate disabled via query param');
      return doc;
    }

    const { payload } = req;
    const updates: Record<string, unknown> = {};
    let hasUpdates = false;

    // Fetch the global in the target locale once
    let targetDoc: Record<string, unknown> | null = null;
    try {
      targetDoc = await payload.findGlobal({
        slug: global.slug,
        locale: targetLocale,
        depth: 0,
      });
    } catch {
      // Global might not have target locale data yet, that's okay
    }

    for (const field of config.localizedFields) {
      const sourceValue = doc[field];

      if (!sourceValue || typeof sourceValue !== 'string') {
        continue;
      }

      const targetValue = targetDoc?.[field];

      if (!targetValue || targetValue === sourceValue) {
        const translated = await translateText(sourceValue, currentLocale);
        // Always include the field in updates - use translation if different, otherwise source
        // This ensures required fields always have a value in target locale
        updates[field] = translated || sourceValue;
        hasUpdates = true;
        console.log(`[Translation Hook - Global] Field "${field}" translated: "${sourceValue}" -> "${updates[field]}"`);
      }
    }

    if (hasUpdates) {
      // Defer the translation update to avoid interfering with request processing
      const globalSlug = global.slug;
      const fieldsToUpdate = { ...updates };
      const targetLoc = targetLocale;
      const fieldCount = Object.keys(updates).length;

      setImmediate(async () => {
        try {
          await payload.updateGlobal({
            slug: globalSlug,
            locale: targetLoc,
            data: fieldsToUpdate,
            depth: 0,
            context: { skipTranslation: true }, // Prevent infinite loop
          });
          console.log(`[Translation Hook - Global] Auto-translated ${fieldCount} fields to ${targetLoc}`);
        } catch (error) {
          console.error('[Translation Hook - Global] Failed to save auto-translation:', error);
        }
      });
    }

    return doc;
  };
}

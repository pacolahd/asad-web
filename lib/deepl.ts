import * as deepl from 'deepl-node';

let translator: deepl.Translator | null = null;

function getTranslator(): deepl.Translator | null {
  if (!process.env.DEEPL_API_KEY) {
    console.warn('[DeepL] DEEPL_API_KEY not set - auto-translation disabled');
    return null;
  }

  if (!translator) {
    console.log('[DeepL] Initializing translator with API key');
    translator = new deepl.Translator(process.env.DEEPL_API_KEY);
  }

  return translator;
}

export type SourceLanguage = 'en' | 'fr';
export type TargetLanguage = 'en-US' | 'en-GB' | 'fr';

const sourceToTarget: Record<SourceLanguage, TargetLanguage> = {
  en: 'fr',
  fr: 'en-US',
};

export async function translateText(
  text: string,
  sourceLocale: SourceLanguage
): Promise<string | null> {
  const client = getTranslator();
  if (!client) return null;

  try {
    const targetLang = sourceToTarget[sourceLocale];
    console.log(`[DeepL] Translating from ${sourceLocale} to ${targetLang}: "${text.substring(0, 50)}..."`);
    const result = await client.translateText(text, sourceLocale, targetLang);
    console.log(`[DeepL] Translation result: "${result.text.substring(0, 50)}..."`);
    return result.text;
  } catch (error) {
    console.error('[DeepL] Translation error:', error);
    return null;
  }
}

export async function translateFields<T extends Record<string, unknown>>(
  data: T,
  localizedFields: string[],
  sourceLocale: SourceLanguage
): Promise<Partial<T>> {
  const client = getTranslator();
  if (!client) return {};

  const translations: Partial<T> = {};

  for (const field of localizedFields) {
    const value = data[field];
    if (typeof value === 'string' && value.trim()) {
      const translated = await translateText(value, sourceLocale);
      if (translated) {
        (translations as Record<string, unknown>)[field] = translated;
      }
    }
  }

  return translations;
}

export async function getUsage(): Promise<deepl.Usage | null> {
  const client = getTranslator();
  if (!client) return null;

  try {
    return await client.getUsage();
  } catch (error) {
    console.error('DeepL usage check error:', error);
    return null;
  }
}

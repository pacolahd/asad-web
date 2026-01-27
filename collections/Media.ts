import type { CollectionConfig } from 'payload';
import { createTranslationHook } from '@/hooks/deepl-translation';

export const Media: CollectionConfig = {
  slug: 'media',
  labels: {
    singular: {
      en: 'File',
      fr: 'Fichier',
    },
    plural: {
      en: 'Media Library',
      fr: 'Médiathèque',
    },
  },
  admin: {
    useAsTitle: 'alt',
    defaultColumns: ['filename', 'alt', 'updatedAt'],
    group: {
      en: 'Media',
      fr: 'Médias',
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      createTranslationHook({
        localizedFields: ['alt', 'caption'],
      }),
    ],
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*', 'application/pdf'],
    imageSizes: [
      {
        name: 'thumbnail',
        width: 400,
        height: 300,
        position: 'centre',
      },
      {
        name: 'card',
        width: 768,
        height: 512,
        position: 'centre',
      },
      {
        name: 'large',
        width: 1920,
        height: undefined,
        position: 'centre',
      },
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Alt Text',
        fr: 'Texte Alternatif',
      },
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
      label: {
        en: 'Caption',
        fr: 'Légende',
      },
    },
  ],
};

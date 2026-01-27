import type { CollectionConfig } from 'payload';
import { createTranslationHook } from '@/hooks/deepl-translation';

export const Timeline: CollectionConfig = {
  slug: 'timeline',
  labels: {
    singular: {
      en: 'Event',
      fr: 'Événement',
    },
    plural: {
      en: 'Timeline',
      fr: 'Chronologie',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['year', 'title', 'updatedAt'],
    group: {
      en: 'Content',
      fr: 'Contenu',
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      createTranslationHook({
        localizedFields: ['title', 'description'],
      }),
    ],
  },
  fields: [
    {
      name: 'year',
      type: 'number',
      required: true,
      label: {
        en: 'Year',
        fr: 'Année',
      },
    },
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Title',
        fr: 'Titre',
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      label: {
        en: 'Description',
        fr: 'Description',
      },
    },
  ],
};

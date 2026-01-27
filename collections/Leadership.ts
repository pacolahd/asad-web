import type { CollectionConfig } from 'payload';
import { createTranslationHook } from '@/hooks/deepl-translation';

export const Leadership: CollectionConfig = {
  slug: 'leadership',
  labels: {
    singular: {
      en: 'Leader',
      fr: 'Dirigeant',
    },
    plural: {
      en: 'Leadership',
      fr: 'Direction',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'role', 'sortOrder', 'updatedAt'],
    group: {
      en: 'Members',
      fr: 'Membres',
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      createTranslationHook({
        localizedFields: ['role', 'bio'],
      }),
    ],
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        en: 'Name',
        fr: 'Nom',
      },
    },
    {
      name: 'role',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Role',
        fr: 'Fonction',
      },
    },
    {
      name: 'bio',
      type: 'textarea',
      localized: true,
      label: {
        en: 'Biography',
        fr: 'Biographie',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Photo',
        fr: 'Photo',
      },
    },
    {
      name: 'since',
      type: 'number',
      label: {
        en: 'Since',
        fr: 'Depuis',
      },
      admin: {
        description: {
          en: 'Year they started in this role',
          fr: 'Année de début dans cette fonction',
        },
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      label: {
        en: 'Sort Order',
        fr: 'Ordre de Tri',
      },
      admin: {
        description: {
          en: 'Lower numbers appear first',
          fr: 'Les nombres plus petits apparaissent en premier',
        },
      },
    },
  ],
};

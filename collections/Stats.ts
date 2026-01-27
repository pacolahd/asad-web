import type { CollectionConfig } from 'payload';
import { createTranslationHook } from '@/hooks/deepl-translation';

export const Stats: CollectionConfig = {
  slug: 'stats',
  labels: {
    singular: {
      en: 'Statistic',
      fr: 'Statistique',
    },
    plural: {
      en: 'Statistics',
      fr: 'Statistiques',
    },
  },
  admin: {
    useAsTitle: 'label',
    defaultColumns: ['label', 'value', 'sortOrder', 'updatedAt'],
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
        localizedFields: ['label'],
      }),
    ],
  },
  fields: [
    {
      name: 'value',
      type: 'number',
      required: true,
      label: {
        en: 'Value',
        fr: 'Valeur',
      },
      admin: {
        description: {
          en: 'The numeric value to display',
          fr: 'La valeur numérique à afficher',
        },
      },
    },
    {
      name: 'label',
      type: 'text',
      required: true,
      localized: true,
      label: {
        en: 'Label',
        fr: 'Libellé',
      },
    },
    {
      name: 'prefix',
      type: 'text',
      label: {
        en: 'Prefix',
        fr: 'Préfixe',
      },
      admin: {
        description: {
          en: 'Text before the number (e.g., "$")',
          fr: 'Texte avant le nombre (ex: "€")',
        },
      },
    },
    {
      name: 'suffix',
      type: 'text',
      label: {
        en: 'Suffix',
        fr: 'Suffixe',
      },
      admin: {
        description: {
          en: 'Text after the number (e.g., "+")',
          fr: 'Texte après le nombre (ex: "+")',
        },
      },
    },
    {
      name: 'isDynamic',
      type: 'checkbox',
      defaultValue: false,
      label: {
        en: 'Dynamic Value',
        fr: 'Valeur Dynamique',
      },
      admin: {
        description: {
          en: 'If checked, value is calculated dynamically (e.g., years since founding)',
          fr: 'Si coché, la valeur est calculée dynamiquement (ex: années depuis la fondation)',
        },
      },
    },
    {
      name: 'dynamicType',
      type: 'select',
      label: {
        en: 'Dynamic Type',
        fr: 'Type Dynamique',
      },
      options: [
        { label: { en: 'Years Since Founded', fr: 'Années Depuis la Fondation' }, value: 'years-since-founded' },
      ],
      admin: {
        condition: (data) => data?.isDynamic,
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

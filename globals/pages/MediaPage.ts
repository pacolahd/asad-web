import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const MediaPage: GlobalConfig = {
  slug: 'media-page',
  label: {
    en: 'Media Page',
    fr: 'Page Médias',
  },
  admin: {
    group: {
      en: 'Pages',
      fr: 'Pages',
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      createGlobalTranslationHook({
        localizedFields: [
          'headerTitle',
          'headerDescription',
          'featuredTitle',
          'featuredDescription',
          'submitTitle',
          'submitDescription',
        ],
      }),
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'Page Header',
            fr: 'En-tête de Page',
          },
          fields: [
            {
              name: 'headerTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Page Title',
                fr: 'Titre de la Page',
              },
            },
            {
              name: 'headerDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Page Description',
                fr: 'Description de la Page',
              },
            },
          ],
        },
        {
          label: {
            en: 'Media Categories',
            fr: 'Catégories de Médias',
          },
          fields: [
            {
              name: 'categories',
              type: 'array',
              label: {
                en: 'Media Categories',
                fr: 'Catégories de Médias',
              },
              fields: [
                {
                  name: 'icon',
                  type: 'select',
                  label: {
                    en: 'Icon',
                    fr: 'Icône',
                  },
                  options: [
                    { label: 'Camera', value: 'camera' },
                    { label: 'Calendar', value: 'calendar' },
                    { label: 'Video', value: 'video' },
                  ],
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Category Title',
                    fr: 'Titre de la Catégorie',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Category Description',
                    fr: 'Description de la Catégorie',
                  },
                },
                {
                  name: 'href',
                  type: 'text',
                  label: {
                    en: 'Link URL',
                    fr: 'URL du Lien',
                  },
                },
                {
                  name: 'count',
                  type: 'text',
                  label: {
                    en: 'Count Value',
                    fr: 'Valeur du Compteur',
                  },
                  admin: {
                    description: {
                      en: 'e.g., "500+", "12", "Coming"',
                      fr: 'ex: "500+", "12", "Bientôt"',
                    },
                  },
                },
                {
                  name: 'unit',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Count Unit',
                    fr: 'Unité du Compteur',
                  },
                  admin: {
                    description: {
                      en: 'e.g., "Photos", "Months Planned", "Soon"',
                      fr: 'ex: "Photos", "Mois Planifiés", "Bientôt"',
                    },
                  },
                },
                {
                  name: 'disabled',
                  type: 'checkbox',
                  defaultValue: false,
                  label: {
                    en: 'Coming Soon (Disabled)',
                    fr: 'Bientôt Disponible (Désactivé)',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Featured Section',
            fr: 'Section Mise en Avant',
          },
          fields: [
            {
              name: 'featuredTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Featured Section Title',
                fr: 'Titre de la Section Mise en Avant',
              },
            },
            {
              name: 'featuredDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Featured Section Description',
                fr: 'Description de la Section Mise en Avant',
              },
            },
          ],
        },
        {
          label: {
            en: 'Submit Photos',
            fr: 'Soumettre des Photos',
          },
          fields: [
            {
              name: 'submitTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Submit Section Title',
                fr: 'Titre de la Section Soumission',
              },
            },
            {
              name: 'submitDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Submit Section Description',
                fr: 'Description de la Section Soumission',
              },
            },
          ],
        },
      ],
    },
  ],
};

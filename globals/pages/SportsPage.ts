import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const SportsPage: GlobalConfig = {
  slug: 'sports-page',
  label: {
    en: 'Sports Page',
    fr: 'Page Sports',
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
          'introTitle',
          'introContent',
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
            en: 'Introduction',
            fr: 'Introduction',
          },
          fields: [
            {
              name: 'introTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Introduction Title',
                fr: 'Titre de l\'Introduction',
              },
            },
            {
              name: 'introContent',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Introduction Content',
                fr: 'Contenu de l\'Introduction',
              },
            },
          ],
        },
        {
          label: {
            en: 'Statistics',
            fr: 'Statistiques',
          },
          fields: [
            {
              name: 'stats',
              type: 'array',
              label: {
                en: 'Sports Statistics',
                fr: 'Statistiques Sportives',
              },
              maxRows: 4,
              admin: {
                description: {
                  en: 'Display key sports statistics',
                  fr: 'Afficher les statistiques sportives clés',
                },
              },
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  label: {
                    en: 'Value',
                    fr: 'Valeur',
                  },
                  admin: {
                    description: {
                      en: 'e.g., "50+", "Every", "100+"',
                      fr: 'ex: "50+", "Chaque", "100+"',
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
                  admin: {
                    description: {
                      en: 'e.g., "Competitions Played", "Sunday We Play"',
                      fr: 'ex: "Compétitions Jouées", "Dimanche Nous Jouons"',
                    },
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

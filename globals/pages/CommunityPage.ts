import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const CommunityPage: GlobalConfig = {
  slug: 'community-page',
  label: {
    en: 'Community Page',
    fr: 'Page Communauté',
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
          'ctaTitle',
          'ctaDescription',
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
              admin: {
                description: {
                  en: 'Main text explaining community programs',
                  fr: 'Texte principal expliquant les programmes communautaires',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Impact Stats',
            fr: 'Statistiques d\'Impact',
          },
          fields: [
            {
              name: 'impactStats',
              type: 'array',
              label: {
                en: 'Impact Statistics',
                fr: 'Statistiques d\'Impact',
              },
              maxRows: 4,
              admin: {
                description: {
                  en: 'Show impact numbers (e.g., "100+ Families Supported")',
                  fr: 'Afficher les chiffres d\'impact (ex: "100+ Familles Soutenues")',
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
                      en: 'e.g., "100+", "Every", "50+"',
                      fr: 'ex: "100+", "Chaque", "50+"',
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
                      en: 'e.g., "Families Supported", "Sunday Together"',
                      fr: 'ex: "Familles Soutenues", "Dimanche Ensemble"',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Call to Action',
            fr: 'Appel à l\'Action',
          },
          fields: [
            {
              name: 'ctaTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'CTA Title',
                fr: 'Titre CTA',
              },
            },
            {
              name: 'ctaDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'CTA Description',
                fr: 'Description CTA',
              },
            },
          ],
        },
      ],
    },
  ],
};

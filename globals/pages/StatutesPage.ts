import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const StatutesPage: GlobalConfig = {
  slug: 'statutes-page',
  label: {
    en: 'Statutes Page',
    fr: 'Page Statuts',
  },
  admin: {
    group: {
      en: 'Site Pages',
      fr: 'Pages du Site',
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
          'highlightsTitle',
          'documentsTitle',
          'documentsDescription',
          'contactSectionTitle',
          'contactSectionContent',
        ],
        arrayFields: [{ name: 'keyStatutes', localizedSubfields: ['title', 'content'] }],
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
            en: 'Key Statutes',
            fr: 'Statuts Clés',
          },
          fields: [
            {
              name: 'highlightsTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Highlights Section Title',
                fr: 'Titre de la Section Points Clés',
              },
              admin: {
                placeholder: 'e.g., Key Statute Highlights',
              },
            },
            {
              name: 'keyStatutes',
              type: 'array',
              label: {
                en: 'Key Statute Articles',
                fr: 'Articles de Statuts Clés',
              },
              admin: {
                description: {
                  en: 'Highlight the most important articles from your statutes',
                  fr: 'Mettre en avant les articles les plus importants de vos statuts',
                },
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Article Title',
                    fr: 'Titre de l\'Article',
                  },
                },
                {
                  name: 'content',
                  type: 'textarea',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Article Content',
                    fr: 'Contenu de l\'Article',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Documents Section',
            fr: 'Section Documents',
          },
          fields: [
            {
              name: 'documentsTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Documents Section Title',
                fr: 'Titre de la Section Documents',
              },
            },
            {
              name: 'documentsDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Documents Section Description',
                fr: 'Description de la Section Documents',
              },
            },
          ],
        },
        {
          label: {
            en: 'Contact Section',
            fr: 'Section Contact',
          },
          fields: [
            {
              name: 'contactSectionTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Contact Section Title',
                fr: 'Titre de la Section Contact',
              },
            },
            {
              name: 'contactSectionContent',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Contact Section Content',
                fr: 'Contenu de la Section Contact',
              },
            },
          ],
        },
      ],
    },
  ],
};

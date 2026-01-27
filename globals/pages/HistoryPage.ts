import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const HistoryPage: GlobalConfig = {
  slug: 'history-page',
  label: {
    en: 'History Page',
    fr: 'Page Histoire',
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
          'introContent',
          'lookingForwardTitle',
          'lookingForwardContent',
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
              name: 'introContent',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Introduction Content',
                fr: 'Contenu de l\'Introduction',
              },
              admin: {
                description: {
                  en: 'Opening paragraph about ASAD\'s history',
                  fr: 'Paragraphe d\'ouverture sur l\'histoire d\'ASAD',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Looking Forward',
            fr: 'Perspective d\'Avenir',
          },
          fields: [
            {
              name: 'lookingForwardTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Section Title',
                fr: 'Titre de la Section',
              },
            },
            {
              name: 'lookingForwardContent',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Content',
                fr: 'Contenu',
              },
              admin: {
                description: {
                  en: 'Closing section about the future',
                  fr: 'Section de clôture sur l\'avenir',
                },
              },
            },
          ],
        },
      ],
    },
  ],
};

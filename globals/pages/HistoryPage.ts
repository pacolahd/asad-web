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
          'timelineEvents.*.title',
          'timelineEvents.*.description',
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
            en: 'Timeline Events',
            fr: 'Événements Chronologiques',
          },
          fields: [
            {
              name: 'timelineEvents',
              type: 'array',
              label: {
                en: 'Timeline Events',
                fr: 'Événements Chronologiques',
              },
              labels: {
                singular: {
                  en: 'Event',
                  fr: 'Événement',
                },
                plural: {
                  en: 'Events',
                  fr: 'Événements',
                },
              },
              admin: {
                description: {
                  en: 'Add key events and milestones in ASAD\'s history',
                  fr: 'Ajoutez les événements et jalons clés de l\'histoire d\'ASAD',
                },
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

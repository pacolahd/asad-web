import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const LeadershipPage: GlobalConfig = {
  slug: 'leadership-page',
  label: {
    en: 'Leadership Page',
    fr: 'Page Direction',
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
          'electionNoteTitle',
          'electionNoteContent',
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
                  en: 'Text introducing the leadership team',
                  fr: 'Texte présentant l\'équipe de direction',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Election Note',
            fr: 'Note sur les Élections',
          },
          fields: [
            {
              name: 'electionNoteTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Note Title',
                fr: 'Titre de la Note',
              },
            },
            {
              name: 'electionNoteContent',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Note Content',
                fr: 'Contenu de la Note',
              },
              admin: {
                description: {
                  en: 'Information about democratic leadership elections',
                  fr: 'Information sur les élections démocratiques',
                },
              },
            },
          ],
        },
      ],
    },
  ],
};

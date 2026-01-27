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
          'teamMembers.*.role',
          'teamMembers.*.bio',
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
            en: 'Team Members',
            fr: 'Membres de l\'Équipe',
          },
          fields: [
            {
              name: 'teamMembers',
              type: 'array',
              label: {
                en: 'Team Members',
                fr: 'Membres de l\'Équipe',
              },
              labels: {
                singular: {
                  en: 'Member',
                  fr: 'Membre',
                },
                plural: {
                  en: 'Members',
                  fr: 'Membres',
                },
              },
              admin: {
                description: {
                  en: 'Add leadership team members in display order',
                  fr: 'Ajoutez les membres de l\'équipe de direction dans l\'ordre d\'affichage',
                },
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
              ],
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

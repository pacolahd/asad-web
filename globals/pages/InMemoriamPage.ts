import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const InMemoriamPage: GlobalConfig = {
  slug: 'in-memoriam-page',
  label: {
    en: 'In Memoriam Page',
    fr: 'Page In Memoriam',
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
          'introContent',
          'closingQuote',
          'contactNote',
        ],
        arrayFields: [{ name: 'departedMembers', localizedSubfields: ['role', 'tribute'] }],
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
                  en: 'Opening text about honoring departed members',
                  fr: 'Texte d\'ouverture sur l\'hommage aux membres disparus',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Departed Members',
            fr: 'Membres Disparus',
          },
          fields: [
            {
              name: 'departedMembers',
              type: 'array',
              label: {
                en: 'Departed Members',
                fr: 'Membres Disparus',
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
                  en: 'Add departed members to honor their memory',
                  fr: 'Ajoutez les membres disparus pour honorer leur mémoire',
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
                  localized: true,
                  label: {
                    en: 'Role/Title',
                    fr: 'Rôle/Titre',
                  },
                  admin: {
                    description: {
                      en: 'Their role in ASAD (e.g., "Founding Member", "Former President")',
                      fr: 'Leur rôle dans ASAD (ex: "Membre Fondateur", "Ancien Président")',
                    },
                  },
                },
                {
                  name: 'birthYear',
                  type: 'number',
                  label: {
                    en: 'Birth Year',
                    fr: 'Année de Naissance',
                  },
                },
                {
                  name: 'deathYear',
                  type: 'number',
                  required: true,
                  label: {
                    en: 'Death Year',
                    fr: 'Année de Décès',
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
                  name: 'tribute',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Tribute',
                    fr: 'Hommage',
                  },
                  admin: {
                    description: {
                      en: 'A tribute or memory of this member',
                      fr: 'Un hommage ou souvenir de ce membre',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Closing',
            fr: 'Clôture',
          },
          fields: [
            {
              name: 'closingQuote',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Closing Quote',
                fr: 'Citation de Clôture',
              },
              admin: {
                description: {
                  en: 'An inspirational closing quote',
                  fr: 'Une citation inspirante de clôture',
                },
              },
            },
            {
              name: 'contactNote',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Contact Note',
                fr: 'Note de Contact',
              },
              admin: {
                description: {
                  en: 'Information about how to add tributes',
                  fr: 'Information sur comment ajouter des hommages',
                },
              },
            },
          ],
        },
      ],
    },
  ],
};

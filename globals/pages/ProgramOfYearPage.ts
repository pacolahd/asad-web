import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const ProgramOfYearPage: GlobalConfig = {
  slug: 'program-of-year-page',
  label: {
    en: 'Program of the Year',
    fr: 'Programme de l\'Année',
  },
  admin: {
    group: {
      en: 'Pages',
      fr: 'Pages',
    },
    description: {
      en: 'Annual calendar of ASAD activities and events',
      fr: 'Calendrier annuel des activités et événements ASAD',
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
          'downloadButtonText',
          'notesTitle',
        ],
        arrayFields: [
          {
            name: 'periods',
            localizedSubfields: ['month'],
            nestedArrays: [{ name: 'events', localizedSubfields: ['title'] }],
          },
          { name: 'notes', localizedSubfields: ['note'] },
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
              defaultValue: 'Program of the Year',
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
            {
              name: 'downloadButtonText',
              type: 'text',
              localized: true,
              label: {
                en: 'Download Button Text',
                fr: 'Texte du Bouton de Téléchargement',
              },
              defaultValue: 'Download PDF (Coming Soon)',
            },
            {
              name: 'programDocument',
              type: 'upload',
              relationTo: 'documents',
              label: {
                en: 'Program PDF Document',
                fr: 'Document PDF du Programme',
              },
              admin: {
                description: {
                  en: 'Upload a PDF of the annual program (optional)',
                  fr: 'Télécharger un PDF du programme annuel (optionnel)',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Program Schedule',
            fr: 'Calendrier du Programme',
          },
          fields: [
            {
              name: 'programYear',
              type: 'number',
              label: {
                en: 'Program Year',
                fr: 'Année du Programme',
              },
              defaultValue: new Date().getFullYear(),
              admin: {
                description: {
                  en: 'The year this program is for',
                  fr: 'L\'année de ce programme',
                },
              },
            },
            {
              name: 'periods',
              type: 'array',
              label: {
                en: 'Program Periods',
                fr: 'Périodes du Programme',
              },
              admin: {
                description: {
                  en: 'Add months or periods with their events',
                  fr: 'Ajouter des mois ou périodes avec leurs événements',
                },
              },
              fields: [
                {
                  name: 'month',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Month/Period Name',
                    fr: 'Nom du Mois/Période',
                  },
                  admin: {
                    description: {
                      en: 'e.g., "January", "April - May", "June - August"',
                      fr: 'ex: "Janvier", "Avril - Mai", "Juin - Août"',
                    },
                  },
                },
                {
                  name: 'events',
                  type: 'array',
                  label: {
                    en: 'Events',
                    fr: 'Événements',
                  },
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      required: true,
                      localized: true,
                      label: {
                        en: 'Event Title',
                        fr: 'Titre de l\'Événement',
                      },
                    },
                    {
                      name: 'type',
                      type: 'select',
                      required: true,
                      label: {
                        en: 'Event Type',
                        fr: 'Type d\'Événement',
                      },
                      options: [
                        { label: { en: 'Regular', fr: 'Régulier' }, value: 'regular' },
                        { label: { en: 'Sports', fr: 'Sports' }, value: 'sports' },
                        { label: { en: 'Social', fr: 'Social' }, value: 'social' },
                        { label: { en: 'Community', fr: 'Communautaire' }, value: 'community' },
                        { label: { en: 'Major', fr: 'Majeur' }, value: 'major' },
                      ],
                      defaultValue: 'regular',
                    },
                    {
                      name: 'completed',
                      type: 'checkbox',
                      label: {
                        en: 'Completed',
                        fr: 'Terminé',
                      },
                      defaultValue: false,
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Important Notes',
            fr: 'Notes Importantes',
          },
          fields: [
            {
              name: 'notesTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Notes Section Title',
                fr: 'Titre de la Section Notes',
              },
              defaultValue: 'Important Notes',
            },
            {
              name: 'notes',
              type: 'array',
              label: {
                en: 'Notes',
                fr: 'Notes',
              },
              fields: [
                {
                  name: 'note',
                  type: 'textarea',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Note',
                    fr: 'Note',
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

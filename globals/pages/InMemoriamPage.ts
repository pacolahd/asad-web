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
          'closingQuote',
          'contactNote',
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
            en: 'Content',
            fr: 'Contenu',
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

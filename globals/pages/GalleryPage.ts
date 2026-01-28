import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const GalleryPage: GlobalConfig = {
  slug: 'gallery-page',
  label: {
    en: 'Gallery Page',
    fr: 'Page Galerie',
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
        localizedFields: ['headerTitle', 'headerDescription', 'shareNote'],
        arrayFields: [],
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
              name: 'shareNote',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Share Note',
                fr: 'Note de Partage',
              },
              admin: {
                description: {
                  en: 'Message displayed at the bottom of the gallery page about sharing photos',
                  fr: 'Message affiché en bas de la page de galerie concernant le partage de photos',
                },
              },
            },
          ],
        },
      ],
    },
  ],
};

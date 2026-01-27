import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const HomePage: GlobalConfig = {
  slug: 'home-page',
  label: {
    en: 'Home Page',
    fr: 'Page d\'Accueil',
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
          'heroDescription',
          'whatIsAsadTitle',
          'whatIsAsadContent',
          'storyTitle',
          'storyContent',
          'communityTitle',
          'communityDescription',
          'galleryTitle',
          'galleryDescription',
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
            en: 'Hero Section',
            fr: 'Section Hero',
          },
          fields: [
            {
              name: 'heroDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Hero Description',
                fr: 'Description Hero',
              },
              admin: {
                description: {
                  en: 'The subtitle text below the main hero heading',
                  fr: 'Le sous-titre sous le titre principal du hero',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'What is ASAD',
            fr: 'Qu\'est-ce que ASAD',
          },
          fields: [
            {
              name: 'whatIsAsadTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Section Title',
                fr: 'Titre de la Section',
              },
            },
            {
              name: 'whatIsAsadContent',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Section Content',
                fr: 'Contenu de la Section',
              },
              admin: {
                description: {
                  en: 'Main text describing what ASAD is',
                  fr: 'Texte principal décrivant ce qu\'est ASAD',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Story Section',
            fr: 'Section Histoire',
          },
          fields: [
            {
              name: 'storyTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Story Title',
                fr: 'Titre de l\'Histoire',
              },
            },
            {
              name: 'storyContent',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Story Content',
                fr: 'Contenu de l\'Histoire',
              },
            },
          ],
        },
        {
          label: {
            en: 'Community Section',
            fr: 'Section Communauté',
          },
          fields: [
            {
              name: 'communityTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Community Programs Title',
                fr: 'Titre des Programmes Communautaires',
              },
            },
            {
              name: 'communityDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Community Programs Description',
                fr: 'Description des Programmes Communautaires',
              },
            },
          ],
        },
        {
          label: {
            en: 'Gallery Section',
            fr: 'Section Galerie',
          },
          fields: [
            {
              name: 'galleryTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Gallery Title',
                fr: 'Titre de la Galerie',
              },
            },
            {
              name: 'galleryDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Gallery Description',
                fr: 'Description de la Galerie',
              },
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

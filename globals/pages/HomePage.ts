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
          'heroDescription',
          'whatIsAsadTitle',
          'whatIsAsadContent',
          'aboutSectionImageCaption',
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
            en: 'Statistics',
            fr: 'Statistiques',
          },
          fields: [
            {
              type: 'ui',
              name: 'calculatedStats',
              admin: {
                components: {
                  Field: {
                    path: '@/components/admin/HomePageCalculatedStats',
                  },
                },
              },
            },
            {
              name: 'stats',
              type: 'array',
              label: {
                en: 'Manual Statistics',
                fr: 'Statistiques Manuelles',
              },
              maxRows: 4,
              admin: {
                description: {
                  en: 'Add custom statistics like Active Members, Competitions Played, etc.',
                  fr: 'Ajoutez des statistiques personnalisées comme Membres Actifs, Compétitions Jouées, etc.',
                },
              },
              fields: [
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  label: {
                    en: 'Value',
                    fr: 'Valeur',
                  },
                  admin: {
                    description: {
                      en: 'e.g., "100+", "50+", "Every"',
                      fr: 'ex: "100+", "50+", "Chaque"',
                    },
                  },
                },
                {
                  name: 'label',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Label',
                    fr: 'Libellé',
                  },
                  admin: {
                    description: {
                      en: 'e.g., "Active Members", "Competitions Played"',
                      fr: 'ex: "Membres Actifs", "Compétitions Jouées"',
                    },
                  },
                },
              ],
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
            {
              name: 'aboutSectionImage',
              type: 'upload',
              relationTo: 'media',
              label: {
                en: 'About Section Image',
                fr: 'Image Section À Propos',
              },
              admin: {
                description: {
                  en: 'Image for the "What is ASAD" section',
                  fr: 'Image pour la section "Qu\'est-ce que ASAD"',
                },
              },
            },
            {
              name: 'showAboutSectionImageCaption',
              type: 'checkbox',
              defaultValue: false,
              label: {
                en: 'Show Image Caption',
                fr: 'Afficher la Légende de l\'Image',
              },
              admin: {
                description: {
                  en: 'Enable to display a caption overlay on the image',
                  fr: 'Activer pour afficher une légende sur l\'image',
                },
              },
            },
            {
              name: 'aboutSectionImageCaption',
              type: 'text',
              localized: true,
              label: {
                en: 'Image Caption (Optional Override)',
                fr: 'Légende de l\'Image (Remplacement Optionnel)',
              },
              admin: {
                description: {
                  en: 'Leave empty to use the image\'s default caption, or enter text to override it',
                  fr: 'Laisser vide pour utiliser la légende par défaut de l\'image, ou entrer du texte pour la remplacer',
                },
                condition: (data) => data?.showAboutSectionImageCaption === true,
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

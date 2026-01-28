import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const AboutPage: GlobalConfig = {
  slug: 'about-page',
  label: {
    en: 'About Page',
    fr: 'Page À Propos',
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
          'storyTitle',
          'storyContent',
          'storyImageCaption',
          'missionTitle',
          'missionDescription',
          'visionTitle',
          'visionDescription',
          'valuesTitle',
          'valuesDescription',
          'commitmentTitle',
          'commitmentDescription',
          // Section titles
          'acronymTitle',
          'acronymTranslation',
          'acronymTranslationLabel',
          'valuesIntroTitle',
          'valuesIntroDescription',
          'learnMoreTitle',
          'historyCardTitle',
          'historyCardDescription',
          'leadershipCardTitle',
          'leadershipCardDescription',
          'statutesCardTitle',
          'statutesCardDescription',
          'yearsLabel',
          'sinceLabel',
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
            en: 'Our Story',
            fr: 'Notre Histoire',
          },
          fields: [
            {
              name: 'storyTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Story Section Title',
                fr: 'Titre de la Section Histoire',
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
              admin: {
                description: {
                  en: 'The main story text about ASAD\'s founding and growth',
                  fr: 'Le texte principal sur la fondation et la croissance d\'ASAD',
                },
              },
            },
            {
              name: 'yearsLabel',
              type: 'text',
              localized: true,
              label: {
                en: 'Years Label',
                fr: 'Libellé Années',
              },
              admin: {
                placeholder: 'e.g., Years of Excellence',
              },
            },
            {
              name: 'sinceLabel',
              type: 'text',
              localized: true,
              label: {
                en: 'Since Label',
                fr: 'Libellé Depuis',
              },
              admin: {
                placeholder: 'e.g., Since',
              },
            },
            {
              name: 'storyImage',
              type: 'upload',
              relationTo: 'media',
              label: {
                en: 'Story Section Image',
                fr: 'Image Section Histoire',
              },
              admin: {
                description: {
                  en: 'Image for the story section',
                  fr: 'Image pour la section histoire',
                },
              },
            },
            {
              name: 'showStoryImageCaption',
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
              name: 'storyImageCaption',
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
                condition: (data) => data?.showStoryImageCaption === true,
              },
            },
            {
              name: 'acronymTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Acronym Section Title',
                fr: 'Titre de la Section Acronyme',
              },
              admin: {
                placeholder: 'e.g., What Does ASAD Mean?',
              },
            },
            {
              name: 'acronymTranslation',
              type: 'text',
              localized: true,
              label: {
                en: 'Acronym Translation',
                fr: 'Traduction de l\'Acronyme',
              },
              admin: {
                placeholder: 'e.g., Sports Association of Friends of Development',
              },
            },
            {
              name: 'acronymTranslationLabel',
              type: 'text',
              localized: true,
              label: {
                en: 'Translation Label',
                fr: 'Libellé de Traduction',
              },
              admin: {
                placeholder: 'e.g., Translated from French:',
              },
            },
          ],
        },
        {
          label: {
            en: 'Mission & Vision',
            fr: 'Mission & Vision',
          },
          fields: [
            {
              name: 'missionTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Mission Title',
                fr: 'Titre de la Mission',
              },
            },
            {
              name: 'missionDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Mission Description',
                fr: 'Description de la Mission',
              },
            },
            {
              name: 'visionTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Vision Title',
                fr: 'Titre de la Vision',
              },
            },
            {
              name: 'visionDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Vision Description',
                fr: 'Description de la Vision',
              },
            },
          ],
        },
        {
          label: {
            en: 'Values & Commitment',
            fr: 'Valeurs & Engagement',
          },
          fields: [
            {
              name: 'valuesIntroTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Values Intro Title',
                fr: 'Titre Introduction Valeurs',
              },
              admin: {
                placeholder: 'e.g., What We Stand For',
              },
            },
            {
              name: 'valuesIntroDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Values Intro Description',
                fr: 'Description Introduction Valeurs',
              },
              admin: {
                placeholder: 'e.g., Our core values guide everything we do at ASAD.',
              },
            },
            {
              name: 'valuesTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Values Title',
                fr: 'Titre des Valeurs',
              },
            },
            {
              name: 'valuesDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Values Description',
                fr: 'Description des Valeurs',
              },
            },
            {
              name: 'commitmentTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Commitment Title',
                fr: 'Titre de l\'Engagement',
              },
            },
            {
              name: 'commitmentDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Commitment Description',
                fr: 'Description de l\'Engagement',
              },
            },
          ],
        },
        {
          label: {
            en: 'Learn More',
            fr: 'En Savoir Plus',
          },
          fields: [
            {
              name: 'learnMoreTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Learn More Title',
                fr: 'Titre En Savoir Plus',
              },
              admin: {
                placeholder: 'e.g., Learn More About Us',
              },
            },
            {
              name: 'historyCardTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'History Card Title',
                fr: 'Titre Carte Histoire',
              },
              admin: {
                placeholder: 'e.g., Our History',
              },
            },
            {
              name: 'historyCardDescription',
              type: 'text',
              localized: true,
              label: {
                en: 'History Card Description',
                fr: 'Description Carte Histoire',
              },
              admin: {
                placeholder: 'e.g., Follow our journey from 2004 to today',
              },
            },
            {
              name: 'leadershipCardTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Leadership Card Title',
                fr: 'Titre Carte Leadership',
              },
              admin: {
                placeholder: 'e.g., Leadership Team',
              },
            },
            {
              name: 'leadershipCardDescription',
              type: 'text',
              localized: true,
              label: {
                en: 'Leadership Card Description',
                fr: 'Description Carte Leadership',
              },
              admin: {
                placeholder: 'e.g., Meet the dedicated team leading ASAD',
              },
            },
            {
              name: 'statutesCardTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Statutes Card Title',
                fr: 'Titre Carte Statuts',
              },
              admin: {
                placeholder: 'e.g., Our Statutes',
              },
            },
            {
              name: 'statutesCardDescription',
              type: 'text',
              localized: true,
              label: {
                en: 'Statutes Card Description',
                fr: 'Description Carte Statuts',
              },
              admin: {
                placeholder: 'e.g., Read our governing documents and bylaws',
              },
            },
          ],
        },
      ],
    },
  ],
};

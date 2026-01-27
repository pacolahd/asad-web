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
          'missionTitle',
          'missionDescription',
          'visionTitle',
          'visionDescription',
          'valuesTitle',
          'valuesDescription',
          'commitmentTitle',
          'commitmentDescription',
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
      ],
    },
  ],
};

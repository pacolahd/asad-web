import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const MembersPage: GlobalConfig = {
  slug: 'members-page',
  label: {
    en: 'Members Page',
    fr: 'Page Membres',
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
          'duesTitle',
          'duesContent',
          'ctaTitle',
          'ctaDescription',
        ],
        arrayFields: [
          { name: 'benefits', localizedSubfields: ['title', 'description'] },
          { name: 'requirements', localizedSubfields: ['requirement'] },
          { name: 'process', localizedSubfields: ['title', 'description'] },
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
            en: 'Benefits',
            fr: 'Avantages',
          },
          fields: [
            {
              name: 'benefits',
              type: 'array',
              label: {
                en: 'Membership Benefits',
                fr: 'Avantages de l\'Adhésion',
              },
              fields: [
                {
                  name: 'icon',
                  type: 'select',
                  label: {
                    en: 'Icon',
                    fr: 'Icône',
                  },
                  options: [
                    { label: 'Users', value: 'users' },
                    { label: 'Calendar', value: 'calendar' },
                    { label: 'Heart', value: 'heart' },
                    { label: 'File Text', value: 'file-text' },
                  ],
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Benefit Title',
                    fr: 'Titre de l\'Avantage',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Benefit Description',
                    fr: 'Description de l\'Avantage',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Requirements',
            fr: 'Conditions',
          },
          fields: [
            {
              name: 'requirements',
              type: 'array',
              label: {
                en: 'Membership Requirements',
                fr: 'Conditions d\'Adhésion',
              },
              fields: [
                {
                  name: 'requirement',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Requirement',
                    fr: 'Condition',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Process',
            fr: 'Processus',
          },
          fields: [
            {
              name: 'process',
              type: 'array',
              label: {
                en: 'Membership Process Steps',
                fr: 'Étapes du Processus d\'Adhésion',
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Step Title',
                    fr: 'Titre de l\'Étape',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Step Description',
                    fr: 'Description de l\'Étape',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Dues & CTA',
            fr: 'Cotisations & CTA',
          },
          fields: [
            {
              name: 'duesTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Dues Section Title',
                fr: 'Titre de la Section Cotisations',
              },
            },
            {
              name: 'duesContent',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Dues Description',
                fr: 'Description des Cotisations',
              },
            },
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

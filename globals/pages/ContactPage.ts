import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const ContactPage: GlobalConfig = {
  slug: 'contact-page',
  label: {
    en: 'Contact Page',
    fr: 'Page Contact',
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
          'socialTitle',
          'socialDescription',
          'whenToFindUsTitle',
          'asadSundaysTitle',
          'asadSundaysDescription',
          'bestWayTitle',
          'bestWayDescription',
          'finalCtaTitle',
          'finalCtaDescription',
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
            en: 'Social Media',
            fr: 'Réseaux Sociaux',
          },
          fields: [
            {
              name: 'socialTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Social Section Title',
                fr: 'Titre de la Section Réseaux Sociaux',
              },
            },
            {
              name: 'socialDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Social Section Description',
                fr: 'Description de la Section Réseaux Sociaux',
              },
            },
          ],
        },
        {
          label: {
            en: 'When to Find Us',
            fr: 'Quand Nous Trouver',
          },
          fields: [
            {
              name: 'whenToFindUsTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Section Title',
                fr: 'Titre de la Section',
              },
            },
            {
              name: 'asadSundaysTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'ASAD Sundays Title',
                fr: 'Titre Dimanches ASAD',
              },
            },
            {
              name: 'asadSundaysDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'ASAD Sundays Description',
                fr: 'Description des Dimanches ASAD',
              },
            },
            {
              name: 'bestWayTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Best Way to Reach Us Title',
                fr: 'Titre Meilleur Moyen de Nous Contacter',
              },
            },
            {
              name: 'bestWayDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Best Way to Reach Us Description',
                fr: 'Description du Meilleur Moyen de Nous Contacter',
              },
            },
          ],
        },
        {
          label: {
            en: 'Final CTA',
            fr: 'CTA Final',
          },
          fields: [
            {
              name: 'finalCtaTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Final CTA Title',
                fr: 'Titre CTA Final',
              },
            },
            {
              name: 'finalCtaDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Final CTA Description',
                fr: 'Description CTA Final',
              },
            },
          ],
        },
      ],
    },
  ],
};

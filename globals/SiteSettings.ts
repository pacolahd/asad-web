import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: {
    en: 'Site Settings',
    fr: 'Paramètres du Site',
  },
  admin: {
    group: {
      en: 'Site',
      fr: 'Site',
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      createGlobalTranslationHook({
        localizedFields: ['fullName', 'description', 'shortDescription', 'slogan'],
      }),
    ],
  },
  fields: [
    {
      type: 'tabs',
      tabs: [
        {
          label: {
            en: 'General',
            fr: 'Général',
          },
          fields: [
            {
              name: 'name',
              type: 'text',
              required: true,
              defaultValue: 'ASAD',
              label: {
                en: 'Name',
                fr: 'Nom',
              },
            },
            {
              name: 'fullName',
              type: 'text',
              required: true,
              localized: true,
              defaultValue: 'Association Sportive des Amis du Developpement',
              label: {
                en: 'Full Name',
                fr: 'Nom Complet',
              },
            },
            {
              name: 'description',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Description',
                fr: 'Description',
              },
            },
            {
              name: 'shortDescription',
              type: 'text',
              localized: true,
              label: {
                en: 'Short Description',
                fr: 'Description Courte',
              },
              admin: {
                description: {
                  en: 'A brief one-line description of ASAD',
                  fr: "Une brève description en une ligne de l'ASAD",
                },
              },
            },
            {
              name: 'slogan',
              type: 'text',
              localized: true,
              label: {
                en: 'Slogan',
                fr: 'Slogan',
              },
            },
            {
              name: 'founded',
              type: 'number',
              defaultValue: 2004,
              label: {
                en: 'Year Founded',
                fr: 'Année de Fondation',
              },
            },
          ],
        },
        {
          label: {
            en: 'Location',
            fr: 'Emplacement',
          },
          fields: [
            {
              name: 'location',
              type: 'group',
              label: {
                en: 'Location',
                fr: 'Emplacement',
              },
              fields: [
                {
                  name: 'neighborhood',
                  type: 'text',
                  defaultValue: 'Bonaberi',
                  label: {
                    en: 'Neighborhood',
                    fr: 'Quartier',
                  },
                },
                {
                  name: 'city',
                  type: 'text',
                  defaultValue: 'Douala',
                  label: {
                    en: 'City',
                    fr: 'Ville',
                  },
                },
                {
                  name: 'country',
                  type: 'text',
                  defaultValue: 'Cameroon',
                  label: {
                    en: 'Country',
                    fr: 'Pays',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Contact',
            fr: 'Contact',
          },
          fields: [
            {
              name: 'contact',
              type: 'group',
              label: {
                en: 'Contact Information',
                fr: 'Informations de Contact',
              },
              fields: [
                {
                  name: 'email',
                  type: 'email',
                  label: {
                    en: 'Email',
                    fr: 'Email',
                  },
                },
                {
                  name: 'phone',
                  type: 'text',
                  label: {
                    en: 'Phone',
                    fr: 'Téléphone',
                  },
                },
                {
                  name: 'address',
                  type: 'text',
                  label: {
                    en: 'Address',
                    fr: 'Adresse',
                  },
                },
              ],
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
              name: 'social',
              type: 'group',
              label: {
                en: 'Social Media Links',
                fr: 'Liens Réseaux Sociaux',
              },
              fields: [
                {
                  name: 'facebook',
                  type: 'text',
                  label: 'Facebook',
                  admin: {
                    description: {
                      en: 'Full URL to Facebook page',
                      fr: 'URL complète de la page Facebook',
                    },
                  },
                },
                {
                  name: 'instagram',
                  type: 'text',
                  label: 'Instagram',
                  admin: {
                    description: {
                      en: 'Full URL to Instagram profile',
                      fr: 'URL complète du profil Instagram',
                    },
                  },
                },
                {
                  name: 'twitter',
                  type: 'text',
                  label: 'Twitter / X',
                  admin: {
                    description: {
                      en: 'Full URL to Twitter/X profile',
                      fr: 'URL complète du profil Twitter/X',
                    },
                  },
                },
                {
                  name: 'youtube',
                  type: 'text',
                  label: 'YouTube',
                  admin: {
                    description: {
                      en: 'Full URL to YouTube channel',
                      fr: 'URL complète de la chaîne YouTube',
                    },
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

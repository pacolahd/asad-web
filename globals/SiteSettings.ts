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
        arrayFields: [
          {
            name: 'contactMethods',
            localizedSubfields: ['title', 'description'],
          },
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
              name: 'contactMethods',
              type: 'array',
              label: { en: 'Contact Methods', fr: 'Méthodes de Contact' },
              admin: {
                description: {
                  en: 'Add contact methods like phone, email, WhatsApp, location, etc.',
                  fr: 'Ajoutez des méthodes de contact comme téléphone, email, WhatsApp, emplacement, etc.',
                },
              },
              fields: [
                {
                  name: 'icon',
                  type: 'select',
                  required: true,
                  label: { en: 'Icon', fr: 'Icône' },
                  options: [
                    { label: 'Location/Map', value: 'map-pin' },
                    { label: 'Phone', value: 'phone' },
                    { label: 'WhatsApp', value: 'whatsapp' },
                    { label: 'Email', value: 'mail' },
                    { label: 'Clock/Hours', value: 'clock' },
                  ],
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: { en: 'Title', fr: 'Titre' },
                  admin: {
                    description: {
                      en: 'e.g., "Phone", "WhatsApp", "Email"',
                      fr: 'ex: "Téléphone", "WhatsApp", "Email"',
                    },
                  },
                },
                {
                  name: 'description',
                  type: 'text',
                  localized: true,
                  label: { en: 'Description', fr: 'Description' },
                  admin: {
                    description: {
                      en: 'e.g., "Call or text us", "Send us a message"',
                      fr: 'ex: "Appelez ou envoyez un SMS", "Envoyez-nous un message"',
                    },
                  },
                },
                {
                  name: 'value',
                  type: 'text',
                  required: true,
                  label: { en: 'Value', fr: 'Valeur' },
                  admin: {
                    description: {
                      en: 'The phone number, email, or address',
                      fr: 'Le numéro de téléphone, email ou adresse',
                    },
                  },
                },
                {
                  name: 'linkType',
                  type: 'select',
                  label: { en: 'Link Type', fr: 'Type de Lien' },
                  defaultValue: 'none',
                  options: [
                    { label: { en: 'None (just text)', fr: 'Aucun (juste du texte)' }, value: 'none' },
                    { label: { en: 'Phone (tel:)', fr: 'Téléphone (tel:)' }, value: 'tel' },
                    { label: { en: 'Email (mailto:)', fr: 'Email (mailto:)' }, value: 'mailto' },
                    { label: { en: 'WhatsApp', fr: 'WhatsApp' }, value: 'whatsapp' },
                    { label: { en: 'External URL', fr: 'URL Externe' }, value: 'url' },
                  ],
                },
              ],
            },
            {
              name: 'primaryAddress',
              type: 'text',
              label: { en: 'Primary Address', fr: 'Adresse Principale' },
              admin: {
                description: {
                  en: 'Main address used in footer',
                  fr: 'Adresse principale utilisée dans le pied de page',
                },
              },
            },
            {
              name: 'primaryEmail',
              type: 'email',
              label: { en: 'Primary Email', fr: 'Email Principal' },
              admin: {
                description: {
                  en: 'Main email used in footer',
                  fr: 'Email principal utilisé dans le pied de page',
                },
              },
            },
            {
              name: 'primaryPhone',
              type: 'text',
              label: { en: 'Primary Phone', fr: 'Téléphone Principal' },
              admin: {
                description: {
                  en: 'Main phone used in footer',
                  fr: 'Téléphone principal utilisé dans le pied de page',
                },
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

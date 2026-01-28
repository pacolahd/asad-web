import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const MediaPage: GlobalConfig = {
  slug: 'media-page',
  label: {
    en: 'Media Page',
    fr: 'Page Médias',
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
          'featuredTitle',
          'featuredDescription',
          'submitTitle',
          'submitDescription',
        ],
        arrayFields: [
          { name: 'categories', localizedSubfields: ['title', 'description', 'unit'] },
          { name: 'featuredMoments', localizedSubfields: ['title'] },
          { name: 'featuredCategories', localizedSubfields: ['title'] },
          { name: 'stats', localizedSubfields: ['label'] },
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
            en: 'Media Categories',
            fr: 'Catégories de Médias',
          },
          fields: [
            {
              name: 'categories',
              type: 'array',
              label: {
                en: 'Media Categories',
                fr: 'Catégories de Médias',
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
                    { label: 'Camera', value: 'camera' },
                    { label: 'Calendar', value: 'calendar' },
                    { label: 'Video', value: 'video' },
                  ],
                },
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Category Title',
                    fr: 'Titre de la Catégorie',
                  },
                },
                {
                  name: 'description',
                  type: 'textarea',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Category Description',
                    fr: 'Description de la Catégorie',
                  },
                },
                {
                  name: 'href',
                  type: 'text',
                  label: {
                    en: 'Link URL',
                    fr: 'URL du Lien',
                  },
                },
                {
                  name: 'count',
                  type: 'text',
                  label: {
                    en: 'Count Value',
                    fr: 'Valeur du Compteur',
                  },
                  admin: {
                    description: {
                      en: 'e.g., "500+", "12", "Coming"',
                      fr: 'ex: "500+", "12", "Bientôt"',
                    },
                  },
                },
                {
                  name: 'unit',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Count Unit',
                    fr: 'Unité du Compteur',
                  },
                  admin: {
                    description: {
                      en: 'e.g., "Photos", "Months Planned", "Soon"',
                      fr: 'ex: "Photos", "Mois Planifiés", "Bientôt"',
                    },
                  },
                },
                {
                  name: 'disabled',
                  type: 'checkbox',
                  defaultValue: false,
                  label: {
                    en: 'Coming Soon (Disabled)',
                    fr: 'Bientôt Disponible (Désactivé)',
                  },
                },
              ],
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
                    path: '@/components/admin/MediaPageCalculatedStats',
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
                  en: 'Add custom statistics (note: Photo count and Album count are calculated automatically)',
                  fr: 'Ajoutez des statistiques personnalisées (note: le nombre de photos et d\'albums est calculé automatiquement)',
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
                      en: 'e.g., "12", "Coming"',
                      fr: 'ex: "12", "Bientôt"',
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
                      en: 'e.g., "Months Planned", "Videos Coming"',
                      fr: 'ex: "Mois Planifiés", "Vidéos à Venir"',
                    },
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Featured Section',
            fr: 'Section Mise en Avant',
          },
          fields: [
            {
              name: 'featuredTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Featured Section Title',
                fr: 'Titre de la Section Mise en Avant',
              },
            },
            {
              name: 'featuredDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Featured Section Description',
                fr: 'Description de la Section Mise en Avant',
              },
            },
            {
              name: 'featuredMoments',
              type: 'array',
              maxRows: 3,
              label: {
                en: 'Featured Moments',
                fr: 'Moments en Vedette',
              },
              admin: {
                description: {
                  en: 'Featured images displayed in the media page grid',
                  fr: 'Images en vedette affichées dans la grille de la page média',
                },
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  label: {
                    en: 'Image',
                    fr: 'Image',
                  },
                },
              ],
            },
            {
              name: 'featuredCategories',
              type: 'array',
              label: {
                en: 'Featured Categories',
                fr: 'Catégories Mises en Avant',
              },
              maxRows: 6,
              admin: {
                description: {
                  en: 'Category labels for the featured moments grid (e.g., Competitions, Community, Celebrations)',
                  fr: 'Étiquettes de catégories pour la grille des moments mis en avant',
                },
              },
              fields: [
                {
                  name: 'title',
                  type: 'text',
                  required: true,
                  localized: true,
                  label: {
                    en: 'Category Title',
                    fr: 'Titre de la Catégorie',
                  },
                },
              ],
            },
          ],
        },
        {
          label: {
            en: 'Submit Photos',
            fr: 'Soumettre des Photos',
          },
          fields: [
            {
              name: 'submitTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Submit Section Title',
                fr: 'Titre de la Section Soumission',
              },
            },
            {
              name: 'submitDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Submit Section Description',
                fr: 'Description de la Section Soumission',
              },
            },
          ],
        },
      ],
    },
  ],
};

import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const CommunityPage: GlobalConfig = {
  slug: 'community-page',
  label: {
    en: 'Community Page',
    fr: 'Page Communauté',
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
          'introTitle',
          'introContent',
          'ctaTitle',
          'ctaDescription',
          // ASAD Sundays
          'asadSundaysTitle',
          'asadSundaysDescription',
          'asadSundaysIntro',
          // Baby Shower
          'babyShowerTitle',
          'babyShowerDescription',
          'babyShowerIntro',
          'babyShowerEligibility',
          // Back to School
          'backToSchoolTitle',
          'backToSchoolDescription',
          'backToSchoolIntro',
          // Soap & Oil
          'soapOilTitle',
          'soapOilDescription',
          'soapOilIntro',
          'soapOilParticipation',
          // Ndjangi
          'ndjangiTitle',
          'ndjangiDescription',
          'ndjangiIntro',
          // Social Fund
          'socialFundTitle',
          'socialFundDescription',
          'socialFundIntro',
        ],
        arrayFields: [
          // ASAD Sundays
          { name: 'asadSundaysActivities', localizedSubfields: ['title', 'description'] },
          { name: 'asadSundaysSchedule', localizedSubfields: ['activity'] },
          // Baby Shower
          { name: 'babyShowerFeatures', localizedSubfields: ['title', 'description'] },
          { name: 'babyShowerProcess', localizedSubfields: ['title', 'description'] },
          // Back to School
          { name: 'backToSchoolSupport', localizedSubfields: ['title', 'description'] },
          { name: 'backToSchoolImpact', localizedSubfields: ['label'] },
          { name: 'backToSchoolProcess', localizedSubfields: ['title', 'description'] },
          // Soap & Oil
          { name: 'soapOilBenefits', localizedSubfields: ['title', 'description'] },
          { name: 'soapOilProcess', localizedSubfields: ['title', 'description'] },
          // Ndjangi
          { name: 'ndjangiFeatures', localizedSubfields: ['title', 'description'] },
          { name: 'ndjangiProcess', localizedSubfields: ['title', 'description'] },
          // Social Fund
          { name: 'socialFundCoverage', localizedSubfields: ['title', 'description'] },
          { name: 'socialFundProcess', localizedSubfields: ['title', 'description'] },
          { name: 'socialFundEligible', localizedSubfields: ['item'] },
          { name: 'socialFundConditions', localizedSubfields: ['item'] },
          // Stats
          { name: 'impactStats', localizedSubfields: ['label'] },
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
            en: 'Introduction',
            fr: 'Introduction',
          },
          fields: [
            {
              name: 'introTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Introduction Title',
                fr: 'Titre de l\'Introduction',
              },
            },
            {
              name: 'introContent',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Introduction Content',
                fr: 'Contenu de l\'Introduction',
              },
              admin: {
                description: {
                  en: 'Main text explaining community programs',
                  fr: 'Texte principal expliquant les programmes communautaires',
                },
              },
            },
          ],
        },
        {
          label: {
            en: 'Programs',
            fr: 'Programmes',
          },
          fields: [
            // ============================================
            // ASAD Sundays
            // ============================================
            {
              type: 'collapsible',
              label: {
                en: 'ASAD Sundays',
                fr: 'Dimanches ASAD',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'asadSundaysTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'asadSundaysDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Short Description',
                    fr: 'Description Courte',
                  },
                  admin: {
                    description: {
                      en: 'Used in the community overview page cards',
                      fr: 'Utilisé dans les cartes de la page de présentation communautaire',
                    },
                  },
                },
                {
                  name: 'asadSundaysIntro',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Introduction Text',
                    fr: 'Texte d\'Introduction',
                  },
                  admin: {
                    description: {
                      en: 'Longer text for the ASAD Sundays detail page',
                      fr: 'Texte plus long pour la page de détail des Dimanches ASAD',
                    },
                  },
                },
                {
                  name: 'asadSundaysActivities',
                  type: 'array',
                  label: {
                    en: 'Activities',
                    fr: 'Activités',
                  },
                  maxRows: 6,
                  admin: {
                    description: {
                      en: 'Activities that happen during ASAD Sundays',
                      fr: 'Activités qui se déroulent pendant les Dimanches ASAD',
                    },
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
                        { label: 'Trophy', value: 'trophy' },
                        { label: 'Coffee', value: 'coffee' },
                        { label: 'Users', value: 'users' },
                        { label: 'Calendar', value: 'calendar' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
                {
                  name: 'asadSundaysSchedule',
                  type: 'array',
                  label: {
                    en: 'Schedule',
                    fr: 'Horaire',
                  },
                  maxRows: 10,
                  admin: {
                    description: {
                      en: 'Typical Sunday schedule (time slots)',
                      fr: 'Horaire typique du dimanche (créneaux horaires)',
                    },
                  },
                  fields: [
                    {
                      name: 'time',
                      type: 'text',
                      required: true,
                      label: {
                        en: 'Time',
                        fr: 'Heure',
                      },
                      admin: {
                        placeholder: 'e.g., 7:00 AM',
                      },
                    },
                    {
                      name: 'activity',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Activity',
                        fr: 'Activité',
                      },
                    },
                  ],
                },
              ],
            },

            // ============================================
            // Baby Shower
            // ============================================
            {
              type: 'collapsible',
              label: {
                en: 'Baby Shower Program',
                fr: 'Programme Baby Shower',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'babyShowerTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'babyShowerDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Short Description',
                    fr: 'Description Courte',
                  },
                },
                {
                  name: 'babyShowerIntro',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Introduction Text',
                    fr: 'Texte d\'Introduction',
                  },
                },
                {
                  name: 'babyShowerFeatures',
                  type: 'array',
                  label: {
                    en: 'Features',
                    fr: 'Caractéristiques',
                  },
                  maxRows: 6,
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: {
                        en: 'Icon',
                        fr: 'Icône',
                      },
                      options: [
                        { label: 'Gift', value: 'gift' },
                        { label: 'Party Popper', value: 'party-popper' },
                        { label: 'Heart', value: 'heart' },
                        { label: 'Users', value: 'users' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
                {
                  name: 'babyShowerProcess',
                  type: 'array',
                  label: {
                    en: 'Process Steps',
                    fr: 'Étapes du Processus',
                  },
                  maxRows: 6,
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
                {
                  name: 'babyShowerEligibility',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Eligibility Information',
                    fr: 'Informations sur l\'Éligibilité',
                  },
                },
              ],
            },

            // ============================================
            // Back to School
            // ============================================
            {
              type: 'collapsible',
              label: {
                en: 'Back to School Scheme',
                fr: 'Programme Rentrée Scolaire',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'backToSchoolTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'backToSchoolDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Short Description',
                    fr: 'Description Courte',
                  },
                },
                {
                  name: 'backToSchoolIntro',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Introduction Text',
                    fr: 'Texte d\'Introduction',
                  },
                },
                {
                  name: 'backToSchoolSupport',
                  type: 'array',
                  label: {
                    en: 'Support Types',
                    fr: 'Types de Soutien',
                  },
                  maxRows: 6,
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: {
                        en: 'Icon',
                        fr: 'Icône',
                      },
                      options: [
                        { label: 'Graduation Cap', value: 'graduation-cap' },
                        { label: 'Book Open', value: 'book-open' },
                        { label: 'Pencil', value: 'pencil' },
                        { label: 'Heart', value: 'heart' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
                {
                  name: 'backToSchoolImpact',
                  type: 'array',
                  label: {
                    en: 'Impact Statistics',
                    fr: 'Statistiques d\'Impact',
                  },
                  maxRows: 4,
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
                        placeholder: 'e.g., 50+, 100%',
                      },
                    },
                    {
                      name: 'label',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Label',
                        fr: 'Libellé',
                      },
                    },
                  ],
                },
                {
                  name: 'backToSchoolProcess',
                  type: 'array',
                  label: {
                    en: 'Process Steps',
                    fr: 'Étapes du Processus',
                  },
                  maxRows: 6,
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
              ],
            },

            // ============================================
            // Soap & Oil Thrift
            // ============================================
            {
              type: 'collapsible',
              label: {
                en: 'Soap & Oil Thrift',
                fr: 'Épargne Savon & Huile',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'soapOilTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'soapOilDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Short Description',
                    fr: 'Description Courte',
                  },
                },
                {
                  name: 'soapOilIntro',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Introduction Text',
                    fr: 'Texte d\'Introduction',
                  },
                },
                {
                  name: 'soapOilBenefits',
                  type: 'array',
                  label: {
                    en: 'Benefits',
                    fr: 'Avantages',
                  },
                  maxRows: 6,
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: {
                        en: 'Icon',
                        fr: 'Icône',
                      },
                      options: [
                        { label: 'Piggy Bank', value: 'piggy-bank' },
                        { label: 'Shopping Bag', value: 'shopping-bag' },
                        { label: 'Trending Up', value: 'trending-up' },
                        { label: 'Calendar', value: 'calendar' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
                {
                  name: 'soapOilProcess',
                  type: 'array',
                  label: {
                    en: 'Process Steps',
                    fr: 'Étapes du Processus',
                  },
                  maxRows: 6,
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
                {
                  name: 'soapOilParticipation',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Participation Note',
                    fr: 'Note de Participation',
                  },
                },
              ],
            },

            // ============================================
            // Ndjangi
            // ============================================
            {
              type: 'collapsible',
              label: {
                en: 'ASAD Ndjangi',
                fr: 'Ndjangi ASAD',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'ndjangiTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'ndjangiDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Short Description',
                    fr: 'Description Courte',
                  },
                },
                {
                  name: 'ndjangiIntro',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Introduction Text',
                    fr: 'Texte d\'Introduction',
                  },
                },
                {
                  name: 'ndjangiFeatures',
                  type: 'array',
                  label: {
                    en: 'Features',
                    fr: 'Caractéristiques',
                  },
                  maxRows: 6,
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
                        { label: 'Repeat', value: 'repeat' },
                        { label: 'Banknote', value: 'banknote' },
                        { label: 'Shield', value: 'shield' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
                {
                  name: 'ndjangiProcess',
                  type: 'array',
                  label: {
                    en: 'Process Steps',
                    fr: 'Étapes du Processus',
                  },
                  maxRows: 8,
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
                {
                  name: 'ndjangiExample',
                  type: 'group',
                  label: {
                    en: 'Example',
                    fr: 'Exemple',
                  },
                  fields: [
                    {
                      name: 'memberCount',
                      type: 'number',
                      label: {
                        en: 'Number of Members',
                        fr: 'Nombre de Membres',
                      },
                      admin: {
                        placeholder: 'e.g., 10',
                      },
                    },
                    {
                      name: 'contributionAmount',
                      type: 'text',
                      label: {
                        en: 'Contribution Amount',
                        fr: 'Montant de la Contribution',
                      },
                      admin: {
                        placeholder: 'e.g., 10,000 FCFA',
                      },
                    },
                    {
                      name: 'totalPayout',
                      type: 'text',
                      label: {
                        en: 'Total Payout',
                        fr: 'Paiement Total',
                      },
                      admin: {
                        placeholder: 'e.g., 100,000 FCFA',
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
                  ],
                },
              ],
            },

            // ============================================
            // Social Fund
            // ============================================
            {
              type: 'collapsible',
              label: {
                en: 'Social Fund',
                fr: 'Fonds Social',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'socialFundTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'socialFundDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Short Description',
                    fr: 'Description Courte',
                  },
                },
                {
                  name: 'socialFundIntro',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Introduction Text',
                    fr: 'Texte d\'Introduction',
                  },
                },
                {
                  name: 'socialFundCoverage',
                  type: 'array',
                  label: {
                    en: 'Coverage Areas',
                    fr: 'Domaines Couverts',
                  },
                  maxRows: 6,
                  fields: [
                    {
                      name: 'icon',
                      type: 'select',
                      label: {
                        en: 'Icon',
                        fr: 'Icône',
                      },
                      options: [
                        { label: 'Heart', value: 'heart' },
                        { label: 'Hand Heart', value: 'hand-heart' },
                        { label: 'Shield', value: 'shield' },
                        { label: 'Users', value: 'users' },
                      ],
                    },
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
                {
                  name: 'socialFundProcess',
                  type: 'array',
                  label: {
                    en: 'Process Steps',
                    fr: 'Étapes du Processus',
                  },
                  maxRows: 6,
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Title',
                        fr: 'Titre',
                      },
                    },
                    {
                      name: 'description',
                      type: 'textarea',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Description',
                        fr: 'Description',
                      },
                    },
                  ],
                },
                {
                  name: 'socialFundEligible',
                  type: 'array',
                  label: {
                    en: 'Who is Eligible',
                    fr: 'Qui est Éligible',
                  },
                  fields: [
                    {
                      name: 'item',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Item',
                        fr: 'Élément',
                      },
                    },
                  ],
                },
                {
                  name: 'socialFundConditions',
                  type: 'array',
                  label: {
                    en: 'Conditions',
                    fr: 'Conditions',
                  },
                  fields: [
                    {
                      name: 'item',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Item',
                        fr: 'Élément',
                      },
                    },
                  ],
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
                    path: '@/components/admin/CommunityPageCalculatedStats',
                  },
                },
              },
            },
            {
              name: 'impactStats',
              type: 'array',
              label: {
                en: 'Manual Impact Statistics',
                fr: 'Statistiques d\'Impact Manuelles',
              },
              maxRows: 4,
              admin: {
                description: {
                  en: 'Add custom impact statistics like Families Supported, Children Helped, etc.',
                  fr: 'Ajoutez des statistiques d\'impact personnalisées comme Familles Soutenues, Enfants Aidés, etc.',
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
                      en: 'e.g., "100+", "Every", "50+"',
                      fr: 'ex: "100+", "Chaque", "50+"',
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
                      en: 'e.g., "Families Supported", "Sunday Together"',
                      fr: 'ex: "Familles Soutenues", "Dimanche Ensemble"',
                    },
                  },
                },
              ],
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

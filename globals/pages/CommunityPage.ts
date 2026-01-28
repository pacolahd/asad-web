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
          'introTitle',
          'introContent',
          'overviewImageCaption',
          'ctaTitle',
          'ctaDescription',
          // Community Hub page
          'programsTitle',
          'programsDescription',
          // ASAD Sundays
          'asadSundaysTitle',
          'asadSundaysDescription',
          'asadSundaysIntro',
          'asadSundaysSectionTitle',
          'asadSundaysWhatHappens',
          'asadSundaysScheduleTitle',
          'asadSundaysLocationTitle',
          'asadSundaysLocationDescription',
          'asadSundaysJoinTitle',
          'asadSundaysJoinDescription',
          // Baby Shower
          'babyShowerTitle',
          'babyShowerDescription',
          'babyShowerIntro',
          'babyShowerEligibility',
          'babyShowerSectionTitle',
          'babyShowerWhatWeProvide',
          'babyShowerHowItWorks',
          'babyShowerEligibilityTitle',
          // Back to School
          'backToSchoolTitle',
          'backToSchoolDescription',
          'backToSchoolIntro',
          'backToSchoolSectionTitle',
          'backToSchoolHowWeSupport',
          'backToSchoolOurImpact',
          'backToSchoolHowItWorks',
          'backToSchoolCta',
          'backToSchoolCtaDescription',
          // Soap & Oil
          'soapOilTitle',
          'soapOilDescription',
          'soapOilIntro',
          'soapOilParticipation',
          'soapOilSectionTitle',
          'soapOilBenefitsTitle',
          'soapOilHowItWorks',
          'soapOilCtaTitle',
          'soapOilCtaDescription',
          // Ndjangi
          'ndjangiTitle',
          'ndjangiDescription',
          'ndjangiIntro',
          'ndjangiSectionTitle',
          'ndjangiBenefitsTitle',
          'ndjangiHowItWorks',
          'ndjangiExampleTitle',
          'ndjangiCtaTitle',
          'ndjangiCtaDescription',
          // Social Fund
          'socialFundTitle',
          'socialFundDescription',
          'socialFundIntro',
          'socialFundSectionTitle',
          'socialFundCoverageTitle',
          'socialFundHowItWorks',
          'socialFundEligibilityTitle',
          'socialFundEligibleLabel',
          'socialFundConditionsLabel',
          'socialFundCtaTitle',
          'socialFundCtaDescription',
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
        groupFields: [
          // Ndjangi example group
          { name: 'ndjangiExample', localizedSubfields: ['description'] },
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
            {
              name: 'overviewImage',
              type: 'upload',
              relationTo: 'media',
              label: {
                en: 'Overview Section Image',
                fr: 'Image Section Aperçu',
              },
              admin: {
                description: {
                  en: 'Image for the community overview section',
                  fr: 'Image pour la section aperçu de la communauté',
                },
              },
            },
            {
              name: 'showOverviewImageCaption',
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
              name: 'overviewImageCaption',
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
                condition: (data) => data?.showOverviewImageCaption === true,
              },
            },
            {
              name: 'programsTitle',
              type: 'text',
              localized: true,
              label: {
                en: 'Programs Section Title',
                fr: 'Titre de la Section Programmes',
              },
              admin: {
                description: {
                  en: 'Title for the programs grid section (e.g., "Our Programs")',
                  fr: 'Titre de la section grille de programmes (ex: "Nos Programmes")',
                },
              },
            },
            {
              name: 'programsDescription',
              type: 'textarea',
              localized: true,
              label: {
                en: 'Programs Section Description',
                fr: 'Description de la Section Programmes',
              },
              admin: {
                description: {
                  en: 'Description text below the programs title',
                  fr: 'Texte de description sous le titre des programmes',
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
                  name: 'asadSundaysSectionTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Main Section Title',
                    fr: 'Titre de Section Principal',
                  },
                  admin: {
                    placeholder: 'e.g., The Heartbeat of ASAD',
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
                  name: 'asadSundaysWhatHappens',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Activities Section Title',
                    fr: 'Titre de la Section Activités',
                  },
                  admin: {
                    placeholder: 'e.g., What Happens on ASAD Sundays',
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
                  name: 'asadSundaysScheduleTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Schedule Section Title',
                    fr: 'Titre de la Section Horaire',
                  },
                  admin: {
                    placeholder: 'e.g., Typical Sunday Schedule',
                  },
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
                {
                  name: 'asadSundaysLocationTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Location Card Title',
                    fr: 'Titre de la Carte Lieu',
                  },
                  admin: {
                    placeholder: 'e.g., Where We Meet',
                  },
                },
                {
                  name: 'asadSundaysLocationDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Location Card Description',
                    fr: 'Description de la Carte Lieu',
                  },
                },
                {
                  name: 'asadSundaysJoinTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Join Us Card Title',
                    fr: 'Titre de la Carte Rejoignez-nous',
                  },
                  admin: {
                    placeholder: 'e.g., Join Us',
                  },
                },
                {
                  name: 'asadSundaysJoinDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Join Us Card Description',
                    fr: 'Description de la Carte Rejoignez-nous',
                  },
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
                  name: 'babyShowerSectionTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Main Section Title',
                    fr: 'Titre de Section Principal',
                  },
                  admin: {
                    placeholder: 'e.g., Welcoming New Life',
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
                  name: 'babyShowerWhatWeProvide',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Features Section Title',
                    fr: 'Titre de la Section Caractéristiques',
                  },
                  admin: {
                    placeholder: 'e.g., What We Provide',
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
                  name: 'babyShowerHowItWorks',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Process Section Title',
                    fr: 'Titre de la Section Processus',
                  },
                  admin: {
                    placeholder: 'e.g., How It Works',
                  },
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
                  name: 'babyShowerEligibilityTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Eligibility Section Title',
                    fr: 'Titre de la Section Éligibilité',
                  },
                  admin: {
                    placeholder: 'e.g., Who Is Eligible?',
                  },
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
                  name: 'backToSchoolSectionTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Main Section Title',
                    fr: 'Titre de Section Principal',
                  },
                  admin: {
                    placeholder: 'e.g., Investing in Tomorrow',
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
                  name: 'backToSchoolHowWeSupport',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Support Section Title',
                    fr: 'Titre de la Section Soutien',
                  },
                  admin: {
                    placeholder: 'e.g., How We Support',
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
                  name: 'backToSchoolOurImpact',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Impact Section Title',
                    fr: 'Titre de la Section Impact',
                  },
                  admin: {
                    placeholder: 'e.g., Our Impact',
                  },
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
                  name: 'backToSchoolHowItWorks',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Process Section Title',
                    fr: 'Titre de la Section Processus',
                  },
                  admin: {
                    placeholder: 'e.g., How the Program Works',
                  },
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
                {
                  name: 'backToSchoolCta',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'CTA Title',
                    fr: 'Titre CTA',
                  },
                  admin: {
                    placeholder: 'e.g., Support Education',
                  },
                },
                {
                  name: 'backToSchoolCtaDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'CTA Description',
                    fr: 'Description CTA',
                  },
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
                  name: 'soapOilSectionTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Main Section Title',
                    fr: 'Titre de Section Principal',
                  },
                  admin: {
                    placeholder: 'e.g., Small Savings, Big Impact',
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
                  name: 'soapOilBenefitsTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Benefits Section Title',
                    fr: 'Titre de la Section Avantages',
                  },
                  admin: {
                    placeholder: 'e.g., Benefits',
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
                  name: 'soapOilHowItWorks',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Process Section Title',
                    fr: 'Titre de la Section Processus',
                  },
                  admin: {
                    placeholder: 'e.g., How It Works',
                  },
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
                {
                  name: 'soapOilCtaTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'CTA Title',
                    fr: 'Titre CTA',
                  },
                  admin: {
                    placeholder: 'e.g., Join the Thrift',
                  },
                },
                {
                  name: 'soapOilCtaDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'CTA Description',
                    fr: 'Description CTA',
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
                  name: 'ndjangiSectionTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Main Section Title',
                    fr: 'Titre de Section Principal',
                  },
                  admin: {
                    placeholder: 'e.g., What is Ndjangi?',
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
                  name: 'ndjangiBenefitsTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Benefits Section Title',
                    fr: 'Titre de la Section Avantages',
                  },
                  admin: {
                    placeholder: 'e.g., How It Benefits Members',
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
                  name: 'ndjangiHowItWorks',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Process Section Title',
                    fr: 'Titre de la Section Processus',
                  },
                  admin: {
                    placeholder: 'e.g., How ASAD Ndjangi Works',
                  },
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
                  name: 'ndjangiExampleTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Example Section Title',
                    fr: 'Titre de la Section Exemple',
                  },
                  admin: {
                    placeholder: 'e.g., Example',
                  },
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
                {
                  name: 'ndjangiCtaTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'CTA Title',
                    fr: 'Titre CTA',
                  },
                  admin: {
                    placeholder: 'e.g., Interested in Joining?',
                  },
                },
                {
                  name: 'ndjangiCtaDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'CTA Description',
                    fr: 'Description CTA',
                  },
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
                  name: 'socialFundSectionTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Main Section Title',
                    fr: 'Titre de Section Principal',
                  },
                  admin: {
                    placeholder: 'e.g., Standing Together',
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
                  name: 'socialFundCoverageTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Coverage Section Title',
                    fr: 'Titre de la Section Couverture',
                  },
                  admin: {
                    placeholder: 'e.g., What We Cover',
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
                  name: 'socialFundHowItWorks',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Process Section Title',
                    fr: 'Titre de la Section Processus',
                  },
                  admin: {
                    placeholder: 'e.g., How It Works',
                  },
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
                  name: 'socialFundEligibilityTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Eligibility Section Title',
                    fr: 'Titre de la Section Éligibilité',
                  },
                  admin: {
                    placeholder: 'e.g., Eligibility',
                  },
                },
                {
                  name: 'socialFundEligibleLabel',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Eligible Label',
                    fr: 'Libellé Éligible',
                  },
                  admin: {
                    placeholder: 'e.g., Eligible',
                  },
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
                  name: 'socialFundConditionsLabel',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Conditions Label',
                    fr: 'Libellé Conditions',
                  },
                  admin: {
                    placeholder: 'e.g., Conditions',
                  },
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
                {
                  name: 'socialFundCtaTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'CTA Title',
                    fr: 'Titre CTA',
                  },
                  admin: {
                    placeholder: 'e.g., Building Security Together',
                  },
                },
                {
                  name: 'socialFundCtaDescription',
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

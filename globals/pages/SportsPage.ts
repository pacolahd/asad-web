import type { GlobalConfig } from 'payload';
import { createGlobalTranslationHook } from '@/hooks/deepl-translation';

export const SportsPage: GlobalConfig = {
  slug: 'sports-page',
  label: {
    en: 'Sports Page',
    fr: 'Page Sports',
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
          // Competitions
          'competitionsTitle',
          'competitionsDescription',
          'competitionsPhilosophy',
          // Friendly Matches
          'friendlyMatchesTitle',
          'friendlyMatchesDescription',
          'friendlyMatchesPhilosophy',
          // Internal Challenge
          'challengeTitle',
          'challengeDescription',
          'challengeConcept',
          // Jerseys
          'jerseysTitle',
          'jerseysDescription',
          'jerseysIntro',
        ],
        arrayFields: [
          { name: 'achievements', localizedSubfields: ['title', 'description'] },
          { name: 'upcomingEvents', localizedSubfields: ['title'] },
          { name: 'matchTypes', localizedSubfields: ['title', 'description', 'frequency'] },
          { name: 'challengeRules', localizedSubfields: ['title', 'description'] },
          { name: 'brandColors', localizedSubfields: ['meaning'] },
          { name: 'jerseyHistory', localizedSubfields: ['title', 'description'] },
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
            },
          ],
        },
        {
          label: {
            en: 'Activities',
            fr: 'Activités',
          },
          fields: [
            // ============================================
            // Competitions & Achievements
            // ============================================
            {
              type: 'collapsible',
              label: {
                en: 'Competitions & Achievements',
                fr: 'Compétitions & Réalisations',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'competitionsTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'competitionsDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Short Description',
                    fr: 'Description Courte',
                  },
                  admin: {
                    description: {
                      en: 'Used in the sports overview page cards',
                      fr: 'Utilisé dans les cartes de la page de présentation sportive',
                    },
                  },
                },
                {
                  name: 'competitionsPhilosophy',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Philosophy Text',
                    fr: 'Texte de Philosophie',
                  },
                  admin: {
                    description: {
                      en: 'Introduction text for the competitions detail page',
                      fr: 'Texte d\'introduction pour la page de détail des compétitions',
                    },
                  },
                },
                {
                  name: 'achievements',
                  type: 'array',
                  label: {
                    en: 'Achievements',
                    fr: 'Réalisations',
                  },
                  admin: {
                    description: {
                      en: 'Notable tournament results and achievements',
                      fr: 'Résultats de tournois et réalisations notables',
                    },
                  },
                  fields: [
                    {
                      name: 'year',
                      type: 'text',
                      required: true,
                      label: {
                        en: 'Year',
                        fr: 'Année',
                      },
                      admin: {
                        placeholder: 'e.g., 2024',
                      },
                    },
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Tournament/Event Title',
                        fr: 'Titre du Tournoi/Événement',
                      },
                    },
                    {
                      name: 'result',
                      type: 'select',
                      required: true,
                      label: {
                        en: 'Result',
                        fr: 'Résultat',
                      },
                      options: [
                        { label: 'Champion', value: 'Champion' },
                        { label: 'Finalist', value: 'Finalist' },
                        { label: 'Semi-Finalist', value: 'Semi-Finalist' },
                        { label: 'Participant', value: 'Participant' },
                      ],
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
                  name: 'upcomingEvents',
                  type: 'array',
                  label: {
                    en: 'Upcoming Events',
                    fr: 'Événements à Venir',
                  },
                  maxRows: 6,
                  fields: [
                    {
                      name: 'title',
                      type: 'text',
                      localized: true,
                      required: true,
                      label: {
                        en: 'Event Title',
                        fr: 'Titre de l\'Événement',
                      },
                    },
                    {
                      name: 'date',
                      type: 'text',
                      required: true,
                      label: {
                        en: 'Date',
                        fr: 'Date',
                      },
                      admin: {
                        placeholder: 'e.g., December 2025, Ongoing',
                      },
                    },
                    {
                      name: 'status',
                      type: 'select',
                      label: {
                        en: 'Status',
                        fr: 'Statut',
                      },
                      options: [
                        { label: 'Upcoming', value: 'Upcoming' },
                        { label: 'Preparing', value: 'Preparing' },
                        { label: 'Active', value: 'Active' },
                      ],
                    },
                  ],
                },
              ],
            },

            // ============================================
            // Friendly Matches
            // ============================================
            {
              type: 'collapsible',
              label: {
                en: 'Friendly Matches',
                fr: 'Matchs Amicaux',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'friendlyMatchesTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'friendlyMatchesDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Short Description',
                    fr: 'Description Courte',
                  },
                },
                {
                  name: 'friendlyMatchesPhilosophy',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Philosophy Text',
                    fr: 'Texte de Philosophie',
                  },
                },
                {
                  name: 'matchTypes',
                  type: 'array',
                  label: {
                    en: 'Match Types',
                    fr: 'Types de Matchs',
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
                        { label: 'Map Pin', value: 'map-pin' },
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
                    {
                      name: 'frequency',
                      type: 'text',
                      localized: true,
                      label: {
                        en: 'Frequency',
                        fr: 'Fréquence',
                      },
                      admin: {
                        placeholder: 'e.g., Weekly, Monthly',
                      },
                    },
                  ],
                },
                {
                  name: 'recentMatches',
                  type: 'array',
                  label: {
                    en: 'Recent Matches',
                    fr: 'Matchs Récents',
                  },
                  admin: {
                    description: {
                      en: 'Recent friendly match results',
                      fr: 'Résultats des matchs amicaux récents',
                    },
                  },
                  fields: [
                    {
                      name: 'opponent',
                      type: 'text',
                      required: true,
                      label: {
                        en: 'Opponent',
                        fr: 'Adversaire',
                      },
                    },
                    {
                      name: 'result',
                      type: 'text',
                      required: true,
                      label: {
                        en: 'Score',
                        fr: 'Score',
                      },
                      admin: {
                        placeholder: 'e.g., 3-2',
                      },
                    },
                    {
                      name: 'outcome',
                      type: 'select',
                      required: true,
                      label: {
                        en: 'Outcome',
                        fr: 'Résultat',
                      },
                      options: [
                        { label: 'Win', value: 'win' },
                        { label: 'Draw', value: 'draw' },
                        { label: 'Loss', value: 'loss' },
                      ],
                    },
                    {
                      name: 'date',
                      type: 'text',
                      required: true,
                      label: {
                        en: 'Date',
                        fr: 'Date',
                      },
                      admin: {
                        placeholder: 'e.g., January 2025',
                      },
                    },
                    {
                      name: 'location',
                      type: 'select',
                      label: {
                        en: 'Location',
                        fr: 'Lieu',
                      },
                      options: [
                        { label: 'Home', value: 'Home' },
                        { label: 'Away', value: 'Away' },
                      ],
                    },
                  ],
                },
              ],
            },

            // ============================================
            // Internal Challenge
            // ============================================
            {
              type: 'collapsible',
              label: {
                en: 'ASAD # ASAD Challenge',
                fr: 'Défi ASAD # ASAD',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'challengeTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'challengeDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Short Description',
                    fr: 'Description Courte',
                  },
                },
                {
                  name: 'challengeConcept',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Concept Text',
                    fr: 'Texte du Concept',
                  },
                  admin: {
                    description: {
                      en: 'Introduction explaining the internal challenge concept',
                      fr: 'Introduction expliquant le concept du défi interne',
                    },
                  },
                },
                {
                  name: 'challengeRules',
                  type: 'array',
                  label: {
                    en: 'Rules',
                    fr: 'Règles',
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
                  name: 'hallOfChampions',
                  type: 'array',
                  label: {
                    en: 'Hall of Champions',
                    fr: 'Temple des Champions',
                  },
                  admin: {
                    description: {
                      en: 'Past winners of the internal challenge',
                      fr: 'Anciens gagnants du défi interne',
                    },
                  },
                  fields: [
                    {
                      name: 'year',
                      type: 'number',
                      required: true,
                      label: {
                        en: 'Year',
                        fr: 'Année',
                      },
                    },
                    {
                      name: 'team',
                      type: 'text',
                      required: true,
                      label: {
                        en: 'Team Name',
                        fr: 'Nom de l\'Équipe',
                      },
                    },
                    {
                      name: 'captain',
                      type: 'text',
                      label: {
                        en: 'Captain',
                        fr: 'Capitaine',
                      },
                    },
                  ],
                },
              ],
            },

            // ============================================
            // Jerseys
            // ============================================
            {
              type: 'collapsible',
              label: {
                en: 'Jersey Collection',
                fr: 'Collection de Maillots',
              },
              admin: {
                initCollapsed: true,
              },
              fields: [
                {
                  name: 'jerseysTitle',
                  type: 'text',
                  localized: true,
                  label: {
                    en: 'Title',
                    fr: 'Titre',
                  },
                },
                {
                  name: 'jerseysDescription',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Short Description',
                    fr: 'Description Courte',
                  },
                },
                {
                  name: 'jerseysIntro',
                  type: 'textarea',
                  localized: true,
                  label: {
                    en: 'Introduction Text',
                    fr: 'Texte d\'Introduction',
                  },
                },
                {
                  name: 'brandColors',
                  type: 'array',
                  label: {
                    en: 'Brand Colors',
                    fr: 'Couleurs de Marque',
                  },
                  maxRows: 5,
                  fields: [
                    {
                      name: 'name',
                      type: 'text',
                      required: true,
                      label: {
                        en: 'Color Name',
                        fr: 'Nom de la Couleur',
                      },
                      admin: {
                        placeholder: 'e.g., ASAD Green',
                      },
                    },
                    {
                      name: 'hex',
                      type: 'text',
                      required: true,
                      label: {
                        en: 'Hex Code',
                        fr: 'Code Hex',
                      },
                      admin: {
                        placeholder: 'e.g., #1a5f2a',
                      },
                    },
                    {
                      name: 'meaning',
                      type: 'textarea',
                      localized: true,
                      label: {
                        en: 'Meaning',
                        fr: 'Signification',
                      },
                    },
                  ],
                },
                {
                  name: 'jerseyHistory',
                  type: 'array',
                  label: {
                    en: 'Jersey History',
                    fr: 'Historique des Maillots',
                  },
                  admin: {
                    description: {
                      en: 'Evolution of ASAD jerseys through the years',
                      fr: 'Évolution des maillots ASAD au fil des années',
                    },
                  },
                  fields: [
                    {
                      name: 'era',
                      type: 'text',
                      required: true,
                      label: {
                        en: 'Era',
                        fr: 'Époque',
                      },
                      admin: {
                        placeholder: 'e.g., 2004-2008',
                      },
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
                      admin: {
                        placeholder: 'e.g., The Original, The Classic',
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
                      name: 'colors',
                      type: 'text',
                      label: {
                        en: 'Colors',
                        fr: 'Couleurs',
                      },
                      admin: {
                        placeholder: 'Comma-separated: Green, White, Blue',
                      },
                    },
                    {
                      name: 'status',
                      type: 'select',
                      label: {
                        en: 'Status',
                        fr: 'Statut',
                      },
                      options: [
                        { label: 'Current', value: 'Current' },
                        { label: 'Historic', value: 'Historic' },
                        { label: 'Collector', value: 'Collector' },
                      ],
                    },
                    {
                      name: 'image',
                      type: 'upload',
                      relationTo: 'media',
                      label: {
                        en: 'Jersey Image',
                        fr: 'Image du Maillot',
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
                    path: '@/components/admin/SportsPageCalculatedStats',
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
                  en: 'Add custom statistics like Competitions Played, Active Players, etc.',
                  fr: 'Ajoutez des statistiques personnalisées comme Compétitions Jouées, Joueurs Actifs, etc.',
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
                      en: 'e.g., "50+", "Every", "100+"',
                      fr: 'ex: "50+", "Chaque", "100+"',
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
                      en: 'e.g., "Competitions Played", "Sunday We Play"',
                      fr: 'ex: "Compétitions Jouées", "Dimanche Nous Jouons"',
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

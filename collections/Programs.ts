import type { CollectionConfig } from 'payload';
import { createTranslationHook } from '@/hooks/deepl-translation';

export const Programs: CollectionConfig = {
  slug: 'programs',
  labels: {
    singular: {
      en: 'Program',
      fr: 'Programme',
    },
    plural: {
      en: 'Programs',
      fr: 'Programmes',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'category', 'sortOrder', 'updatedAt'],
    group: {
      en: 'Content',
      fr: 'Contenu',
    },
  },
  access: {
    read: () => true,
  },
  hooks: {
    afterChange: [
      createTranslationHook({
        localizedFields: ['title', 'description'],
      }),
    ],
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
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      label: {
        en: 'Slug',
        fr: 'Identifiant URL',
      },
      admin: {
        description: {
          en: 'URL-friendly identifier (e.g., "asad-sundays")',
          fr: 'Identifiant pour l\'URL (ex: "dimanches-asad")',
        },
      },
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      localized: true,
      label: {
        en: 'Description',
        fr: 'Description',
      },
    },
    {
      name: 'category',
      type: 'select',
      required: true,
      label: {
        en: 'Category',
        fr: 'Catégorie',
      },
      options: [
        { label: { en: 'Community', fr: 'Communauté' }, value: 'community' },
        { label: { en: 'Sports', fr: 'Sports' }, value: 'sports' },
      ],
    },
    {
      name: 'icon',
      type: 'select',
      label: {
        en: 'Icon',
        fr: 'Icône',
      },
      options: [
        { label: { en: 'Calendar', fr: 'Calendrier' }, value: 'calendar' },
        { label: { en: 'Gift', fr: 'Cadeau' }, value: 'gift' },
        { label: { en: 'Graduation Cap', fr: 'Chapeau de Diplômé' }, value: 'graduation-cap' },
        { label: { en: 'Piggy Bank', fr: 'Tirelire' }, value: 'piggy-bank' },
        { label: { en: 'Users', fr: 'Utilisateurs' }, value: 'users' },
        { label: { en: 'Heart', fr: 'Cœur' }, value: 'heart' },
        { label: { en: 'Trophy', fr: 'Trophée' }, value: 'trophy' },
        { label: { en: 'Handshake', fr: 'Poignée de Main' }, value: 'handshake' },
        { label: { en: 'Swords', fr: 'Épées' }, value: 'swords' },
      ],
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Image',
        fr: 'Image',
      },
    },
    {
      name: 'content',
      type: 'richText',
      localized: true,
      label: {
        en: 'Content',
        fr: 'Contenu',
      },
      admin: {
        description: {
          en: 'Detailed content for the program page',
          fr: 'Contenu détaillé pour la page du programme',
        },
      },
    },
    {
      name: 'sortOrder',
      type: 'number',
      defaultValue: 0,
      label: {
        en: 'Sort Order',
        fr: 'Ordre de Tri',
      },
      admin: {
        description: {
          en: 'Lower numbers appear first',
          fr: 'Les nombres plus petits apparaissent en premier',
        },
      },
    },
  ],
};

import type { CollectionConfig } from 'payload';
import { createTranslationHook } from '@/hooks/deepl-translation';

export const GalleryAlbums: CollectionConfig = {
  slug: 'gallery-albums',
  labels: {
    singular: {
      en: 'Album',
      fr: 'Album',
    },
    plural: {
      en: 'Photo Gallery',
      fr: 'Galerie Photos',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'date', 'updatedAt'],
    group: {
      en: 'Shared Content',
      fr: 'Contenu Partagé',
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
          en: 'URL-friendly identifier (e.g., "competitions-2024")',
          fr: 'Identifiant pour l\'URL (ex: "competitions-2024")',
        },
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
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        en: 'Cover Image',
        fr: 'Image de Couverture',
      },
    },
    {
      name: 'date',
      type: 'text',
      label: {
        en: 'Date',
        fr: 'Date',
      },
      admin: {
        description: {
          en: 'Display date (e.g., "2024", "September 2024")',
          fr: 'Date d\'affichage (ex: "2024", "Septembre 2024")',
        },
      },
    },
    {
      name: 'images',
      type: 'array',
      label: {
        en: 'Images',
        fr: 'Images',
      },
      labels: {
        singular: {
          en: 'Image',
          fr: 'Image',
        },
        plural: {
          en: 'Images',
          fr: 'Images',
        },
      },
      fields: [
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
        {
          name: 'caption',
          type: 'text',
          localized: true,
          label: {
            en: 'Caption',
            fr: 'Légende',
          },
        },
      ],
    },
  ],
};

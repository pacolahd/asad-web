import type { CollectionConfig } from 'payload';

export const MemorialMembers: CollectionConfig = {
  slug: 'memorial-members',
  labels: {
    singular: {
      en: 'Departed Member',
      fr: 'Membre Disparu',
    },
    plural: {
      en: 'Departed Members',
      fr: 'Membres Disparus',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'birthYear', 'deathYear', 'updatedAt'],
    group: {
      en: 'Members',
      fr: 'Membres',
    },
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      label: {
        en: 'Name',
        fr: 'Nom',
      },
    },
    {
      name: 'birthYear',
      type: 'number',
      label: {
        en: 'Birth Year',
        fr: 'Année de Naissance',
      },
    },
    {
      name: 'deathYear',
      type: 'number',
      label: {
        en: 'Death Year',
        fr: 'Année de Décès',
      },
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: {
        en: 'Photo',
        fr: 'Photo',
      },
    },
    {
      name: 'tribute',
      type: 'richText',
      localized: true,
      label: {
        en: 'Tribute',
        fr: 'Hommage',
      },
    },
  ],
};

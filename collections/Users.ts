import type { CollectionConfig } from 'payload';

export const Users: CollectionConfig = {
  slug: 'users',
  labels: {
    singular: {
      en: 'User',
      fr: 'Utilisateur',
    },
    plural: {
      en: 'Users',
      fr: 'Utilisateurs',
    },
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'email', 'role'],
    group: {
      en: 'Admin',
      fr: 'Administration',
    },
  },
  auth: true,
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
      name: 'role',
      type: 'select',
      required: true,
      defaultValue: 'editor',
      label: {
        en: 'Role',
        fr: 'Rôle',
      },
      options: [
        { label: { en: 'Admin', fr: 'Administrateur' }, value: 'admin' },
        { label: { en: 'Editor', fr: 'Éditeur' }, value: 'editor' },
      ],
    },
  ],
};

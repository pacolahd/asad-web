import type { CollectionConfig } from 'payload';
import { createTranslationHook } from '@/hooks/deepl-translation';

export const Documents: CollectionConfig = {
  slug: 'documents',
  labels: {
    singular: {
      en: 'Document',
      fr: 'Document',
    },
    plural: {
      en: 'Documents',
      fr: 'Documents',
    },
  },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'type', 'category', 'updatedAt'],
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
      name: 'description',
      type: 'textarea',
      localized: true,
      label: {
        en: 'Description',
        fr: 'Description',
      },
    },
    {
      name: 'file',
      type: 'upload',
      relationTo: 'media',
      required: true,
      label: {
        en: 'File',
        fr: 'Fichier',
      },
    },
    {
      name: 'type',
      type: 'select',
      required: true,
      label: {
        en: 'Type',
        fr: 'Type',
      },
      options: [
        { label: 'PDF', value: 'pdf' },
        { label: { en: 'Document', fr: 'Document' }, value: 'doc' },
        { label: { en: 'Other', fr: 'Autre' }, value: 'other' },
      ],
    },
    {
      name: 'category',
      type: 'select',
      label: {
        en: 'Category',
        fr: 'Catégorie',
      },
      options: [
        { label: { en: 'Statutes', fr: 'Statuts' }, value: 'statutes' },
        { label: { en: 'Reports', fr: 'Rapports' }, value: 'reports' },
        { label: { en: 'Forms', fr: 'Formulaires' }, value: 'forms' },
        { label: { en: 'Other', fr: 'Autre' }, value: 'other' },
      ],
    },
  ],
};

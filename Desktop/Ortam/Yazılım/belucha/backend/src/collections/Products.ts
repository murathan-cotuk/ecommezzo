import { CollectionConfig } from 'payload/types';

const Products: CollectionConfig = {
  slug: 'products',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'stock', 'category', 'seller'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => {
      if (user?.role === 'admin' || user?.role === 'seller') return true;
      return false;
    },
    update: ({ req: { user } }) => {
      if (user?.role === 'admin') return true;
      if (user?.role === 'seller') {
        return {
          seller: {
            equals: user?.id,
          },
        };
      }
      return false;
    },
    delete: ({ req: { user } }) => {
      if (user?.role === 'admin') return true;
      if (user?.role === 'seller') {
        return {
          seller: {
            equals: user?.id,
          },
        };
      }
      return false;
    },
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
      localized: true,
    },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: {
        description: 'Auto-generated from title',
      },
      hooks: {
        beforeValidate: [
          ({ data, siblingData }) => {
            if (data?.title && !siblingData?.slug) {
              return data.title
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/(^-|-$)/g, '');
            }
          },
        ],
      },
    },
    {
      name: 'description',
      type: 'richText',
      required: true,
      localized: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'images',
      type: 'array',
      required: true,
      minRows: 1,
      fields: [
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
        },
      ],
    },
    {
      name: 'price',
      type: 'number',
      required: true,
      min: 0,
    },
    {
      name: 'compareAtPrice',
      type: 'number',
      min: 0,
      admin: {
        description: 'Original price before discount',
      },
    },
    {
      name: 'stock',
      type: 'number',
      required: true,
      defaultValue: 0,
      min: 0,
    },
    {
      name: 'sku',
      type: 'text',
      admin: {
        description: 'Stock Keeping Unit',
      },
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'categories',
      required: true,
      hasMany: false,
    },
    {
      name: 'seller',
      type: 'relationship',
      relationTo: 'users',
      required: true,
      filterOptions: {
        role: {
          equals: 'seller',
        },
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Active',
          value: 'active',
        },
        {
          label: 'Draft',
          value: 'draft',
        },
        {
          label: 'Archived',
          value: 'archived',
        },
      ],
      defaultValue: 'active',
      required: true,
    },
    {
      name: 'featured',
      type: 'checkbox',
      defaultValue: false,
    },
    {
      name: 'tags',
      type: 'array',
      fields: [
        {
          name: 'tag',
          type: 'text',
        },
      ],
    },
    {
      name: 'meta',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
        },
        {
          name: 'description',
          type: 'textarea',
        },
      ],
    },
  ],
  timestamps: true,
};

export default Products;



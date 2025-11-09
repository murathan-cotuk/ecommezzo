import { CollectionConfig } from 'payload/types';

const Reviews: CollectionConfig = {
  slug: 'reviews',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['product', 'user', 'rating', 'createdAt'],
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: ({ req: { user } }) => {
      if (user?.role === 'admin') return true;
      return {
        user: {
          equals: user?.id,
        },
      };
    },
    delete: ({ req: { user } }) => {
      if (user?.role === 'admin') return true;
      return {
        user: {
          equals: user?.id,
        },
      };
    },
  },
  fields: [
    {
      name: 'product',
      type: 'relationship',
      relationTo: 'products',
      required: true,
    },
    {
      name: 'user',
      type: 'relationship',
      relationTo: 'users',
      required: true,
    },
    {
      name: 'rating',
      type: 'number',
      required: true,
      min: 1,
      max: 5,
      admin: {
        description: 'Rating from 1 to 5',
      },
    },
    {
      name: 'title',
      type: 'text',
    },
    {
      name: 'comment',
      type: 'textarea',
      required: true,
    },
    {
      name: 'verified',
      type: 'checkbox',
      defaultValue: false,
      admin: {
        description: 'Verified purchase',
      },
    },
    {
      name: 'status',
      type: 'select',
      options: [
        {
          label: 'Approved',
          value: 'approved',
        },
        {
          label: 'Pending',
          value: 'pending',
        },
        {
          label: 'Rejected',
          value: 'rejected',
        },
      ],
      defaultValue: 'pending',
      required: true,
    },
  ],
  timestamps: true,
};

export default Reviews;



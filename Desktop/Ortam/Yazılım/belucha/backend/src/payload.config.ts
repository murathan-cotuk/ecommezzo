import { buildConfig } from 'payload/config';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import path from 'path';
import dotenv from 'dotenv';

import Users from './collections/Users';
import Products from './collections/Products';
import Categories from './collections/Categories';
import Orders from './collections/Orders';
import Reviews from './collections/Reviews';
import Pages from './collections/Pages';
import Media from './collections/Media';

dotenv.config();

export default buildConfig({
  admin: {
    user: Users.slug,
    meta: {
      titleSuffix: '- Belucha Admin',
      favicon: '/favicon.ico',
      ogImage: '/og-image.jpg',
    },
  },
  localization: {
    locales: ['en', 'de'],
    defaultLocale: 'en',
    fallback: true,
  },
  collections: [
    Users,
    Media,
    Products,
    Categories,
    Orders,
    Reviews,
    Pages,
  ],
  globals: [],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || '',
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  cors: [
    process.env.FRONTEND_URL || 'http://localhost:3000',
  ],
  csrf: [
    process.env.FRONTEND_URL || 'http://localhost:3000',
  ],
});



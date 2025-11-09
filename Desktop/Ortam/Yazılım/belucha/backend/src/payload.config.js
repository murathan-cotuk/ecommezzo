const { buildConfig } = require('payload/config');
const { mongooseAdapter } = require('@payloadcms/db-mongodb');
const { lexicalEditor } = require('@payloadcms/richtext-lexical');
const path = require('path');
require('dotenv').config();

const Users = require('./collections/Users').default;
const Products = require('./collections/Products').default;
const Categories = require('./collections/Categories').default;
const Orders = require('./collections/Orders').default;
const Reviews = require('./collections/Reviews').default;
const Pages = require('./collections/Pages').default;

module.exports = buildConfig({
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

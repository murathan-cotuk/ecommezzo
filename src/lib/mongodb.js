import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://ecommezzo:dXGbPHYHdrFwixH0@ecommezzo.hwawywn.mongodb.net/?appName=Ecommezzo';
const MONGODB_DB = process.env.MONGODB_DB || 'ecommezzo';

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    const client = new MongoClient(MONGODB_URI);

    await client.connect();
    const db = client.db(MONGODB_DB);

    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}

export async function getCollection(collectionName) {
  const { db } = await connectToDatabase();
  return db.collection(collectionName);
}

// Initialize database with indexes
export async function initializeDatabase() {
  try {
    const { db } = await connectToDatabase();

    // Create indexes for newsletter subscribers
    await db.collection('newsletter_subscribers').createIndex({ email: 1 }, { unique: true });
    await db.collection('newsletter_subscribers').createIndex({ status: 1 });
    await db.collection('newsletter_subscribers').createIndex({ subscribedAt: -1 });

    console.log('Database indexes created successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}


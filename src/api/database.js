import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/deepvision';
const MONGODB_DB = process.env.MONGODB_DB || 'deepvision';

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    const client = new MongoClient(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

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

    // Create indexes for better performance
    await db.collection('tracking_events').createIndex({ shopDomain: 1, createdAt: -1 });
    await db.collection('tracking_events').createIndex({ event: 1, createdAt: -1 });
    await db.collection('daily_insights').createIndex({ shopDomain: 1, date: -1 });
    await db.collection('daily_insights').createIndex({ date: -1 });

    console.log('Database indexes created successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

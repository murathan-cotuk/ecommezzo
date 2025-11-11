import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://ecommezzo:dXGbPHYHdrFwixH0@ecommezzo.hwawywn.mongodb.net/ecommezzo?appName=Ecommezzo';
const MONGODB_DB = process.env.MONGODB_DB || 'ecommezzo';

let cachedClient = null;
let cachedDb = null;

export async function connectToDatabase() {
  // Vercel serverless'te connection pooling düzgün çalışmayabilir
  // Her request'te yeni connection açmak daha güvenli
  // Ancak aynı execution context'te cache'lenmiş connection'ı kullan
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  try {
    const client = new MongoClient(MONGODB_URI, {
      serverSelectionTimeoutMS: 5000, // 5 saniye timeout
      connectTimeoutMS: 10000, // 10 saniye connection timeout
      socketTimeoutMS: 30000, // 30 saniye socket timeout
      maxPoolSize: 1, // Serverless için küçük pool
      minPoolSize: 0,
      retryWrites: true,
      retryReads: true,
    });

    await client.connect();
    const db = client.db(MONGODB_DB);

    cachedClient = client;
    cachedDb = db;

    return { client, db };
  } catch (error) {
    console.error('Database connection error:', error);
    // Connection başarısız olursa cache'i temizle
    cachedClient = null;
    cachedDb = null;
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


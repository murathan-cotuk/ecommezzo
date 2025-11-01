import { NextResponse } from 'next/server';
import { MongoClient } from 'mongodb';

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/deepvision';
const MONGODB_DB = process.env.MONGODB_DB || 'deepvision';

let cachedClient = null;
let cachedDb = null;

async function connectToDatabase() {
  if (cachedClient && cachedDb) {
    return { client: cachedClient, db: cachedDb };
  }

  const client = new MongoClient(MONGODB_URI);
  await client.connect();
  const db = client.db(MONGODB_DB);

  cachedClient = client;
  cachedDb = db;

  return { client, db };
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { shopDomain, event, data, timestamp } = body;

    if (!shopDomain || !event || !data) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    // Create or update the tracking record
    const trackingData = {
      shopDomain,
      event,
      data,
      timestamp: timestamp || new Date().toISOString(),
      createdAt: new Date()
    };

    // Insert the tracking event
    await db.collection('tracking_events').insertOne(trackingData);

    // Update aggregated data for dashboard
    await updateAggregatedData(db, shopDomain, event, data);

    return NextResponse.json({ 
      success: true, 
      message: 'Tracking data recorded successfully' 
    });

  } catch (error) {
    console.error('Error tracking data:', error);
    return NextResponse.json(
      { error: 'Failed to track data' },
      { status: 500 }
    );
  }
}

async function updateAggregatedData(db, shopDomain, event, data) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const filter = {
    shopDomain,
    date: today
  };

  const update = {
    $inc: {
      [`events.${event}`]: 1,
      totalEvents: 1
    },
    $set: {
      lastUpdated: new Date()
    }
  };

  // Handle specific event types
  if (event === 'click') {
    update.$inc.clicks = 1;
  } else if (event === 'session_time') {
    update.$setOnInsert = {
      avgTime: 0,
      maxTime: 0
    };
    update.$max = {
      maxTime: data.time || 0
    };
    update.$set = {
      ...update.$set,
      avgTime: data.time || 0
    };
  } else if (event === 'scroll') {
    update.$setOnInsert = {
      maxScrollDepth: '0%'
    };
    update.$max = {
      maxScrollDepth: data.depth || '0%'
    };
  }

  await db.collection('daily_insights').updateOne(filter, update, { upsert: true });
}

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const shopDomain = searchParams.get('shop');
    const days = parseInt(searchParams.get('days')) || 7;

    if (!shopDomain) {
      return NextResponse.json(
        { error: 'Missing shop parameter' },
        { status: 400 }
      );
    }

    const { db } = await connectToDatabase();

    // Get aggregated data for the specified period
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);

    const insights = await db.collection('daily_insights')
      .find({
        shopDomain,
        date: { $gte: startDate }
      })
      .sort({ date: 1 })
      .toArray();

    // Get recent events for detailed analysis
    const recentEvents = await db.collection('tracking_events')
      .find({
        shopDomain,
        createdAt: { $gte: startDate }
      })
      .sort({ createdAt: -1 })
      .limit(100)
      .toArray();

    return NextResponse.json({
      insights,
      recentEvents,
      summary: calculateSummary(insights)
    });

  } catch (error) {
    console.error('Error fetching insights:', error);
    return NextResponse.json(
      { error: 'Failed to fetch insights' },
      { status: 500 }
    );
  }
}

function calculateSummary(insights) {
  if (insights.length === 0) {
    return {
      totalClicks: 0,
      avgSessionTime: 0,
      avgScrollDepth: '0%',
      totalEvents: 0
    };
  }

  const totalClicks = insights.reduce((sum, day) => sum + (day.clicks || 0), 0);
  const totalEvents = insights.reduce((sum, day) => sum + (day.totalEvents || 0), 0);
  const avgSessionTime = insights.reduce((sum, day) => sum + (day.avgTime || 0), 0) / insights.length;
  
  const scrollDepths = insights
    .filter(day => day.maxScrollDepth)
    .map(day => parseInt(day.maxScrollDepth.replace('%', '')));
  
  const avgScrollDepth = scrollDepths.length > 0 
    ? Math.round(scrollDepths.reduce((sum, depth) => sum + depth, 0) / scrollDepths.length) + '%'
    : '0%';

  return {
    totalClicks,
    avgSessionTime: Math.round(avgSessionTime),
    avgScrollDepth,
    totalEvents
  };
}

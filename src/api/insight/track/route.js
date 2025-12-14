import { NextResponse } from 'next/server';
import { getSupabaseClient } from '../../../lib/supabase';

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

    const supabase = getSupabaseClient();

    // Create or update the tracking record
    const trackingData = {
      shop_domain: shopDomain,
      event: event,
      data: data,
      timestamp: timestamp || new Date().toISOString()
    };

    // Insert the tracking event
    const { error: insertError } = await supabase
      .from('tracking_events')
      .insert(trackingData);

    if (insertError) {
      throw insertError;
    }

    // Update aggregated data for dashboard
    await updateAggregatedData(supabase, shopDomain, event, data);

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

async function updateAggregatedData(supabase, shopDomain, event, data) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const dateStr = today.toISOString().split('T')[0]; // YYYY-MM-DD format

  // Mevcut kaydı kontrol et
  const { data: existing, error: fetchError } = await supabase
    .from('daily_insights')
    .select('*')
    .eq('shop_domain', shopDomain)
    .eq('date', dateStr)
    .single();

  let events = {};
  let totalEvents = 0;
  let clicks = 0;
  let avgTime = 0;
  let maxTime = 0;
  let maxScrollDepth = '0%';

  if (existing) {
    events = existing.events || {};
    totalEvents = existing.total_events || 0;
    clicks = existing.clicks || 0;
    avgTime = existing.avg_time || 0;
    maxTime = existing.max_time || 0;
    maxScrollDepth = existing.max_scroll_depth || '0%';
  }

  // Event sayısını artır
  events[event] = (events[event] || 0) + 1;
  totalEvents += 1;

  // Handle specific event types
  if (event === 'click') {
    clicks += 1;
  } else if (event === 'session_time') {
    const time = data.time || 0;
    maxTime = Math.max(maxTime, time);
    // Ortalama hesaplama için basit bir yaklaşım (gerçek ortalama için daha karmaşık hesaplama gerekebilir)
    avgTime = time;
  } else if (event === 'scroll') {
    const depth = data.depth || '0%';
    const depthNum = parseInt(depth.replace('%', '')) || 0;
    const currentMax = parseInt(maxScrollDepth.replace('%', '')) || 0;
    if (depthNum > currentMax) {
      maxScrollDepth = depth;
    }
  }

  const updateData = {
    shop_domain: shopDomain,
    date: dateStr,
    events: events,
    total_events: totalEvents,
    clicks: clicks,
    avg_time: avgTime,
    max_time: maxTime,
    max_scroll_depth: maxScrollDepth,
    last_updated: new Date().toISOString()
  };

  if (existing) {
    // Update existing record
    const { error: updateError } = await supabase
      .from('daily_insights')
      .update(updateData)
      .eq('shop_domain', shopDomain)
      .eq('date', dateStr);

    if (updateError) {
      throw updateError;
    }
  } else {
    // Insert new record
    const { error: insertError } = await supabase
      .from('daily_insights')
      .insert(updateData);

    if (insertError) {
      throw insertError;
    }
  }
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

    const supabase = getSupabaseClient();

    // Get aggregated data for the specified period
    const startDate = new Date();
    startDate.setDate(startDate.getDate() - days);
    const startDateStr = startDate.toISOString().split('T')[0];

    // Get daily insights
    const { data: insights, error: insightsError } = await supabase
      .from('daily_insights')
      .select('*')
      .eq('shop_domain', shopDomain)
      .gte('date', startDateStr)
      .order('date', { ascending: true });

    if (insightsError) {
      throw insightsError;
    }

    // Get recent events for detailed analysis
    const { data: recentEvents, error: eventsError } = await supabase
      .from('tracking_events')
      .select('*')
      .eq('shop_domain', shopDomain)
      .gte('created_at', startDate.toISOString())
      .order('created_at', { ascending: false })
      .limit(100);

    if (eventsError) {
      throw eventsError;
    }

    // Transform data to match expected format
    const transformedInsights = (insights || []).map(insight => ({
      shopDomain: insight.shop_domain,
      date: insight.date,
      events: insight.events || {},
      totalEvents: insight.total_events || 0,
      clicks: insight.clicks || 0,
      avgTime: insight.avg_time || 0,
      maxTime: insight.max_time || 0,
      maxScrollDepth: insight.max_scroll_depth || '0%',
      lastUpdated: insight.last_updated
    }));

    const transformedEvents = (recentEvents || []).map(event => ({
      shopDomain: event.shop_domain,
      event: event.event,
      data: event.data,
      timestamp: event.timestamp,
      createdAt: event.created_at
    }));

    return NextResponse.json({
      insights: transformedInsights,
      recentEvents: transformedEvents,
      summary: calculateSummary(transformedInsights)
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
  if (!insights || insights.length === 0) {
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

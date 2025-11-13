-- Newsletter Subscribers Table
CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  name TEXT DEFAULT '',
  source TEXT DEFAULT 'contact_form',
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'unsubscribed')),
  subscribed_at TIMESTAMPTZ DEFAULT NOW(),
  unsubscribed_at TIMESTAMPTZ,
  unsubscribe_token TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for newsletter_subscribers
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_email ON newsletter_subscribers(email);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_status ON newsletter_subscribers(status);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_subscribed_at ON newsletter_subscribers(subscribed_at DESC);
CREATE INDEX IF NOT EXISTS idx_newsletter_subscribers_source ON newsletter_subscribers(source);

-- Tracking Events Table
CREATE TABLE IF NOT EXISTS tracking_events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  shop_domain TEXT NOT NULL,
  event TEXT NOT NULL,
  data JSONB DEFAULT '{}',
  timestamp TIMESTAMPTZ DEFAULT NOW(),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Indexes for tracking_events
CREATE INDEX IF NOT EXISTS idx_tracking_events_shop_domain ON tracking_events(shop_domain);
CREATE INDEX IF NOT EXISTS idx_tracking_events_created_at ON tracking_events(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tracking_events_shop_created ON tracking_events(shop_domain, created_at DESC);
CREATE INDEX IF NOT EXISTS idx_tracking_events_event ON tracking_events(event, created_at DESC);

-- Daily Insights Table (aggregated data)
CREATE TABLE IF NOT EXISTS daily_insights (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  shop_domain TEXT NOT NULL,
  date DATE NOT NULL,
  events JSONB DEFAULT '{}',
  total_events INTEGER DEFAULT 0,
  clicks INTEGER DEFAULT 0,
  avg_time NUMERIC DEFAULT 0,
  max_time NUMERIC DEFAULT 0,
  max_scroll_depth TEXT DEFAULT '0%',
  last_updated TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(shop_domain, date)
);

-- Indexes for daily_insights
CREATE INDEX IF NOT EXISTS idx_daily_insights_shop_domain ON daily_insights(shop_domain);
CREATE INDEX IF NOT EXISTS idx_daily_insights_date ON daily_insights(date DESC);
CREATE INDEX IF NOT EXISTS idx_daily_insights_shop_date ON daily_insights(shop_domain, date DESC);

-- Function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger for newsletter_subscribers (drop if exists to make idempotent)
DROP TRIGGER IF EXISTS update_newsletter_subscribers_updated_at ON newsletter_subscribers;
CREATE TRIGGER update_newsletter_subscribers_updated_at 
  BEFORE UPDATE ON newsletter_subscribers 
  FOR EACH ROW 
  EXECUTE FUNCTION update_updated_at_column();

-- Row Level Security (RLS) Policies
-- Newsletter subscribers: Public can insert, but only service role can read/update
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert for newsletter_subscribers" ON newsletter_subscribers;
CREATE POLICY "Allow public insert for newsletter_subscribers"
  ON newsletter_subscribers FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow service role full access to newsletter_subscribers" ON newsletter_subscribers;
CREATE POLICY "Allow service role full access to newsletter_subscribers"
  ON newsletter_subscribers
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Tracking events: Public can insert, service role can read
ALTER TABLE tracking_events ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow public insert for tracking_events" ON tracking_events;
CREATE POLICY "Allow public insert for tracking_events"
  ON tracking_events FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

DROP POLICY IF EXISTS "Allow service role full access to tracking_events" ON tracking_events;
CREATE POLICY "Allow service role full access to tracking_events"
  ON tracking_events
  TO service_role
  USING (true)
  WITH CHECK (true);

-- Daily insights: Service role only
ALTER TABLE daily_insights ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Allow service role full access to daily_insights" ON daily_insights;
CREATE POLICY "Allow service role full access to daily_insights"
  ON daily_insights
  TO service_role
  USING (true)
  WITH CHECK (true);


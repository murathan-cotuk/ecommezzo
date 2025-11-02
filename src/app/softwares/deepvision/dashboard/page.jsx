"use client";

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import SimpleChart from '../../../../components/softwares/DeepVision/SimpleChart';

export default function DeepVisionDashboard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState('7d');

  // Sample data for demonstration
  const sampleData = {
    insights: [
      {
        date: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        clicks: 1247,
        avgTime: 180,
        maxScrollDepth: '85%',
        totalEvents: 3456
      },
      {
        date: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        clicks: 1893,
        avgTime: 220,
        maxScrollDepth: '92%',
        totalEvents: 4123
      },
      {
        date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        clicks: 2156,
        avgTime: 195,
        maxScrollDepth: '78%',
        totalEvents: 3891
      },
      {
        date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        clicks: 1789,
        avgTime: 240,
        maxScrollDepth: '88%',
        totalEvents: 4567
      },
      {
        date: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        clicks: 2341,
        avgTime: 210,
        maxScrollDepth: '91%',
        totalEvents: 4234
      },
      {
        date: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
        clicks: 1987,
        avgTime: 185,
        maxScrollDepth: '83%',
        totalEvents: 3789
      },
      {
        date: new Date().toISOString().split('T')[0],
        clicks: 2234,
        avgTime: 205,
        maxScrollDepth: '89%',
        totalEvents: 4123
      }
    ],
    summary: {
      totalClicks: 13647,
      avgSessionTime: 205,
      avgScrollDepth: '87%',
      totalEvents: 28183
    }
  };

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setData(sampleData);
      setLoading(false);
    }, 1000);
  }, [timeRange]);

  const scrollDepthData = [
    { name: '0-25%', value: 15, color: '#ef4444' },
    { name: '25-50%', value: 25, color: '#f97316' },
    { name: '50-75%', value: 35, color: '#eab308' },
    { name: '75-100%', value: 25, color: '#22c55e' }
  ];

  const topPages = [
    { page: '/products/led-lamp', clicks: 1247, avgTime: 241, scrollDepth: '76%' },
    { page: '/collections/lighting', clicks: 893, avgTime: 195, scrollDepth: '82%' },
    { page: '/products/smart-bulb', clicks: 756, avgTime: 220, scrollDepth: '88%' },
    { page: '/pages/about', clicks: 634, avgTime: 180, scrollDepth: '71%' },
    { page: '/products/wireless-charger', clicks: 523, avgTime: 165, scrollDepth: '79%' }
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-#8f181850 via-white to-wine-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">DeepVision Dashboard</h1>
              <p className="text-gray-600">Customer behavior analytics for your Shopify store</p>
            </div>
            
            <div className="flex items-center space-x-4">
              <select
                value={timeRange}
                onChange={(e) => setTimeRange(e.target.value)}
                className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              >
                <option value="7d">Last 7 days</option>
                <option value="30d">Last 30 days</option>
                <option value="90d">Last 90 days</option>
              </select>
              
              <button className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-600 transition-colors">
                Export Data
              </button>
            </div>
          </div>
        </motion.div>

        {/* Summary Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Clicks</p>
                <p className="text-3xl font-bold text-gray-900">{data.summary.totalClicks.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm text-green-600 font-medium">+12.5%</span>
              <span className="text-sm text-gray-600 ml-2">vs last period</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Session Time</p>
                <p className="text-3xl font-bold text-gray-900">{Math.floor(data.summary.avgSessionTime / 60)}:{(data.summary.avgSessionTime % 60).toString().padStart(2, '0')}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm text-green-600 font-medium">+8.2%</span>
              <span className="text-sm text-gray-600 ml-2">vs last period</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Avg. Scroll Depth</p>
                <p className="text-3xl font-bold text-gray-900">{data.summary.avgScrollDepth}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm text-green-600 font-medium">+5.1%</span>
              <span className="text-sm text-gray-600 ml-2">vs last period</span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Events</p>
                <p className="text-3xl font-bold text-gray-900">{data.summary.totalEvents.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
            </div>
            <div className="mt-4">
              <span className="text-sm text-green-600 font-medium">+15.3%</span>
              <span className="text-sm text-gray-600 ml-2">vs last period</span>
            </div>
          </div>
        </motion.div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Clicks Over Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <SimpleChart 
              data={data.insights.map(item => ({ value: item.clicks, label: item.date }))}
              type="line"
              title="Clicks Over Time"
              height={300}
            />
          </motion.div>

          {/* Session Time */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <SimpleChart 
              data={data.insights.map(item => ({ value: item.avgTime, label: item.date }))}
              type="line"
              title="Average Session Time (seconds)"
              height={300}
            />
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scroll Depth Distribution */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white rounded-xl p-6 shadow-lg"
          >
            <SimpleChart 
              data={scrollDepthData}
              type="pie"
              title="Scroll Depth Distribution"
              height={250}
            />
          </motion.div>

          {/* Top Pages */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="lg:col-span-2 bg-white rounded-xl p-6 shadow-lg"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Performing Pages</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Page</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Clicks</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Avg. Time</th>
                    <th className="text-left py-3 px-4 font-semibold text-gray-600">Scroll Depth</th>
                  </tr>
                </thead>
                <tbody>
                  {topPages.map((page, index) => (
                    <tr key={index} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-sm font-semibold text-teal-600">#{index + 1}</span>
                          </div>
                          <span className="text-sm text-gray-900 font-medium">{page.page}</span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm font-semibold text-gray-900">{page.clicks.toLocaleString()}</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-gray-900">{Math.floor(page.avgTime / 60)}:{(page.avgTime % 60).toString().padStart(2, '0')}</span>
                      </td>
                      <td className="py-3 px-4">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                            <div 
                              className="bg-teal-500 h-2 rounded-full" 
                              style={{ width: page.scrollDepth }}
                            ></div>
                          </div>
                          <span className="text-sm text-gray-900">{page.scrollDepth}</span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
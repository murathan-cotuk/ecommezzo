"use client";

import { useEffect, useState } from 'react';
import { useAppBridge } from '@shopify/app-bridge-react';
import { Redirect } from '@shopify/app-bridge/actions';
import { Card, Page, Layout, Text, Button, Banner } from '@shopify/polaris';
import { motion } from 'framer-motion';

export default function ShopifyApp() {
  const app = useAppBridge();
  const [isInstalled, setIsInstalled] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if DeepVision is already installed
    checkInstallation();
  }, []);

  const checkInstallation = async () => {
    try {
      // Check if tracking script is already installed
      const response = await fetch('/api/shopify/check-installation');
      const data = await response.json();
      setIsInstalled(data.installed);
    } catch (error) {
      console.error('Error checking installation:', error);
    } finally {
      setLoading(false);
    }
  };

  const installDeepVision = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/shopify/install', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        setIsInstalled(true);
        // Show success message
      }
    } catch (error) {
      console.error('Error installing DeepVision:', error);
    } finally {
      setLoading(false);
    }
  };

  const uninstallDeepVision = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/shopify/uninstall', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      if (response.ok) {
        setIsInstalled(false);
      }
    } catch (error) {
      console.error('Error uninstalling DeepVision:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Page title="DeepVision">
        <Layout>
          <Layout.Section>
            <Card>
              <div className="flex justify-center items-center h-64">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500"></div>
              </div>
            </Card>
          </Layout.Section>
        </Layout>
      </Page>
    );
  }

  return (
    <Page title="DeepVision - Customer Behavior Analytics">
      <Layout>
        <Layout.Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card>
              <div className="p-6">
                <div className="text-center mb-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <h1 className="text-3xl font-bold text-gray-900 mb-2">DeepVision</h1>
                  <p className="text-lg text-gray-600 mb-6">
                    Advanced customer behavior analytics for your Shopify store
                  </p>
                </div>

                {isInstalled ? (
                  <div className="text-center">
                    <Banner status="success" title="DeepVision is installed and active">
                      <p>Your store is now tracking customer behavior data. Visit your dashboard to view insights.</p>
                    </Banner>
                    
                    <div className="mt-6 space-y-4">
                      <Button
                        primary
                        size="large"
                        onClick={() => {
                          const redirect = Redirect.create(app);
                          redirect.dispatch(Redirect.Action.REMOTE, {
                            url: '/dashboard/DeepVision',
                            newContext: true
                          });
                        }}
                      >
                        View Dashboard
                      </Button>
                      
                      <Button
                        destructive
                        onClick={uninstallDeepVision}
                        loading={loading}
                      >
                        Uninstall DeepVision
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="mb-8">
                      <h2 className="text-xl font-semibold text-gray-900 mb-4">What DeepVision Does:</h2>
                      <div className="grid md:grid-cols-3 gap-6 text-left">
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                            <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">Click Tracking</h3>
                          <p className="text-sm text-gray-600">Monitor where customers click and interact on your store</p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mb-3">
                            <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">Session Time</h3>
                          <p className="text-sm text-gray-600">Track how long customers spend on each page</p>
                        </div>
                        
                        <div className="p-4 bg-gray-50 rounded-lg">
                          <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                            <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                            </svg>
                          </div>
                          <h3 className="font-semibold text-gray-900 mb-2">Scroll Depth</h3>
                          <p className="text-sm text-gray-600">Measure how far customers scroll on your pages</p>
                        </div>
                      </div>
                    </div>

                    <Button
                      primary
                      size="large"
                      onClick={installDeepVision}
                      loading={loading}
                    >
                      Install DeepVision
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          </motion.div>
        </Layout.Section>
      </Layout>
    </Page>
  );
}

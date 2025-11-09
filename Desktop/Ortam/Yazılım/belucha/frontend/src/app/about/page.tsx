'use client';

import { useState, useEffect } from 'react';
import { Page } from '@/types';

export default function AboutPage() {
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPage();
  }, []);

  const fetchPage = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/pages?where[slug][equals]=about`
      );
      const data = await response.json();
      if (data.docs && data.docs.length > 0) {
        setPage(data.docs[0]);
      }
    } catch (error) {
      console.error('Error fetching page:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-12 text-center">Loading...</div>;
  }

  if (!page) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        <div className="prose max-w-none">
          <p className="text-lg text-gray-600 mb-4">
            Welcome to Belucha, your trusted multi-vendor e-commerce platform.
          </p>
          <p className="text-gray-600 mb-4">
            We are dedicated to providing a seamless shopping experience where you can discover
            products from multiple vendors in one place. Our platform connects sellers and buyers,
            creating a vibrant marketplace for everyone.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Mission</h2>
          <p className="text-gray-600 mb-4">
            To revolutionize online shopping by creating a platform that empowers both sellers and
            buyers, making e-commerce accessible, efficient, and enjoyable for everyone.
          </p>
          <h2 className="text-2xl font-bold mt-8 mb-4">Our Values</h2>
          <ul className="text-gray-600 space-y-2">
            <li>• Customer-first approach</li>
            <li>• Innovation and excellence</li>
            <li>• Transparency and trust</li>
            <li>• Community empowerment</li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">{page.title}</h1>
      <div className="prose max-w-none">
        {typeof page.content === 'string' ? (
          <p>{page.content}</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        )}
      </div>
    </div>
  );
}



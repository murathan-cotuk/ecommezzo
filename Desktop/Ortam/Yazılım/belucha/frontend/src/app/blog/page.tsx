'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Page } from '@/types';

export default function BlogPage() {
  const [pages, setPages] = useState<Page[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBlogPages();
  }, []);

  const fetchBlogPages = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/pages?where[slug][contains]=blog`
      );
      const data = await response.json();
      setPages(data.docs || []);
    } catch (error) {
      console.error('Error fetching blog pages:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      {pages.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No blog posts found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pages.map((page) => {
            const imageUrl =
              page.meta?.image && typeof page.meta.image === 'object'
                ? page.meta.image.url || '/placeholder.jpg'
                : '/placeholder.jpg';

            return (
              <Link
                key={page.id}
                href={`/blog/${page.slug}`}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition group"
              >
                {page.meta?.image && (
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={imageUrl}
                      alt={page.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2 group-hover:text-primary-600 transition">
                    {page.title}
                  </h2>
                  {page.meta?.description && (
                    <p className="text-gray-600 mb-4">{page.meta.description}</p>
                  )}
                  <p className="text-sm text-gray-500">
                    {new Date(page.createdAt).toLocaleDateString()}
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}



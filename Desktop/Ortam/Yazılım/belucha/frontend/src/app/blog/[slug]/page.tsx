'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Page } from '@/types';

export default function BlogPostPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [page, setPage] = useState<Page | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchPage();
    }
  }, [slug]);

  const fetchPage = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/pages?where[slug][equals]=${slug}`
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
    return <div className="container mx-auto px-4 py-12 text-center">Page not found</div>;
  }

  const imageUrl =
    page.meta?.image && typeof page.meta.image === 'object'
      ? page.meta.image.url || '/placeholder.jpg'
      : '/placeholder.jpg';

  return (
    <article className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">{page.title}</h1>
      <p className="text-gray-600 mb-8">
        {new Date(page.createdAt).toLocaleDateString()}
      </p>
      {page.meta?.image && (
        <div className="relative h-96 mb-8 rounded-lg overflow-hidden">
          <Image
            src={imageUrl}
            alt={page.title}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="prose max-w-none">
        {typeof page.content === 'string' ? (
          <p>{page.content}</p>
        ) : (
          <div dangerouslySetInnerHTML={{ __html: page.content }} />
        )}
      </div>
    </article>
  );
}



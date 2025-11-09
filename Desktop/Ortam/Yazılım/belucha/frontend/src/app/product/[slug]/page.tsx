'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import ProductDetailTemplate from '@/templates/ProductDetailTemplate';
import { Product } from '@/types';

export default function ProductPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchProduct();
    }
  }, [slug]);

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?where[slug][equals]=${slug}`
      );
      const data = await response.json();
      if (data.docs && data.docs.length > 0) {
        setProduct(data.docs[0]);
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-12 text-center">Loading...</div>;
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-12 text-center">Product not found</div>;
  }

  return <ProductDetailTemplate product={product} />;
}


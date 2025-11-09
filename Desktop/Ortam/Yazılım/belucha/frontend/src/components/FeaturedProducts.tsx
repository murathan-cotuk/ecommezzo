'use client';

import { useState, useEffect } from 'react';
import { Product } from '@/types';
import ProductGrid from './ProductGrid';

export default function FeaturedProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedProducts();
  }, []);

  const fetchFeaturedProducts = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?where[featured][equals]=true&limit=8`
      );
      const data = await response.json();
      setProducts(data.docs || []);
    } catch (error) {
      console.error('Error fetching featured products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <section className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
        <div className="text-center py-12">Loading...</div>
      </section>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold mb-8 text-center">Featured Products</h2>
      <ProductGrid products={products} />
    </section>
  );
}


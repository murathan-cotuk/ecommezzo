'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import CategoryTemplate from '@/templates/CategoryTemplate';
import { Category, Product } from '@/types';

export default function CategoryPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [category, setCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (slug) {
      fetchCategory();
      fetchProducts();
    }
  }, [slug]);

  const fetchCategory = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/categories?where[slug][equals]=${slug}`
      );
      const data = await response.json();
      if (data.docs && data.docs.length > 0) {
        setCategory(data.docs[0]);
      }
    } catch (error) {
      console.error('Error fetching category:', error);
    }
  };

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?where[category.slug][equals]=${slug}`
      );
      const data = await response.json();
      setProducts(data.docs || []);
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="container mx-auto px-4 py-12 text-center">Loading...</div>;
  }

  if (!category) {
    return <div className="container mx-auto px-4 py-12 text-center">Category not found</div>;
  }

  return <CategoryTemplate category={category} products={products} />;
}


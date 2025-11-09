'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import ProductGrid from '@/components/ProductGrid';
import ProductFilters from '@/components/ProductFilters';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import { Product } from '@/types';

export default function ShopPage() {
  const searchParams = useSearchParams();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [filters, setFilters] = useState({
    category: '',
    minPrice: '',
    maxPrice: '',
    search: searchParams?.get('q') || '',
  });

  useEffect(() => {
    const searchQuery = searchParams?.get('q');
    if (searchQuery) {
      setFilters((prev) => ({ ...prev, search: searchQuery }));
    }
  }, [searchParams]);

  useEffect(() => {
    fetchProducts();
  }, [filters, currentPage]);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams();
      if (filters.category) params.append('where[category][equals]', filters.category);
      if (filters.minPrice) params.append('where[price][greater_than_equal]', filters.minPrice);
      if (filters.maxPrice) params.append('where[price][less_than_equal]', filters.maxPrice);
      if (filters.search) params.append('where[title][contains]', filters.search);
      params.append('where[status][equals]', 'active');
      params.append('page', currentPage.toString());
      params.append('limit', '12');

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?${params.toString()}`
      );
      
      if (!response.ok) {
        throw new Error('Failed to fetch products');
      }

      const data = await response.json();
      setProducts(data.docs || []);
      setTotalPages(data.totalPages || 1);
    } catch (err: any) {
      console.error('Error fetching products:', err);
      setError(err.message || 'Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">Shop</h1>
        <div className="hidden md:block">
          <SearchBar />
        </div>
      </div>

      <div className="md:hidden mb-4">
        <SearchBar />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <ProductFilters filters={filters} setFilters={setFilters} />
        </aside>
        <div className="lg:col-span-3">
          {loading ? (
            <Loading text="Loading products..." />
          ) : error ? (
            <Error message={error} onRetry={fetchProducts} />
          ) : (
            <>
              <ProductGrid products={products} />
              {totalPages > 1 && (
                <Pagination
                  currentPage={currentPage}
                  totalPages={totalPages}
                  onPageChange={setCurrentPage}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}


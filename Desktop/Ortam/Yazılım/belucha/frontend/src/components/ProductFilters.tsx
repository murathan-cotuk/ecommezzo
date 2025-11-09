'use client';

import { useState, useEffect } from 'react';
import { Category } from '@/types';

interface ProductFiltersProps {
  filters: {
    category: string;
    minPrice: string;
    maxPrice: string;
    search: string;
  };
  setFilters: (filters: any) => void;
}

export default function ProductFilters({ filters, setFilters }: ProductFiltersProps) {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`);
      const data = await response.json();
      setCategories(data.docs || []);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-xl font-bold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category</label>
          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.title}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Min Price</label>
          <input
            type="number"
            value={filters.minPrice}
            onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="0"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Max Price</label>
          <input
            type="number"
            value={filters.maxPrice}
            onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })}
            className="w-full border rounded-lg px-3 py-2"
            placeholder="1000"
          />
        </div>

        <button
          onClick={() => setFilters({ category: '', minPrice: '', maxPrice: '', search: '' })}
          className="w-full bg-gray-200 text-gray-700 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          Clear Filters
        </button>
      </div>
    </div>
  );
}


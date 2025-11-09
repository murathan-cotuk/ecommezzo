'use client';

import { Category, Product } from '@/types';
import ProductGrid from '@/components/ProductGrid';
import Image from 'next/image';

interface CategoryTemplateProps {
  category: Category;
  products: Product[];
}

export default function CategoryTemplate({ category, products }: CategoryTemplateProps) {
  const imageUrl =
    category.image && typeof category.image === 'object'
      ? category.image.url || '/placeholder.jpg'
      : '/placeholder.jpg';

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        {category.image && (
          <div className="relative h-64 rounded-lg overflow-hidden mb-6">
            <Image
              src={imageUrl}
              alt={category.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white">
                {category.title}
              </h1>
            </div>
          </div>
        )}
        {!category.image && (
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{category.title}</h1>
        )}
        {category.description && (
          <div className="prose max-w-none">
            {typeof category.description === 'string' ? (
              <p className="text-gray-600">{category.description}</p>
            ) : (
              <div dangerouslySetInnerHTML={{ __html: category.description }} />
            )}
          </div>
        )}
      </div>

      <div className="mb-4">
        <p className="text-gray-600">
          {products.length} {products.length === 1 ? 'product' : 'products'} found
        </p>
      </div>

      <ProductGrid products={products} />
    </div>
  );
}


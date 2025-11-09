'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useCart } from '@/context/CartContext';
import WishlistButton from './WishlistButton';
import { Product } from '@/types';
import { FiShoppingCart } from 'react-icons/fi';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();
  const imageUrl =
    product.images && product.images.length > 0
      ? typeof product.images[0].image === 'string'
        ? product.images[0].image
        : product.images[0].image?.url || '/placeholder.jpg'
      : '/placeholder.jpg';

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({
      id: product.id,
      name: product.title,
      price: product.price,
      quantity: 1,
      image: imageUrl,
      sellerId: typeof product.seller === 'string' ? product.seller : product.seller.id,
    });
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-lg shadow-md overflow-hidden group"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={imageUrl}
            alt={product.title}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-300"
          />
          {product.featured && (
            <span className="absolute top-2 left-2 bg-primary-600 text-white px-2 py-1 rounded text-sm font-semibold">
              Featured
            </span>
          )}
          <div className="absolute top-2 right-2">
            <WishlistButton product={product} size="sm" />
          </div>
        </div>
      </Link>
      <div className="p-4">
        <Link href={`/product/${product.slug}`}>
          <h3 className="font-semibold text-lg mb-2 hover:text-primary-600 transition">
            {product.title}
          </h3>
        </Link>
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-primary-600">
              ${product.price.toFixed(2)}
            </span>
            {product.compareAtPrice && product.compareAtPrice > product.price && (
              <span className="text-gray-500 line-through">
                ${product.compareAtPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600">
            {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="bg-primary-600 text-white p-2 rounded-lg hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <FiShoppingCart />
          </button>
        </div>
      </div>
    </motion.div>
  );
}


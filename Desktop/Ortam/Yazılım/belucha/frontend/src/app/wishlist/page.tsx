'use client';

import { useWishlist } from '@/context/WishlistContext';
import ProductGrid from '@/components/ProductGrid';
import Link from 'next/link';
import { FiHeart } from 'react-icons/fi';

export default function WishlistPage() {
  const { items, clearWishlist } = useWishlist();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <FiHeart className="text-6xl text-gray-400 mx-auto mb-4" />
          <h1 className="text-3xl font-bold mb-4">Your Wishlist is Empty</h1>
          <p className="text-gray-600 mb-8">Add some products to your wishlist!</p>
          <Link
            href="/shop"
            className="inline-block bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold">My Wishlist</h1>
        <button
          onClick={clearWishlist}
          className="text-red-600 hover:text-red-700 transition"
        >
          Clear Wishlist
        </button>
      </div>
      <p className="text-gray-600 mb-6">
        {items.length} {items.length === 1 ? 'item' : 'items'} in your wishlist
      </p>
      <ProductGrid products={items} />
    </div>
  );
}



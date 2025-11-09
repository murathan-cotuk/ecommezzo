'use client';

import { useWishlist } from '@/context/WishlistContext';
import { Product } from '@/types';
import { FiHeart } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface WishlistButtonProps {
  product: Product;
  size?: 'sm' | 'md' | 'lg';
}

export default function WishlistButton({ product, size = 'md' }: WishlistButtonProps) {
  const { addItem, removeItem, isInWishlist } = useWishlist();
  const inWishlist = isInWishlist(product.id);

  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-10 h-10',
  };

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (inWishlist) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleClick}
      className={`${sizeClasses[size]} flex items-center justify-center rounded-full transition ${
        inWishlist
          ? 'bg-red-500 text-white hover:bg-red-600'
          : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-300'
      }`}
      aria-label={inWishlist ? 'Remove from wishlist' : 'Add to wishlist'}
    >
      <FiHeart className={inWishlist ? 'fill-current' : ''} />
    </motion.button>
  );
}



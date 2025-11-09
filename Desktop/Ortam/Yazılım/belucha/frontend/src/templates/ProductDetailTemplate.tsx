'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { Product } from '@/types';
import ProductReviews from '@/components/ProductReviews';
import { FiShoppingCart, FiStar } from 'react-icons/fi';
import { motion } from 'framer-motion';

interface ProductDetailTemplateProps {
  product: Product;
}

export default function ProductDetailTemplate({ product }: ProductDetailTemplateProps) {
  const { addItem } = useCart();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const images = product.images || [];
  const mainImage =
    images.length > 0
      ? typeof images[selectedImageIndex]?.image === 'string'
        ? images[selectedImageIndex]?.image
        : images[selectedImageIndex]?.image?.url || '/placeholder.jpg'
      : '/placeholder.jpg';

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addItem({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: 1,
        image: mainImage,
        sellerId: typeof product.seller === 'string' ? product.seller : product.seller.id,
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <div className="relative aspect-square mb-4 rounded-lg overflow-hidden">
            <Image
              src={mainImage}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
          {images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {images.map((img, index) => {
                const imageUrl =
                  typeof img.image === 'string'
                    ? img.image
                    : img.image?.url || '/placeholder.jpg';
                return (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`relative aspect-square rounded overflow-hidden border-2 ${
                      selectedImageIndex === index
                        ? 'border-primary-600'
                        : 'border-transparent'
                    }`}
                  >
                    <Image
                      src={imageUrl}
                      alt={`${product.title} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                );
              })}
            </div>
          )}
        </div>

        <div>
          <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <span className="text-3xl font-bold text-primary-600">
                ${product.price.toFixed(2)}
              </span>
              {product.compareAtPrice && product.compareAtPrice > product.price && (
                <span className="text-xl text-gray-500 line-through">
                  ${product.compareAtPrice.toFixed(2)}
                </span>
              )}
            </div>
            {product.featured && (
              <span className="bg-primary-600 text-white px-3 py-1 rounded text-sm font-semibold">
                Featured
              </span>
            )}
          </div>

          <div className="mb-6">
            <p className="text-gray-600 mb-4">
              {product.shortDescription || product.description}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <span className={product.stock > 0 ? 'text-green-600' : 'text-red-600'}>
                {product.stock > 0 ? `In Stock (${product.stock})` : 'Out of Stock'}
              </span>
              {product.sku && (
                <span className="text-gray-600">SKU: {product.sku}</span>
              )}
            </div>
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Quantity</label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                -
              </button>
              <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-20 text-center border rounded px-3 py-1"
                min="1"
                max={product.stock}
              />
              <button
                onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                className="px-3 py-1 border rounded hover:bg-gray-100"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddToCart}
              disabled={product.stock === 0}
              className="flex-1 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              <FiShoppingCart />
              Add to Cart
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gray-200 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-300 transition"
            >
              Buy Now
            </motion.button>
          </div>

          {typeof product.category === 'object' && product.category && (
            <div className="mb-4">
              <span className="text-sm text-gray-600">Category: </span>
              <Link
                href={`/category/${product.category.slug}`}
                className="text-primary-600 hover:underline"
              >
                {product.category.title}
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-4">Description</h2>
        <div className="prose max-w-none">
          {typeof product.description === 'string' ? (
            <p>{product.description}</p>
          ) : (
            <div dangerouslySetInnerHTML={{ __html: product.description }} />
          )}
        </div>
      </div>

      <ProductReviews productId={product.id} />
    </div>
  );
}


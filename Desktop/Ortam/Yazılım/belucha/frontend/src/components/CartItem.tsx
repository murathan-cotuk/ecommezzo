'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { CartItem as CartItemType } from '@/types';
import { FiTrash2, FiPlus, FiMinus } from 'react-icons/fi';

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { removeItem, updateQuantity } = useCart();

  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-center gap-4">
      <Link href={`/product/${item.id}`}>
        <div className="relative w-20 h-20 rounded overflow-hidden">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex-1">
        <Link href={`/product/${item.id}`}>
          <h3 className="font-semibold hover:text-primary-600 transition">
            {item.name}
          </h3>
        </Link>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.id, item.quantity - 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <FiMinus />
        </button>
        <span className="w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.id, item.quantity + 1)}
          className="p-1 hover:bg-gray-100 rounded"
        >
          <FiPlus />
        </button>
      </div>
      <div className="text-right">
        <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
        <button
          onClick={() => removeItem(item.id)}
          className="text-red-600 hover:text-red-700 mt-1"
        >
          <FiTrash2 />
        </button>
      </div>
    </div>
  );
}


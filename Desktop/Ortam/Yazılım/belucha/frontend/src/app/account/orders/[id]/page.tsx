'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { Order } from '@/types';
import Loading from '@/components/Loading';
import Error from '@/components/Error';
import Link from 'next/link';

export default function OrderDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { user, isAuthenticated, loading: authLoading } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!authLoading && !isAuthenticated) {
      router.push('/account/login');
    }
  }, [isAuthenticated, authLoading, router]);

  useEffect(() => {
    if (params?.id && isAuthenticated) {
      fetchOrder();
    }
  }, [params?.id, isAuthenticated]);

  const fetchOrder = async () => {
    try {
      setLoading(true);
      setError(null);
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders/${params?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch order');
      }

      const data = await response.json();
      setOrder(data);
    } catch (err: any) {
      console.error('Error fetching order:', err);
      setError(err.message || 'Failed to load order');
    } finally {
      setLoading(false);
    }
  };

  if (authLoading || loading) {
    return <Loading text="Loading order..." />;
  }

  if (error || !order) {
    return <Error message={error || 'Order not found'} />;
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link
        href="/account"
        className="text-primary-600 hover:text-primary-700 mb-4 inline-block"
      >
        ← Back to Orders
      </Link>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">Order #{order.orderNumber}</h1>
            <p className="text-gray-600">
              Placed on {new Date(order.createdAt).toLocaleDateString()}
            </p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold text-primary-600">${order.total.toFixed(2)}</p>
            <span className={`inline-block mt-2 px-3 py-1 rounded text-sm ${
              order.status === 'delivered' ? 'bg-green-100 text-green-800' :
              order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
              order.status === 'shipped' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {order.status}
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <h3 className="font-semibold mb-2">Shipping Address</h3>
            <p className="text-gray-600">
              {order.shippingAddress.street}<br />
              {order.shippingAddress.city}, {order.shippingAddress.state} {order.shippingAddress.zipCode}<br />
              {order.shippingAddress.country}
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Payment Status</h3>
            <p className={`capitalize ${
              order.paymentStatus === 'paid' ? 'text-green-600' :
              order.paymentStatus === 'failed' ? 'text-red-600' :
              'text-yellow-600'
            }`}>
              {order.paymentStatus}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Order Items</h2>
        <div className="space-y-4">
          {order.items.map((item, index) => (
            <div key={index} className="flex justify-between items-center border-b pb-4">
              <div className="flex-1">
                <p className="font-semibold">
                  {typeof item.product === 'object' ? item.product.title : 'Product'}
                </p>
                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 pt-6 border-t">
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${order.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Tax</span>
            <span>${order.tax.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping</span>
            <span>${order.shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between font-bold text-lg pt-2 border-t">
            <span>Total</span>
            <span>${order.total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}



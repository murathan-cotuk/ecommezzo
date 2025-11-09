'use client';

import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Product, Order } from '@/types';

export default function SellerDashboard() {
  const { user, isAuthenticated, loading } = useAuth();
  const router = useRouter();
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [stats, setStats] = useState({
    totalProducts: 0,
    totalOrders: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    if (!loading && (!isAuthenticated || user?.role !== 'seller')) {
      router.push('/');
    }
  }, [isAuthenticated, loading, user, router]);

  useEffect(() => {
    if (isAuthenticated && user?.role === 'seller') {
      fetchProducts();
      fetchOrders();
    }
  }, [isAuthenticated, user]);

  const fetchProducts = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/products?where[seller][equals]=${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setProducts(data.docs || []);
      setStats((prev) => ({ ...prev, totalProducts: data.docs?.length || 0 }));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const fetchOrders = async () => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/orders?where[seller][equals]=${user?.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const data = await response.json();
      setOrders(data.docs || []);
      const revenue = data.docs?.reduce((sum: number, order: Order) => sum + order.total, 0) || 0;
      setStats({
        totalProducts: products.length,
        totalOrders: data.docs?.length || 0,
        totalRevenue: revenue,
      });
    } catch (error) {
      console.error('Error fetching orders:', error);
    }
  };

  if (loading || !isAuthenticated || user?.role !== 'seller') {
    return <div className="container mx-auto px-4 py-12 text-center">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Seller Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Products</h3>
          <p className="text-3xl font-bold text-primary-600">{stats.totalProducts}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Orders</h3>
          <p className="text-3xl font-bold text-primary-600">{stats.totalOrders}</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-600 mb-2">Total Revenue</h3>
          <p className="text-3xl font-bold text-primary-600">${stats.totalRevenue.toFixed(2)}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">My Products</h2>
            <Link
              href="/seller/products/new"
              className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
            >
              Add Product
            </Link>
          </div>
          {products.length === 0 ? (
            <p className="text-gray-600">No products yet.</p>
          ) : (
            <div className="space-y-2">
              {products.slice(0, 5).map((product) => (
                <div key={product.id} className="flex justify-between items-center border-b pb-2">
                  <Link href={`/product/${product.slug}`} className="hover:text-primary-600">
                    {product.title}
                  </Link>
                  <span className="text-gray-600">${product.price.toFixed(2)}</span>
                </div>
              ))}
              {products.length > 5 && (
                <Link href="/seller/products" className="text-primary-600 hover:underline text-sm">
                  View all products
                </Link>
              )}
            </div>
          )}
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-bold mb-4">Recent Orders</h2>
          {orders.length === 0 ? (
            <p className="text-gray-600">No orders yet.</p>
          ) : (
            <div className="space-y-2">
              {orders.slice(0, 5).map((order) => (
                <div key={order.id} className="flex justify-between items-center border-b pb-2">
                  <div>
                    <p className="font-semibold">#{order.orderNumber}</p>
                    <p className="text-sm text-gray-600">
                      {new Date(order.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${order.total.toFixed(2)}</p>
                    <span className={`text-xs px-2 py-1 rounded ${
                      order.status === 'delivered' ? 'bg-green-100 text-green-800' :
                      order.status === 'processing' ? 'bg-blue-100 text-blue-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
              {orders.length > 5 && (
                <Link href="/seller/orders" className="text-primary-600 hover:underline text-sm">
                  View all orders
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}


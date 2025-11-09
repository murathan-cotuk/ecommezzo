'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { useCart } from '@/context/CartContext';
import { useWishlist } from '@/context/WishlistContext';
import SearchBar from './SearchBar';
import { FiShoppingCart, FiUser, FiMenu, FiX, FiHeart } from 'react-icons/fi';

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { itemCount } = useCart();
  const { itemCount: wishlistCount } = useWishlist();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-2xl font-bold text-primary-600">
            Belucha
          </Link>

          <div className="hidden md:flex items-center space-x-6 flex-1 justify-center max-w-md mx-4">
            <SearchBar />
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link href="/shop" className="hover:text-primary-600 transition">
              Shop
            </Link>
            <Link href="/blog" className="hover:text-primary-600 transition">
              Blog
            </Link>
            <Link href="/about" className="hover:text-primary-600 transition">
              About
            </Link>
            <Link href="/contact" className="hover:text-primary-600 transition">
              Contact
            </Link>

            <Link href="/wishlist" className="relative hover:text-primary-600 transition">
              <FiHeart className="text-2xl" />
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {wishlistCount}
                </span>
              )}
            </Link>
            <Link href="/cart" className="relative hover:text-primary-600 transition">
              <FiShoppingCart className="text-2xl" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-primary-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>

            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                {user?.role === 'seller' && (
                  <Link
                    href="/seller"
                    className="hover:text-primary-600 transition"
                  >
                    Seller Dashboard
                  </Link>
                )}
                <Link
                  href="/account"
                  className="flex items-center hover:text-primary-600 transition"
                >
                  <FiUser className="mr-1" />
                  {user?.name}
                </Link>
                <button
                  onClick={logout}
                  className="text-red-600 hover:text-red-700 transition"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link
                  href="/account/login"
                  className="hover:text-primary-600 transition"
                >
                  Login
                </Link>
                <Link
                  href="/account/register"
                  className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition"
                >
                  Sign Up
                </Link>
              </div>
            )}
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <FiX className="text-2xl" /> : <FiMenu className="text-2xl" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            <Link href="/shop" className="block hover:text-primary-600 transition">
              Shop
            </Link>
            <Link href="/blog" className="block hover:text-primary-600 transition">
              Blog
            </Link>
            <Link href="/about" className="block hover:text-primary-600 transition">
              About
            </Link>
            <Link href="/contact" className="block hover:text-primary-600 transition">
              Contact
            </Link>
            <Link href="/wishlist" className="block hover:text-primary-600 transition">
              Wishlist ({wishlistCount})
            </Link>
            <Link href="/cart" className="block hover:text-primary-600 transition">
              Cart ({itemCount})
            </Link>
            {isAuthenticated ? (
              <>
                {user?.role === 'seller' && (
                  <Link href="/seller" className="block hover:text-primary-600 transition">
                    Seller Dashboard
                  </Link>
                )}
                <Link href="/account" className="block hover:text-primary-600 transition">
                  Account
                </Link>
                <button onClick={logout} className="block text-red-600 hover:text-red-700">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/account/login" className="block hover:text-primary-600 transition">
                  Login
                </Link>
                <Link href="/account/register" className="block hover:text-primary-600 transition">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}


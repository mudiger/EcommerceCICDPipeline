"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingCart, Search, Menu, User } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useRouter } from 'next/navigation';

export const Header: React.FC = () => {
  const { state } = useCart();
  const { user, signOut, setIsAuthModalOpen, setAuthMode } = useAuth();
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleAuthClick = (mode: 'signin' | 'signup') => {
    setAuthMode(mode);
    setIsAuthModalOpen(true);
  };

  const handleSearch = (e?: React.FormEvent | React.MouseEvent) => {
    if (e) e.preventDefault();
    if (query.trim()) {
      router.push(`/search?query=${encodeURIComponent(query.trim())}`);
      setQuery('');
    }
  };

  return (
    <header className="bg-gray-900 text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Menu className="h-6 w-6 cursor-pointer md:hidden" />
            <Link href="/">
              <h1 className="text-2xl font-bold cursor-pointer">ShopHub</h1>
            </Link>
          </div>

          <div className="hidden md:flex flex-1 justify-center">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (query.trim()) {
                  router.push(`/search?query=${encodeURIComponent(query.trim())}`);
                  setQuery('');
                }
              }}
              className="relative w-full max-w-xl"
            >
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-lg bg-white text-gray-900 focus:outline-none"
              />
              <button type="submit" className="absolute right-3 top-2.5">
                <Search className="h-5 w-5 text-gray-500 hover:text-gray-700" />
              </button>
            </form>
          </div>


          <div className="flex items-center space-x-6">
            <Link href="/products" className="hover:text-gray-300 text-sm">
              Products
            </Link>

            <Link href="/cart">
              <div className="relative cursor-pointer">
                <ShoppingCart className="h-6 w-6" />
                {state.items.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {state.items.reduce((acc, item) => acc + item.quantity, 0)}
                  </span>
                )}
              </div>
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <User className="h-6 w-6" />
                  <span className="hidden md:inline">{user.name}</span>
                </div>
                <button
                  onClick={signOut}
                  className="text-sm hover:text-gray-300"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => handleAuthClick('signin')}
                  className="text-sm hover:text-gray-300"
                >
                  Sign In
                </button>
                <button
                  onClick={() => handleAuthClick('signup')}
                  className="bg-blue-600 px-4 py-2 rounded-lg text-sm hover:bg-blue-700"
                >
                  Sign Up
                </button>
              </div>
            )}
            </div>
          </div>
        </div>
    </header>
  );
};

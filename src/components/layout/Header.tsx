'use client';

import React from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';

/**
 * Header component for the application
 */
const Header: React.FC = () => {
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo and site name */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-blue-600">Headless Commerce</span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-6">
            <Link href="/products" className="text-gray-600 hover:text-blue-600">
              Products
            </Link>
            <Link href="/customize" className="text-gray-600 hover:text-blue-600">
              Customize
            </Link>
            {isAuthenticated ? (
              <button 
                onClick={logout}
                className="text-gray-600 hover:text-blue-600"
              >
                Logout
              </button>
            ) : (
              <Link href="/auth" className="text-gray-600 hover:text-blue-600">
                Login
              </Link>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button className="text-gray-500 hover:text-gray-700 focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

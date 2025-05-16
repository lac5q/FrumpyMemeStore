'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductList from '@/components/products/ProductList';

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <ProductList />
      </main>
      
      <Footer />
    </div>
  );
}

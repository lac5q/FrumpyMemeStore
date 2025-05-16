'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ProductDetail from '@/components/products/ProductDetail';
import { useParams } from 'next/navigation';

export default function ProductDetailPage() {
  const params = useParams();
  const productId = params?.id as string;

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <ProductDetail productId={productId} />
      </main>
      
      <Footer />
    </div>
  );
}

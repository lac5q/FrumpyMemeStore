'use client';

import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Link from 'next/link';
import Button from '@/components/common/Button';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Create Custom Merchandise</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Design and order custom merchandise with your favorite memes and images. Fast shipping, high-quality products.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button href="/products" size="lg">
                Shop Products
              </Button>
              <Button href="/customize" variant="outline" size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Customize Your Own
              </Button>
            </div>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
                <h3 className="text-xl font-semibold mb-3">Choose a Product</h3>
                <p className="text-gray-600">Browse our selection of high-quality products ready for customization.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-purple-100 text-purple-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
                <h3 className="text-xl font-semibold mb-3">Upload Your Design</h3>
                <p className="text-gray-600">Upload your favorite meme, image, or custom design.</p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-green-100 text-green-600 w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
                <h3 className="text-xl font-semibold mb-3">Receive Your Order</h3>
                <p className="text-gray-600">We'll print and ship your custom merchandise directly to you.</p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Featured Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Products</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/500x500.png?text=T-Shirt" alt="T-Shirt" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Custom T-Shirt</h3>
                  <p className="text-gray-600 mb-4">High-quality cotton t-shirt with your custom design.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">$24.99</span>
                    <Link href="/products/prod_1" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/500x500.png?text=Hoodie" alt="Hoodie" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Custom Hoodie</h3>
                  <p className="text-gray-600 mb-4">Warm and comfortable hoodie with your custom design.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">$49.99</span>
                    <Link href="/products/prod_2" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img src="https://via.placeholder.com/500x500.png?text=Mug" alt="Mug" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">Custom Mug</h3>
                  <p className="text-gray-600 mb-4">Ceramic mug with your custom design, perfect for coffee or tea.</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold">$14.99</span>
                    <Link href="/products/prod_3" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                      View Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-12">
              <Button href="/products" size="lg">
                View All Products
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}

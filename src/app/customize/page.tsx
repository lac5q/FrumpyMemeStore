'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ImageUploader from '@/components/customize/ImageUploader';
import MockupPreview from '@/components/customize/MockupPreview';
import { useCustomization } from '@/hooks/useCustomization';
import Card from '@/components/common/Card';

export default function CustomizePage() {
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<string | null>(null);
  const { podProducts, loading } = useCustomization();

  const handleImageUploaded = (imageUrl: string) => {
    setUploadedImage(imageUrl);
  };

  const handleProductSelect = (productId: string) => {
    setSelectedProduct(productId);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Customize Your Product</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Product Selection */}
          <Card className="p-6">
            <h3 className="text-xl font-semibold mb-4">Select a Product</h3>
            
            {loading ? (
              <div className="flex justify-center items-center py-8">
                <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
              </div>
            ) : (
              <div className="space-y-4">
                {podProducts.map((product) => (
                  <div 
                    key={product.id}
                    className={`p-4 border rounded cursor-pointer ${
                      selectedProduct === product.id 
                        ? 'border-blue-500 bg-blue-50' 
                        : 'border-gray-300 hover:border-blue-300'
                    }`}
                    onClick={() => handleProductSelect(product.id)}
                  >
                    <h4 className="font-medium">{product.name}</h4>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="text-sm font-semibold mt-2">${product.basePrice.toFixed(2)}</p>
                  </div>
                ))}
              </div>
            )}
          </Card>
          
          {/* Image Upload */}
          <ImageUploader onImageUploaded={handleImageUploaded} />
          
          {/* Mockup Preview */}
          {selectedProduct && uploadedImage ? (
            <MockupPreview productId={selectedProduct} imageUrl={uploadedImage} />
          ) : (
            <Card className="p-6 flex items-center justify-center">
              <p className="text-gray-500 text-center">
                Select a product and upload an image to see your customized mockup.
              </p>
            </Card>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

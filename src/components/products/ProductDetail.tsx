'use client';

import React, { useState } from 'react';
import { useProduct } from '@/hooks/useProducts';
import Button from '@/components/common/Button';
import Link from 'next/link';

interface ProductDetailProps {
  productId: string;
}

/**
 * Product detail component for displaying a single product
 */
const ProductDetail: React.FC<ProductDetailProps> = ({ productId }) => {
  const { product, loading, error } = useProduct(productId);
  const [selectedVariant, setSelectedVariant] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [addingToCart, setAddingToCart] = useState<boolean>(false);
  const [cartSuccess, setCartSuccess] = useState<boolean>(false);

  // Handle add to cart
  const handleAddToCart = async () => {
    if (!selectedVariant) return;
    
    try {
      setAddingToCart(true);
      
      // In a real implementation, this would call the cart API
      // For the prototype, we'll just simulate success
      setTimeout(() => {
        setCartSuccess(true);
        setAddingToCart(false);
        
        // Hide success message after 3 seconds
        setTimeout(() => setCartSuccess(false), 3000);
      }, 1000);
    } catch (err) {
      console.error('Failed to add to cart:', err);
      setAddingToCart(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">{error || 'Product not found'}</p>
        <Link href="/products" className="mt-4 inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="inline-block mb-6 text-blue-500 hover:underline">
        ← Back to Products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="rounded-lg overflow-hidden shadow-lg">
          <img 
            src={product.images[0]?.src || 'https://via.placeholder.com/500x500.png?text=No+Image'} 
            alt={product.title}
            className="w-full h-auto object-cover"
          />
        </div>
        
        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
          <p className="text-xl font-semibold mb-4">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 mb-6">{product.description}</p>
          
          {/* Variant Selection */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">Select Variant:</label>
              <div className="flex flex-wrap gap-2">
                {product.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant.id)}
                    className={`px-4 py-2 border rounded ${
                      selectedVariant === variant.id
                        ? 'bg-blue-500 text-white border-blue-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-500'
                    }`}
                  >
                    {variant.title}
                  </button>
                ))}
              </div>
            </div>
          )}
          
          {/* Quantity Selection */}
          <div className="mb-6">
            <label className="block text-gray-700 mb-2">Quantity:</label>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-1 border border-gray-300 rounded-l"
              >
                -
              </button>
              <input
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                className="w-16 text-center py-1 border-t border-b border-gray-300"
              />
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-1 border border-gray-300 rounded-r"
              >
                +
              </button>
            </div>
          </div>
          
          {/* Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={addingToCart || !selectedVariant}
            className="w-full"
            size="lg"
          >
            {addingToCart ? 'Adding to Cart...' : 'Add to Cart'}
          </Button>
          
          {/* Success Message */}
          {cartSuccess && (
            <div className="mt-4 p-3 bg-green-100 text-green-700 rounded">
              Item added to cart successfully!
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

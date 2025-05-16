'use client';

import React from 'react';
import { Product } from '@/types/product';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
  className?: string;
}

/**
 * Product card component for displaying product information
 */
const ProductCard: React.FC<ProductCardProps> = ({ product, className = '' }) => {
  return (
    <Card className={`h-full flex flex-col ${className}`} hoverable>
      <div className="h-48 overflow-hidden">
        <img 
          src={product.images[0]?.src || 'https://via.placeholder.com/500x500.png?text=No+Image'} 
          alt={product.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
        <p className="text-gray-600 mb-4 text-sm line-clamp-2 flex-grow">{product.description}</p>
        <div className="flex justify-between items-center mt-auto">
          <span className="text-lg font-bold">${product.price.toFixed(2)}</span>
          <Button 
            href={`/products/${product.id}`}
            variant="primary"
            size="sm"
          >
            View Details
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;

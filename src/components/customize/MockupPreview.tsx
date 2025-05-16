'use client';

import React, { useState } from 'react';
import { useCustomization } from '@/hooks/useCustomization';
import Card from '@/components/common/Card';
import Button from '@/components/common/Button';

interface MockupPreviewProps {
  productId: string;
  imageUrl: string;
}

/**
 * Mockup preview component for displaying customized product
 */
const MockupPreview: React.FC<MockupPreviewProps> = ({ productId, imageUrl }) => {
  const { generateMockup, loading, error } = useCustomization();
  const [mockup, setMockup] = useState<any>(null);
  const [generating, setGenerating] = useState<boolean>(false);

  // Generate mockup
  const handleGenerateMockup = async () => {
    try {
      setGenerating(true);
      
      // In a real implementation, this would call the POD API
      // For the prototype, we'll simulate a mockup after a delay
      setTimeout(() => {
        setMockup({
          id: `mockup_${Date.now()}`,
          url: 'https://via.placeholder.com/500x500.png?text=Custom+Mockup',
          previewUrl: 'https://via.placeholder.com/150x150.png?text=Preview'
        });
        setGenerating(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to generate mockup:', err);
      setGenerating(false);
    }
  };

  return (
    <Card className="p-6">
      <h3 className="text-xl font-semibold mb-4">Product Mockup</h3>
      
      {!mockup ? (
        <div className="text-center py-6">
          <p className="text-gray-600 mb-4">
            Click the button below to generate a mockup of your customized product.
          </p>
          <Button
            onClick={handleGenerateMockup}
            disabled={generating}
            className="mx-auto"
          >
            {generating ? 'Generating...' : 'Generate Mockup'}
          </Button>
          
          {error && (
            <p className="text-red-500 mt-4">{error}</p>
          )}
        </div>
      ) : (
        <div className="space-y-4">
          <div className="rounded overflow-hidden border border-gray-300">
            <img src={mockup.url} alt="Product Mockup" className="w-full h-auto" />
          </div>
          
          <div className="flex justify-between items-center">
            <Button
              onClick={() => setMockup(null)}
              variant="outline"
            >
              Reset
            </Button>
            
            <Button
              href="/products"
              variant="primary"
            >
              Add to Cart
            </Button>
          </div>
        </div>
      )}
    </Card>
  );
};

export default MockupPreview;

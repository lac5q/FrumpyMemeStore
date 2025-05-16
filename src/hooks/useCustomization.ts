import { useEffect, useState } from 'react';
import api from '@/utils/api';

/**
 * Custom hook for POD customization
 * @returns Object containing customization state and methods
 */
export const useCustomization = () => {
  const [podProducts, setPodProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch POD products on mount
  useEffect(() => {
    const fetchPodProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get('/pod/products');
        setPodProducts(response.data.products || []);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch POD products:', err);
        setError('Failed to load customizable products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPodProducts();
  }, []);

  // Generate mockup
  const generateMockup = async (productId: string, imageUrl: string) => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.post('/pod/mockup', { productId, imageUrl });
      
      if (response.data.success && response.data.mockup) {
        return response.data.mockup;
      } else {
        throw new Error('Failed to generate mockup');
      }
    } catch (err) {
      console.error('Mockup generation error:', err);
      setError('Failed to generate mockup. Please try again.');
      return null;
    } finally {
      setLoading(false);
    }
  };

  return {
    podProducts,
    loading,
    error,
    generateMockup
  };
};

export default useCustomization;

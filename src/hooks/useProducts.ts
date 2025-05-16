import { useEffect, useState } from 'react';
import api from '@/utils/api';
import { Product } from '@/types/product';

/**
 * Custom hook for fetching products
 * @returns Object containing products data, loading state, and error
 */
export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await api.get('/shopify/products');
        setProducts(response.data.products || []);
        setError(null);
      } catch (err) {
        console.error('Failed to fetch products:', err);
        setError('Failed to load products. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return { products, loading, error };
};

/**
 * Custom hook for fetching a single product by ID
 * @param id Product ID
 * @returns Object containing product data, loading state, and error
 */
export const useProduct = (id: string) => {
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const response = await api.get(`/shopify/products/${id}`);
        setProduct(response.data.product || null);
        setError(null);
      } catch (err) {
        console.error(`Failed to fetch product ${id}:`, err);
        setError('Failed to load product details. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  return { product, loading, error };
};

export default useProducts;

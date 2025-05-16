import { useEffect, useState } from 'react';
import api from '@/utils/api';

/**
 * Custom hook for authentication
 * @returns Object containing auth state and methods
 */
export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Check auth status on mount
  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        setLoading(true);
        const response = await api.get('/auth/status');
        setIsAuthenticated(response.data.authenticated || false);
        setUser(response.data.user || null);
        setError(null);
      } catch (err) {
        console.error('Failed to check auth status:', err);
        setIsAuthenticated(false);
        setUser(null);
        setError('Failed to verify authentication status.');
      } finally {
        setLoading(false);
      }
    };

    checkAuthStatus();
  }, []);

  // Login with Shopify
  const login = async () => {
    try {
      setLoading(true);
      setError(null);
      
      const response = await api.get('/auth/shopify');
      
      if (response.data && response.data.authUrl) {
        // In a real app, redirect to Shopify OAuth
        window.location.href = response.data.authUrl;
      }
    } catch (err) {
      console.error('Login error:', err);
      setError('Authentication failed. Please try again.');
      setLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      setLoading(true);
      setError(null);
      
      await api.post('/auth/logout');
      
      setIsAuthenticated(false);
      setUser(null);
      localStorage.removeItem('auth_token');
    } catch (err) {
      console.error('Logout error:', err);
      setError('Failed to log out. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return {
    isAuthenticated,
    user,
    loading,
    error,
    login,
    logout
  };
};

export default useAuth;

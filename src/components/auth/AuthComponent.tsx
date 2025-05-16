'use client';

import React, { useState } from 'react';
import { useAuth } from '@/hooks/useAuth';
import Button from '@/components/common/Button';
import Card from '@/components/common/Card';

/**
 * Authentication component for Shopify login
 */
const AuthComponent: React.FC = () => {
  const { isAuthenticated, user, loading, error, login, logout } = useAuth();
  const [showStatus, setShowStatus] = useState<boolean>(false);

  const handleLogin = async () => {
    await login();
    setShowStatus(true);
  };

  const handleLogout = async () => {
    await logout();
    setShowStatus(true);
  };

  const handleCheckStatus = () => {
    setShowStatus(true);
  };

  return (
    <Card className="max-w-md mx-auto mt-10 p-6">
      <h2 className="text-2xl font-bold mb-6 text-center">Shopify Authentication</h2>
      
      <div className="space-y-4">
        <Button
          onClick={handleLogin}
          disabled={loading}
          className="w-full bg-[#96bf48] hover:bg-[#7aa93c]"
        >
          {loading ? 'Processing...' : 'Connect with Shopify'}
        </Button>
        
        <Button
          onClick={handleCheckStatus}
          disabled={loading}
          variant="outline"
          className="w-full"
        >
          Check Auth Status
        </Button>
        
        <Button
          onClick={handleLogout}
          disabled={loading}
          className="w-full bg-red-500 hover:bg-red-600"
        >
          Logout
        </Button>
      </div>
      
      {error && (
        <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-md">
          {error}
        </div>
      )}
      
      {showStatus && (
        <div className="mt-6 p-4 border rounded-md">
          <h3 className="font-semibold mb-2">Authentication Status:</h3>
          <p>
            Status: {isAuthenticated ? (
              <span className="text-green-600 font-semibold">Authenticated</span>
            ) : (
              <span className="text-red-600 font-semibold">Not Authenticated</span>
            )}
          </p>
          
          {isAuthenticated && user && (
            <div className="mt-2">
              <p><strong>User ID:</strong> {user.id}</p>
              <p><strong>Email:</strong> {user.email}</p>
              {user.storeName && <p><strong>Store:</strong> {user.storeName}</p>}
            </div>
          )}
        </div>
      )}
    </Card>
  );
};

export default AuthComponent;

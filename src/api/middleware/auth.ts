import { Request, Response, NextFunction } from 'express';

// Middleware to verify Shopify API credentials
export const verifyShopifyCredentials = (req: Request, res: Response, next: NextFunction) => {
  const { SHOPIFY_API_KEY, SHOPIFY_API_SECRET, SHOPIFY_STORE_URL } = process.env;
  
  if (!SHOPIFY_API_KEY || !SHOPIFY_API_SECRET || !SHOPIFY_STORE_URL) {
    return res.status(500).json({ 
      error: 'Shopify credentials not configured' 
    });
  }
  
  next();
};

// Middleware to check if user is authenticated
export const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  // In a real implementation, this would verify the session/token
  // For the prototype, we'll just check for a mock token
  const authHeader = req.headers.authorization;
  
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Unauthorized' });
  }
  
  const token = authHeader.split(' ')[1];
  
  if (token !== 'mock_access_token') {
    return res.status(401).json({ error: 'Invalid token' });
  }
  
  next();
};

export default {
  verifyShopifyCredentials,
  requireAuth
};

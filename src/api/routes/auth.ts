import express from 'express';
import { shopifyAuthService } from '@/services/auth/shopifyAuth';

const router = express.Router();

// Shopify OAuth routes
router.get('/shopify', async (req, res, next) => {
  try {
    const authUrl = await shopifyAuthService.generateAuthUrl();
    res.json({ authUrl });
  } catch (error) {
    next(error);
  }
});

// Callback route for Shopify OAuth
router.get('/shopify/callback', async (req, res, next) => {
  try {
    const { code, state } = req.query;
    
    if (!code) {
      return res.status(400).json({ error: 'Missing authorization code' });
    }
    
    const authResult = await shopifyAuthService.handleCallback(code.toString(), state?.toString());
    res.json(authResult);
  } catch (error) {
    next(error);
  }
});

// Verify authentication status
router.get('/status', async (req, res, next) => {
  try {
    const status = await shopifyAuthService.getAuthStatus();
    res.json(status);
  } catch (error) {
    next(error);
  }
});

// Logout route
router.post('/logout', async (req, res, next) => {
  try {
    const result = await shopifyAuthService.logout();
    res.json(result);
  } catch (error) {
    next(error);
  }
});

export default router;

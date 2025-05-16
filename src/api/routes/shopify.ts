import express from 'express';
import { shopifyProductService } from '@/services/shopify/products';
import { shopifyCartService } from '@/services/shopify/cart';
import { shopifyCheckoutService } from '@/services/shopify/checkout';
import { verifyShopifyCredentials } from '@/api/middleware/auth';

const router = express.Router();

// Apply middleware to all routes
router.use(verifyShopifyCredentials);

// Get all products
router.get('/products', async (req, res, next) => {
  try {
    const products = await shopifyProductService.getAllProducts();
    res.json({ products });
  } catch (error) {
    next(error);
  }
});

// Get a single product by ID
router.get('/products/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await shopifyProductService.getProductById(id);
    
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
    
    res.json({ product });
  } catch (error) {
    next(error);
  }
});

// Add to cart
router.post('/cart/add', async (req, res, next) => {
  try {
    const { variantId, quantity } = req.body;
    
    if (!variantId || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const cart = await shopifyCartService.addToCart(variantId, quantity);
    res.json({
      success: true,
      cart
    });
  } catch (error) {
    next(error);
  }
});

// Create checkout
router.post('/checkout', async (req, res, next) => {
  try {
    const { cartId } = req.body;
    
    if (!cartId) {
      return res.status(400).json({ error: 'Missing cart ID' });
    }
    
    const checkout = await shopifyCheckoutService.createCheckout(cartId);
    res.json({
      success: true,
      checkout
    });
  } catch (error) {
    next(error);
  }
});

export default router;

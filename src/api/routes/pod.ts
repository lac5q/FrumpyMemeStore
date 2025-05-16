import express from 'express';
import { podProductService } from '@/services/pod/products';
import { podMockupService } from '@/services/pod/mockup';

const router = express.Router();

// Get available POD products
router.get('/products', async (req, res, next) => {
  try {
    const products = await podProductService.getAllProducts();
    res.json({ products });
  } catch (error) {
    next(error);
  }
});

// Generate mockup (for V2 - user customization)
router.post('/mockup', async (req, res, next) => {
  try {
    const { productId, imageUrl } = req.body;
    
    if (!productId || !imageUrl) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const mockup = await podMockupService.generateMockup(productId, imageUrl);
    res.json({
      success: true,
      mockup
    });
  } catch (error) {
    next(error);
  }
});

// Submit order to POD service
router.post('/order', async (req, res, next) => {
  try {
    const { shopifyOrderId, items } = req.body;
    
    if (!shopifyOrderId || !items || !items.length) {
      return res.status(400).json({ error: 'Missing required fields' });
    }
    
    const result = await podMockupService.submitOrder(shopifyOrderId, items);
    res.json({
      success: true,
      ...result
    });
  } catch (error) {
    next(error);
  }
});

export default router;

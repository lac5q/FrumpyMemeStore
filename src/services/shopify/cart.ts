/**
 * Shopify cart service
 * Handles all cart-related operations with the Shopify API
 */

// Mock cart data for prototype
interface CartItem {
  variantId: string;
  quantity: number;
}

interface Cart {
  id: string;
  items: CartItem[];
  totalPrice: number;
}

// In-memory cart storage for prototype
const carts: Record<string, Cart> = {};

/**
 * Add item to cart
 * @param variantId Product variant ID
 * @param quantity Quantity to add
 * @returns Promise with updated cart
 */
const addToCart = async (variantId: string, quantity: number): Promise<Cart> => {
  // In a real implementation, this would call the Shopify API
  // For the prototype, we'll use in-memory storage
  
  // Generate cart ID if it doesn't exist
  const cartId = 'cart_123';
  
  if (!carts[cartId]) {
    carts[cartId] = {
      id: cartId,
      items: [],
      totalPrice: 0
    };
  }
  
  // Check if item already exists in cart
  const existingItemIndex = carts[cartId].items.findIndex(
    item => item.variantId === variantId
  );
  
  if (existingItemIndex >= 0) {
    // Update quantity if item exists
    carts[cartId].items[existingItemIndex].quantity += quantity;
  } else {
    // Add new item if it doesn't exist
    carts[cartId].items.push({ variantId, quantity });
  }
  
  // Update total price (mock calculation)
  carts[cartId].totalPrice = carts[cartId].items.reduce(
    (total, item) => total + (item.quantity * 24.99), // Mock price
    0
  );
  
  return carts[cartId];
};

/**
 * Update cart item quantity
 * @param cartId Cart ID
 * @param variantId Product variant ID
 * @param quantity New quantity
 * @returns Promise with updated cart
 */
const updateCartItem = async (
  cartId: string,
  variantId: string,
  quantity: number
): Promise<Cart> => {
  // In a real implementation, this would call the Shopify API
  // For the prototype, we'll use in-memory storage
  
  if (!carts[cartId]) {
    throw new Error('Cart not found');
  }
  
  const itemIndex = carts[cartId].items.findIndex(
    item => item.variantId === variantId
  );
  
  if (itemIndex < 0) {
    throw new Error('Item not found in cart');
  }
  
  if (quantity <= 0) {
    // Remove item if quantity is 0 or negative
    carts[cartId].items.splice(itemIndex, 1);
  } else {
    // Update quantity
    carts[cartId].items[itemIndex].quantity = quantity;
  }
  
  // Update total price (mock calculation)
  carts[cartId].totalPrice = carts[cartId].items.reduce(
    (total, item) => total + (item.quantity * 24.99), // Mock price
    0
  );
  
  return carts[cartId];
};

/**
 * Get cart by ID
 * @param cartId Cart ID
 * @returns Promise with cart data
 */
const getCart = async (cartId: string): Promise<Cart | null> => {
  // In a real implementation, this would call the Shopify API
  // For the prototype, we'll use in-memory storage
  return carts[cartId] || null;
};

export const shopifyCartService = {
  addToCart,
  updateCartItem,
  getCart
};

export default shopifyCartService;

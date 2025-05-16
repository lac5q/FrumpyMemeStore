/**
 * Shopify product service
 * Handles all product-related operations with the Shopify API
 */

// Mock product data for prototype
const mockProducts = [
  {
    id: 'prod_1',
    title: 'Classic T-Shirt',
    description: 'A comfortable cotton t-shirt',
    price: 24.99,
    images: [{ src: 'https://via.placeholder.com/500x500.png?text=T-Shirt' }],
    variants: [
      { id: 'var_1', title: 'Small', price: 24.99 },
      { id: 'var_2', title: 'Medium', price: 24.99 },
      { id: 'var_3', title: 'Large', price: 24.99 }
    ]
  },
  {
    id: 'prod_2',
    title: 'Hoodie',
    description: 'A warm hoodie for cold days',
    price: 49.99,
    images: [{ src: 'https://via.placeholder.com/500x500.png?text=Hoodie' }],
    variants: [
      { id: 'var_4', title: 'Small', price: 49.99 },
      { id: 'var_5', title: 'Medium', price: 49.99 },
      { id: 'var_6', title: 'Large', price: 49.99 }
    ]
  },
  {
    id: 'prod_3',
    title: 'Coffee Mug',
    description: 'A ceramic coffee mug',
    price: 14.99,
    images: [{ src: 'https://via.placeholder.com/500x500.png?text=Mug' }],
    variants: [
      { id: 'var_7', title: 'Standard', price: 14.99 }
    ]
  }
];

/**
 * Get all products from Shopify
 * @returns Promise with array of products
 */
const getAllProducts = async () => {
  // In a real implementation, this would call the Shopify API
  // For the prototype, we'll return mock data
  return mockProducts;
};

/**
 * Get a single product by ID
 * @param id Product ID
 * @returns Promise with product data or null if not found
 */
const getProductById = async (id: string) => {
  // In a real implementation, this would call the Shopify API
  // For the prototype, we'll return mock data
  const product = mockProducts.find(p => p.id === id);
  return product || null;
};

/**
 * Search products by query
 * @param query Search query
 * @returns Promise with array of matching products
 */
const searchProducts = async (query: string) => {
  // In a real implementation, this would call the Shopify API
  // For the prototype, we'll filter mock data
  const normalizedQuery = query.toLowerCase();
  return mockProducts.filter(
    p => p.title.toLowerCase().includes(normalizedQuery) || 
         p.description.toLowerCase().includes(normalizedQuery)
  );
};

export const shopifyProductService = {
  getAllProducts,
  getProductById,
  searchProducts
};

export default shopifyProductService;

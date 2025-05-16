/**
 * Print-on-Demand product service
 * Handles all POD product-related operations
 */

// Mock POD product data for prototype
const mockPodProducts = [
  {
    id: 'pod_1',
    name: 'T-Shirt',
    description: 'Print-on-demand t-shirt',
    variants: ['White', 'Black', 'Gray'],
    sizes: ['S', 'M', 'L', 'XL'],
    basePrice: 12.50,
    mockupTemplateId: 'template_tshirt'
  },
  {
    id: 'pod_2',
    name: 'Hoodie',
    description: 'Print-on-demand hoodie',
    variants: ['White', 'Black', 'Navy'],
    sizes: ['S', 'M', 'L', 'XL'],
    basePrice: 22.00,
    mockupTemplateId: 'template_hoodie'
  },
  {
    id: 'pod_3',
    name: 'Mug',
    description: 'Print-on-demand coffee mug',
    variants: ['White', 'Black'],
    sizes: ['Standard'],
    basePrice: 7.50,
    mockupTemplateId: 'template_mug'
  }
];

/**
 * Get all available POD products
 * @returns Promise with array of POD products
 */
const getAllProducts = async () => {
  // In a real implementation, this would call the Printful/Gelato API
  // For the prototype, we'll return mock data
  return mockPodProducts;
};

/**
 * Get a single POD product by ID
 * @param id Product ID
 * @returns Promise with product data or null if not found
 */
const getProductById = async (id: string) => {
  // In a real implementation, this would call the Printful/Gelato API
  // For the prototype, we'll return mock data
  const product = mockPodProducts.find(p => p.id === id);
  return product || null;
};

export const podProductService = {
  getAllProducts,
  getProductById
};

export default podProductService;

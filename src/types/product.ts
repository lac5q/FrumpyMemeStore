export interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  images: ProductImage[];
  variants: ProductVariant[];
}

export interface ProductImage {
  src: string;
  alt?: string;
}

export interface ProductVariant {
  id: string;
  title: string;
  price: number;
  sku?: string;
  available?: boolean;
}

export interface Cart {
  id: string;
  items: CartItem[];
  totalPrice: number;
}

export interface CartItem {
  variantId: string;
  quantity: number;
}

export interface Checkout {
  id: string;
  webUrl: string;
  totalPrice: number;
  status?: string;
}

export interface PodProduct {
  id: string;
  name: string;
  description: string;
  variants: string[];
  sizes: string[];
  basePrice: number;
  mockupTemplateId: string;
}

export interface Mockup {
  id: string;
  url: string;
  previewUrl: string;
}

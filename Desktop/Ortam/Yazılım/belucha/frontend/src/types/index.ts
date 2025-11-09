export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'seller' | 'customer';
  phone?: string;
  address?: {
    street?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
  };
  avatar?: string;
}

export interface Product {
  id: string;
  title: string;
  slug: string;
  description: any;
  shortDescription?: string;
  images: Array<{
    image: {
      url: string;
      alt?: string;
    };
  }>;
  price: number;
  compareAtPrice?: number;
  stock: number;
  sku?: string;
  category: Category | string;
  seller: User | string;
  status: 'active' | 'draft' | 'archived';
  featured: boolean;
  tags?: Array<{ tag: string }>;
  meta?: {
    title?: string;
    description?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description?: any;
  image?: {
    url: string;
    alt?: string;
  };
  parent?: Category | string;
  meta?: {
    title?: string;
    description?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  buyer: User | string;
  seller: User | string;
  items: Array<{
    product: Product | string;
    quantity: number;
    price: number;
  }>;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled';
  paymentStatus: 'pending' | 'paid' | 'failed' | 'refunded';
  stripeSessionId?: string;
  stripePaymentIntentId?: string;
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Review {
  id: string;
  product: Product | string;
  user: User | string;
  rating: number;
  title?: string;
  comment: string;
  verified: boolean;
  status: 'approved' | 'pending' | 'rejected';
  createdAt: string;
  updatedAt: string;
}

export interface Page {
  id: string;
  title: string;
  slug: string;
  content: any;
  status: 'published' | 'draft';
  meta?: {
    title?: string;
    description?: string;
    image?: {
      url: string;
      alt?: string;
    };
  };
  createdAt: string;
  updatedAt: string;
}

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
  sellerId: string;
}


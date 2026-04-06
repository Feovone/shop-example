export interface Product {
  id: string;
  name: string;
  slug: string;
  sku: string;
  description: string;
  price: number;
  compareAtPrice: number | null;
  currency: string;
  stockQuantity: number;
  isAvailable: boolean;
  isNew: boolean;
  isBestseller: boolean;
  isFeatured: boolean;
  weight: number | null;
  width: number | null;
  totalLength: number | null;
  shippingTime: string;
  images: ProductImage[];
  attributes: ProductAttributeValue[];
  categories: Category[];
  collections: Collection[];
  relatedProducts: Product[];
  reviews: Review[];
  metaTitle: string | null;
  metaDescription: string | null;
}

export interface ProductImage {
  id: string;
  url: string;
  alt: string;
  position: number;
  isMain: boolean;
}

export interface ProductAttributeValue {
  attribute: Attribute;
  value: AttributeValue;
}

export interface Attribute {
  id: string;
  name: string;
  slug: string;
  type: AttributeType;
  isFilterable: boolean;
  position: number;
}

export interface AttributeValue {
  id: string;
  value: string;
  slug: string;
  position: number;
}

export type AttributeType = 'SELECT' | 'MULTISELECT' | 'TEXT' | 'NUMBER' | 'BOOLEAN';

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string | null;
  parentId: string | null;
  parent: Category | null;
  children: Category[];
  image: string | null;
  position: number;
  productCount?: number;
  metaTitle: string | null;
  metaDescription: string | null;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  position: number;
  metaTitle: string | null;
  metaDescription: string | null;
}

export interface Review {
  id: string;
  authorName: string;
  rating: number;
  content: string;
  createdAt: string;
}

export interface Article {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string | null;
  image: string | null;
  author: string;
  publishedAt: string;
  metaTitle: string | null;
  metaDescription: string | null;
}

export interface InfoPage {
  id: string;
  title: string;
  slug: string;
  content: string;
  group: InfoPageGroup | null;
  metaTitle: string | null;
  metaDescription: string | null;
}

export type InfoPageGroup = 'ABOUT' | 'INFO' | 'PAYMENT_SHIPPING';

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
}

export interface Cart {
  id: string;
  items: CartItem[];
  subtotal: number;
  shippingCost: number | null;
  total: number;
}

export interface Customer {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string | null;
}

export interface Address {
  id: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string | null;
  isDefault: boolean;
}

export type OrderStatus = 'PENDING' | 'PAID' | 'PROCESSING' | 'SHIPPED' | 'DELIVERED' | 'CANCELLED' | 'RETURNED';

export interface Order {
  id: string;
  orderNumber: string;
  status: OrderStatus;
  subtotal: number;
  shippingCost: number;
  total: number;
  paymentMethod: string;
  shippingMethod: string;
  trackingNumber: string | null;
  items: OrderItem[];
  createdAt: string;
}

export interface OrderItem {
  id: string;
  productName: string;
  productSku: string;
  price: number;
  quantity: number;
}

export interface FilterGroup {
  attribute: Attribute;
  values: FilterValue[];
}

export interface FilterValue {
  value: AttributeValue;
  count: number;
  isSelected: boolean;
}

export interface ActiveFilters {
  [attributeSlug: string]: string[];
}

export interface SortOption {
  label: string;
  value: string;
}

export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface NavigationItem {
  label: string;
  href: string;
  children?: NavigationItem[];
}

export interface ShippingMethod {
  id: string;
  name: string;
  price: number;
  freeFrom: number | null;
  estimatedDays: string;
}

export interface PaymentMethod {
  id: string;
  name: string;
  type: string;
  icon: string | null;
}

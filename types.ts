// types.ts

interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface Address {
  street: string;
  city: string;
  state: string;
  zip: string;
}

interface Order {
  id: number;
  userId: number;
  orderDate: Date;
  total: number;
  status: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

interface OrderItem {
  id: number;
  productId: number;
  quantity: number;
  price: number;
}

interface Cart {
  id: number;
  userId: number;
  items: OrderItem[];
}

interface PaymentMethod {
  id: number;
  name: string;
  type: string;
  amount: number;
}
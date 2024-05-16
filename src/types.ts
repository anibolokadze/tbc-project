import { ReactNode } from "react";

// Post
export interface Post {
  id: number;
  title: string;
  reactions: number;
  tags: string[];
}

// Product
export interface Product {
  id?: number;
  index?: number;
  title: string;
  description: string;
  images?: string[];
  thumbnail: string;
  price: number;
  rating: number;
  discountPercentage: number;
}

// Post & Product Params
export interface Params {
  postid: number;
  productid: number;
}

// Product props
export interface ProductProps {
  products: Product[];
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface User {
  id: number;
  name: string;
  age: string;
  email: string;
}

import { ReactNode } from "react";

export interface Request {
  cookies: any;
  json(): Promise<{ username: string; password: string }>;
}

// Post
export interface Post {
  id: number;
  title: string;
  reactions: number;
  tags: string[];
}

// Product
export interface Product {
  id: number;
  title: string;
  description: string;
  images: any;
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

import { Dispatch, ReactNode, SetStateAction } from "react";

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
  index?: number;
  title: string;
  description: string;
  images_link: string[];
  thumbnail_link: string;
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

export interface AuthUser {
  sid: string;
  name: string;
  picture: string;
  email: string;
}

export interface SelectedProduct {
  id: number;
  count: number;
  selectedCard: Product;
}

export interface searchProps {
  isSorted: boolean;
  setIsSorted: Dispatch<SetStateAction<boolean>>;
  searchQuery: string;
  setSearchQuery: Dispatch<SetStateAction<string>>;
}

export interface cardProps {
  card: Product;
  handleClick: (productId: number) => void;
}

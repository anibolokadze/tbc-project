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
  active: boolean;
  reviews: string;
  brand: string;
  category: string;
  id: number;
  index?: number;
  title: string;
  description: string;
  image_links: string;
  thumbnail_link: string;
  price: string;
  rating: number;
  discountPercentage: number;
}

// Post & Product Params
export interface ProductParams {
  productid: number;
}

// Product props
export interface ProductProps {
  products: Product[];
}

export interface ChildrenProps {
  children: ReactNode;
}

export interface Blog {
  id: number | string;
  title: string;
  description: string;
  author_name: string;
  author_email: string;
  time_added: string;
}

export interface BlogParams {
  blogid: string;
}

export interface Order {
  id: string;
  amount: number;
  currency: string;
  status: string;
  created: number;
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

// explore card props
export interface ExploreCardProps {
  id: string;
  imgUrl: string;
  index: number;
  active: string;
  handleClick: (id: string) => void;
}

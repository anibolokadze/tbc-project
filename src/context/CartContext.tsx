"use client";

import React, {
  createContext,
  useState,
  useEffect,
  ReactNode,
  useContext,
} from "react";

interface Item {
  id: number;
  price: number;
  title: string;
  image: string;
}

interface StorageItem extends Item {
  quantity: number;
  totalPrice: number;
}

interface CartContextType {
  cartItems: StorageItem[];
  addItem: (item: Item) => void;
  deleteItem: (itemId: number) => void;
  itemCount: number;
  totalCartPrice: number;
}

const defaultCartContext: CartContextType = {
  cartItems: [],
  addItem: () => {},
  deleteItem: () => {},
  itemCount: 0,
  totalCartPrice: 0,
};

const CartContext = createContext<CartContextType>(defaultCartContext);

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

interface CartProviderProps {
  children: ReactNode;
}

const CartContextProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<StorageItem[]>([]);
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);

  useEffect(() => {
    const storedItems = JSON.parse(
      localStorage.getItem("cartItems") || "[]"
    ) as StorageItem[];
    if (storedItems && storedItems.length > 0) {
      setCartItems(storedItems);
      const totalPrice = storedItems.reduce(
        (total, item) => total + item.totalPrice,
        0
      );
      setTotalCartPrice(totalPrice);
    }
  }, []);

  const addItem = (newItem: Item) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === newItem.id
    );
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      updatedCartItems[existingItemIndex].totalPrice += newItem.price;
      setCartItems(updatedCartItems);
    } else {
      const newStorageItem: StorageItem = {
        ...newItem,
        quantity: 1,
        totalPrice: newItem.price,
      };
      setCartItems((prevItems) => [...prevItems, newStorageItem]);
    }
  };

  const deleteItem = (itemId: number) => {
    const updatedCartItems = cartItems
      .map((item) => {
        if (item.id === itemId && item.quantity > 1) {
          return {
            ...item,
            quantity: item.quantity - 1,
            totalPrice: item.totalPrice - item.price,
          };
        }
        return item;
      })
      .filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    const totalPrice = cartItems.reduce(
      (total, item) => total + item.totalPrice,
      0
    );
    setTotalCartPrice(totalPrice);
  }, [cartItems]);

  const itemCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const value = {
    cartItems,
    addItem,
    deleteItem,
    itemCount,
    totalCartPrice,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export default CartContextProvider;

export function useCartContext() {
  return useContext(CartContext);
}

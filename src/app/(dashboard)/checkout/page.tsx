"use client";
import Layout from "../../../components/layout";
import { useLocalStorage } from "../../../../hooks";
import { useState } from "react";

interface CartItem {
  id: number;
  count: number;
}

const Page = () => {
  const [products, setProducts] = useLocalStorage("selectedProducts");
  const [cartItems, setCartItems] = useState<CartItem[]>(products);

  //   const handleQuantityChange = (id: number, diff: number) => {
  //     if (!cartItems) return;
  //     const updatedCartItems = cartItems.map((item) =>
  //       item.id === id ? { ...item, count: item.count + diff } : item
  //     );
  //     setCartItems(updatedCartItems);
  //     setProducts(updatedCartItems);
  //   };

  return (
    <Layout>
      {/* <div>
        {cartItems.map(({ id, count }: CartItem) => (
          <div key={id}>
            ID: {id} <span>Count: {count}</span>
            <button onClick={() => handleQuantityChange(id, 1)}>+</button>
            <button onClick={() => handleQuantityChange(id, -1)}>-</button>
          </div>
        ))}
      </div> */}
      <div>something</div>
    </Layout>
  );
};

export default Page;

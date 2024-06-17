"use client";
import React from "react";
import { useCart } from "../../context/CartContext";
import { BASE_URL } from "../../../constants";

const Cart = () => {
  const {
    cartItems,
    totalCartPrice,
    deleteItem,
    increaseItem,
    decreaseItem,
    clearCart,
  } = useCart();

  const checkout = async () => {
    try {
      // const response = await fetch(`${BASE_URL}/api/checkout`, {
      const response = await fetch("http://localhost:3000//api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ products: cartItems }),
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(
          `HTTP error! status: ${response.status} - ${errorData.error}`
        );
      }
      const data = await response.json();
      console.log(data);
      if (data.url) {
        window.location.href = data.url;
        clearCart();
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.title} width={50} height={50} />
              <h2>{item.title}</h2>
              <p>Quantity: {item.quantity}</p>
              <p>Total Price: ${item.totalPrice}</p>
              <button onClick={() => deleteItem(item.id)}>Remove</button>
              <button onClick={() => increaseItem(item.id)}>+</button>
              <button onClick={() => decreaseItem(item.id)}>-</button>
            </div>
          ))}
          <h2>Total Cart Price: ${totalCartPrice}</h2>
        </div>
      )}
      <button onClick={checkout}>Buy Now</button>
    </div>
  );
};

export default Cart;

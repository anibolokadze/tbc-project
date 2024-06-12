"use client";
import React from "react";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { cartItems, totalCartPrice, deleteItem, increaseItem, decreaseItem } =
    useCart();

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
    </div>
  );
};

export default Cart;

import React from "react";
import { Order } from "../../types";

interface OrdersProps {
  orders: Order[];
}

const Orders: React.FC<OrdersProps> = ({ orders }) => {
  return (
    <div>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            <p>Order ID: {order.id}</p>
            <p>Amount: ${order.amount / 100}</p>
            <p>Currency: {order.currency.toUpperCase()}</p>
            <p>Status: {order.status}</p>
            <p>
              Time:{" "}
              {new Date(order.created * 1000).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Orders;

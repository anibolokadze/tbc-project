"use client";
import { useEffect, useState } from "react";
import Orders from "../../../components/Orders";
import { Order } from "../../../types";
import Layout from "../../../components/layout";

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await fetch("/api/orders");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setOrders(data.orders);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchOrders();
  }, []);

  if (loading) {
    return <Layout>Loading...</Layout>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <Orders orders={orders} />;
};

export default OrdersPage;

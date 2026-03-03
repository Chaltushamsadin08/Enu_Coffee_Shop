/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const ORDERS_STORAGE_KEY = "orders";
const OrderContext = createContext(null);

function readStoredOrders() {
  const rawOrders = localStorage.getItem(ORDERS_STORAGE_KEY);
  if (!rawOrders) return [];

  try {
    const parsed = JSON.parse(rawOrders);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => readStoredOrders());

  function createOrder({ user, items }) {
    const normalizedItems = items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const total = normalizedItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const order = {
      id: crypto.randomUUID(),
      userEmail: user.email,
      customerName: `${user.firstName} ${user.lastName}`.trim(),
      items: normalizedItems,
      total,
      status: "Placed",
      createdAt: new Date().toISOString(),
    };

    setOrders((prev) => {
      const nextOrders = [order, ...prev];
      localStorage.setItem(ORDERS_STORAGE_KEY, JSON.stringify(nextOrders));
      return nextOrders;
    });

    return order;
  }

  function getOrdersByEmail(email) {
    return orders.filter((order) => order.userEmail === email);
  }

  return (
    <OrderContext.Provider value={{ orders, createOrder, getOrdersByEmail }}>
      {children}
    </OrderContext.Provider>
  );
}

export function useOrders() {
  return useContext(OrderContext);
}

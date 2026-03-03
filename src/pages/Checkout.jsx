import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";
import { useOrders } from "../context/OrderContext";

export default function Checkout() {
  const navigate = useNavigate();
  const { user } = useAuth();
  const { cartItems, clearCart } = useCart();
  const { createOrder } = useOrders();
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (!user) {
    return <Navigate to="/signin" state={{ from: "/checkout" }} replace />;
  }

  if (cartItems.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold mb-6 text-coffee-brown">Checkout</h1>
        <p className="text-coffee-brown/70">
          Your cart is empty. Add items before placing an order.
        </p>

        <Link
          to="/menu"
          className="inline-block mt-6 rounded-xl bg-coffee-orange px-6 py-3 text-white font-semibold"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  function handlePlaceOrder() {
    if (isPlacingOrder) return;

    setIsPlacingOrder(true);

    const newOrder = createOrder({
      user,
      items: cartItems,
    });

    clearCart();
    navigate("/order-success", {
      state: { orderId: newOrder.id },
      replace: true,
    });
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6 text-coffee-brown">Checkout</h1>

      {cartItems.map((item) => (
        <div
          key={`${item.id}-${item.name}`}
          className="flex justify-between mb-3 border-b border-coffee-caramel/40 pb-3"
        >
          <p className="text-coffee-brown">
            {item.name} × {item.quantity}
          </p>
          <p className="font-semibold text-coffee-brown">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>
      ))}

      <div className="mt-6 flex justify-between text-lg font-semibold">
        <p>Total</p>
        <p>${total.toFixed(2)}</p>
      </div>

      <button
        onClick={handlePlaceOrder}
        disabled={isPlacingOrder}
        className="mt-6 w-full rounded-xl bg-green-600 py-3 text-white disabled:opacity-70"
      >
        {isPlacingOrder ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
}

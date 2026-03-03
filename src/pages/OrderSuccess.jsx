import { Link, useLocation } from "react-router-dom";
import { useOrders } from "../context/OrderContext";

export default function OrderSuccess() {
  const location = useLocation();
  const { orders } = useOrders();
  const orderId = location.state?.orderId;
  const order = orderId
    ? orders.find((existingOrder) => existingOrder.id === orderId)
    : null;

  return (
    <div className="mx-auto max-w-4xl px-4 py-20 text-center">
      <h1 className="text-4xl font-bold text-coffee-brown">☕ Order Confirmed</h1>
      <p className="mt-3 text-coffee-brown/70">
        Thank you for ordering from YoursTech Coffee Shop.
      </p>

      {order && (
        <div className="mx-auto mt-6 max-w-md rounded-2xl border border-coffee-caramel bg-white p-5 text-left">
          <p className="text-sm text-coffee-brown/70">Order ID</p>
          <p className="font-semibold text-coffee-brown break-all">{order.id}</p>
          <p className="mt-3 text-sm text-coffee-brown/70">Total</p>
          <p className="font-semibold text-coffee-brown">${order.total.toFixed(2)}</p>
        </div>
      )}

      <Link
        to="/orders"
        className="inline-block mt-6 px-6 py-3 rounded-2xl bg-coffee-orange text-white"
      >
        View Order History
      </Link>
    </div>
  );
}

import { Link, Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useOrders } from "../context/OrderContext";

export default function Orders() {
  const { user } = useAuth();
  const { getOrdersByEmail } = useOrders();

  if (!user) {
    return <Navigate to="/signin" state={{ from: "/orders" }} replace />;
  }

  const userOrders = getOrdersByEmail(user.email);

  if (userOrders.length === 0) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <h1 className="text-3xl font-bold text-coffee-brown">My Orders</h1>
        <p className="mt-4 text-coffee-brown/70">
          You have not placed any orders yet.
        </p>
        <Link
          to="/menu"
          className="inline-block mt-6 rounded-xl bg-coffee-orange px-6 py-3 text-white font-semibold"
        >
          Start Ordering
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-coffee-brown">My Orders</h1>

      <div className="mt-6 space-y-4">
        {userOrders.map((order) => (
          <div
            key={order.id}
            className="rounded-2xl border border-coffee-caramel bg-white p-6"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <p className="font-semibold text-coffee-brown">Order #{order.id.slice(0, 8)}</p>
                <p className="text-sm text-coffee-brown/70">
                  {new Date(order.createdAt).toLocaleString()}
                </p>
              </div>

              <div className="text-right">
                <p className="font-semibold text-coffee-brown">
                  ${order.total.toFixed(2)}
                </p>
                <p className="mt-1 text-sm text-green-600">{order.status}</p>
              </div>
            </div>

            <div className="mt-4 border-t border-coffee-caramel/40 pt-4 space-y-2">
              {order.items.map((item) => (
                <p
                  key={`${order.id}-${item.id}-${item.name}`}
                  className="text-sm text-coffee-brown/80"
                >
                  {item.name} × {item.quantity}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

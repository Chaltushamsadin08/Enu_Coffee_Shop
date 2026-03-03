import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cartItems,
    increaseQty,
    decreaseQty,
    removeFromCart,
  } = useCart();

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <h1 className="text-3xl font-bold text-coffee-brown">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="mt-4 text-coffee-brown/70">Your cart is empty.</p>
      ) : (
        <div className="mt-6 space-y-4">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-2xl border border-coffee-caramel bg-white p-4"
            >
              <div>
                <p className="font-semibold text-coffee-brown">
                  {item.name}
                </p>
                <p className="text-sm text-coffee-brown/70">
                  ${item.price.toFixed(2)}
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => decreaseQty(item.id)}
                  className="h-8 w-8 rounded-lg border border-coffee-caramel"
                >
                  −
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  onClick={() => increaseQty(item.id)}
                  className="h-8 w-8 rounded-lg border border-coffee-caramel"
                >
                  +
                </button>
              </div>

              <div className="text-right">
                <p className="font-semibold">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-sm text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="mt-6 flex justify-between border-t pt-4">
            <p className="text-lg font-semibold">Total</p>
            <p className="text-xl font-bold">${total.toFixed(2)}</p>
          </div>

          {/* Checkout */}
          <div className="mt-6 flex justify-end">
            <Link
              to="/checkout"
              className="rounded-xl bg-coffee-orange px-8 py-3 text-white font-semibold"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product }) {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  function handleClick() {
    addToCart(product);
    setAdded(true);
  }

  useEffect(() => {
    if (!added) return;

    const timer = setTimeout(() => {
      setAdded(false);
    }, 800);

    return () => clearTimeout(timer);
  }, [added]);

  return (
    <button
      onClick={handleClick}
      className={`mt-4 w-full py-2 rounded-xl text-white transition
        ${
          added
            ? "bg-green-600"
            : "bg-coffee-orange hover:bg-coffee-brown"
        }`}
    >
      {added ? "Added ✓" : "Add to Cart"}
    </button>
  );
}

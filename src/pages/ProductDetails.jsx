import { Link, useParams } from "react-router-dom";
import products from "../data/products";
import AddToCartButton from "../components/AddToCartButton";

export default function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="mx-auto max-w-4xl px-4 py-10">
        <p>Product not found.</p>
        <Link to="/menu" className="text-coffee-orange">
          Back to Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <div className="grid gap-10 md:grid-cols-2">
        {/* ✅ IMAGE */}
        <img
          src={product.image}
          alt={product.name}
          className="h-80 w-full object-cover rounded-3xl"
        />

        {/* INFO */}
        <div>
          <h1 className="text-3xl font-bold text-coffee-brown">
            {product.name}
          </h1>

          <p className="mt-2 text-coffee-brown/70">
            {product.description}
          </p>

          <p className="mt-4 text-2xl font-semibold text-coffee-brown">
            ${product.price.toFixed(2)}
          </p>

          <div className="mt-6 flex gap-3">
            <AddToCartButton product={product} />

            <Link
              to="/menu"
              className="px-6 py-3 rounded-2xl border border-coffee-caramel text-coffee-brown"
            >
              Back to Menu
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

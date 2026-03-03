import { Link } from "react-router-dom";

export default function CTA() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-10">
      <div className="rounded-3xl bg-coffee-orange text-white p-10 md:p-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h3 className="text-2xl font-bold">Order from <span className="text-coffee-brown">Enu</span> Coffee Shop</h3>
          <p className="mt-2 text-white/90">Choose a drink, add to cart, checkout fast.</p>
        </div>
        <Link
          to="/menu"
          className="px-6 py-3 rounded-2xl bg-white text-coffee-brown font-semibold hover:bg-coffee-cream"
        >
          Order Now
        </Link>
      </div>
    </section>
  );
}

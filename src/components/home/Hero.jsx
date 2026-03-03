import { Link } from "react-router-dom";
import hero from "../../assets/hero.png"
export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-coffee-cream to-white">
      <div className="mx-auto max-w-6xl px-4 py-16 md:py-24 grid gap-10 md:grid-cols-2 items-center">
        <div>
          <p className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-coffee-caramel text-coffee-brown text-sm">
            ☕ Fresh Brew • Fast Order
          </p>

          <h1 className="mt-4 text-4xl md:text-5xl font-extrabold tracking-tight text-coffee-orange ">
            Fresh coffee from{" "}
            <span className=" text-coffee-brown">Enu </span> Coffee Shop
          </h1>

          <p className="mt-4 text-coffee-brown/80 leading-relaxed">
            Order your favorite coffee and snacks online. Simple menu, quick checkout,
            and smooth ordering experience.
          </p>

          <div className="mt-6 flex gap-3">
            <Link
              to="/menu"
              className="px-6 py-3 rounded-2xl bg-coffee-orange text-white hover:bg-coffee-brown"
            >
              Explore Menu
            </Link>
            <Link
              to="/cart"
              className="px-6 py-3 rounded-2xl border border-coffee-caramel text-coffee-brown hover:border-coffee-orange hover:text-coffee-orange"
            >
              View Cart
            </Link>
          </div>
        </div>

        <div className="">
          <img
            className="rounded-2xl w-full h-[340px]"
            src={hero}
            alt="Coffee"
          />
        </div>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-10 bg-coffee-brown text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="font-bold text-lg">☕ Enu Coffee Shop</h3>
            <p className="mt-3 text-white/80">
              Fresh coffee, snacks, and a simple online ordering experience.
            </p>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li><Link className="hover:text-white" to="/menu">Menu</Link></li>
              <li><Link className="hover:text-white" to="/cart">Cart</Link></li>
              <li><Link className="hover:text-white" to="/orders">Orders</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-white/80">
              <li>📍 Addis Ababa</li>
              <li>📞 +251 900 000 000</li>
              <li>✉️ hello@enucoffee.com</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/20 pt-6 flex flex-col md:flex-row gap-3 items-center ">
          <p className="text-white/70 text-sm text-center">
            © {new Date().getFullYear()} Enu Coffee Shop. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

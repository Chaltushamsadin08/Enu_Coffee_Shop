import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function SignIn() {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // where to go after login (default = checkout)
  const redirectTo = location.state?.from || "/checkout";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    const success = signIn(email, password);

    if (!success) {
      setError("Invalid email or password");
      return;
    }

    navigate(redirectTo);
  }

  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-3xl font-bold mb-6 text-coffee-brown">
        Sign In
      </h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {error && (
          <p className="text-red-600 text-sm">{error}</p>
        )}

        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full rounded-xl border p-3"
        />

        <button
          type="submit"
          className="w-full rounded-xl bg-coffee-orange py-3 text-white font-semibold hover:bg-coffee-brown"
        >
          Sign In
        </button>
      </form>

      {/* Sign up link */}
      <p className="mt-6 text-center text-sm text-coffee-brown/70">
        Don’t have an account?{" "}
        <Link
          to="/signup"
          className="text-coffee-orange font-semibold hover:underline"
        >
          Create one
        </Link>
      </p>
    </div>
  );
}

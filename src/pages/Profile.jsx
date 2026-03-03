import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user, signOut } = useAuth();

  // 🔐 Protect page
  if (!user) {
    return <Navigate to="/signin" />;
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-16">
      <h1 className="text-3xl font-bold text-coffee-brown mb-8">
        My Profile
      </h1>

      <div className="rounded-2xl border border-coffee-caramel bg-white p-8 space-y-6">
        {/* User Info */}
        <div>
          <p className="text-sm text-coffee-brown/60">First Name</p>
          <p className="font-semibold text-lg">{user.firstName}</p>
        </div>

        <div>
          <p className="text-sm text-coffee-brown/60">Last Name</p>
          <p className="font-semibold text-lg">{user.lastName}</p>
        </div>

        <div>
          <p className="text-sm text-coffee-brown/60">Email</p>
          <p className="font-semibold text-lg">{user.email}</p>
        </div>

        {/* Actions */}
        <div className="pt-6 border-t">
          <button
            onClick={signOut}
            className="rounded-xl border border-red-400 px-6 py-3 text-red-600 hover:bg-red-50"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}

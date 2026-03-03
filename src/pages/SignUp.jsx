import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function SignUp() {
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    signUp(form);
    navigate("/signin");
  }

  return (
    <div className="mx-auto max-w-md px-4 py-20">
      <h1 className="text-3xl font-bold mb-6">Create Account</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input name="firstName" placeholder="First Name" required onChange={handleChange} className="w-full border p-3 rounded-xl" />
        <input name="lastName" placeholder="Last Name" required onChange={handleChange} className="w-full border p-3 rounded-xl" />
        <input type="email" name="email" placeholder="Email" required onChange={handleChange} className="w-full border p-3 rounded-xl" />
        <div className="relative">
  <input
    type={showPassword ? "text" : "password"}
    name="password"
    placeholder="Password"
    required
    onChange={handleChange}
    className="w-full border p-3 pr-12 rounded-xl"
  />

  <button
    type="button"
    onClick={() => setShowPassword(!showPassword)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
  >
    {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
  </button>
</div>

        <div className="relative">
  <input
    type={showConfirm ? "text" : "password"}
    name="confirmPassword"
    placeholder="Confirm Password"
    required
    onChange={handleChange}
    className="w-full border p-3 pr-12 rounded-xl"
  />

  <button
    type="button"
    onClick={() => setShowConfirm(!showConfirm)}
    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
  >
    {showConfirm ? <FiEyeOff size={18} /> : <FiEye size={18} />}
  </button>
</div>


        <button className="w-full bg-coffee-orange text-white py-3 rounded-xl">
          Create Account
        </button>
      </form>
    </div>
  );
}

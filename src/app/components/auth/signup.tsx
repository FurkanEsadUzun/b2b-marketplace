"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

async function registerUser(userData: any) {
  const response = await fetch("https://b2b-backend-production.up.railway.app/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "Kayıt başarısız.");
  }

  return await response.json();
}

export default function SignupForm() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const userData = {
        fullName,
        email,
        password,
        role: "user", // Varsayılan rol
      };
      await registerUser(userData);
      alert("Kayıt başarılı! Giriş yapabilirsiniz.");
      router.push("/login");
    } catch (err: any) {
      setError(err.message || "Kayıt sırasında bir hata oluştu.");
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-6">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg overflow-hidden flex max-w-5xl w-full"
      >
        {/* Sol Kısım - Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 p-8"
        >
          <h2 className="text-2xl font-bold mb-4">Create an account</h2>
          <p className="text-gray-500 text-sm mb-6">Enter your details to sign up.</p>

          {error && <p className="text-red-500 mb-4">{error}</p>}

          {/* Form */}
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-semibold">Full Name</label>
              <input
                type="text"
                className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-green-500"
                placeholder="Enter your full name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Email</label>
              <input
                type="email"
                className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-green-500"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-semibold">Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-green-500"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 font-semibold">Sign in</a>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 relative"
        >
          <Image
            src="/angryface.svg"
            alt="Signup Illustration"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

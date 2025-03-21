"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email:", email, "Password:", password);
    // Burada giriş işlemi yapılabilir, başarılıysa yönlendirme ekleyebilirsin
    // router.push("/dashboard");
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
          className="w-1/2 px-6 py-8"
        >
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-gray-500 text-sm pt-4 mb-8">
            Please enter your login details.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Email Input */}
            <div className="mb-8">
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

            {/* Password Input */}
            <div className="mb-8">
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

            {/* Buttons */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Sign In
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <a href="/signup" className="text-purple-600 font-semibold">
              Sign up
            </a>
          </p>
        </motion.div>

        {/* Sağ Kısım - Görsel */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-1/2 relative"
        >
          <Image
            src="/angryface.svg" // Eğer `public/` klasörüne koyduysan bu şekilde olmalı
            alt="Login Illustration"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </motion.div>
    </div>
  );
}

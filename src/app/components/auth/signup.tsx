"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function SignupForm() {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Signup Data:", { name, surname, email, password, confirmPassword });
    
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Kayıt başarılıysa login sayfasına yönlendir
    // router.push("/login");
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
          <p className="text-gray-500 text-sm mb-6">
            Enter your details to sign up.
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Ad ve Soyad */}
            <div className="flex gap-2 mb-4">
              <div className="w-1/2">
                <label className="block text-sm font-semibold">First Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-green-500"
                  placeholder="Your first name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div className="w-1/2">
                <label className="block text-sm font-semibold">Last Name</label>
                <input
                  type="text"
                  className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-green-500"
                  placeholder="Your last name"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  required
                />
              </div>
            </div>

            {/* Email */}
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

            {/* Password */}
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

            {/* Confirm Password */}
            <div className="mb-4">
              <label className="block text-sm font-semibold">Confirm Password</label>
              <input
                type="password"
                className="w-full p-2 border rounded mt-1 focus:ring-2 focus:ring-green-500"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Signup Butonu */}
            <button
              type="submit"
              className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition duration-300"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <a href="/login" className="text-green-600 font-semibold">
              Sign in
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

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";

async function loginUser(credentials: { email: string; password: string }) {
  const response = await fetch("https://b2b-backend-production.up.railway.app/api/users", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });

  const contentType = response.headers.get("content-type");

  if (!response.ok) {
    let errorMessage = "Giriş başarısız.";
    try {
      if (contentType && contentType.includes("application/json")) {
        const errorData = await response.json();
        errorMessage = errorData.message || errorMessage;
      } else {
        const errorText = await response.text();
        console.error("Hata Yanıtı:", errorText);
      }
    } catch (error) {
      console.error("JSON parse error:", error);
    }
    throw new Error(errorMessage);
  }

  if (!contentType || !contentType.includes("application/json")) {
    throw new Error("Sunucudan geçersiz veri alındı.");
  }

  const data = await response.json();
  localStorage.setItem("token", data.token); // JWT token saklama
  return data;
}

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const data = await loginUser({ email, password });

      // Giriş başarılı, token saklandı ve yönlendirildi
      alert("Giriş başarılı! Ana sayfaya yönlendiriliyorsunuz.");
      router.push("/"); // Başka bir sayfaya da yönlendirebilirsin
    } catch (err: any) {
      setError(err.message || "Giriş başarısız. Lütfen bilgilerinizi kontrol edin.");
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
          className="w-1/2 px-6 py-8"
        >
          <h2 className="text-2xl font-bold">Welcome back</h2>
          <p className="text-gray-500 text-sm pt-4 mb-8">
            Please enter your login details.
          </p>

          {/* Hata Mesajı */}
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

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
            <a href="/signup" className="text-green-600 font-semibold">
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
            src="/angryface.svg"
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

"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Menü ikonları için

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full z-10 bg-white shadow-sm">
      <div className="max-w-9xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo ve Şirket İsmi - Daha sola alındı */}
          <div className="flex items-center space-x-2">
            <a href="#" className="flex items-center">
              <img
                className="h-16 w-auto"
                src="/star-wars-logo.svg"
                alt="Logo"
              />
              <span className="ml-2 text-xl font-bold text-black">B2B MarketPlace</span>
            </a>
          </div>

          {/* Menü - Tam ortalanmış */}
          <div className="hidden md:flex md:space-x-16">
            {["Anasayfa", "İlanlar","Firmalar", "Hakkımızda", "İletişim"].map((item, index) => (
              <a
                key={index}
                href="#"
                className="text-black hover:text-gray-600 px-3 py-2 text-md font-medium"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Sağdaki Butonlar - Sağa yaslanmış */}
          <div className="flex items-center space-x-6">
            <a
              href="#"
              className="bg-indigo-600 text-white rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 px-3 py-2 text-sm font-medium"
            >
              Giriş Yap
            </a>
            <a
              href="#"
              className="bg-indigo-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400"
            >
              Kayıt ol
            </a>

            {/* Mobil Menü Aç/Kapa Butonu */}
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-black hover:text-gray-600 focus:outline-none"
            >
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobil Menü */}
      {menuOpen && (
        <div className="md:hidden bg-gray-800 bg-opacity-90 p-4">
          {["Home", "About", "Services", "Contact"].map((item, index) => (
            <a
              key={index}
              href="#"
              className="block text-white px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700"
            >
              {item}
            </a>
          ))}
          <div className="mt-4">
            <a
              href="#"
              className="block w-full text-center text-white bg-gray-700 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-600"
            >
              Login
            </a>
            <a
              href="#"
              className="block w-full text-center bg-indigo-600 text-white px-3 py-2 rounded-md text-base font-medium hover:bg-indigo-500"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

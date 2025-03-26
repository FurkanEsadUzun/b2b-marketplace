'use client';

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import {
  FaBars,
  FaChevronDown,
  FaTimes,
} from "react-icons/fa";
import { button } from "framer-motion/client";
import Link from "next/link";

export default function Navbar() {
  const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const subCategories = [
    "Development & IT",
    "Design & Creative",
    "Sales & Marketing",
    "Writing & Translation",
    "Admin & Customer Support",
    "Finance & Accounting",
    "HR & Training",
    "Legal",
    "Engineering & Architecture",
  ];

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);  // Doğru tipte referans oluşturduk

  useEffect(() => {
    cardRefs.current.forEach((card, index) => {
      if (card) {
        gsap.fromTo(
          card,
          { opacity: 0, scale: 0.8 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.6,
            delay: index * 0.2,
            ease: "power2.out",
          }
        );
      }
    });
  }, []);

  const cardData = [
    {
      title: "İş Ara",
      description: "Yeteneklerinize uygun işleri keşfedin.",
      button: "İş Ara",
      features: ["Ücretsiz kurs oluşturma"],
      link: "/is-ara",
    },
    {
      title: "Tedarikçi ol",
      description: "Emeklerinizin karşılığı olsun.",
      button: "Tedarikçi ol",
      features: ["Ücretsiz kurs oluşturma"],
      link: "/suppliers",
    },
    {
      title: "İş Ortağı Ol",
      description: "Projelere ortak olarak büyümeye katılın.",
      button: "İş Ortağı Ol",
      features: ["Ücretsiz kurs oluşturma"],
      link: "/enterprise",
    },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="w-full mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold text-gray-800">
              B2B <span className="text-green-600">Market</span>
            </div>

            {/* Menü */}
            <div className="hidden md:flex space-x-6">
              <Link
                href="/createjob"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                İş İlanı Ver
              </Link>

              {/* İş Ara/Bul Dropdown */}
              <div
                onMouseEnter={() => {
                  if (closeTimeout) clearTimeout(closeTimeout);
                  setDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setDropdownOpen(false);
                    setActiveSubCategory(null);
                  }, 300);
                  setCloseTimeout(timeout);
                }}
              >
                <button className="text-gray-700 hover:text-green-600 font-medium flex items-center">
                  İş Ara/Bul <FaChevronDown className="ml-1 text-xs" />
                </button>

                {/* Dropdown Menü */}
                {dropdownOpen && (
                  <div className="absolute left-0 top-16 w-screen bg-white border border-gray-200 shadow-xl flex px-8 py-6 z-40">
                    <div className="w-1/4 pr-6 border-r border-gray-200">
                      {subCategories.map((sub) => (
                        <button
                          key={sub}
                          onMouseEnter={() => setActiveSubCategory(sub)}
                          className={`w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100 ${activeSubCategory === sub ? "bg-gray-100 font-semibold" : ""
                            }`}
                        >
                          {sub}
                        </button>
                      ))}
                    </div>

                    {/* Sağ: Kartlar */}
                    <div className="w-3/4 pl-6">
                      {activeSubCategory && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                          {cardData.map((card, index) => (
                            <div
                              key={index}
                              ref={(el) => (cardRefs.current[index] = el)}  // ref doğru şekilde atanıyor
                              className="bg-white rounded-lg shadow-lg p-8 border border-gray-200 transition-all hover:shadow-xl cursor-pointer"
                            >
                              <h3 className="flex justify-center items-center text-xl font-bold text-gray-800 text-center mb-2">
                                {card.title}
                              </h3>
                              <p className="flex justify-center items-center text-sm text-gray-600 text-center mb-6">
                                {card.description}
                              </p>
                              <a
                                href={card.link}
                                className="flex justify-center items-center py-2.5 w-full rounded-full font-semibold border border-green-600 text-green-600 transition duration-300 hover:shadow-glow-green"
                              >
                                {card.button}
                              </a>
                              <ul className="mt-6 space-y-2 text-sm">
                                {card.features.map((feature, i) => (
                                  <li key={i} className="flex items-center gap-2">
                                    <span className="text-green-500">✔</span> {feature}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/whyb2b"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Why B2B Market?
              </Link>
              <Link
                href="/enterprise"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                Enterprise
              </Link>
              <a
                href="#"
                className="text-gray-700 hover:text-green-600 font-medium"
              >
                B2B Plus
              </a>
            </div>
          </div>

          {/* Sağ Butonlar */}
          <div className="sm:flex hidden items-center space-x-4">
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
            />
            <a href="login" className="text-gray-700 hover:text-green-600">
              Log in
            </a>
            <a
              href="signup"
              className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
            >
              Sign Up
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-700 text-2xl"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>
    </nav>
  );
}

// Navbar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import Link from "next/link";

interface Category {
  _id: string;
  name: string;
  slug: string;
}

interface Subcategory {
  _id: string;
  categoryId: string;
  name: string;
  slug: string;
}

export default function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [subcategories, setSubcategories] = useState<Subcategory[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [closeTimeout, setCloseTimeout] = useState<NodeJS.Timeout | null>(null);

  const fetchCategories = async () => {
    try {
      const categoryResponse = await fetch(`https://b2b-backend-production.up.railway.app/api/categories`);
      const subcategoryResponse = await fetch(`https://b2b-backend-production.up.railway.app/api/subcategories`);
      if (!categoryResponse.ok || !subcategoryResponse.ok) {
        throw new Error("Kategoriler veya alt kategoriler alınamadı");
      }
      const categoriesData = await categoryResponse.json();
      const subcategoriesData = await subcategoryResponse.json();
      setCategories(categoriesData);
      setSubcategories(subcategoriesData);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

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
              <Link href="/createjob" className="text-gray-700 hover:text-green-600 font-medium">
                İş İlanı Ver
              </Link>

              {/* Kategori Dropdown */}
              <div
                onMouseEnter={() => {
                  if (closeTimeout) clearTimeout(closeTimeout);
                  setDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  const timeout = setTimeout(() => {
                    setDropdownOpen(false);
                    setActiveCategory(null);
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
                    {/* Sol: Kategoriler */}
                    <div className="w-1/4 pr-6 border-r border-gray-200">
                      {categories.map((category) => (
                        <button
                          key={category._id}
                          onMouseEnter={() => setActiveCategory(category._id)}
                          className={`w-full text-left px-4 py-2 text-sm rounded-md hover:bg-gray-100 ${
                            activeCategory === category._id ? "bg-gray-100 font-semibold" : ""
                          }`}
                        >
                          {category.name}
                        </button>
                      ))}
                    </div>

                    {/* Sağ: Alt Kategoriler */}
                    <div className="w-3/4 pl-6">
                      {activeCategory && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                          {subcategories
                            .filter((sub) => sub.categoryId === activeCategory)
                            .map((sub) => (
                              <div key={sub._id} className="p-4 border rounded-lg shadow-md hover:shadow-lg">
                                <h4 className="text-lg font-bold">{sub.name}</h4>
                                <Link href={`/category/${sub.categoryId}/${sub.slug}`} className="text-green-600 underline">
                                  İncele
                                </Link>
                              </div>
                            ))}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <Link href="/whyb2b" className="text-gray-700 hover:text-green-600 font-medium">
                Why B2B Market?
              </Link>
              <Link href="/enterprise" className="text-gray-700 hover:text-green-600 font-medium">
                Enterprise
              </Link>
              <Link href="/plus" className="text-gray-700 hover:text-green-600 font-medium">
                B2B Plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

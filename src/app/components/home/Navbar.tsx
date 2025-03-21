"use client";
import { useState } from "react";
import { FaBars, FaChevronDown, FaChevronRight, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [subMenuOpen, setSubMenuOpen] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleDropdown = (menu: string) => {
    setOpenDropdown(openDropdown === menu ? null : menu);
    setSubMenuOpen(null);
  };

  const toggleSubMenu = (subMenu: string) => {
    setSubMenuOpen(subMenuOpen === subMenu ? null : subMenu);
  };

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="w-full mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-4">

          <div className="flex-shrink-0 text-2xl font-bold text-gray-800">
            B2B <span className="text-green-600">Market</span>
          </div>

          {/* Menü */}
          <div className="hidden md:flex space-x-6">
            {[
              {
                name: "Find Talent",
                subMenu: [
                  { name: "Browse Jobs", link: "#" },
                  {
                    name: "Job Categories",
                    link: "#",
                    subItems: [
                      "Development & IT",
                      "Design & Creative",
                      "Sales & Marketing",
                      "Writing & Translation",
                      "Admin & Customer Support",
                      "Finance & Accounting",
                      "HR & Training",
                      "Legal",
                      "Engineering & Architecture",
                    ],
                  },
                ],
              },
              {
                name: "Find Work",
                subMenu: [
                  { name: "Post a Job", link: "#" },
                  { name: "Hire Talent", link: "#" },
                ],
              },
              { name: "Why B2B Market?", subMenu: [{name:"Success Stories"},{name:"Case Studies"}] },
              { name: "What’s New?", subMenu: [{name:"Latest Updates"},{name:"Blog"}, ] },
              { name: "Enterprise", subMenu: null },
              { name: "Pricing", subMenu: null },
            ].map((menu) => (
              <div className="relative group" key={menu.name}>
                <button
                  className="flex items-center text-gray-700 hover:text-green-600 font-medium transition"
                  onClick={() => menu.subMenu && toggleDropdown(menu.name)}
                  >
                  {menu.name} {menu.subMenu && <FaChevronDown className="ml-1 text-xs" />}
                </button>

                {/* Alt Menü */}
                {menu.subMenu && openDropdown === menu.name && (
                  <div className="absolute left-0 mt-2 w-60 bg-white shadow-lg rounded-lg py-2 z-50 border border-gray-200">
                    {menu.subMenu.map((item: any, index: number) => (
                      <div key={index}>
                        <a
                          href={item.link || "#"}
                          className="flex justify-between px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                          onClick={(e) => item.subItems && (e.preventDefault(), toggleSubMenu(item.name))}
                          >
                          {item.name}
                          {item.subItems && <FaChevronRight className="text-xs text-gray-500" />}
                        </a>

                        {/* Sağda Açılan Menü */}
                        {item.subItems && subMenuOpen === item.name && (
                          <div className="absolute left-60 top-0 w-64 bg-white shadow-lg rounded-lg py-2 border border-gray-200">
                            {item.subItems.map((sub: string, subIndex: number) => (
                              <a
                              key={subIndex}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition"
                              >
                                {sub}
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

            </div>
          {/* Sağ Kısım (Arama ve Butonlar) */}
          <div className="sm:flex hidden items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-300 rounded-lg px-4 py-1 text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-600"
              />
            </div>
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
          
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-gray-700 text-2xl">
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        {/* Mobil Menü Butonu */}

{/* Mobil Menü */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-12 left-0 w-full bg-white shadow-md py-4 px-6">
          {mobileMenuOpen && (
  <div className="md:hidden absolute top-8 left-0 w-full bg-white shadow-md py-4 px-6">
    {[
      {
        name: "Find Talent",
        subMenu: [
          { name: "Browse Jobs", link: "#" },
          {
            name: "Job Categories",
            link: "#",
            subItems: [
              "Development & IT",
              "Design & Creative",
              "Sales & Marketing",
              "Writing & Translation",
              "Admin & Customer Support",
              "Finance & Accounting",
              "HR & Training",
              "Legal",
              "Engineering & Architecture",
            ],
          },
        ],
      },
      {
        name: "Find Work",
        subMenu: [
          { name: "Post a Job", link: "#" },
          { name: "Hire Talent", link: "#" },
        ],
      },
      { name: "Why B2B Market?", subMenu: [{ name: "Success Stories", link: "#" }, { name: "Case Studies", link: "#" }] },
      { name: "What’s New?", subMenu: [{ name: "Latest Updates", link: "#" }, { name: "Blog", link: "#" }] },
      { name: "Enterprise", subMenu: null },
      { name: "Pricing", subMenu: null },
    ].map((menu) => (
      <div key={menu.name} className="py-2 border-b border-gray-200">
        {/* Ana Menü Butonu */}
        <button
          className="w-full text-left flex justify-between items-center font-medium text-gray-700 hover:text-green-600"
          onClick={() => toggleDropdown(menu.name)}
        >
          {menu.name} {menu.subMenu && <FaChevronDown />}
        </button>

        {/* Alt Menü Açılırsa */}
        {menu.subMenu && openDropdown === menu.name && (
          <div className="ml-4 mt-2 space-y-2">
            {menu.subMenu.map((item, index) => (
              <div key={index}>
                <button
                  className="block w-full text-left text-sm text-gray-700 hover:text-green-600 flex justify-between items-center"
                  onClick={() => item.subItems && toggleSubMenu(item.name)}
                >
                  {item.name}
                  {item.subItems && <FaChevronRight className="text-xs" />}
                </button>

                {/* Eğer alt menü (subItems) varsa */}
                {item.subItems && subMenuOpen === item.name && (
                  <div className="ml-6 mt-2 space-y-2">
                    {item.subItems.map((subItem, subIndex) => (
                      <a key={subIndex} href="#" className="block text-sm text-gray-700 hover:text-green-600">
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    ))}

    {/* Login ve Signup Butonları */}
    <a href="login" className="block bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition mt-4">
      Log in
    </a>
    <a href="signup" className="block bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition mt-2">
      Sign Up
    </a>
  </div>
)}

          <a href="login" className="block text-gray-700 py-2 hover:text-green-600 mt-4">
            Log in
          </a>
          <a href="signup" className="block bg-green-600 text-white text-center py-2 rounded-lg hover:bg-green-700 transition mt-2">
            Sign Up
          </a>
        </div>
      )}     
       </div>
    </nav>
  );
}

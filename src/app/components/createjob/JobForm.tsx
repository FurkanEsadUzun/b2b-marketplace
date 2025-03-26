// components/JobForm.tsx
"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaFileAlt, FaArrowCircleDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

export default function JobForm() {
  const sectionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );

      const inputs = sectionRef.current.querySelectorAll(".form-item");
      inputs.forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.1,
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }
  }, []);

  return (
    <div
      ref={sectionRef}
      className="relative max-w-5xl mx-auto bg-white p-10 md:p-16 rounded-3xl border border-gray-100 mb-32 overflow-hidden"
    >
      {/* Dekoratif animasyonlu ikon */}
      <div className="absolute top-8 right-8 text-green-300 text-4xl animate-bounce z-0">
        <FaArrowCircleDown />
      </div>

      {/* Dekoratif arka plan şekli */}
      <div className="absolute -top-20 -right-20 w-60 h-60 bg-green-100 rounded-full opacity-20 z-0 blur-2xl"></div>
      <div className="absolute -bottom-20 -left-20 w-44 h-44 bg-green-200 rounded-full opacity-30 z-0 blur-xl"></div>

      {/* Başlık */}
      <div className="relative z-10 text-center mb-12 form-item">
        <div className="flex justify-center mb-4 text-green-600 text-4xl">
          <FaFileAlt />
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-3 tracking-tight">İş İlanı Oluştur</h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
          Uzmanlığınızı paylaşarak iş alın, kazanç elde edin. Şimdi iş ilanınızı oluşturarak başlayın!
        </p>
      </div>

      {/* Form */}
      <form className="space-y-10 relative z-10">
        <div className="form-item">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Pozisyon Başlığı</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded-xl p-4 text-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition shadow-sm"
            placeholder="Örnek: React Geliştiricisi"
          />
        </div>

        <div className="form-item">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Kategori</label>
          <select
            className="w-full border border-gray-300 rounded-xl p-4 text-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition shadow-sm"
          >
            <option>Development & IT</option>
            <option>Design & Creative</option>
            <option>Sales & Marketing</option>
            <option>Writing & Translation</option>
            <option>Admin & Support</option>
          </select>
        </div>

        <div className="form-item">
          <label className="block mb-2 text-sm font-semibold text-gray-700">Açıklama</label>
          <div className="relative">
            <textarea
              rows={5}
              className="peer w-full border border-gray-300 rounded-xl p-4 text-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition placeholder-transparent resize-none shadow-sm"
              placeholder="İlan detaylarını girin..."
            ></textarea>
            <span className="absolute top-3 left-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-green-600">
              İlan detaylarını girin...
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-item">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Bütçe (₺)</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition shadow-sm"
              placeholder="1000"
            />
          </div>

          <div className="form-item">
            <label className="block mb-2 text-sm font-semibold text-gray-700">Teslim Süresi (gün)</label>
            <input
              type="number"
              className="w-full border border-gray-300 rounded-xl p-4 text-gray-800 focus:ring-2 focus:ring-green-500 outline-none transition shadow-sm"
              placeholder="7"
            />
          </div>
        </div>

        <div className="text-center pt-4 form-item">
          <button
            type="submit"
            className="bg-green-600 text-white font-semibold py-3 px-10 rounded-full transition hover:shadow-glow-green hover:-translate-y-1 duration-300 text-lg shadow-md"
          >
            İlanı Oluştur
          </button>
        </div>
      </form>
    </div>
  );
}

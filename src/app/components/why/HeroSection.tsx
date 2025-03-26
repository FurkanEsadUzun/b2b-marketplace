// components/why/HeroSection.tsx
"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto py-24 px-6 md:px-10 text-center md:text-left"
    >
      <div className="max-w-2xl z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-gray-900 mb-6">
          Neden <span className="text-green-600">B2B Market?</span>
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          B2B Market, işletmeleri alanında uzman tedarikçilerle buluşturarak güvenilir, hızlı ve ekonomik iş birlikleri sağlar. Hemen şimdi siz de dijital tedarik dünyasında yerinizi alın.
        </p>
        <div className="flex justify-center md:justify-start gap-4">
          <a
            href="/is-ilani-ac"
            className="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-full text-sm font-semibold shadow-md transition"
          >
            İş İlanı Oluştur
          </a>
          <a
            href="/is-ara"
            className="border border-green-600 text-green-600 hover:bg-green-50 py-3 px-6 rounded-full text-sm font-semibold transition"
          >
            İş Ara
          </a>
        </div>
      </div>

      <div className="w-full max-w-md md:max-w-lg z-0">
        <img
          src="/logos/google.svg"
          alt="B2B Illustration"
          className="w-full h-auto animate-fade-in-up"
        />
      </div>
    </section>
  );
}

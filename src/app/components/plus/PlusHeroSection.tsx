'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaStar } from 'react-icons/fa';

export default function PlusHeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="w-full bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* METİN */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2 text-green-600 text-lg font-semibold mb-2">
            <FaStar />
            B2B Plus Planı
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Öne Çıkmak İçin B2B Plus’a Geçin
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Daha fazla görünürlük, öncelikli destek ve güçlü araçlarla işinizi büyütün.
          </p>

          <a
            href="#plan-tablosu"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-green-700 transition"
          >
            Planlara Göz At
          </a>
        </div>

        {/* GÖRSEL */}
        <div className="flex-1">
          <img
            src="/images/b2bplus-hero.svg"
            alt="B2B Plus Görsel"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaUserTie } from 'react-icons/fa';
import Link from 'next/link';

export default function SupplierHeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 40 },
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
        {/* SOL: METİN */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex justify-center md:justify-start items-center gap-2 text-green-600 text-lg font-semibold mb-2">
            <FaUserTie />
            Tedarikçi Ol
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Uzmanlığını Sun, Kazanmaya Başla
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Yeteneklerini ve tecrübelerini B2B Market’te sergileyerek iş al, portföyünü büyüt, güven kazan.
          </p>

          <a
            href="#supplier-form"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-green-700 transition"
          >
            Başvuru Formuna Git
          </a>
        </div>

        {/* SAĞ: GÖRSEL */}
        <div className="flex-1">
          <img
            src="/images/supplier-hero.svg"
            alt="Tedarikçi Görseli"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

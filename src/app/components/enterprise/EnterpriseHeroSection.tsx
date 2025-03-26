'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaHandshake } from 'react-icons/fa';
import Link from 'next/link';

export default function EnterpriseHeroSection() {
  const heroRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (heroRef.current) {
      gsap.fromTo(
        heroRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <section ref={heroRef} className="w-full bg-white py-20 px-6 md:px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* SOL: METİN */}
        <div className="flex-1">
          <div className="flex items-center gap-2 text-green-600 text-lg font-semibold mb-2">
            <FaHandshake />
            Kurumsal İşbirliği
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Şirketinize Özel B2B Çözümler
          </h1>

          <p className="text-lg text-gray-600 mb-8 max-w-xl">
            Toplu ilan yönetimi, özel destek, faturalama kolaylığı ve daha fazlası... Kurumunuza özel hizmetlerle iş gücünüzü büyütün.
          </p>

          <Link
            href="#contact"
            className="inline-block bg-green-600 text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-green-700 transition"
          >
            İletişime Geç
          </Link>
        </div>

        {/* SAĞ: GÖRSEL */}
        <div className="flex-1">
          <img
            src="/images/enterprise-hero.svg"
            alt="Enterprise Illustration"
            className="w-full max-w-md mx-auto"
          />
        </div>
      </div>
    </section>
  );
}

'use client';

import { FaArrowRight } from 'react-icons/fa';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EnterpriseCtaSection() {
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section className="bg-green-600 py-20 px-6 text-white">
      <div
        ref={ctaRef}
        className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div className="text-center md:text-left">
          <h2 className="text-3xl font-bold mb-2">Hemen Kurumsal Başvurunuzu Yapın</h2>
          <p className="text-white/90 text-sm md:text-base">
            Size özel hizmetlerimizden faydalanmak için bizimle iletişime geçin.
          </p>
        </div>

        <a
          href="#contact"
          className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition"
        >
          İletişime Geç <FaArrowRight />
        </a>
      </div>
    </section>
  );
}

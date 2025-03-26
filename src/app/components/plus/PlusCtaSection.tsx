'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaArrowRight } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function PlusCtaSection() {
  const ctaRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (ctaRef.current) {
      gsap.fromTo(
        ctaRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
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
          <h2 className="text-3xl font-bold mb-2">B2B Plus’a Geç, Öne Çık</h2>
          <p className="text-white/90 text-sm md:text-base">
            Daha fazla görünürlük ve profesyonel destekle işini büyüt.
          </p>
        </div>

        <a
          href="/signup"
          className="bg-white text-green-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-100 transition"
        >
          Plus’a Başla <FaArrowRight />
        </a>
      </div>
    </section>
  );
}

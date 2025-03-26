'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaQuoteLeft } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function PlusTestimonial() {
  const testimonialRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (testimonialRef.current) {
      gsap.fromTo(
        testimonialRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: testimonialRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-20 px-6 bg-gray-50">
      <div ref={testimonialRef} className="max-w-3xl mx-auto text-center bg-white p-10 rounded-2xl shadow-lg border border-gray-200">
        <div className="text-green-500 text-3xl mb-4">
          <FaQuoteLeft />
        </div>
        <p className="text-lg text-gray-700 mb-6 leading-relaxed">
          “B2B Plus sayesinde ilanlarım daha fazla kişiye ulaştı ve güvenli ödeme yapısıyla iş süreçlerim inanılmaz kolaylaştı. Bu platform işimi büyütmemde büyük rol oynadı.”
        </p>
        <div className="text-sm text-gray-500 font-semibold">
          Mehmet K. – Freelance Yazılım Geliştirici
        </div>
      </div>
    </section>
  );
}

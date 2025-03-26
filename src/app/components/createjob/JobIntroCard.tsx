'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaBriefcase } from 'react-icons/fa';

export default function JobIntroCard() {
  const cardRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 30, scale: 0.95 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: 'power2.out',
        }
      );
    }
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative bg-white border border-gray-200 shadow-lg rounded-2xl max-w-4xl mx-auto px-6 sm:px-10 py-12 text-center mb-12 overflow-hidden"
    >
      {/* Icon */}
      <div className="absolute top-4 left-4 text-green-500 text-2xl">
        <FaBriefcase />
      </div>

      {/* Soft background shape */}
      <div className="absolute -top-10 -right-10 w-48 h-48 bg-green-100 rounded-full opacity-20 z-0" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4 tracking-tight border-b-2 inline-block border-green-500 pb-1">
          İş İlanı Oluştur
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Uzmanlıklarınızı paylaşmak ve kazanç elde etmek için şimdi ilanınızı oluşturun. <br className="hidden md:block" />
          Doğru müşterilere ulaşmanın en kolay yolu!
        </p>
      </div>
    </div>
  );
}

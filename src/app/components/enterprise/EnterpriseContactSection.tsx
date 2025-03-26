'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function EnterpriseContactSection() {
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: formRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section id="contact" className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Bizimle İletişime Geçin</h2>
        <p className="text-gray-600 mt-2">
          Kurumsal iş birliği fırsatları için aşağıdaki formu doldurun.
        </p>
      </div>

      <div ref={formRef} className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-xl">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Firma Adı */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Firma Adı</label>
            <input
              type="text"
              placeholder="Örn: Acme Corp"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Yetkili Kişi */}
          <div>
            <label className="block text-sm font-medium mb-1">Yetkili Kişi</label>
            <input
              type="text"
              placeholder="Ad Soyad"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* E-posta */}
          <div>
            <label className="block text-sm font-medium mb-1">E-posta</label>
            <input
              type="email"
              placeholder="example@firma.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Telefon */}
          <div>
            <label className="block text-sm font-medium mb-1">Telefon</label>
            <input
              type="tel"
              placeholder="0 (5__) ___ __ __"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          {/* Boşluk için görünmeyen div */}
          <div className="sm:hidden" />

          {/* Mesaj */}
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Mesaj</label>
            <textarea
              rows={4}
              placeholder="İş birliği talepleriniz..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
            ></textarea>
          </div>

          {/* Buton */}
          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Talebimi Gönder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

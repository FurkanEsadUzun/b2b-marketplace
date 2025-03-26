'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function SupplierForm() {
  const formRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (formRef.current) {
      gsap.fromTo(
        formRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
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
    <section id="supplier-form" className="bg-gray-50 py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900">Tedarikçi Başvuru Formu</h2>
        <p className="text-gray-600 mt-2">Hizmet vermeye başlamak için aşağıdaki formu doldur.</p>
      </div>

      <div ref={formRef} className="max-w-3xl mx-auto bg-white p-8 shadow-lg rounded-xl">
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Ad Soyad</label>
            <input
              type="text"
              placeholder="Adınız Soyadınız"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">E-posta</label>
            <input
              type="email"
              placeholder="ornek@mail.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Telefon</label>
            <input
              type="tel"
              placeholder="0 (5__) ___ __ __"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Uzmanlık Alanı</label>
            <input
              type="text"
              placeholder="Web geliştirme, grafik tasarım, danışmanlık..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>

          <div className="col-span-2">
            <label className="block text-sm font-medium mb-1">Kendinizi Tanıtın</label>
            <textarea
              rows={5}
              placeholder="Deneyimleriniz, yetkinlikleriniz ve önceki projeleriniz hakkında kısa bir açıklama yazın."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>

          <div className="col-span-2 text-center">
            <button
              type="submit"
              className="bg-green-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-700 transition"
            >
              Başvuruyu Gönder
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

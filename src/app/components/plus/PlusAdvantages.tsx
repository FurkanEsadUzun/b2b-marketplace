'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  FaRocket,
  FaHeadset,
  FaBullhorn,
  FaChartLine,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const advantages = [
  {
    icon: <FaRocket size={24} />,
    title: 'İlan Önceliği',
    desc: 'Plus üyeler, aramalarda ve anasayfada öne çıkar.',
  },
  {
    icon: <FaHeadset size={24} />,
    title: 'Öncelikli Destek',
    desc: 'Kurumsal destek ekibimiz her zaman yanınızda.',
  },
  {
    icon: <FaBullhorn size={24} />,
    title: 'Geniş Tanıtım Alanı',
    desc: 'Profiliniz ve ilanlarınız daha geniş kitlelere ulaşır.',
  },
  {
    icon: <FaChartLine size={24} />,
    title: 'Detaylı Analiz Raporları',
    desc: 'İlan performansınızı anlık olarak takip edin.',
  },
];

export default function PlusAdvantages() {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (wrapperRef.current) {
      gsap.fromTo(
        wrapperRef.current.querySelectorAll('.advantage-card'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Plus’a Özel Avantajlar</h2>
        <p className="text-gray-600 mt-2">Sadece Plus kullanıcılarına sunulan premium özellikler</p>
      </div>

      <div ref={wrapperRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {advantages.map((item, i) => (
          <div
            key={i}
            className="advantage-card bg-gray-50 p-6 rounded-xl border hover:shadow-md transition"
          >
            <div className="text-green-600 mb-4">{item.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

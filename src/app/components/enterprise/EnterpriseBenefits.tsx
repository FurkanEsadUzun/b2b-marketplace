'use client';

import { FaShieldAlt, FaClock, FaUserCheck, FaTools } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const benefits = [
  {
    icon: <FaClock size={22} />,
    title: 'Zaman Tasarrufu',
    description: 'Otomasyonlu sistemlerle işe alım sürecini hızlandırın.',
  },
  {
    icon: <FaUserCheck size={22} />,
    title: 'Doğru Eşleşmeler',
    description: 'Akıllı algoritmalar ile en uygun adayları bulun.',
  },
  {
    icon: <FaShieldAlt size={22} />,
    title: 'Güvenli İş Ortamı',
    description: 'Ödeme, iletişim ve süreç yönetimi güvenli altyapımızla desteklenir.',
  },
  {
    icon: <FaTools size={22} />,
    title: 'Özelleştirilebilir Hizmet',
    description: 'İhtiyaçlarınıza özel esnek modüller ile çözüm sunuyoruz.',
  },
];

export default function EnterpriseBenefits() {
  const sectionRef = useRef<HTMLDivElement | null>(null);


  useEffect(() => {
    if (sectionRef.current) {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" ,
            scrollTrigger: {
                trigger: sectionRef.current,
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
        <h2 className="text-3xl font-bold text-gray-900">Neden B2B Market?</h2>
        <p className="text-gray-600 mt-3">Kurumsal başarınızı hızlandıracak güçlü nedenler</p>
      </div>

      <div ref={sectionRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {benefits.map((benefit, i) => (
          <div
            key={i}
            className="benefit-card bg-gray-50 p-6 rounded-xl border hover:shadow-md transition"
          >
            <div className="text-green-600 mb-4">{benefit.icon}</div>
            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
            <p className="text-sm text-gray-600">{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

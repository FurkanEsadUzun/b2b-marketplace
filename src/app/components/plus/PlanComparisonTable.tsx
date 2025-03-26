'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaCheck, FaTimes } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const plans = ['Free', 'Standard', 'Plus'];

const features = [
  {
    title: 'Aylık İlan Limiti',
    values: ['3', '10', 'Sınırsız'],
  },
  {
    title: 'İlan Öne Çıkarma',
    values: [false, true, true],
  },
  {
    title: 'Profil Vitrini',
    values: [false, true, true],
  },
  {
    title: 'Kurumsal Destek',
    values: [false, false, true],
  },
  {
    title: 'Analitik Raporlama',
    values: [false, false, true],
  },
  {
    title: 'Ödeme Önceliği',
    values: [false, false, true],
  },
];

export default function PlanComparisonTable() {
  const tableRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (tableRef.current) {
      gsap.fromTo(
        tableRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: tableRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }
  }, []);

  return (
    <section id="plan-tablosu" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900">Plan Karşılaştırması</h2>
        <p className="text-gray-600 mt-2">Sizin için en uygun planı seçin</p>
      </div>

      <div ref={tableRef} className="overflow-x-auto">
        <table className="w-full max-w-6xl mx-auto border border-gray-200 rounded-xl overflow-hidden bg-white">
          <thead className="bg-green-600 text-white text-sm md:text-base">
            <tr>
              <th className="text-left p-4">Özellikler</th>
              {plans.map((plan, i) => (
                <th key={i} className="text-center p-4 font-semibold">
                  {plan}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="text-sm md:text-base text-gray-700">
            {features.map((feature, idx) => (
              <tr key={idx} className="border-t border-gray-200">
                <td className="p-4 font-medium">{feature.title}</td>
                {feature.values.map((val, i) => (
                  <td key={i} className="text-center p-4">
                    {typeof val === 'boolean' ? (
                      val ? (
                        <FaCheck className="text-green-500 mx-auto" />
                      ) : (
                        <FaTimes className="text-red-400 mx-auto" />
                      )
                    ) : (
                      val
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

'use client';

import { FaClipboardList, FaHeadset, FaChartBar, FaReceipt } from 'react-icons/fa';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const solutions = [
    {
        icon: <FaClipboardList size={24} />,
        title: 'Toplu İlan Yönetimi',
        description: 'Tüm iş ilanlarınızı tek panelden yönetin, zamandan kazanın.',
    },
    {
        icon: <FaHeadset size={24} />,
        title: 'Özel Müşteri Temsilcisi',
        description: 'Kurumsal ihtiyaçlarınıza özel destek ekibimizle yanınızdayız.',
    },
    {
        icon: <FaChartBar size={24} />,
        title: 'Raporlama & Analiz',
        description: 'İlan performanslarınızı detaylı raporlarla analiz edin.',
    },
    {
        icon: <FaReceipt size={24} />,
        title: 'Kolay Faturalandırma',
        description: 'Tek fatura, net ödeme. Muhasebenizi basitleştirin.',
    },
];

export default function EnterpriseSolutions() {
    const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" ,
            scrollTrigger: {
                trigger: containerRef.current,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
        }
      );
    }
  }, []);
    return (
        <section className="py-20 px-6 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">Size Özel Kurumsal Çözümler</h2>
                <p className="text-gray-600 mt-3">İş süreçlerinizi hızlandıran avantajlar</p>
            </div>

            <div ref={containerRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                {solutions.map((item, idx) => (
                    <div
                        key={idx}
                        className="solution-card bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
                    >
                        <div className="text-green-600 mb-4">{item.icon}</div>
                        <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                        <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}

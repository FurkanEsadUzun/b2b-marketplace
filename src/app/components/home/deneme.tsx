"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const plans = [
  {
    title: "Free",
    price: "₺0",
    features: ["Sınırlı kurs erişimi"],
    bg: "bg-white",
    text: "text-gray-800",
    border: "border-gray-200",
    button: "text-green-600 border-green-600 hover:shadow-glow-green",
  },
  {
    title: "Standart",
    price: "₺149",
    features: ["Ücretsiz kurs oluşturma"],
    bg: "bg-white",
    text: "text-gray-800",
    border: "border-gray-200",
    button: "text-green-600 border-green-600 hover:shadow-glow-green",
  },
  {
    title: "Plus",
    price: "₺649",
    features: [
      "Ücretsiz kurs oluşturma",
      "Birebir online eğitim",
      "Planlı grup eğitimleri",
      "Toplu etkinlik ve workshoplar",
    ],
    bg: "bg-gradient-to-b from-green-500 to-green-700 text-white",
    text: "text-white",
    border: "border-transparent",
    button: "bg-white text-green-700 hover:shadow-glow-white",
  },
];

export default function PricingCards() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.fromTo(
      cardsRef.current?.children,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
      }
    );
  }, []);

  return (
    <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-green-700">
          İlanlarınızı Oluşturarak <span className="text-green-500">Fark Yaratın</span>
        </h2>
        <p className="mt-4 text-gray-600">
          Uzmanlığınızı paylaşın ve gelir elde edin. Şimdi başlayarak eğitim yolculuğunuzu başlatın!
        </p>
      </div>
      <div
        ref={cardsRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
      >
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`rounded-2xl shadow-lg p-8 ${plan.bg} ${plan.text} border ${plan.border} transition-all`}
          >
            <h3 className="text-xl font-bold mb-2">{plan.title}</h3>
            <p className="text-sm mb-6">
              {index === 0 && "Sınırlı Kurs Erişimi"}
              {index === 1 && "Ücretsiz Kurs Yayınlama Fırsatı"}
              {index === 2 && "Birden Çok Seçenekle Eğitim Verme Fırsatı"}
            </p>
            <div className="text-4xl font-extrabold mb-6">{plan.price}<span className="text-base font-medium">/aylık</span></div>
            <button
              className={`w-full py-2.5 rounded-full font-semibold border transition duration-300 ${plan.button}`}
            >
              Kayıt Ol
            </button>
            <ul className="mt-6 space-y-2 text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="text-green-500">✔</span> {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <style jsx>{`
        .hover\:shadow-glow-green:hover {
          box-shadow: 0 0 15px rgba(34, 197, 94, 0.6);
        }
        .hover\:shadow-glow-white:hover {
          box-shadow: 0 0 15px rgba(255, 255, 255, 0.8);
        }
      `}</style>
    </div>
  );
}

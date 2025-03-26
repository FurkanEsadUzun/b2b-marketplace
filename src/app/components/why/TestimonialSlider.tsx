// components/why/TestimonialSlider.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    role: "İşveren",
    comment:
      "B2B Market üzerinden doğru tedarikçilere ulaşmak gerçekten çok kolay. Artık işlerimi daha hızlı halledebiliyorum."
  },
  {
    name: "Elif Demir",
    role: "Tedarikçi",
    comment:
      "Platform sayesinde birçok yeni müşteriyle tanıştım. Arayüz sade ve kullanımı çok pratik."
  },
  {
    name: "Murat Koca",
    role: "KOBİ Sahibi",
    comment:
      "B2B Market bana büyük bir zaman ve maliyet avantajı sağladı. Gönül rahatlığıyla tavsiye ederim."
  },
];

export default function TestimonialSlider() {
  const [active, setActive] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(intervalRef.current!);
  }, []);

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto text-center px-6">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Kullanıcılarımız <span className="text-green-600">Ne Diyor?</span>
        </h2>
        <div className="relative bg-white p-10 rounded-3xl shadow-md border">
          <FaQuoteLeft className="absolute top-6 left-6 text-green-200 text-3xl" />
          <p className="text-lg text-gray-700 mb-6 italic">“{testimonials[active].comment}”</p>
          <div className="text-sm text-gray-500">
            <span className="font-semibold text-gray-700">{testimonials[active].name}</span> – {testimonials[active].role}
          </div>
        </div>
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-2 w-2 rounded-full ${active === i ? "bg-green-600" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}
// components/why/FeatureGrid.tsx
"use client";

import { FaCheckCircle, FaClock, FaShieldAlt, FaBolt, FaHandshake, FaChartLine } from "react-icons/fa";

const features = [
  {
    title: "Güvenilir Tedarikçiler",
    icon: <FaShieldAlt className="text-green-600 text-3xl mb-3" />,
    desc: "Doğrulanmış ve profesyonel iş ortaklarıyla çalışma imkânı."
  },
  {
    title: "Zamandan Tasarruf",
    icon: <FaClock className="text-green-600 text-3xl mb-3" />,
    desc: "İhtiyacınıza uygun hizmetlere hızla ulaşın."
  },
  {
    title: "Kolay İşlem Süreci",
    icon: <FaHandshake className="text-green-600 text-3xl mb-3" />,
    desc: "Tek tıkla iş ilanı oluşturun, teklifler alın."
  },
  {
    title: "Ekonomik Çözümler",
    icon: <FaChartLine className="text-green-600 text-3xl mb-3" />,
    desc: "Fiyat karşılaştırmalarıyla en uygun seçeneği seçin."
  },
  {
    title: "Hızlı Eşleşme",
    icon: <FaBolt className="text-green-600 text-3xl mb-3" />,
    desc: "Yapay zekâ destekli sistemle en doğru eşleşmeler."
  },
  {
    title: "Şeffaflık ve Güven",
    icon: <FaCheckCircle className="text-green-600 text-3xl mb-3" />,
    desc: "Her işlemde takip edilebilirlik ve güvenilirlik."
  },
];

export default function FeatureGrid() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-14">
          B2B Market'i Seçmeniz İçin <span className="text-green-600">6 Neden</span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md p-6 text-center hover:shadow-xl transition duration-300 border"
            >
              <div className="flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
// components/why/CtaSection.tsx
"use client";

import { FaArrowRight } from "react-icons/fa";

export default function CtaSection() {
  return (
    <section className="py-24 bg-green-600 text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
          Hemen Başlayın
        </h2>
        <p className="text-lg md:text-xl mb-8">
          B2B Market’e katılarak iş dünyasında dijital dönüşümün bir parçası olun. Hem hizmet verin hem çözüm bulun.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a
            href="/signup"
            className="bg-white text-green-600 hover:bg-gray-100 py-3 px-6 rounded-full font-semibold transition inline-flex items-center justify-center"
          >
            Ücretsiz Kayıt Ol <FaArrowRight className="ml-2" />
          </a>
          <a
            href="/is-ara"
            className="border border-white text-white hover:bg-white hover:text-green-600 py-3 px-6 rounded-full font-semibold transition"
          >
            İş Ara
          </a>
        </div>
      </div>
    </section>
  );
}
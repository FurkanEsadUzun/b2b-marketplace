// components/why/TrustedLogos.tsx
"use client";

export default function TrustedLogos() {
  const logos = [
    "/logos/airbnb.svg",
    "/logos/apple.svg",
    "/logos/facebook.svg",
    "/logos/google.svg",
    "/logos/mcdonalds.svg",
    "/logos/microsoft.svg",
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-700 mb-10">
          <span className="text-green-600 font-bold">500+</span> şirket bize güveniyor
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-10">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Şirket ${index + 1}`}
              className="h-10 grayscale hover:grayscale-0 transition duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

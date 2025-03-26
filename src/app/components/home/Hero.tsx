"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const [selectedTab, setSelectedTab] = useState<"findTalent" | "browseJobs">("findTalent");

  // Referanslar
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Başlık animasyonu
    gsap.fromTo(
      titleRef.current,
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Kart animasyonu
    gsap.fromTo(
      cardRef.current,
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1.2, ease: "power2.out", delay: 0.5 }
    );

    // Butonlar animasyonu
    gsap.fromTo(
      buttonsRef.current?.children,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.2,
        ease: "back.out(1.7)",
        delay: 0.5,
      }
    );
  }, []);

  return (
    <div
      className="relative flex flex-col w-full h-[650px] md:h-[500px] lg:h-[650px] px-6 md:px-16 lg:px-24 py-12 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url("https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/v1741896805/brontes/hero/ApartmentCoder.png")`,
      }}
    >
      {/* Başlık */}
      <h1
        ref={titleRef}
        className="text-3xl md:text-5xl lg:text-7xl text-white font-bold py-6 md:py-12 max-w-3xl text-center md:text-left"
      >
        Sanayideki Firmaları Bir Araya Getiriyoruz
      </h1>

      {/* İçerik Kartı */}
      <div className="w-full flex justify-center md:justify-start">
        <div
          ref={cardRef}
          className="text-white flex flex-col text-center md:text-left p-6 md:p-8 shadow-md backdrop-blur-2xl rounded-[20px] border-[#37c41427] border-[1.5px] max-w-lg w-full"
        >
          <p className="text-md opacity-75 font-semibold">
            Güvenilir tedarikçilerle buluşun, projelerinizi büyütün ve iş ortaklarınızı keşfedin.
          </p>

          {/* Butonlar */}
          <div ref={buttonsRef} className="mt-6 flex justify-center gap-4">
            <button
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all ${
                selectedTab === "findTalent" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedTab("findTalent")}
            >
              İş Ortağı Bul
            </button>
            <button
              className={`px-6 py-3 rounded-md text-sm font-semibold transition-all ${
                selectedTab === "browseJobs" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"
              }`}
              onClick={() => setSelectedTab("browseJobs")}
            >
              İş İlanlarına Göz At
            </button>
          </div>

          {/* İçerik */}
          <div className="mt-6">
            {selectedTab === "findTalent" ? (
              <input
                type="text"
                placeholder="Hizmet veya firma ara..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 text-black text-sm"
              />
            ) : (
              <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-all w-full">
                İş İlanlarını Keşfet
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

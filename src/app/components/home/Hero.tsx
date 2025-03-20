"use client";

import { useState } from "react";

export default function Hero() {
  const [selectedTab, setSelectedTab] = useState<"findTalent" | "browseJobs">("findTalent");

  return (
    <div className="relative mx-auto max-w-7xl w-full h-[600px] bg-cover bg-center rounded-2xl flex items-center justify-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url("https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/v1741896805/brontes/hero/ApartmentCoder.png")`,
      }}
    >
      {/* İçerik */}
      <div className="text-white text-center px-6 max-w-4xl">
        <h1 className="text-5xl font-bold">Sanayi Firmalarını Bir Araya Getiriyoruz</h1>
        <p className="mt-4 text-lg">
          Güvenilir tedarikçilerle buluşun, projelerinizi büyütün ve iş ortaklarınızı keşfedin.
        </p>

        {/* Tab Butonları */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            className={`px-6 py-3 rounded-md text-lg font-semibold transition-all ${selectedTab === "findTalent" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setSelectedTab("findTalent")}
          >
            İş Ortağı Bul
          </button>
          <button
            className={`px-6 py-3 rounded-md text-lg font-semibold transition-all ${selectedTab === "browseJobs" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setSelectedTab("browseJobs")}
          >
            İş İlanlarına Göz At
          </button>
        </div>

        {/* Tab İçeriği */}
        <div className="mt-6">
          {selectedTab === "findTalent" ? (
            <input
              type="text"
              placeholder="Hizmet veya firma ara..."
              className="w-full max-w-lg px-4 py-3 rounded-md border border-gray-300 text-black"
            />
          ) : (
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-all">
              İş İlanlarını Keşfet
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function Hero() {
  const [selectedTab, setSelectedTab] = useState<"findTalent" | "browseJobs">("findTalent");

  return (
    <div className="relative flex flex-col w-full h-[650px] px-24 py-12 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.1)), url("https://res.cloudinary.com/upwork-cloud-acquisition-prod/image/upload/v1741896805/brontes/hero/ApartmentCoder.png")`,
      }}
    >
      <h1 className="text-7xl text-white font-bold py-12 max-w-3xl">Sanayideki Firmaları Bir Araya Getiriyoruz</h1>
      <div className="flex flex-col gap-y-24">

      {/* İçerik */}
      <div className="text-white flex flex-col text-center p-4 pb-8 my-8 shadow-md backdrop-blur-2xl rounded-[20px] border-[#ffffff27] border-[1.5px] max-w-2xl ">

        <p className="mt-4 text-md opacity-75 font-semibold">
          Güvenilir tedarikçilerle buluşun, projelerinizi büyütün ve iş ortaklarınızı keşfedin.
        </p>
        {/* Tab Butonları */}
        <div className="mt-6 flex justify-center gap-4">
          <button
            className={`px-6 py-3 rounded-md text-sm font-semibold transition-all ${selectedTab === "findTalent" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
            onClick={() => setSelectedTab("findTalent")}
            >
            İş Ortağı Bul
          </button>
          <button
            className={`px-6 py-3 rounded-md text-sm font-semibold transition-all ${selectedTab === "browseJobs" ? "bg-green-600 text-white" : "bg-gray-200 text-gray-700"}`}
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
            className="w-full max-w-md px-4 py-2 rounded-full border border-gray-300 text-black text-sm"
            />
          ) : (
            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-md transition-all">
              İş İlanlarını Keşfet
            </button>
          )}
        </div>
          </div>
      </div>
    </div>
  );
}

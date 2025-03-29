// Filter.tsx
import React, { FC, useEffect, useState } from "react";

interface FilterProps {
  onFilterChange: (filters: any) => void;
}

const Filter: FC<FilterProps> = ({ onFilterChange }) => {
  const [locations, setLocations] = useState<{ _id: string; name: string }[]>([]);
  const [companies, setCompanies] = useState<{ _id: string; name: string }[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [selectedCompany, setSelectedCompany] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/locations`)
      .then((res) => res.json())
      .then((data) => setLocations(data));

    fetch(`${process.env.NEXT_PUBLIC_API_URL}/companies`)
      .then((res) => res.json())
      .then((data) => setCompanies(data));
  }, []);

  const handleFilterChange = () => {
    onFilterChange({
      location: selectedLocation,
      company: selectedCompany,
      minPrice: minPrice || null,
      maxPrice: maxPrice || null,
    });
  };
  

  return (
    <div className="w-1/4 p-4 border-r">
      <h3 className="text-xl font-bold mb-4">Filtreler</h3>

      {/* Konum Filtresi */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Konum</label>
        <select
          value={selectedLocation}
          onChange={(e) => setSelectedLocation(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Tümü</option>
          {locations.map((location) => (
            <option key={location._id} value={location.name}>
              {location.name}
            </option>
          ))}
        </select>
      </div>

      {/* Firma Filtresi */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Firma</label>
        <select
          value={selectedCompany}
          onChange={(e) => setSelectedCompany(e.target.value)}
          className="w-full border p-2 rounded"
        >
          <option value="">Tümü</option>
          {companies.map((company) => (
            <option key={company._id} value={company.name}>
              {company.name}
            </option>
          ))}
        </select>
      </div>

      {/* Fiyat Aralığı Filtresi */}
      <div className="mb-4">
        <label className="block font-semibold mb-2">Fiyat Aralığı (TL)</label>
        <div className="flex gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            placeholder="Min"
            className="w-full border p-2 rounded"
          />
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            placeholder="Max"
            className="w-full border p-2 rounded"
          />
        </div>
      </div>

      {/* Filtreleme Butonu */}
      <button
        onClick={handleFilterChange}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Filtrele
      </button>
    </div>
  );
};

export default Filter;

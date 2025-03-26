"use client";

import { useEffect, useState } from "react";

interface Category {
  _id: string;
  name: string;
  rating: number;
  skillCount: number;
}

export default function CategoryList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/categories`)
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Veri alınamadı:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Yükleniyor...</p>;

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Kategoriler</h2>
      <ul className="list-disc pl-5">
        {categories.map((cat) => (
          <li key={cat._id}>
            {cat.name} – {cat.rating} ⭐ ({cat.skillCount} uzmanlık)
          </li>
        ))}
      </ul>
    </div>
  );
}

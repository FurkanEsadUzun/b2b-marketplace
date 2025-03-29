// page.tsx
"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

interface SubcategoryData {
  _id: string,
  categoryId: string,
  name: string;
  slug: string;
}

export default function SubcategoryPage() {
  const params = useParams();
  const { categoryId } = params as { categoryId: string };
  const { slug } = params as {slug: string}
  const [subcategory, setSubcategory] = useState<SubcategoryData | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  console.log("slug",slug)

  useEffect(() => {
    const fetchSubcategory = async () => {
      try {
        const res = await fetch(`https://b2b-backend-production.up.railway.app/api/subcategories/`);
        if (!res.ok) {
          throw new Error("Alt kategori bulunamadı.");
        }
        const data = await res.json();
        console.log("veri:", data)
        if (!data) {
          throw new Error("Alt kategori bulunamadı.");
        }
        setSubcategory(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    if (categoryId) {
      fetchSubcategory();
    }
  }, [categoryId]);

  const matchedSubcategory = Array.isArray(subcategory)
  ? subcategory.find(sub => sub.slug === slug)
  : null;

console.log('Subcategory ID:', matchedSubcategory?._id);
  
  if (loading) return <p>Yükleniyor...</p>;
  if (!subcategory) return <p>Alt kategori bulunamadı.</p>;

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">{subcategory.name}</h1>
      <p className="mb-8 text-center">aciklama</p>

      {/* Kartlar */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* İş Ara */}
        <div className="p-6 border rounded-lg shadow-md flex flex-col justify-between items-center text-center">
          <h3 className="text-xl font-bold mb-4">İş Ara</h3>
          <p className="mb-6">Yeteneklerinize uygun işleri keşfedin.</p>
          <button
            className="w-full max-w-[200px] px-6 py-3 bg-green-600 text-white rounded-lg font-semibold"
            onClick={() => router.push(`/jobs/${matchedSubcategory?._id}`)}
          >
            İş Ara
          </button>
        </div>

        {/* İş İlanı Aç */}
        <div className="p-6 border rounded-lg shadow-md flex flex-col justify-between items-center text-center">
          <h3 className="text-xl font-bold mb-4">İş İlanı Aç</h3>
          <p className="mb-6">Hizmetlerinizi sunmak için iş ilanı oluşturun.</p>
          <button
            className="w-full max-w-[200px] px-6 py-3 bg-green-600 text-white rounded-lg font-semibold"
            onClick={() => router.push(`/createjob/${matchedSubcategory?._id}`)}
          >
            İlan Oluştur
          </button>
        </div>

        {/* İş Ortağı Ol */}
        <div className="p-6 border rounded-lg shadow-md flex flex-col justify-between items-center text-center">
          <h3 className="text-xl font-bold mb-4">İş Ortağı Ol</h3>
          <p className="mb-6">Projelerde ortak olarak büyümeye katılın.</p>
          <button
            className="w-full max-w-[200px] px-6 py-3 bg-green-600 text-white rounded-lg font-semibold"
            onClick={() => router.push(`/partner/${matchedSubcategory?._id}`)}
          >
            Ortak Ol
          </button>
        </div>
      </div>
    </div>
  );
}

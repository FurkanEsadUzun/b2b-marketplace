interface CompanyCategoryProps {
    category: {
      name: string;
      slug: string;
      rating: number;
      skillCount: number;
    };
  }
  
  export default function CompanyCategory({ category }: CompanyCategoryProps) {
    return (
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Kategori Bilgileri</h2>
        <p><strong>Kategori Adı:</strong> {category.name}</p>
        <p><strong>Slug:</strong> {category.slug}</p>
        <p><strong>Puan:</strong> {category.rating} ⭐</p>
        <p><strong>Uzmanlık Sayısı:</strong> {category.skillCount}</p>
      </div>
    );
  }
  
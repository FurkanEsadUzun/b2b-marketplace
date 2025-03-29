interface SubcategoryProps {
    subcategories: Array<{
      _id: string;
      name: string;
      slug: string;
      createdAt: string;
    }>;
  }
  
  export default function CompanySubcategory({ subcategories }: SubcategoryProps) {
    return (
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-4">Alt Kategoriler</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subcategories.map((sub) => (
            <div key={sub._id} className="border rounded-lg p-4">
              <h3 className="font-semibold">{sub.name}</h3>
              <p>Slug: {sub.slug}</p>
              <p>Oluşturulma Tarihi: {new Date(sub.createdAt).toLocaleDateString()}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
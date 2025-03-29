interface CompanyHeaderProps {
    name: string;
  }
  
  export default function CompanyHeader({ name }: CompanyHeaderProps) {
    return (
      <div className="bg-white shadow-md p-6 rounded-lg">
        <h1 className="text-3xl font-bold">{name}</h1>
        <p className="text-gray-500 mt-2">Şirketin detaylı profiline hoş geldiniz.</p>
      </div>
    );
  }
  
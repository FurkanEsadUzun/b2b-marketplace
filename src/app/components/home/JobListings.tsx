import { FaStar } from "react-icons/fa";

const jobs = [
  { title: "Makine & Otomasyon", rating: 4.85, skills: 320 },
  { title: "Elektrik & Enerji", rating: 4.77, skills: 290 },
  { title: "Metal İşleme", rating: 4.91, skills: 450 },
  { title: "Plastik & Enjeksiyon", rating: 4.79, skills: 380 },
  { title: "Kimya & Petrokimya", rating: 4.92, skills: 505 },
  { title: "Lojistik & Depolama", rating: 4.77, skills: 260 },
  { title: "İnşaat & Yapı", rating: 4.85, skills: 650 },
  { title: "Üretim & Kalite Kontrol", rating: 4.80, skills: 410 },
];

export default function JobListings() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl py-8 mx-auto px-6 lg:px-8 border ">
        {/* Başlık */}
        <h2 className="text-3xl font-bold text-gray-900">Sektörünüze Göre İş İlanlarını Keşfedin</h2>
        <p className="mt-2 text-lg text-gray-600">
          Size en uygun iş fırsatlarını bulun. <a href="#" className="text-green-600 font-semibold hover:underline">Tüm işleri inceleyin</a>.
        </p>

        {/* Kartlar */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {jobs.map((job, index) => (
            <div key={index} className="border border-gray-300 p-6 rounded-lg shadow-sm hover:shadow-md transition">
              <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
              <div className="mt-2 flex items-center text-gray-700">
                <FaStar className="text-yellow-500" />
                <span className="ml-1 font-medium">{job.rating}/5</span>
                <span className="ml-3 text-sm text-gray-500">{job.skills} uzmanlık alanı</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

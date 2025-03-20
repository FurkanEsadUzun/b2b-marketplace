import { FaCheckCircle } from "react-icons/fa";

export default function Advantages() {
  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12">
        
        {/* Sol Kısım - Görsel */}
        <div className="bg-white rounded-3xl shadow-md p-8 flex flex-col items-center">
          <p className="text-lg font-semibold text-gray-800">Ücretsiz Katılın</p>
          <div className="mt-4 flex items-center gap-6">
            <div className="border border-gray-300 rounded-lg px-4 py-3 flex flex-col items-center">
              <span className="text-sm font-medium text-gray-700">Tedarikçi</span>
            </div>
            <div className="border border-green-500 rounded-lg px-4 py-3 flex flex-col items-center bg-green-100">
              <span className="text-sm font-medium text-gray-800">Firma</span>
              <FaCheckCircle className="text-green-500 mt-1" />
            </div>
          </div>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
            Hesap Oluştur
          </button>
        </div>

        {/* Sağ Kısım - Metin */}
        <div className="max-w-xl">
          <h2 className="text-3xl font-bold text-gray-900">Sanayi Ağına Katılmak Çok Kolay</h2>
          <ul className="mt-6 space-y-5">
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900">Tamamen Ücretsiz</p>
                <p className="text-gray-600 text-sm">Sanayi firmaları ve tedarikçiler için ücretsiz kayıt ve listeleme.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900">İş İlanı Açın</p>
                <p className="text-gray-600 text-sm">Hizmet taleplerinizi oluşturun ve uygun tedarikçilerden teklif alın.</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <FaCheckCircle className="text-green-500 mt-1" />
              <div>
                <p className="text-lg font-semibold text-gray-900">En İyi Partnerlerle Çalışın</p>
                <p className="text-gray-600 text-sm">En güvenilir tedarikçilerle iş yaparak maliyetlerinizi optimize edin.</p>
              </div>
            </li>
          </ul>
          <div className="mt-6 flex gap-4">
            <button className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700">
              Ücretsiz Kaydol
            </button>
            <button className="px-6 py-3 border border-gray-400 text-gray-800 rounded-lg font-semibold hover:bg-gray-100">
              Nasıl Çalışır?
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

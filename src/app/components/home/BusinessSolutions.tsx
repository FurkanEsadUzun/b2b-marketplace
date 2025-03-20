export default function BusinessSolutions() {
    return (
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row bg-green-900 text-white rounded-xl overflow-hidden shadow-lg">
            
            {/* Sol Kısım - Metin Alanı */}
            <div className="w-full lg:w-1/2 p-10">
              <h3 className="text-sm font-semibold">Kurumsal Çözümler</h3>
              <h2 className="mt-2 text-4xl font-bold leading-tight">
                Güçlü Şirketler, Güvenilir İş Ortaklarıyla Büyür
              </h2>
              <p className="mt-4 text-lg text-gray-200">
                Türkiye'nin en büyük sanayi ağına katılın ve firmanızı dijitalleştirerek iş süreçlerinizi kolaylaştırın.
              </p>
  
              <ul className="mt-6 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">⚙️</span>
                  <span>Doğru iş ortaklarıyla verimli projeler yürütün</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📊</span>
                  <span>İş akışınızı kontrol edin ve süreçleri hızlandırın</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🤝</span>
                  <span>Kapsamlı destekle işlerinizi büyütün</span>
                </li>
              </ul>
  
              <button className="mt-6 px-6 py-3 bg-white text-green-900 font-semibold rounded-lg shadow hover:bg-gray-100">
                Daha Fazla Bilgi Al
              </button>
            </div>
  
            {/* Sağ Kısım - Görsel */}
            <div className="w-full lg:w-1/2">
              <img
                src="https://images.pexels.com/photos/3184395/pexels-photo-3184395.jpeg"
                alt="Kurumsal Çözümler"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
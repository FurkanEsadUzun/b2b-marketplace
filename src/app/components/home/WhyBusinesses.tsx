export default function WhyBusinesses() {
    return (
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Sol Taraf - İçerik */}
          <div className="md:col-span-2">
            <h2 className="text-4xl font-bold text-gray-900">
              Neden B2B İş Platformunu Seçmelisiniz?
            </h2>
            <ul className="mt-6 space-y-6 text-lg text-gray-700">
              <li className="flex items-start gap-3">
                <span className="text-xl">✅</span>
                <div>
                  <strong>Güvenilir İş Ortakları</strong>
                  <p className="text-gray-600">
                    Yüzlerce sanayi firmasının gerçek kullanıcı yorumları ve doğrulanmış profilleri.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">💰</span>
                <div>
                  <strong>Hizmet İçin Ödeme Yapın</strong>
                  <p className="text-gray-600">
                    İşletmeniz için en iyi iş ortağını seçin, fiyatlandırmaları karşılaştırın ve yalnızca tamamlanan işler için ödeme yapın.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-xl">🔒</span>
                <div>
                  <strong>Güvenli ve Hızlı İşlemler</strong>
                  <p className="text-gray-600">
                    Tüm işlemler güvenli ödeme sistemleri ile korunur. 7/24 destek ekibimiz her zaman yanınızda.
                  </p>
                </div>
              </li>
            </ul>
          </div>
  
          {/* Sağ Taraf - Yeşil Kart */}
          <div className="bg-green-600 text-white p-8 rounded-lg flex flex-col items-start">
            <h3 className="text-xl font-bold">
              Türkiye'nin En Büyük B2B İş Platformu
            </h3>
            <p className="mt-2 text-gray-100 text-sm">
              Binlerce profesyonel, en iyi firmalarla burada buluşuyor.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl">⭐</span>
              <div>
                <p className="text-lg font-semibold">4.9/5</p>
                <p className="text-sm text-gray-100">
                  Kullanıcı değerlendirmeleriyle en yüksek puanlı platform.
                </p>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-3">
              <span className="text-2xl">🏆</span>
              <div>
                <p className="text-lg font-semibold">Ödüllü Platform</p>
                <p className="text-sm text-gray-100">
                  En İyi B2B İş Platformu Ödülü 2024
                </p>
              </div>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
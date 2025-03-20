export default function FindWork() {
    return (
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
  
          {/* Sol Taraf - Resim */}
          <div className="rounded-lg overflow-hidden w-full h-full">
            <img
              src="/star-wars-logo.svg"
              alt="Çalışan bir profesyonel"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
  
          {/* Sağ Taraf - Mavi Kart */}
          <div className="bg-blue-600 text-white p-8 rounded-lg flex flex-col justify-between shadow-lg">
            <div>
              <h3 className="text-sm font-semibold text-white uppercase">Sanayi Firmaları İçin</h3>
              <h2 className="mt-2 text-3xl font-bold">Doğru İşe Kolayca Ulaşın</h2>
              <p className="mt-3 text-gray-200 text-lg">
                İhtiyacınıza uygun en iyi sanayi firmalarıyla hemen çalışmaya başlayın ve iş süreçlerinizi hızlandırın.
              </p>
            </div>
  
            <div className="mt-6 border-t border-white/40 pt-4 grid grid-cols-3 gap-4 text-center text-sm text-gray-100">
              <div>
                <p className="font-medium">✓ Doğru İş Ortağını Bulun</p>
              </div>
              <div>
                <p className="font-medium">✓ İhtiyacınıza Uygun Teklifler</p>
              </div>
              <div>
                <p className="font-medium">✓ Güvenli İşlemler</p>
              </div>
            </div>
  
            <div className="mt-6">
              <button className="w-full bg-white text-blue-600 py-3 px-4 rounded-md text-lg font-semibold hover:bg-gray-100 transition">
                İşleri Keşfet
              </button>
            </div>
          </div>
  
        </div>
      </div>
    );
  }
  
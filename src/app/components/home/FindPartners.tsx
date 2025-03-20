export default function FindTalent() {
    return (
      <div className="bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="relative bg-green-900 text-white rounded-xl overflow-hidden shadow-lg h-[500px]"> {/* Yükseklik artırıldı */}
            
            {/* Arka Plan Fotoğrafı */}
            <img
              src="https://images.pexels.com/photos/7691700/pexels-photo-7691700.jpeg"
              alt="İş Bul"
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
  
            {/* İçerik Alanı */}
            <div className="relative z-10 p-16"> {/* Padding artırıldı */}
              <h3 className="text-sm font-semibold">Sanayi İş Ortakları İçin</h3>
              <h2 className="mt-4 text-5xl font-bold leading-tight"> {/* Başlık font büyütüldü */}
                Doğru İş Ortağını Hızla Bulun
              </h2>
              <p className="mt-6 text-lg text-gray-200">
                Güvenilir üreticilerle, tedarikçilerle ve sanayi firmalarıyla bağlantı kurun.
              </p>
            </div>
  
            {/* Butonlar */}
            <div className="relative z-10 p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <a href="#" className="bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-5 px-8 rounded-lg"> {/* Buton boyutları büyütüldü */}
                İş İlanı Aç →
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-5 px-8 rounded-lg">
                Proje Satın Al →
              </a>
              <a href="#" className="bg-green-600 hover:bg-green-700 text-white text-center font-semibold py-5 px-8 rounded-lg">
                Uzman Desteği Al →
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
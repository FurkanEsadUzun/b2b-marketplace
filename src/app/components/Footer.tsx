import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Şirket Bilgileri */}
          <div>
            <a href="#" className="flex items-center">
              <img
                src="https://tailwindflex.com/images/logo.svg"
                alt="Logo"
                className="h-10 w-auto"
              />
              <span className="ml-2 text-xl font-bold">B2B MarketPlace</span>
            </a>
            <p className="mt-3 text-gray-700 text-sm">
              Türkiye'nin en güvenilir B2B iş platformu. Güvenli ticaret, akıllı eşleştirme ve profesyonel hizmetlerle işinizi büyütün.
            </p>
          </div>

          {/* Hızlı Bağlantılar */}
          <div>
            <h3 className="text-lg font-semibold">Hızlı Bağlantılar</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Destek ve Politikalar */}
          <div>
            <h3 className="text-lg font-semibold">Yardım ve Destek</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Sıkça Sorulan Sorular (FAQ)
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Destek Merkezi
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Gizlilik Politikası
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-700 hover:text-white">
                  Kullanım Şartları
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Sosyal Medya ve Telif Hakkı */}
        <div className="border-t border-gray-700 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-700 text-sm">© {new Date().getFullYear()} B2B MarketPlace. Tüm hakları saklıdır.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-700 hover:text-white">
              <FaFacebookF className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-700 hover:text-white">
              <FaTwitter className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-700 hover:text-white">
              <FaLinkedinIn className="h-5 w-5" />
            </a>
            <a href="#" className="text-gray-700 hover:text-white">
              <FaInstagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

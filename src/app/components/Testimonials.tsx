const testimonials = [
    {
      name: "Ahmet Yılmaz",
      role: "Firma Sahibi",
      company: "Tech Solutions Ltd.",
      review:
        "Bu platform sayesinde işimi büyüttüm! Güvenilir ve kaliteli hizmet sağlayıcılarla hızlıca çalışabildim.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Elif Demir",
      role: "İK Yöneticisi",
      company: "HR Solutions",
      review:
        "İhtiyacımız olan hizmetleri kolayca bulduk ve anlaşma süreçleri çok pratikti. Kesinlikle tavsiye ediyorum!",
      rating: 4,
      image: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Mehmet Kaya",
      role: "Freelancer",
      company: "Kendi İşim",
      review:
        "Bu platform sayesinde müşteri bulmak çok kolaylaştı. Güvenli ödeme sistemi de çok iyi çalışıyor.",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/45.jpg",
    },
  ];
  
  export default function Testimonials() {
    return (
      <section className="bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-indigo-600">Müşteri Yorumları</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Kullanıcılarımızın Geri Bildirimleri
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Gerçek kullanıcıların deneyimlerine göz atın ve siz de platformumuzu keşfedin!
            </p>
          </div>
  
          {/* Yorumlar Listesi */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center text-center"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-20 w-20 rounded-full border-4 border-indigo-500"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                <p className="text-sm text-gray-600">
                  {testimonial.role} @ {testimonial.company}
                </p>
                <div className="mt-2 flex">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={i < testimonial.rating ? "text-yellow-500" : "text-gray-300"}>
                      ★
                    </span>
                  ))}
                </div>
                <p className="mt-4 text-gray-700">{testimonial.review}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
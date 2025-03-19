const jobListings = [
    {
      title: "Full-Stack Developer",
      company: "Tech Solutions Ltd.",
      location: "Remote",
      salary: "$70,000 - $90,000 / year",
      type: "Full-time",
      postedAt: "2 gün önce",
      logo: "/angryface.svg",
    },
    {
      title: "UI/UX Designer",
      company: "Creative Agency",
      location: "İstanbul, Türkiye",
      salary: "$50,000 - $70,000 / year",
      type: "Part-time",
      postedAt: "1 gün önce",
      logo: "https://via.placeholder.com/50",
    },
    {
      title: "Data Analyst",
      company: "Finance Corp.",
      location: "Ankara, Türkiye",
      salary: "$60,000 - $80,000 / year",
      type: "Full-time",
      postedAt: "3 gün önce",
      logo: "https://via.placeholder.com/50",
    },
    {
      title: "Cyber Security Specialist",
      company: "SecureNet",
      location: "İzmir, Türkiye",
      salary: "$80,000 - $100,000 / year",
      type: "Remote",
      postedAt: "5 gün önce",
      logo: "https://via.placeholder.com/50",
    },
    {
      title: "Product Manager",
      company: "E-Commerce Inc.",
      location: "Online",
      salary: "$90,000 - $120,000 / year",
      type: "Contract",
      postedAt: "6 saat önce",
      logo: "https://via.placeholder.com/50",
    },
    {
      title: "Product Manager",
      company: "E-Commerce Inc.",
      location: "Online",
      salary: "$90,000 - $120,000 / year",
      type: "Contract",
      postedAt: "6 saat önce",
      logo: "https://via.placeholder.com/50",
    },
  ];
  
  export default function JobListings() {
    return (
      <section className="bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold text-indigo-600">Son İş İlanları</h2>
            <p className="mt-2 text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              En Yeni İş Fırsatları
            </p>
            <p className="mt-6 text-lg text-gray-600">
              Size en uygun işi bulmak için en güncel iş ilanlarını keşfedin.
            </p>
          </div>
  
          {/* İş İlanları Listesi */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-lg p-6 shadow-md hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center space-x-4">
                  <img src={job.logo} alt={job.company} className="h-12 w-12 rounded-md" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{job.title}</h3>
                    <p className="text-sm text-gray-600">{job.company}</p>
                  </div>
                </div>
                <div className="mt-4 text-gray-700">
                  <p><strong>Konum:</strong> {job.location}</p>
                  <p><strong>Maaş:</strong> {job.salary}</p>
                  <p><strong>Tür:</strong> {job.type}</p>
                </div>
                <div className="mt-4 flex justify-between items-center">
                  <span className="text-sm text-gray-500">{job.postedAt}</span>
                  <a href="#" className="text-indigo-600 font-semibold hover:underline">Detayları Gör</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  
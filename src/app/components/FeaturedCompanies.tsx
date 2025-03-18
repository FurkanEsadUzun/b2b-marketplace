const logos = [
    {
      name: "Transistor",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/transistor-logo-gray-900.svg",
      width: 158,
      height: 48,
    },
    {
      name: "Reform",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/reform-logo-gray-900.svg",
      width: 158,
      height: 48,
    },
    {
      name: "Tuple",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/tuple-logo-gray-900.svg",
      width: 158,
      height: 48,
    },
    {
      name: "SavvyCal",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/savvycal-logo-gray-900.svg",
      width: 158,
      height: 48,
    },
    {
      name: "Statamic",
      src: "https://tailwindcss.com/plus-assets/img/logos/158x48/statamic-logo-gray-900.svg",
      width: 158,
      height: 48,
    },
  ];
  
  export default function FeaturedCompanies() {
    return (
      <section className="bg-white ">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-lg font-semibold text-gray-900">
            Trusted by the world’s most innovative teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {logos.map((logo, index) => (
              <img
                key={index}
                className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }
  
import Hero from "@/app/components/home/Hero";
import FeaturedCompanies from "@/app/components/home/FeaturedCompanies";
import JobListings from "@/app/components/home/JobListings";
import Testimonials from "@/app/components/home/Testimonials";
import Advantages from "@/app/components/home/Advantages";
import BusinessSolutions from "@/app/components/home/BusinessSolutions";
import FindPartners from "@/app/components/home/FindPartners";
import WhyBusinesses from "@/app/components/home/WhyBusinesses";
import FindWork from "@/app/components/home/FindWork";
import Deneme from "../components/home/deneme";
import Deneme2 from "@/app/components/home/deneme2";

export default function HomePage() {
    return (
      <div className="page ">
        <Hero />
        <Advantages />
        <JobListings />
        <BusinessSolutions />
        <Deneme/>
        <Deneme2/>
        <FindPartners />
        <WhyBusinesses />
        <FindWork />
        <Testimonials />
        <FeaturedCompanies />

        
        
      </div>
    );
  }
  
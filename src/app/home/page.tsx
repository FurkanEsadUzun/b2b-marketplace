import Hero from "@/app/components/home/Hero";
import Features from "@/app/components/home/Features";
import FeaturedCompanies from "@/app/components/home/FeaturedCompanies";
import JobListings from "@/app/components/home/JobListings";
import Testimonials from "@/app/components/home/Testimonials";
import Advantages from "@/app/components/home/Advantages";
import BusinessSolutions from "@/app/components/home/BusinessSolutions";
import FindPartners from "@/app/components/home/FindPartners";
import WhyBusinesses from "@/app/components/home/WhyBusinesses";
import FindWork from "@/app/components/home/FindWork";
 
export default function HomePage() {
    return (
      <div className="page ">
        <Hero />
        <Advantages />
        <JobListings />
        <BusinessSolutions />
        <FindPartners />
        <WhyBusinesses />
        <FindWork />
        <Testimonials />
        <Features />
        <FeaturedCompanies />
        
        
      </div>
    );
  }
  
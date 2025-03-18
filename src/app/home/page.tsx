import Hero from "@/app/components/Hero";
import Features from "@/app/components/Features";
import FeaturedCompanies from "@/app/components/FeaturedCompanies";
import JobListings from "@/app/components/JobListings";
import Testimonials from "@/app/components/Testimonials"
 
export default function HomePage() {
    return (
      <div className="page">
        <Hero />
        <JobListings />
        <Testimonials />
        <Features />
        <FeaturedCompanies />
        
        
      </div>
    );
  }
  
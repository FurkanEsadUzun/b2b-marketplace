import EnterpriseHeroSection from "@/app/components/enterprise/EnterpriseHeroSection";
import EnterpriseSolutions from "@/app/components/enterprise/EnterpriseSolutions";
import EnterpriseBenefits from "@/app/components/enterprise/EnterpriseBenefits";
import EnterpriseContactSection from "@/app/components/enterprise/EnterpriseContactSection";
import EnterpriseCtaSection from "@/app/components/enterprise/EnterpriseCtaSection";

export default function EnterprisePage() {
  return (
    <div className="bg-white text-gray-800 pt-16">
      <EnterpriseHeroSection />
      <EnterpriseSolutions />
      <EnterpriseBenefits />
      <EnterpriseContactSection />
      <EnterpriseCtaSection />
    </div>
  );
}

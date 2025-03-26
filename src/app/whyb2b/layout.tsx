// app/why-b2b-market/layout.tsx
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import type { ReactNode } from "react";

export default function WhyB2BMarketLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />
      <main className="flex-grow pt-20"> {/* navbar yüksekliğini telafi eder */}
        {children}
      </main>
      <Footer />
    </div>
  );
}
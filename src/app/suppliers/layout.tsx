import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";
import type { ReactNode } from "react";

export default function SupplierLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-800">
      <Navbar />

      <main className="flex-grow">{children}</main>

      <Footer />
    </div>
  );
}

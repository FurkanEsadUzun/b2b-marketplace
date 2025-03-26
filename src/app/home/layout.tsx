import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="page">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

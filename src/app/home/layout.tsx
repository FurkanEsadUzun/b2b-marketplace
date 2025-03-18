import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="page">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

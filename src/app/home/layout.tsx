import Navbar from "@/app/components/home/Navbar";
import Footer from "@/app/components/home/Footer";

export default function HomeLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="page">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}

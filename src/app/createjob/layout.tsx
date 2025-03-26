// app/is-ilani-ac/layout.tsx
import Navbar from "@/app/components/layout/Navbar";
import Footer from "@/app/components/layout/Footer";

export default function IsIlaniAcLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col justify-between bg-gray-50">
            <Navbar />
            <main className="flex-grow py-12 px-4">{children}</main>
            <Footer />
        </div>
    );
}

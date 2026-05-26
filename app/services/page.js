import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Services from "@/sections/Services";

export const metadata = {
  title: "Services | Uday Portfolio",
  description: "Web development and MERN stack services.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-20 text-white">
      <Navbar />
      <Services />
      <Footer />
      <BackToTop />
    </main>
  );
}
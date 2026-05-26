import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Contact from "@/sections/Contact";

export const metadata = {
  title: "Contact | Uday Portfolio",
  description: "Contact Uday for projects and collaborations.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-20 text-white">
      <Navbar />
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}
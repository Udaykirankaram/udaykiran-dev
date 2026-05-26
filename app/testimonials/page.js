import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Testimonials from "@/sections/Testimonials";

export const metadata = {
  title: "Testimonials | Uday Portfolio",
  description: "Client and colleague feedback.",
};

export default function TestimonialsPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-20 text-white">
      <Navbar />
      <Testimonials />
      <Footer />
      <BackToTop />
    </main>
  );
}
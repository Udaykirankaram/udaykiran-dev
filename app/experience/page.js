import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Experience from "@/sections/Experience";

export const metadata = {
  title: "Experience | Uday Portfolio",
  description: "Professional journey and education timeline.",
};

export default function ExperiencePage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-20 text-white">
      <Navbar />
      <Experience />
      <Footer />
      <BackToTop />
    </main>
  );
}
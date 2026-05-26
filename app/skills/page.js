import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Skills from "@/sections/Skills";

export const metadata = {
  title: "Skills | Uday Portfolio",
  description: "Technical skills of Uday, MERN Stack Developer.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] pt-20 text-white">
      <Navbar />
      <Skills />
      <Footer />
      <BackToTop />
    </main>
  );
}
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import About from "@/sections/About";

export const metadata = {
  title: "About | Uday Portfolio",
  description: "About Uday, MERN Stack Developer.",
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#020617] pt-20 text-white">
      <Navbar />
      <About />
      <Footer />
      <BackToTop />
    </main>
  );
}
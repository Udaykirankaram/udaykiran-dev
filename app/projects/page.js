import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import Projects from "@/sections/Projects";

export const metadata = {
  title: "Projects | Uday Portfolio",
  description: "Projects built using React, Next.js, Node.js and MongoDB.",
};

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#020617] pt-20 text-white">
      <Navbar />
      <Projects />
      <Footer />
      <BackToTop />
    </main>
  );
}
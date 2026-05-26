import Link from "next/link";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { navLinks } from "@/data/portfolio";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#020617] px-5 py-10">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-3">
        <div>
          <h3 className="mb-3 text-2xl font-bold">
            <span className="gradient-text">Uday</span>.dev
          </h3>

          <p className="max-w-sm text-sm leading-7 text-slate-400">
            MERN Stack Developer building modern, responsive, and scalable web
            applications with clean user experience.
          </p>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Quick Links</h4>

          <div className="grid grid-cols-2 gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-slate-400 transition hover:text-cyan-400"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="mb-4 font-semibold text-white">Connect</h4>

          <div className="mb-5 flex gap-4">
            <Link
              href="#"
              className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaGithub />
            </Link>

            <Link
              href="#"
              className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaLinkedin />
            </Link>

            <Link
              href="#"
              className="rounded-full border border-white/10 p-3 text-slate-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FaTwitter />
            </Link>
          </div>

          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Uday. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
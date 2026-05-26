"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";
import { navLinks } from "@/data/portfolio";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#020617]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="text-2xl font-bold">
          <span className="gradient-text">Uday</span>
          <span className="text-white">.dev</span>
        </Link>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-sm font-medium transition hover:text-cyan-400 ${
                pathname === link.href ? "text-cyan-400" : "text-slate-300"
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />

          <Link
            href="/contact"
            className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
          >
            Hire Me
          </Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg border border-white/10 p-2 text-2xl lg:hidden"
          aria-label="Open menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-[#020617] px-5 py-5 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`text-sm font-medium transition hover:text-cyan-400 ${
                  pathname === link.href ? "text-cyan-400" : "text-slate-300"
                }`}
              >
                {link.name}
              </Link>
            ))}

            <div className="flex items-center gap-3 pt-3">
              <ThemeToggle />

              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black"
              >
                Hire Me
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
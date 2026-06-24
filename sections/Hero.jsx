"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiDownload, FiSend } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28"
    >
      <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SectionHeading
            subtitle="About Me"
            title="MERN Stack Developer in Hyderabad"
          />

          <h3 className="mb-5 text-2xl font-bold text-white">
            I build modern web applications with clean code and great user experience.
          </h3>

          <p className="mb-5 leading-8 text-slate-300">
            I am Uday Kiran, a MERN Stack Developer from Hyderabad, focused on building
            responsive websites, full-stack applications, admin dashboards, and REST APIs.
          </p>

          <p className="mb-8 leading-8 text-slate-300">
            My goal is to create fast, user-friendly, and scalable web applications using
            React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
          </p>

          <div className="mb-8 flex flex-wrap gap-4">
            <Link
              href="/resume.pdf"
              className="flex items-center gap-2 rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-105 hover:bg-cyan-300"
            >
              <FiDownload />
              Download Resume
            </Link>

            <Link
              href="#contact"
              className="flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
            >
              <FiSend />
              Contact Me
            </Link>
          </div>

          <div className="flex gap-4 text-xl">
            <Link href="#" className="transition hover:text-cyan-400">
              <FaGithub />
            </Link>

            <Link href="#" className="transition hover:text-cyan-400">
              <FaLinkedin />
            </Link>

            <Link href="#" className="transition hover:text-cyan-400">
              <FaTwitter />
            </Link>
          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="relative mx-auto h-[360px] w-[360px] rounded-full border border-cyan-400/30 bg-gradient-to-br from-cyan-400/20 via-purple-500/20 to-blue-500/20 p-3 shadow-2xl shadow-cyan-500/20"
        >
          <div className="h-full w-full rounded-full bg-[#020617] p-4">
            <div className="flex h-full w-full items-center justify-center rounded-full border border-white/10 bg-white/5 text-8xl font-bold">
              <span className="gradient-text">U</span>
            </div>
          </div>

          <div className="absolute -right-4 top-16 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm backdrop-blur">
            React.js
          </div>

          <div className="absolute -left-4 bottom-16 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm backdrop-blur">
            Node.js
          </div>
        </motion.div>
      </div>
    </section>
  );
}
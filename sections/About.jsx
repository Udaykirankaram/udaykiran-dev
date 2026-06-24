"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiDownload, FiSend } from "react-icons/fi";
import SectionHeading from "@/components/SectionHeading";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function HeroAbout() {
  const cards = [
    {
      icon: FaCode,
      title: "Clean, Scalable Code",
      desc: "Reusable components, readable structure, and scalable frontend architecture.",
    },
    {
      icon: FaLaptopCode,
      title: "Responsive UI Design",
      desc: "Mobile-first layouts that work smoothly on all screen sizes.",
    },
    {
      icon: FaRocket,
      title: "Fast Performance",
      desc: "Optimized UI with smooth animations and a better user experience.",
    },
  ];

  return (
    <>
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-5 pt-28"
      >
        <div className="absolute left-10 top-32 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-purple-500/20 blur-[120px]" />

        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-cyan-400">
              Hello, I’m
            </p>

            <h1 className="mb-5 text-5xl font-extrabold leading-tight md:text-7xl">
              Uday Kiran <br />
              <span className="gradient-text">MERN Stack Developer in Hyderabad</span>
            </h1>

            <p className="mb-8 max-w-xl text-base leading-8 text-slate-300 md:text-lg">
              I build modern, responsive, and scalable web applications using React,
              Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
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
              <Link
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </Link>

              <Link
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </Link>

              <Link
                href="https://x.com/your-twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-cyan-400"
                aria-label="X profile"
              >
                <FaTwitter />
              </Link>
            </div>
          </motion.div>

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

      <section id="about" className="section-padding relative">
        <div className="mx-auto max-w-7xl">
          <SectionHeading subtitle="About Me" title="MERN Stack Developer in Hyderabad" />

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <motion.div
              initial={{ opacity: 0, x: -35 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="glass-card rounded-3xl p-8"
            >
              <h3 className="mb-5 text-2xl font-bold text-white">
                I build modern web applications with clean code and great user experience.
              </h3>

              <p className="mb-5 leading-8 text-slate-300">
                I am Uday Kiran, a MERN Stack Developer from Hyderabad, focused on
                building responsive websites, full-stack applications, admin dashboards,
                and REST APIs.
              </p>

              <p className="mb-8 leading-8 text-slate-300">
                My goal is to create fast, user-friendly, and scalable web applications
                using React, Next.js, Node.js, Express.js, MongoDB, and Tailwind CSS.
              </p>

              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-2xl bg-white/5 p-5 text-center">
                  <h4 className="text-3xl font-bold text-cyan-400">1+</h4>
                  <p className="text-sm text-slate-400">Years Experience</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5 text-center">
                  <h4 className="text-3xl font-bold text-cyan-400">10+</h4>
                  <p className="text-sm text-slate-400">Projects</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-5 text-center">
                  <h4 className="text-3xl font-bold text-cyan-400">6+</h4>
                  <p className="text-sm text-slate-400">Tech Skills</p>
                </div>
              </div>
            </motion.div>

            <div className="grid gap-6">
              {cards.map((card, index) => {
                const Icon = card.icon;

                return (
                  <motion.div
                    key={card.title}
                    initial={{ opacity: 0, x: 35 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.15 }}
                    className="glass-card rounded-3xl p-6 transition hover:-translate-y-2 hover:border-cyan-400/40"
                  >
                    <Icon className="mb-4 text-3xl text-cyan-400" />
                    <h4 className="mb-2 text-xl font-bold">{card.title}</h4>
                    <p className="leading-7 text-slate-400">{card.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
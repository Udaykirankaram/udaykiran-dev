"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: FaCode,
      title: "Clean Code",
      desc: "Reusable components, readable structure, and scalable frontend architecture.",
    },
    {
      icon: FaLaptopCode,
      title: "Responsive UI",
      desc: "Mobile-first layouts that work smoothly on all screen sizes.",
    },
    {
      icon: FaRocket,
      title: "Fast Performance",
      desc: "Optimized UI with smooth animations and better user experience.",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading subtitle="About Me" title="Who I Am" />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="mb-5 text-2xl font-bold text-white">
              MERN Stack Developer focused on modern web experiences.
            </h3>

            <p className="mb-5 leading-8 text-slate-300">
              I am a passionate MERN Stack Developer with experience in
              building responsive websites, full-stack applications, admin
              dashboards, REST APIs, and modern UI designs.
            </p>

            <p className="mb-8 leading-8 text-slate-300">
              My focus is creating clean, user-friendly, and performance-focused
              web applications using React, Next.js, Node.js, Express.js,
              MongoDB, and Tailwind CSS.
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
                <h4 className="text-3xl font-bold text-cyan-400">4+</h4>
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
  );
}
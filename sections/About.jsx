"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { FaCode, FaLaptopCode, FaRocket } from "react-icons/fa";

export default function About() {
  const cards = [
    {
      icon: FaCode,
      title: "Clean, Scalable Code",
      desc: "Reusable components and scalable frontend architecture.",
    },
    {
      icon: FaLaptopCode,
      title: "Responsive UI Design",
      desc: "Mobile-first layouts that work on all devices.",
    },
    {
      icon: FaRocket,
      title: "Fast Performance",
      desc: "Optimized applications with smooth user experience.",
    },
  ];

  return (
    <section id="about" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          subtitle="About Me"
          title="React.js Developer with 1+ Year Experience"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="mb-5 text-2xl font-bold">
              Building modern web applications with React and Next.js.
            </h3>

            <p className="mb-5 leading-8 text-slate-300">
              I am Uday Kiran, a React.js Developer with 1+ year of
              professional experience developing ERP systems, responsive
              dashboards, and modern web applications.
            </p>

            <p className="mb-8 leading-8 text-slate-300">
              I have worked on ERP projects, SPA websites, Real Estate
              platforms, Employee Management Systems, and E-Commerce
              applications using Next.js, Tailwind CSS, Node.js, Express.js,
              and MongoDB Atlas.
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-white/5 p-5 text-center">
                <h4 className="text-3xl font-bold text-cyan-400">1+</h4>
                <p className="text-sm text-slate-400">Years Experience</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5 text-center">
                <h4 className="text-3xl font-bold text-cyan-400">5+</h4>
                <p className="text-sm text-slate-400">Major Projects</p>
              </div>

              <div className="rounded-2xl bg-white/5 p-5 text-center">
                <h4 className="text-3xl font-bold text-cyan-400">10+</h4>
                <p className="text-sm text-slate-400">Technologies</p>
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
                  transition={{ delay: index * 0.15 }}
                  className="glass-card rounded-3xl p-6"
                >
                  <Icon className="mb-4 text-3xl text-cyan-400" />
                  <h4 className="mb-2 text-xl font-bold">{card.title}</h4>
                  <p className="text-slate-400">{card.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
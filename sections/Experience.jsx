"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { experiences } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      <div className="mx-auto max-w-7xl">
        <SectionHeading subtitle="Journey" title="Experience & Education" />

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-4 top-0 h-full w-[2px] bg-gradient-to-b from-cyan-400 via-purple-400 to-blue-500 md:left-1/2" />

          {experiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-10 flex ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div className="absolute left-0 top-6 h-8 w-8 rounded-full border-4 border-[#020617] bg-cyan-400 shadow-lg shadow-cyan-400/40 md:left-1/2 md:-translate-x-1/2" />

              <div className="glass-card ml-14 w-full rounded-3xl p-6 md:ml-0 md:w-[45%]">
                <span className="mb-3 inline-block rounded-full bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-300">
                  {item.year}
                </span>

                <h3 className="mb-2 text-xl font-bold">{item.title}</h3>

                <p className="mb-3 text-sm font-medium text-purple-300">
                  {item.company}
                </p>

                <p className="leading-7 text-slate-400">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { services } from "@/data/portfolio";
import { FaCode, FaServer, FaMobileAlt, FaLayerGroup } from "react-icons/fa";

const icons = [FaCode, FaServer, FaMobileAlt, FaLayerGroup];

export default function Services() {
  return (
    <section id="services" className="section-padding relative">
      <div className="absolute left-0 top-10 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading subtitle="Services" title="What I Can Do" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = icons[index];

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="glass-card group rounded-3xl p-6 transition hover:-translate-y-2 hover:border-cyan-400/40"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-black">
                  <Icon />
                </div>

                <h3 className="mb-3 text-xl font-bold">
                  {service.title}
                </h3>

                <p className="leading-7 text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
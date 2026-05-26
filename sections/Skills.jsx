"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading subtitle="My Skills" title="Technologies I Use" />

        <div className="grid gap-8 md:grid-cols-2">
          {skills.map((group, groupIndex) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: groupIndex * 0.15,
              }}
              className="glass-card rounded-3xl p-6"
            >
              <h3 className="mb-6 text-2xl font-bold text-cyan-400">
                {group.category}
              </h3>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                {group.items.map((skill) => {
                  const Icon = skill.icon;

                  return (
                    <div
                      key={skill.name}
                      className="group rounded-2xl border border-white/10 bg-white/5 p-5 text-center transition hover:-translate-y-2 hover:border-cyan-400/40 hover:bg-cyan-400/10"
                    >
                      <Icon className="mx-auto mb-3 text-4xl text-cyan-400 transition group-hover:scale-110" />

                      <p className="text-sm font-medium text-slate-300">
                        {skill.name}
                      </p>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
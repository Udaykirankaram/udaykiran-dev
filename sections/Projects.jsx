"use client";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { projects } from "@/data/portfolio";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

const filters = ["All", "MERN", "Full Stack", "Frontend"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-purple-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading subtitle="Projects" title="Featured MERN Stack Projects" />

        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                activeFilter === filter
                  ? "bg-cyan-400 text-black"
                  : "border border-white/10 bg-white/5 text-slate-300 hover:border-cyan-400 hover:text-cyan-400"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              className="group glass-card overflow-hidden rounded-3xl transition hover:-translate-y-2 hover:border-cyan-400/40"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent" />
              </div>

              <div className="p-6">
                <h3 className="mb-3 text-2xl font-bold">{project.title}</h3>

                <p className="mb-5 leading-7 text-slate-400">
                  {project.description}
                </p>

                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full bg-cyan-400 px-5 py-2 text-sm font-semibold text-black transition hover:bg-cyan-300"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-white transition hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <FaGithub />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

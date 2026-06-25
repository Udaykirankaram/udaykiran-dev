"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute right-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <SectionHeading subtitle="Contact" title="Let’s Work Together" />

        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8"
          >
            <h3 className="mb-5 text-2xl font-bold">Get in touch</h3>

            <p className="mb-8 leading-8 text-slate-300">
              Have a project idea, job opportunity, or collaboration in mind?
              Send me a message and I will get back to you as soon as possible.
            </p>

            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400" />
                <a
                  href="mailto:udaykirankaram123@gmail.com"
                  className="text-slate-300 transition hover:text-cyan-400"
                >
                  udaykirankaram123@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400" />
                <a
                  href="tel:+917660932566"
                  className="text-slate-300 transition hover:text-cyan-400"
                >
                  +91 7660932566
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaMapMarkerAlt className="text-cyan-400" />
                <span className="text-slate-300">Hyderabad, India</span>
              </div>
            </div>

            <div className="mt-8 flex gap-4">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://x.com/your-twitter"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/10 p-3 transition hover:border-cyan-400 hover:text-cyan-400"
                aria-label="X profile"
              >
                <FaTwitter />
              </a>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-3xl p-8"
          >
            <div className="mb-5">
              <label htmlFor="name" className="mb-2 block text-sm text-slate-300">
                Your Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="mb-2 block text-sm text-slate-300">
                Your Email
              </label>
              <input
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-2 block text-sm text-slate-300"
              >
                Subject
              </label>
              <input
                id="subject"
                type="text"
                name="subject"
                placeholder="Project discussion"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="message"
                className="mb-2 block text-sm text-slate-300"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Write your message..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white outline-none transition placeholder:text-slate-500 focus:border-cyan-400"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-cyan-400 px-6 py-3 font-semibold text-black transition hover:scale-[1.02] hover:bg-cyan-300"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
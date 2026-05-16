import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  Briefcase,
  Calendar,
  MapPin,
  ArrowUpRight,
  Sparkles,
  Building2,
} from "lucide-react";

import { portfolioData } from "@/data/portfolio";

const techMap: Record<string, string[]> = {
  "exp-1": [
    "React.js",
    "Tailwind CSS",
    "Node.js",
    "TypeScript",
    "REST APIs",
    "GraphQL",
  ],

  "exp-2": [
    "Node.js",
    "Express.js",
    "GraphQL APIs",
    "MongoDB",
    "JWT",
    "RBAC",
  ],

  "exp-3": [
    "React.js",
    "Bootstrap",
    "MongoDB",
    "Express.js",
    "GitHub",
  ],
};

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="experience"
      className="relative py-28 overflow-hidden bg-[#080b14]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow */}
        <div className="absolute top-20 left-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[140px]" />

        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            <Sparkles size={14} />
            Career Journey
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Professional{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed text-sm sm:text-base">
            Building production-grade applications, scalable backend systems,
            and modern full-stack digital experiences with performance-focused
            architecture.
          </p>

          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-[24px] top-0 bottom-0 hidden md:block w-[2px] bg-gradient-to-b from-blue-500 via-violet-500 to-transparent" />

          <div className="space-y-12">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                }}
                className="relative md:pl-20"
              >
                {/* Timeline Dot */}
                <div className="absolute left-[9px] top-8 hidden md:flex items-center justify-center">
                  <div className="relative flex items-center justify-center">
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-full bg-cyan-500 blur-md opacity-60" />

                    {/* Dot */}
                    <div className="relative w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 border-4 border-[#080b14] flex items-center justify-center">
                      <span className="text-[10px] font-bold text-white">
                        {i + 1}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Card */}
                <motion.div
                  whileHover={{
                    y: -6,
                    scale: 1.015,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                  }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-7 hover:border-cyan-400/30 hover:bg-white/[0.08] transition-all duration-500 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]"
                >
                  {/* Top Hover Border */}
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent opacity-0 group-hover:opacity-100 transition duration-500" />

                  {/* Overlay */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5 transition duration-500" />

                  <div className="relative z-10">
                    {/* Top Section */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-7">
                      {/* Left */}
                      <div>
                        <div className="flex items-start gap-4">
                          {/* Icon */}
                          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-cyan-400 shrink-0">
                            <Briefcase size={18} />
                          </div>

                          {/* Info */}
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                              {exp.role}
                            </h3>

                            <div className="flex items-center gap-2 mt-2 text-slate-400 text-sm">
                              <Building2
                                size={14}
                                className="text-violet-400"
                              />

                              <span className="text-violet-300 font-semibold">
                                {exp.company}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 mt-2 text-slate-500 text-sm">
                              <MapPin
                                size={13}
                                className="text-cyan-400"
                              />

                              Ludhiana, Punjab, India
                            </div>

                            {/* Badge */}
                            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-[11px] text-slate-400 mt-4">
                              Full Time
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Date */}
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono self-start">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-4 mb-8">
                      {exp.highlights.map((highlight, hi) => (
                        <motion.div
                          key={hi}
                          initial={{ opacity: 0, x: 20 }}
                          animate={inView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            delay: 0.4 + hi * 0.08,
                          }}
                          className="flex items-start gap-4 group/item"
                        >
                          <div className="mt-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_14px_#22d3ee] group-hover/item:scale-125 transition-all duration-300" />

                          <p className="text-slate-300 leading-relaxed text-sm sm:text-[15px]">
                            {highlight}
                          </p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-3">
                      {(techMap[exp.id] || []).map((tech) => (
                        <motion.span
                          key={tech}
                          whileHover={{
                            scale: 1.05,
                            y: -2,
                          }}
                          className="px-3 py-1.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-xs font-medium hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300 cursor-default"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Bottom */}
                    <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                        Production Experience
                      </p>

                      <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                        Production Ready
                        <ArrowUpRight size={16} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
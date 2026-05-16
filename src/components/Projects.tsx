import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  ExternalLink,
  Github,
  Layers3,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

const projectColors = [
  {
    accent: "from-blue-500 via-cyan-400 to-sky-400",
    glow: "shadow-blue-500/20",
    border: "hover:border-blue-500/40",
  },

  {
    accent: "from-violet-500 via-purple-400 to-fuchsia-400",
    glow: "shadow-violet-500/20",
    border: "hover:border-violet-500/40",
  },

  {
    accent: "from-green-500 via-emerald-400 to-lime-400",
    glow: "shadow-green-500/20",
    border: "hover:border-green-500/40",
  },

  {
    accent: "from-orange-500 via-amber-400 to-yellow-300",
    glow: "shadow-orange-500/20",
    border: "hover:border-orange-500/40",
  },
];

export default function Projects() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="projects"
      className="relative py-28 bg-[#060910] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[450px] h-[450px] rounded-full bg-blue-600/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
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
            Featured Work
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            Project{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Showcase
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed text-sm sm:text-base">
            Production-grade applications built with modern full-stack
            technologies — designed for scale, performance, and real-world
            business impact.
          </p>

          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 gap-7">
          {portfolioData.projects.map((project, i) => {
            const c = projectColors[i % projectColors.length];

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.7,
                  delay: i * 0.12,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                }}
                className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-500 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)] ${c.glow} ${c.border}`}
              >
                {/* Hover Overlay */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5 transition duration-500" />

                {/* Top Border */}
                <div
                  className={`absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r ${c.accent}`}
                />

                {/* Content */}
                <div className="relative z-10 p-7">
                  {/* Top */}
                  <div className="flex items-start justify-between mb-6">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${c.accent} flex items-center justify-center shadow-xl`}
                    >
                      <Layers3 size={22} className="text-white" />
                    </div>

                    {/* Project Number */}
                    <div className="text-5xl font-black text-white/5 select-none">
                      0{i + 1}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2.5 mb-8">
                    {project.stack.map((tech) => (
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
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-6 border-t border-white/10">
                    {/* Buttons */}
                    <div className="flex items-center gap-3">
                      {/* GitHub */}
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.04,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-300 text-sm font-medium hover:bg-white/10 hover:text-white hover:border-white/20 transition-all duration-300"
                      >
                        <Github size={15} />
                        Source Code
                      </motion.a>

                      {/* Live Demo */}
                      <motion.a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{
                          scale: 1.04,
                        }}
                        whileTap={{
                          scale: 0.96,
                        }}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r ${c.accent} text-white text-sm font-semibold shadow-lg`}
                      >
                        <ExternalLink size={15} />
                        Live Demo
                      </motion.a>
                    </div>

                    {/* Status */}
                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                      Production Ready
                      <ArrowUpRight size={16} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
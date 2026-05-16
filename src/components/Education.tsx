import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  GraduationCap,
  Award,
  Calendar,
  MapPin,
  Star,
  Sparkles,
  Trophy,
  BookOpen,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

export default function Education() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="education"
      className="relative py-28 bg-[#080b14] overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Glow */}
        <div className="absolute top-0 right-1/4 w-[450px] h-[450px] rounded-full bg-green-500/10 blur-[140px]" />

        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-violet-600/10 blur-[140px]" />

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
            Academic Background
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Education
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed text-sm sm:text-base">
            A strong academic foundation combined with hands-on industry
            experience in modern full-stack web development and scalable
            application architecture.
          </p>

          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Education Card */}
        {portfolioData.education.map((edu, i) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
            }}
            whileHover={{
              y: -6,
              scale: 1.015,
            }}
            className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/[0.08] transition-all duration-500 hover:border-cyan-400/30 hover:shadow-[0_0_60px_rgba(59,130,246,0.15)]"
          >
            {/* Hover Overlay */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5 transition duration-500" />

            {/* Top Border */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500" />

            <div className="relative z-10 p-8 sm:p-10">
              <div className="flex flex-col lg:flex-row lg:items-center gap-10">
                {/* Left Side */}
                <div className="flex-shrink-0 flex justify-center">
                  <motion.div
                    whileHover={{
                      rotate: -4,
                      scale: 1.05,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 220,
                    }}
                    className="relative"
                  >
                    {/* Glow */}
                    <div className="absolute inset-0 rounded-3xl bg-blue-500 blur-2xl opacity-30" />

                    {/* Icon Box */}
                    <div className="relative w-28 h-28 rounded-3xl bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 flex items-center justify-center shadow-2xl shadow-violet-500/30 border border-white/10">
                      <GraduationCap
                        size={48}
                        className="text-white"
                      />
                    </div>
                  </motion.div>
                </div>

                {/* Right Side */}
                <div className="flex-1">
                  {/* Top */}
                  <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-5 mb-8">
                    <div>
                      {/* Degree */}
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-3 group-hover:text-cyan-300 transition-colors">
                        {edu.degree}
                      </h3>

                      {/* Institution */}
                      <div className="flex items-center gap-2 text-violet-300 text-sm sm:text-base font-semibold mb-3">
                        <MapPin
                          size={15}
                          className="text-violet-400"
                        />

                        {edu.institution}
                      </div>

                      {/* Department */}
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs">
                        <BookOpen size={13} />
                        Computer Applications
                      </div>
                    </div>

                    {/* Year Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-mono self-start">
                      <Calendar size={13} />
                      Class of {edu.year}
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    {/* CGPA */}
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                      }}
                      className="relative overflow-hidden rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-violet-500/10 p-5"
                    >
                      <div className="absolute top-0 right-0 text-6xl font-black text-white/5">
                        01
                      </div>

                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-yellow-500 flex items-center justify-center shadow-lg">
                          <Star
                            size={26}
                            className="text-white fill-white"
                          />
                        </div>

                        <div>
                          <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                            {edu.cgpa}
                          </div>

                          <div className="text-sm text-slate-400">
                            CGPA Score
                          </div>
                        </div>
                      </div>
                    </motion.div>

                    {/* Degree */}
                    <motion.div
                      whileHover={{
                        scale: 1.03,
                      }}
                      className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
                    >
                      <div className="absolute top-0 right-0 text-6xl font-black text-white/5">
                        02
                      </div>

                      <div className="relative z-10 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center shadow-lg">
                          <Trophy
                            size={24}
                            className="text-white"
                          />
                        </div>

                        <div>
                          <div className="text-lg font-bold text-white">
                            Bachelor's Degree
                          </div>

                          <div className="text-sm text-slate-400">
                            Full-Stack Development Focus
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                      Academic Excellence
                    </p>

                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium">
                      Industry Ready
                      <Award size={15} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
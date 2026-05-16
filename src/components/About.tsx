import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Zap,
  Globe,
  Code2,
  Award,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

const highlights = [
  {
    icon: <Code2 size={18} />,
    label: "MERN Stack",
    sub: "Full-Stack JavaScript",
  },
  {
    icon: <Globe size={18} />,
    label: "Production Apps",
    sub: "10+ Live Projects",
  },
  {
    icon: <Award size={18} />,
    label: "BCA Graduate",
    sub: "8.73 CGPA",
  },
  {
    icon: <Zap size={18} />,
    label: "Open Source",
    sub: "GitHub Active",
  },
];

const brings = [
  "Production-grade MERN stack architecture with scalable design patterns",
  "Role-based access control (RBAC) and JWT authentication systems",
  "Responsive, accessible frontends built with React and Tailwind CSS",
  "RESTful API development using Node.js, Express.js, and MongoDB",
  "Clean, maintainable, and performance-focused code practices",
];

export default function About() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="about"
      className="relative py-28 overflow-hidden bg-[#080b14]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-xs uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            <Sparkles size={14} />
            Who I Am
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed">
            Passionate about building scalable digital experiences with modern
            frontend engineering and production-ready backend systems.
          </p>

          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-col items-center lg:items-start"
          >
            {/* Image Card */}
            <motion.div
              whileHover={{
                scale: 1.03,
                rotate: -1,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
              }}
              className="relative group"
            >
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-[2rem] blur-2xl opacity-30 group-hover:opacity-60 transition duration-500" />

              {/* Image Wrapper */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-[2rem] p-[3px] bg-gradient-to-br from-blue-500 via-violet-500 to-cyan-500 shadow-[0_0_60px_rgba(59,130,246,0.25)]">
                <div className="w-full h-full rounded-[2rem] overflow-hidden bg-[#0b1220]">
                  <img
                    src="/Md Imran.png"
                    alt="Md Imran Alam"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </div>

              {/* Online Badge */}
              <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-[#080b14] border-4 border-[#080b14] flex items-center justify-center shadow-lg z-20">
                <div className="relative">
                  <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75" />
                  <span className="relative w-4 h-4 rounded-full bg-green-400 block shadow-[0_0_15px_#4ade80]" />
                </div>
              </div>
            </motion.div>

            {/* Highlight Cards */}
            <div className="grid grid-cols-2 gap-4 mt-10 w-full max-w-xl">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    delay: 0.4 + i * 0.1,
                  }}
                  whileHover={{
                    y: -5,
                    scale: 1.03,
                  }}
                  className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-cyan-400/30 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 transition duration-500" />

                  <div className="relative z-10 flex items-start gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 border border-white/10 flex items-center justify-center text-cyan-400">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-white font-semibold text-sm">
                        {item.label}
                      </h4>

                      <p className="text-slate-400 text-xs mt-1">
                        {item.sub}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs uppercase tracking-widest mb-6">
              <Sparkles size={14} />
              Passionate Developer
            </div>

            {/* Heading */}
            <h3 className="text-3xl sm:text-4xl font-black leading-tight text-white mb-6">
              Building products that are{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                scalable, modern, and impactful.
              </span>
            </h3>

            {/* Paragraphs */}
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              I’m a MERN Stack Developer focused on crafting high-quality,
              production-ready applications with seamless frontend experiences
              and scalable backend architecture.
            </p>

            <p className="text-slate-400 leading-relaxed mb-8">
              With professional experience across multiple companies and a strong
              academic foundation from Guru Nanak Dev Engineering College
              (CGPA: 8.73), I combine modern UI engineering with real-world
              backend problem solving to build products users actually love.
            </p>

            {/* What I Bring */}
            <div className="mb-10">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-[2px] bg-cyan-400" />

                <p className="text-white uppercase tracking-[0.2em] text-xs font-semibold">
                  What I Bring
                </p>
              </div>

              <div className="space-y-4">
                {brings.map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      delay: 0.5 + i * 0.1,
                    }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="mt-2 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] group-hover:scale-125 transition" />

                    <p className="text-slate-300 leading-relaxed">
                      {item}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={portfolioData.identity.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold hover:shadow-[0_0_40px_rgba(139,92,246,0.35)] transition-all duration-300"
              >
                View GitHub
                <ArrowUpRight size={18} />
              </motion.a>

              <motion.a
                href="#contact"
                whileHover={{
                  scale: 1.03,
                  y: -2,
                }}
                whileTap={{
                  scale: 0.98,
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl border border-white/10 bg-white/5 text-white font-semibold hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                Let’s Connect
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
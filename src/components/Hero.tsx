import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Github,
  Linkedin,
  Mail,
  Download,
} from "lucide-react";
import { portfolioData } from "@/data/portfolio";

const roles = [
  "MERN Stack Developer",
  "Full Stack JavaScript Developer",
  "React & Node.js Developer",
  "Backend API Developer",
];

const stats = [
  { value: "1+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "2", label: "Companies" },
  { value: "8.73", label: "CGPA" },
];

const techStack = [
  "React.js",
  "Node.js",
  "MongoDB",
  "Express.js",
  "Tailwind CSS",
  "REST APIs",
  "JWT Auth",
];

export default function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIdx];

    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, 60);

        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 1800);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, 30);

        return () => clearTimeout(t);
      } else {
        setRoleIdx((i) => (i + 1) % roles.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, roleIdx]);

  const handleNav = (href: string) => {
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#080b14]">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[120px]"
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute -bottom-60 -right-60 w-[700px] h-[700px] rounded-full bg-violet-600/10 blur-[140px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-cyan-600/5 blur-[100px]"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 text-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-sm text-slate-300 mb-8 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_12px_#4ade80]" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Intro */}
        <motion.p
          className="text-cyan-400 font-medium tracking-wide uppercase text-sm mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Full-Stack MERN Developer
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
            {portfolioData.identity.name}
          </span>
        </motion.h1>

        {/* Location */}
        <motion.p
          className="text-slate-500 text-sm mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Based in Ludhiana, India 🇮🇳
        </motion.p>

        {/* Typing Effect */}
        <motion.div
          className="h-10 flex items-center justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-mono text-cyan-400">
            {displayed}
            <motion.span
              className="inline-block w-[3px] h-7 rounded-full bg-cyan-400 ml-1 align-middle"
              animate={{ opacity: [1, 0, 1] }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
            />
          </span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-slate-400 text-lg sm:text-xl leading-relaxed max-w-3xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          Building production-grade full-stack applications with modern UI,
          scalable backend architecture, and seamless user experiences using
          React.js, Node.js, Express.js, and MongoDB.
        </motion.p>

        {/* Tech Tags */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
        >
          {techStack.map((tech) => (
            <span
              key={tech}
              className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-300 text-xs sm:text-sm hover:border-cyan-400 hover:bg-white/10 transition-all duration-300"
            >
              {tech}
            </span>
          ))}
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <motion.button
            onClick={() => handleNav("#projects")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold text-sm hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300 w-full sm:w-auto"
          >
            View My Projects
          </motion.button>

          <motion.a
            href={`mailto:${portfolioData.identity.email}`}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl border border-white/15 bg-white/5 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/30 transition-all duration-300 w-full sm:w-auto text-center"
          >
            Get In Touch
          </motion.a>

          <motion.a
            href="/Md-Imran-Alam-Resume.pdf"
            download
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3.5 rounded-xl border border-cyan-500/30 bg-cyan-500/10 text-cyan-300 font-semibold text-sm hover:bg-cyan-500/20 transition-all duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
          >
            <Download size={18} />
            Download CV
          </motion.a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex items-center justify-center gap-5 mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
        >
          {[
            {
              icon: <Github size={20} />,
              href: portfolioData.identity.github,
              label: "GitHub",
            },
            {
              icon: <Linkedin size={20} />,
              href: portfolioData.identity.linkedin,
              label: "LinkedIn",
            },
            {
              icon: <Mail size={20} />,
              href: `mailto:${portfolioData.identity.email}`,
              label: "Email",
            },
          ].map((social) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.08, y: -3 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:border-cyan-400 hover:bg-white/10 transition-all duration-300"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.03, y: -3 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm hover:border-cyan-400/30 hover:bg-white/10 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] transition-all duration-300"
            >
              <div className="text-3xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                {stat.value}
              </div>

              <div className="text-sm text-slate-400 mt-1">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.button
        onClick={() => handleNav("#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-500 hover:text-white transition-colors"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <ArrowDown size={24} />
      </motion.button>
    </section>
  );
}
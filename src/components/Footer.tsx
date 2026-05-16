import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { portfolioData } from "../data/portfolio";

const navLinks = [
  "About",
  "Skills",
  "Experience",
  "Projects",
  "Education",
  "Contact",
];

const socials = [
  {
    icon: <Github size={16} />,
    href: portfolioData.identity.github,
    label: "GitHub",
  },
  {
    icon: <Linkedin size={16} />,
    href: portfolioData.identity.linkedin,
    label: "LinkedIn",
  },
  {
    icon: <Mail size={16} />,
    href: `mailto:${portfolioData.identity.email}`,
    label: "Email",
  },
];

export default function Footer() {
  const handleNav = (section: string) =>
    document
      .querySelector(`#${section.toLowerCase()}`)
      ?.scrollIntoView({ behavior: "smooth" });

  return (
    <footer className="relative bg-[#030609] border-t border-white/10 py-16 overflow-hidden">
      {/* Glow background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-blue-600/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-600/10 blur-[120px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10">
          
          {/* Back to top */}
          <motion.button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            <ArrowUp size={16} />
            Back to Top
          </motion.button>

          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-3xl font-black bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent cursor-pointer"
          >
            {portfolioData.identity.name}
          </motion.div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <button
                key={link}
                onClick={() => handleNav(link)}
                className="text-slate-500 hover:text-white text-sm transition-colors relative group"
              >
                {link}
                <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-gradient-to-r from-blue-500 to-violet-500 group-hover:w-full transition-all duration-300" />
              </button>
            ))}
          </nav>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {socials.map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          {/* Bottom text */}
          <div className="flex flex-col sm:flex-row items-center gap-2 text-slate-600 text-xs text-center">
            <span>© 2026 {portfolioData.identity.name}. All rights reserved.</span>

            <span className="hidden sm:block">•</span>

            <span className="flex items-center gap-1">
              Built with React + Tailwind + Framer Motion
              <Heart size={11} className="text-red-500 fill-red-500" />
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
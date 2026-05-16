import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#070a12]/70 backdrop-blur-2xl border-b border-white/10 shadow-lg shadow-black/40"
          : "bg-transparent"
      }`}
    >
      {/* Glow line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 text-xl font-black"
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={18} className="text-cyan-400 animate-pulse" />
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
           ImranAlam.dev
            </span>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 bg-white/5 border border-white/10 rounded-2xl px-2 py-1 backdrop-blur-xl">
            {navLinks.map((link) => (
              <motion.button
                key={link.href}
                onClick={() => handleNav(link.href)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative px-3 py-2 text-sm text-slate-300 hover:text-white transition-colors rounded-xl"
              >
                {link.label}

                {/* hover underline */}
                <span className="absolute left-3 right-3 -bottom-0.5 h-[2px] bg-gradient-to-r from-blue-400 to-violet-500 scale-x-0 hover:scale-x-100 transition-transform origin-center rounded-full" />
              </motion.button>
            ))}

            {/* CTA */}
            <motion.button
              onClick={() => handleNav("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2 px-4 py-2 text-sm font-semibold bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-xl text-white shadow-lg shadow-violet-500/20 hover:shadow-cyan-500/30 transition-all"
            >
              Hire Me
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-[#070a12]/95 backdrop-blur-2xl border-t border-white/10"
        >
          <div className="px-4 py-4 space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="w-full text-left px-4 py-3 rounded-xl text-slate-300 hover:text-white hover:bg-white/5 transition-all"
              >
                {link.label}
              </button>
            ))}

            <button
              onClick={() => handleNav("#contact")}
              className="w-full mt-3 px-4 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white font-semibold"
            >
              Hire Me
            </button>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
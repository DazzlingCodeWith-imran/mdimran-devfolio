import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  MessageSquare,
} from "lucide-react";

import { portfolioData } from "../data/portfolio";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Future Backend Integration
    console.log(form);

    setSubmitted(true);
  };

  const socials = [
    {
      icon: <Mail size={18} />,
      label: "Email",
      value: portfolioData.identity.email,
      href: `mailto:${portfolioData.identity.email}`,
      gradient: "from-blue-500 to-cyan-400",
    },

    {
      icon: <Linkedin size={18} />,
      label: "LinkedIn",
      value: "linkedin.com/in/md-imran-alam",
      href: portfolioData.identity.linkedin,
      gradient: "from-violet-500 to-purple-400",
    },

    {
      icon: <Github size={18} />,
      label: "GitHub",
      value: "github.com/DazzlingCodeWith-imran",
      href: portfolioData.identity.github,
      gradient: "from-slate-500 to-slate-300",
    },
  ];

  return (
    <section
      id="contact"
      className="relative py-28 overflow-hidden bg-[#060910]"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px]" />

        <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-blue-600/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px]" />
      </div>

      <div
        ref={ref}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
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
            Let's Connect
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            Let’s Build Something{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Amazing
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed">
            Looking for a MERN Stack Developer or React Frontend Engineer?
            Let’s discuss your project, startup, freelance work, or full-time
            opportunity.
          </p>

          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">
          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="space-y-5">
              {socials.map((social, i) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.1,
                  }}
                  whileHover={{
                    scale: 1.02,
                    x: 4,
                  }}
                  className="group relative overflow-hidden flex items-center justify-between gap-4 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-cyan-400/30 hover:bg-white/[0.08] transition-all duration-300"
                >
                  {/* Hover Glow */}
                  <div
                    className={`absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br ${social.gradient}/10 transition duration-500`}
                  />

                  <div className="relative z-10 flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${social.gradient} flex items-center justify-center shadow-lg`}
                    >
                      <span className="text-white">{social.icon}</span>
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-slate-500 mb-1">
                        {social.label}
                      </p>

                      <p className="text-sm text-slate-200 group-hover:text-white transition-colors">
                        {social.value}
                      </p>
                    </div>
                  </div>

                  <ArrowUpRight
                    size={18}
                    className="relative z-10 text-slate-500 group-hover:text-cyan-400 transition-colors"
                  />
                </motion.a>
              ))}

              {/* Availability Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.7 }}
                className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-violet-500/10 to-cyan-500/10 p-6"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_60%)]" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="relative flex items-center justify-center">
                      <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />

                      <div className="absolute w-3 h-3 rounded-full bg-green-400 blur-sm" />
                    </div>

                    <h3 className="text-white font-semibold">
                      Available for Opportunities
                    </h3>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    Open to full-time MERN Stack Developer roles, React.js
                    frontend positions, freelance projects, and startup
                    collaborations.
                  </p>

                  <div className="flex items-center gap-2 mt-5 text-cyan-400 text-sm font-medium">
                    <MessageSquare size={16} />
                    Usually replies within 24 hours
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 sm:p-8">
              {/* Glow */}
              <div className="absolute inset-0 opacity-100 bg-gradient-to-br from-blue-500/5 via-violet-500/5 to-cyan-500/5" />

              <div className="relative z-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ type: "spring" }}
                    className="flex flex-col items-center justify-center text-center py-20"
                  >
                    <div className="relative mb-6">
                      <CheckCircle2
                        size={70}
                        className="text-green-400"
                      />

                      <div className="absolute inset-0 blur-xl bg-green-400/20 rounded-full" />
                    </div>

                    <h3 className="text-3xl font-black text-white mb-3">
                      Message Sent Successfully
                    </h3>

                    <p className="text-slate-400 max-w-md leading-relaxed mb-8">
                      Thank you for reaching out. I’ll review your message and
                      get back to you as soon as possible.
                    </p>

                    <motion.button
                      whileHover={{
                        scale: 1.03,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      onClick={() => {
                        setSubmitted(false);

                        setForm({
                          name: "",
                          email: "",
                          subject: "",
                          message: "",
                        });
                      }}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-violet-600 text-white text-sm font-semibold hover:from-blue-400 hover:to-violet-500 transition-all duration-300"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                  >
                    {/* Name + Email */}
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                          Full Name
                        </label>

                        <input
                          type="text"
                          name="name"
                          value={form.name}
                          onChange={handleChange}
                          required
                          placeholder="Md Imran Alam"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/40 focus:bg-white/[0.08] transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                          Email Address
                        </label>

                        <input
                          type="email"
                          name="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/40 focus:bg-white/[0.08] transition-all duration-300"
                        />
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                        Subject
                      </label>

                      <input
                        type="text"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        placeholder="Project Discussion"
                        className="w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/40 focus:bg-white/[0.08] transition-all duration-300"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs uppercase tracking-[0.2em] text-slate-500 mb-3">
                        Message
                      </label>

                      <textarea
                        name="message"
                        rows={6}
                        value={form.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell me about your project, opportunity, or idea..."
                        className="w-full resize-none rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-sm text-white placeholder:text-slate-600 outline-none focus:border-cyan-400/40 focus:bg-white/[0.08] transition-all duration-300"
                      />
                    </div>

                    {/* Button */}
                    <motion.button
                      type="submit"
                      whileHover={{
                        scale: 1.01,
                        y: -2,
                      }}
                      whileTap={{
                        scale: 0.98,
                      }}
                      className="group w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 px-6 py-4 text-sm font-semibold text-white shadow-xl shadow-blue-500/20 hover:shadow-cyan-500/30 transition-all duration-300"
                    >
                      <Send
                        size={17}
                        className="group-hover:translate-x-1 transition-transform"
                      />

                      Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
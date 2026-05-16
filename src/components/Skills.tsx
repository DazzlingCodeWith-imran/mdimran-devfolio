import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiBootstrap,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiLaravel,
  SiGraphql,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiPostman,
  SiFigma,
  SiVercel,
} from "react-icons/si";

import { Sparkles, Code2 } from "lucide-react";

const skillGroups = [
  {
    category: "Frontend",
    color: "from-blue-500 via-cyan-400 to-sky-400",
    border: "hover:border-cyan-400/30",
    glow: "hover:shadow-cyan-500/20",

    skills: [
      {
        name: "React.js",
        Icon: SiReact,
        color: "#61DAFB",
      },

      {
        name: "Next.js",
        Icon: SiNextdotjs,
        color: "#ffffff",
      },

      {
        name: "TypeScript",
        Icon: SiTypescript,
        color: "#3178C6",
      },

      {
        name: "JavaScript",
        Icon: SiJavascript,
        color: "#F7DF1E",
      },

      {
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
        color: "#06B6D4",
      },

      {
        name: "Bootstrap",
        Icon: SiBootstrap,
        color: "#7952B3",
      },

      {
        name: "HTML5",
        Icon: SiHtml5,
        color: "#E34F26",
      },

   
    ],
  },

  {
    category: "Backend",
    color: "from-violet-500 via-purple-500 to-fuchsia-400",
    border: "hover:border-violet-400/30",
    glow: "hover:shadow-violet-500/20",

    skills: [
      {
        name: "Node.js",
        Icon: SiNodedotjs,
        color: "#339933",
      },

      {
        name: "Express.js",
        Icon: SiExpress,
        color: "#ffffff",
      },

      {
        name: "Laravel",
        Icon: SiLaravel,
        color: "#FF2D20",
      },

      {
        name: "GraphQL",
        Icon: SiGraphql,
        color: "#E10098",
      },

      {
        name: "REST APIs",
        label: "API",
        color: "#6366f1",
      },

      {
        name: "JWT Auth",
        label: "JWT",
        color: "#00b4d8",
      },

      {
        name: "RBAC",
        label: "RBAC",
        color: "#a78bfa",
      },

      {
        name: "Microservices",
        label: "MS",
        color: "#22c55e",
      },
    ],
  },

  {
    category: "Database",
    color: "from-emerald-500 via-green-500 to-lime-400",
    border: "hover:border-green-400/30",
    glow: "hover:shadow-green-500/20",

    skills: [
      {
        name: "MongoDB",
        Icon: SiMongodb,
        color: "#47A248",
      },

      {
        name: "Mongoose",
        label: "ODM",
        color: "#880000",
      },

      {
        name: "PostgreSQL",
        Icon: SiPostgresql,
        color: "#4169E1",
      },
    ],
  },

  {
    category: "Tools & Platforms",
    color: "from-orange-500 via-amber-500 to-yellow-400",
    border: "hover:border-orange-400/30",
    glow: "hover:shadow-orange-500/20",

    skills: [
      {
        name: "Git",
        Icon: SiGit,
        color: "#F05032",
      },

      {
        name: "GitHub",
        Icon: SiGithub,
        color: "#ffffff",
      },

      {
        name: "Postman",
        Icon: SiPostman,
        color: "#FF6C37",
      },

      {
        name: "Figma",
        Icon: SiFigma,
        color: "#F24E1E",
      },

      {
        name: "Vercel",
        Icon: SiVercel,
        color: "#ffffff",
      },

      {
        name: "Hostinger",
        label: "H",
        color: "#673DE6",
      },

      {
        name: "FileZilla",
        label: "FZ",
        color: "#BF0000",
      },

      {
        name: "VS Code",
        label: "VSC",
        color: "#007ACC",
      },
    ],
  },
];

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null);

  const inView = useInView(ref, {
    once: true,
    margin: "-100px",
  });

  return (
    <section
      id="skills"
      className="relative py-28 overflow-hidden bg-[#060910]"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[450px] h-[450px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-1/4 w-[500px] h-[450px] rounded-full bg-violet-600/10 blur-[140px]" />

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
            Tech Arsenal
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-6">
            What I{" "}
            <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Work With
            </span>
          </h2>

          <p className="max-w-2xl mx-auto text-slate-400 leading-relaxed">
            A modern development stack focused on performance, scalability,
            beautiful interfaces, and production-grade backend systems.
          </p>

          <div className="w-28 h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-500 rounded-full mx-auto mt-8" />
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-7">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: gi * 0.12,
              }}
              whileHover={{
                y: -5,
                scale: 1.01,
              }}
              className={`group relative overflow-hidden rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-md p-7 transition-all duration-500 ${group.border} ${group.glow} hover:bg-white/[0.07] hover:shadow-[0_0_60px_rgba(59,130,246,0.12)]`}
            >
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br ${group.color}/10`}
              />

              {/* Top */}
              <div className="relative z-10 flex items-center gap-4 mb-7">
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${group.color} p-[1px]`}
                >
                  <div className="w-full h-full rounded-2xl bg-[#0b1220] flex items-center justify-center">
                    <Code2 size={20} className="text-white" />
                  </div>
                </div>

                <div>
                  <h3
                    className={`text-lg font-bold bg-gradient-to-r ${group.color} bg-clip-text text-transparent`}
                  >
                    {group.category}
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Modern development technologies
                  </p>
                </div>
              </div>

              {/* Skills */}
              <div className="relative z-10 flex flex-wrap gap-3">
                {group.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{
                      delay: gi * 0.12 + si * 0.05 + 0.2,
                    }}
                    whileHover={{
                      scale: 1.06,
                      y: -2,
                    }}
                    className="group/skill flex items-center gap-2.5 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  >
                    {/* Icon */}
                    {skill.Icon ? (
                      <skill.Icon
                        size={17}
                        style={{
                          color: skill.color,
                        }}
                        className="transition-transform duration-300 group-hover/skill:scale-110"
                      />
                    ) : (
                      <span
                        style={{
                          color: skill.color,
                        }}
                        className="text-[10px] font-bold px-2 py-1 rounded-lg bg-white/10 border border-white/10"
                      >
                        {skill.label}
                      </span>
                    )}

                    {/* Name */}
                    <span className="text-slate-300 text-sm font-medium">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
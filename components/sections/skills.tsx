"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { 
  Code, Database, Figma, Palette, PenTool, Server, Smartphone, Workflow
} from "lucide-react";
import { motion } from "framer-motion";

// Update icon sizes to fit the new premium glass container
const skillsCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="h-7 w-7" />,
    skills: ["JavaScript/TypeScript", "React.js", "Next.js", "Tailwind CSS", "Vue.js", "Angular"],
    color: "text-blue-500",
    glow: "group-hover:shadow-[0_0_15px_rgba(59,130,246,0.5)]"
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="h-7 w-7" />,
    skills: ["UI Design", "Prototyping", "Design Systems", "Accessibility"],
    color: "text-purple-500",
    glow: "group-hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
  },
  {
    title: "Backend Development",
    icon: <Server className="h-7 w-7" />,
    skills: ["Node.js", "Express", "RESTful APIs", "Authentication"],
    color: "text-green-500",
    glow: "group-hover:shadow-[0_0_15px_rgba(34,197,94,0.5)]"
  },
  {
    title: "Database",
    icon: <Database className="h-7 w-7" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Prisma"],
    color: "text-amber-500",
    glow: "group-hover:shadow-[0_0_15px_rgba(245,158,11,0.5)]"
  },
  {
    title: "Design Tools",
    icon: <PenTool className="h-7 w-7" />,
    skills: ["Figma", "Adobe XD", "Illustrator", "Sketch"],
    color: "text-pink-500",
    glow: "group-hover:shadow-[0_0_15px_rgba(236,72,153,0.5)]"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-7 w-7" />,
    skills: ["React Native", "Responsive Design", "PWAs", "App Performance", "Mobile UX"],
    color: "text-red-500",
    glow: "group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
  },
  {
    title: "Design Principles",
    icon: <Figma className="h-7 w-7" />,
    skills: ["Color Theory", "Typography", "Composition", "Design Systems", "Accessibility"],
    color: "text-indigo-500",
    glow: "group-hover:shadow-[0_0_15px_rgba(99,102,241,0.5)]"
  },
  {
    title: "Workflow",
    icon: <Workflow className="h-7 w-7" />,
    skills: ["Git", "GitHub/GitLab", "CI/CD", "Project Management"],
    color: "text-teal-500",
    glow: "group-hover:shadow-[0_0_15px_rgba(20,184,166,0.5)]"
  }
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Smooth Apple-like easing
  const smoothEasing = [0.25, 0.1, 0.25, 1];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: smoothEasing } 
    }
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Subtle Premium Background Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full filter blur-[120px] opacity-60"
          animate={{ scale: [1, 1.2, 1], x: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full filter blur-[120px] opacity-60"
          animate={{ scale: [1, 1.3, 1], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl">
        {/* Animated header section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: smoothEasing }}
        >
          <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
            My Skills
          </h2>
          <motion.div
            className="h-1.5 w-24 bg-gradient-to-r from-primary via-primary/80 to-transparent rounded-full mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: smoothEasing }}
            style={{ originX: 0.5 }}
          />
          <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl leading-relaxed font-light">
            I've developed expertise in a variety of <span className="font-medium text-foreground">technologies</span> and <span className="font-medium text-foreground">design methodologies</span> that help me build exceptional digital experiences.
          </p>
        </motion.div>

        {/* SKILLS GRID - Premium Glassmorphism Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skillsCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="h-full"
            >
              <div className="group relative h-full bg-white/40 dark:bg-[#1C1C1E]/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden flex flex-col">
                
                {/* Internal Glow Effect on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent dark:from-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0" />
                
                <div className="relative z-10 flex-1 flex flex-col">
                  {/* Glass Icon Wrapper */}
                  <div className={`mb-8 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-background/60 border border-black/5 dark:border-white/10 backdrop-blur-md shadow-sm group-hover:scale-110 transition-all duration-500 ${category.color} ${category.glow}`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold tracking-tight mb-5 text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-3.5 mt-auto">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill} 
                        className="flex items-center text-muted-foreground/80 group-hover:text-foreground/90 transition-colors duration-300 text-sm sm:text-base font-medium"
                      >
                        <span className={`h-1.5 w-1.5 rounded-full mr-3 opacity-40 group-hover:opacity-100 transition-all duration-300 bg-current ${category.color} group-hover:scale-125`}></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
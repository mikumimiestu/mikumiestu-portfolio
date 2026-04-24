"use client";

import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Car Rental",
    description: "Car rental website built with Vue.js and Tailwind CSS, to make it easier for users to find the car they want.",
    image: "/assets/project4.png",
    tags: ["Vue.js", "Tailwind CSS"],
    liveLink: "https://car-rental-tau-green.vercel.app/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 2,
    title: "Padang Profile",
    description: "Padang city profile website built with Nuxt.js and Tailwind CSS, to introduce the city of Padang to the public.",
    image: "/assets/project9.png",
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    liveLink: "https://padang-city-profile.vercel.app",
    githubLink: "https://github.com/mikumimiestu/Padang-city-profile.git",
    category: "web"
  },
  {
    id: 3,
    title: "Coffee App",
    description: "Coffee app built with Flutter, to make it easier for users to find coffee shops.",
    image: "/assets/project5.png",
    tags: ["Flutter", "Dart"],
    liveLink: "/404",
    githubLink: "/404",
    category: "mobile"
  },
  {
    id: 4,
    title: "Ramyo Me",
    description: "Website anime list with user profile and favorite anime list, built with TypeScript, React.js, and Tailwind CSS.",
    image: "/assets/project10.png",
    tags: ["TypeScript", "React.js", "Tailwind CSS"],
    liveLink: "https://ramyo-me.vercel.app/",
    githubLink: "https://github.com/mikumimiestu/ramyo-me.git",
    category: "web"
  },
  {
    id: 5,
    title: "Coffee Heaven",
    description: "Coffee Heaven is a coffee shop website built with Nuxt.js and Tailwind CSS, to make it easier for users to find coffee shops.",
    image: "/assets/project6.png",
    tags: ["TypeScript", "Nuxt.js", "Vue.js", "Tailwind CSS"],
    liveLink: "https://coffee-heaven-kappa.vercel.app/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 6,
    title: "Lux Stay",
    description: "Lux Stay is a hotel booking website built with Nuxt.js and Tailwind CSS, to make it easier for users to book hotels.",
    image: "/assets/project7.png",
    tags: ["TypeScript", "Nuxt.js", "Vue.js","Tailwind CSS"],
    liveLink: "https://luxstay-book-hotel.vercel.app/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 7,
    title: "E-Learning Coding App",
    description: "E-learning app for learning coding with interactive lessons and quizzes.",
    image: "/assets/project1.png",
    tags: ["React Native", "Expo"],
    liveLink: "/404",
    githubLink: "/404",
    category: "mobile"
  },
  {
    id: 8,
    title: "Anime Film App",
    description: "Anime film app built with React Native and Expo, to make it easier for users to find anime films.",
    image: "/assets/project2.png",
    tags: ["React Native", "Expo"],
    liveLink: "/404",
    githubLink: "/404",
    category: "mobile"
  },
  {
    id: 9,
    title: "Food Pizza App",
    description: "Food pizza app built with React Native and Expo, to make it easier for users to find food pizza.",
    image: "/assets/project3.png",
    tags: ["React Native", "Expo"],
    liveLink: "/404",
    githubLink: "/404",
    category: "mobile"
  },
  {
    id: 10,
    title: "Saham Kita",
    description: "Saham Kita is a stock market website built with Next.js, React.js, and Tailwind CSS, to make it easier for users to find stock market information.",
    image: "/assets/project8.png",
    tags: ["Next.js", "React.js", "Tailwind CSS", "TypeScript", "Shadcn UI"],
    liveLink: "https://saham-kita-id.vercel.app/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 11,
    title: "Sky Booker",
    description: "Sky Booker is a website for booking airline tickets and monitoring of aircraft departure schedules",
    image: "https://www.astbyte.com/portfolio/skybooker.png",
    tags: ["Angluar", "TypeScript", "Tailwind CSS"],
    liveLink: "https://sky-booker-ashen.vercel.app/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 12,
    title: "Team Project Managament (Simple CRUD)",
    description: "This project is created to manage the project team astbyte",
    image: "/assets/project11.png",
    tags: ["React", "Vite", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    liveLink: "/404",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 13,
    title: "Secure Bank",
    description: "Landing page for Secure Bank",
    image: "/assets/project12.png",
    tags: ["Angular", "TypeScript", "Tailwind CSS"],
    liveLink: "https://secure-bank-sigma.vercel.app/",
    githubLink: "https://github.com/mikumimiestu/secure-bank.git",
    category: "web"
  },
  {
    id: 14,
    title: "Money Tracker",
    description: "Website for tracking money and manage expense",
    image: "/assets/project13.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Recharts"],
    liveLink: "https://money-tracker.astbyte.com/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 15,
    title: "Pharmacy Medicare",
    description: "Pharmacy Medicare is a website for managing pharmacy and customer",
    image: "/assets/project14.png",
    tags: ["Vue", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    liveLink: "https://pharmacy-medicare.vercel.app/",
    githubLink: "https://github.com/mikumimiestu/pharmacy-medicare.git",
    category: "web"
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "web", label: "Web Development" },
  { value: "mobile", label: "Mobile Apps" },
  { value: "design", label: "UI/UX Design" }
];

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  // Smooth Apple-like easing
  const smoothEasing = [0.25, 0.1, 0.25, 1];

  const filteredProjects = activeCategory === "all" 
    ? projects.slice(0, 6) // Show only 6 projects when "All" is selected
    : projects.filter(project => project.category === activeCategory); // Show all projects when a category is selected

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Subtle Premium Background Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-[20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full filter blur-[120px] opacity-70"
          animate={{ scale: [1, 1.1, 1], x: [0, 40, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/5 rounded-full filter blur-[120px] opacity-70"
          animate={{ scale: [1, 1.2, 1], y: [0, -40, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: smoothEasing }}
            className="flex flex-col items-center"
          >
            <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl mb-6 bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60">
              My Projects
            </h2>
            <motion.div
              className="h-1.5 w-24 bg-gradient-to-r from-primary via-primary/80 to-transparent rounded-full mb-8"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 1, ease: smoothEasing }}
              style={{ originX: 0.5 }}
            />
            <p className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl mb-10 font-light leading-relaxed">
              Check out some of my recent work across different domains and <span className="font-medium text-foreground">technologies</span>.
            </p>
          </motion.div>

          {/* iOS Style Segmented Control Filter */}
          <motion.div 
            className="flex flex-wrap justify-center p-1.5 bg-secondary/10 backdrop-blur-xl border border-border/50 rounded-full shadow-inner"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: smoothEasing }}
          >
            {categories.map((category) => {
              const isActive = activeCategory === category.value;
              return (
                <button
                  key={category.value}
                  onClick={() => setActiveCategory(category.value)}
                  className={cn(
                    "relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 outline-none",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground/80"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeCategory"
                      className="absolute inset-0 bg-background rounded-full shadow-[0_2px_8px_rgba(0,0,0,0.08)] dark:shadow-[0_2px_8px_rgba(0,0,0,0.3)] border border-border/50"
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    />
                  )}
                  <span className="relative z-10">{category.label}</span>
                </button>
              );
            })}
          </motion.div>
        </div>

        {/* PROJECTS GRID - AnimatePresence for smooth filtering */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          <AnimatePresence mode="popLayout">
            {[...filteredProjects]
              .sort((a, b) => b.id - a.id)
              .map((project, index) => (
              <motion.div
                key={project.id} // use project.id as key for stable animations
                layout
                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.5, 
                  ease: smoothEasing,
                  delay: index * 0.05 // Stagger effect on load
                }}
              >
                <div className="group relative h-full bg-white/40 dark:bg-[#1C1C1E]/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-[2rem] p-3 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.1)] dark:hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 overflow-hidden flex flex-col">
                  
                  {/* Floating Image Container */}
                  <div className="relative overflow-hidden rounded-[1.5rem] aspect-video mb-4 bg-muted/30">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Glassy Hover Overlay */}
                    <div className="absolute inset-0 bg-background/20 dark:bg-background/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center gap-4">
                      {project.githubLink !== "/404" && (
                        <Button size="sm" variant="outline" className="bg-white/80 dark:bg-black/50 backdrop-blur-md border-white/20 hover:bg-white dark:hover:bg-black text-foreground rounded-full shadow-lg" asChild>
                          <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Code
                          </Link>
                        </Button>
                      )}
                      {project.liveLink !== "/404" && (
                        <Button size="sm" className="bg-primary/90 hover:bg-primary backdrop-blur-md text-primary-foreground rounded-full shadow-lg shadow-primary/20" asChild>
                          <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live
                          </Link>
                        </Button>
                      )}
                    </div>
                  </div>

                  <div className="px-3 pb-3 flex flex-col flex-1">
                    <h3 className="text-xl font-bold tracking-tight mb-2 text-foreground/90 group-hover:text-foreground transition-colors">{project.title}</h3>
                    <p className="text-muted-foreground/80 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>
                    
                    {/* Tags - Glass Pills */}
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="inline-flex items-center rounded-full border border-border/50 bg-background/50 px-3 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-colors group-hover:border-primary/20 group-hover:text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
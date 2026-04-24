"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { BookOpen, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  // Smooth Apple-like easing
  const smoothEasing = [0.25, 0.1, 0.25, 1];

  // Timeline items data
  const timelineItems = [
    {
      id: 1,
      title: "Founder & CEO",
      company: "PT. ASTRAL BYTE TECHNOLOGY (ASTBYTE)",
      period: "2023 - Present",
      description: "ASTBYTE is a software development company specializing in web and mobile applications.",
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      color: "bg-primary/10 border-primary/20",
      glow: "shadow-[0_0_20px_rgba(var(--primary),0.2)]"
    },
    {
      id: 3,
      title: "Informatics Engineering",
      company: "University Putra Indonesia 'YPTK' Padang",
      period: "2023 - Present",
      description: "Bachelor's degree with focus on web technologies and software engineering.",
      icon: <GraduationCap className="h-5 w-5 text-blue-500" />,
      color: "bg-blue-500/10 border-blue-500/20",
      glow: "shadow-[0_0_20px_rgba(59,130,246,0.2)]"
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative overflow-hidden bg-background"
    >
      {/* Subtle Premium Background Mesh */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] bg-primary/5 rounded-full filter blur-[120px] opacity-60"
          animate={{ scale: [1, 1.1, 1], x: [0, -20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/5 rounded-full filter blur-[120px] opacity-60"
          animate={{ scale: [1, 1.2, 1], y: [0, -30, 0] }}
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
            About Me
          </h2>
          <motion.div
            className="h-1.5 w-24 bg-gradient-to-r from-primary via-primary/80 to-transparent rounded-full mb-8"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
            transition={{ delay: 0.2, duration: 1, ease: smoothEasing }}
            style={{ originX: 0.5 }}
          />
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground/80 max-w-3xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.8, ease: smoothEasing }}
          >
            A passionate developer with over 2 years of experience creating <span className="font-medium text-foreground">beautiful</span> and <span className="font-medium text-foreground">functional</span> web experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* PERSONAL STORY SECTION */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.8, ease: smoothEasing }}
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <BookOpen className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">My <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Journey</span></h3>
            </div>
            
            <div className="space-y-8">
              <p className="text-muted-foreground/90 leading-relaxed text-lg">
                I'm <span className="font-bold text-foreground">Zaki Mushthafa Billah</span> from Indonesia, a passionate developer with a strong focus on frontend technologies. I specialize in creating responsive and user-friendly web applications using modern frameworks like React and Next.js.
              </p>
              
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border/50 to-transparent group-hover:from-primary/50 transition-all duration-500"></div>
                <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-background border-2 border-primary/40 group-hover:border-primary group-hover:bg-primary transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(var(--primary),0.6)]"></div>
                <p className="text-muted-foreground/90 leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-500">
                  With a background in both design and development, I bring a unique perspective to projects, bridging the gap between beautiful aesthetics and functional code.
                </p>
              </div>
              
              <div className="relative pl-8 group">
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-border/50 to-transparent group-hover:from-blue-500/50 transition-all duration-500"></div>
                <div className="absolute left-[-5px] top-2 h-3 w-3 rounded-full bg-background border-2 border-blue-500/40 group-hover:border-blue-500 group-hover:bg-blue-500 transition-all duration-500 group-hover:shadow-[0_0_12px_rgba(59,130,246,0.6)]"></div>
                <p className="text-muted-foreground/90 leading-relaxed text-lg group-hover:text-foreground/90 transition-colors duration-500">
                  I'm passionate about creating intuitive, accessible, and performant web experiences that delight users and drive business results.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-6">
                <Button 
                  variant="outline" 
                  className="h-12 px-8 rounded-2xl border-black/10 dark:border-white/10 bg-white/50 dark:bg-black/20 backdrop-blur-md hover:bg-white/80 dark:hover:bg-white/10 transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.05)]"
                  asChild
                >
                  <a href="/404" className="flex items-center gap-2 group">
                    <span className="font-semibold text-foreground/80 group-hover:text-foreground">Download CV</span>
                    <img 
                      src="https://www.svgrepo.com/show/375019/pdf-ext.svg" 
                      alt="PDF Icon" 
                      className="h-5 w-5 dark:invert opacity-70 group-hover:opacity-100 transition-opacity" 
                    />
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* TIMELINE SECTION - Premium Glassmorphism */}
          <motion.div
            className="space-y-10"
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.7, duration: 0.8, ease: smoothEasing }}
          >
            <div className="flex items-center gap-4">
              <div className="h-10 w-10 rounded-2xl bg-secondary/10 flex items-center justify-center border border-secondary/20">
                <Briefcase className="h-5 w-5 text-secondary" />
              </div>
              <h3 className="text-3xl font-bold tracking-tight">Experience <span className="text-muted-foreground/30">&</span> Education</h3>
            </div>
            
            <div className="relative pl-4 sm:pl-0">
              {/* Timeline glowing line */}
              <div className="absolute left-[27px] sm:left-6 top-6 bottom-6 w-[2px] bg-gradient-to-b from-primary/30 via-blue-500/20 to-transparent -z-10 rounded-full hidden sm:block"></div>
              
              <div className="space-y-8">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.15, duration: 0.8, ease: smoothEasing }}
                    className="relative"
                  >
                    {/* Hover glow effect behind card */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent blur-xl rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative flex flex-col sm:flex-row gap-4 sm:gap-6 group">
                      {/* Icon container */}
                      <div className="hidden sm:flex flex-col items-center">
                        <div className={`h-12 w-12 rounded-2xl ${item.color} border bg-background/50 backdrop-blur-md flex items-center justify-center shrink-0 group-hover:scale-110 transition-all duration-500 z-10 ${item.glow}`}>
                          {item.icon}
                        </div>
                      </div>

                      {/* Glassmorphic Card */}
                      <div className="flex-1 bg-white/40 dark:bg-[#1C1C1E]/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 rounded-3xl p-6 sm:p-7 shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_16px_40px_rgba(0,0,0,0.08)] dark:hover:shadow-[0_16px_40px_rgba(0,0,0,0.3)] transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                        
                        {/* Shimmer effect on hover */}
                        <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent group-hover:animate-[shimmer_1.5s_infinite] skew-x-12 z-0"></div>
                        
                        <div className="relative z-10">
                          <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground/90 group-hover:text-foreground transition-colors">{item.title}</h4>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1.5 sm:gap-3 mt-2 mb-4">
                            <span className="text-sm font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-500">{item.company}</span>
                            <span className="hidden sm:block text-muted-foreground/30">•</span>
                            <span className="inline-flex items-center rounded-full border border-border/50 bg-background/30 px-2.5 py-0.5 text-xs font-medium text-muted-foreground w-fit backdrop-blur-sm">
                              {item.period}
                            </span>
                          </div>
                          <p className="text-muted-foreground/80 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
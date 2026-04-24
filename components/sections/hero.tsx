"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const lastUpdateDate = "24 Apr 2026";

  const roles = [
    "Founder & CEO at ASTBYTE",
    "Full Stack Developer",
    "Frontend Specialist",
    "Backend Engineer",
    "UI/UX Enthusiast",
    "React Expert",
    "Next.js Pro"
  ];

  // Tech stack data - full list restored
  const techStack = [
    { name: "React", icon: "https://www.svgrepo.com/show/354259/react.svg" },
    { name: "Next.js", icon: "https://www.svgrepo.com/show/378440/nextjs-fill.svg" },
    { name: "Nuxt.js", icon: "https://drive.alkademi.id/v1/upload/program/1693564681828.png" },
    { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
    { name: "TypeScript", icon: "https://www.svgrepo.com/show/349540/typescript.svg" },
    { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/354431/tailwindcss-icon.svg" },
    { name: "PostgreSQL", icon: "https://www.svgrepo.com/show/354200/postgresql.svg" },
    { name: "Angular", icon: "https://www.svgrepo.com/show/373427/angular.svg" },
    { name: "Ubuntu", icon: "https://www.svgrepo.com/show/452122/ubuntu.svg" },
    { name: "Python", icon: "https://www.svgrepo.com/show/452091/python.svg" },
    { name: "Prisma", icon: "https://www.svgrepo.com/show/354210/prisma.svg" },
    { name: "Flutter", icon: "https://www.svgrepo.com/show/373604/flutter.svg" },
    { name: "Akamai", icon: "https://www.svgrepo.com/show/353385/akamai.svg" },
    { name: "Vercel", icon: "https://salesforceventures.com/wp-content/uploads/2022/05/Vercel-e1652981744227.png?w=1024" },
    { name: "Netlify", icon: "https://upload.wikimedia.org/wikipedia/commons/9/97/Netlify_logo_%282%29.svg" },
    { name: "GitHub", icon: "https://www.svgrepo.com/show/512317/github-142.svg" },
    { name: "Astro", icon: "https://www.svgrepo.com/show/373446/astro.svg" },
    { name: "Docker", icon: "https://www.svgrepo.com/show/448221/docker.svg" },
    { name: "Svelte", icon: "https://www.svgrepo.com/show/374109/svelte.svg" },
    { name: "Vue.js", icon: "https://www.svgrepo.com/show/493625/vue-vuejs-javascript-js-framework.svg" },
    { name: "Firebase", icon: "https://www.svgrepo.com/show/353735/firebase.svg" },
    { name: "Supabase", icon: "https://storage.googleapis.com/mailersend-website-bucket/integrations/supabase-logo-icon.png" },
  ];

  // Social links data
  const socialLinks = [
    { icon: Github, href: "https://github.com/mikumimiestu", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/zaki-mushthafa-billah-1a1762287/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/zakimshbll/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Jakiine", label: "Twitter" }
  ];

  // Animation variants (Smoother easing)
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 15 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring",
        stiffness: 100,
        damping: 15
      } 
    }
  };

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation effect
    let charIndex = 0;
    let isDeleting = false;
    let currentRole = roles[currentRoleIndex];
    let timeoutId: NodeJS.Timeout;
    
    const type = () => {
      if (isDeleting) {
        setTypingText(currentRole.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setTypingText(currentRole.substring(0, charIndex + 1));
        charIndex++;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        timeoutId = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2500); // Wait a bit longer before deleting
        return;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        currentRole = roles[(currentRoleIndex + 1) % roles.length];
      }

      const speed = isDeleting ? 40 : 120;
      timeoutId = setTimeout(type, speed);
    };

    timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, [currentRoleIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-20 overflow-hidden bg-background"
    >
      {/* Refined subtle background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden bg-gradient-to-b from-background/40 via-background/60 to-background/90">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full filter blur-[80px] opacity-60"
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -20, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-80 h-80 bg-secondary/10 rounded-full filter blur-[80px] opacity-60"
          animate={{ scale: [1, 1.2, 1], x: [0, -30, 0], y: [0, 20, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-accent/10 rounded-full filter blur-[80px] opacity-60"
          animate={{ scale: [1, 1.15, 1], x: [0, 15, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-14 lg:gap-20">
          
          {/* CONTENT SECTION */}
          <motion.div 
            className="flex flex-col gap-7"
            variants={container}
            initial="hidden"
            animate={isVisible ? "show" : "hidden"}
          >
            <motion.div className="space-y-4" variants={item}>
              <motion.h1 
                className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-foreground via-foreground/90 to-foreground/70"
              >
                Hi, I'm ZAKI
              </motion.h1>
              <div className="text-2xl sm:text-3xl md:text-4xl font-medium text-muted-foreground min-h-[3rem] flex items-center">
                <span>{typingText}</span>
                <motion.span 
                  className="ml-1 text-primary"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
                  style={{ width: "3px", height: "1.2em", backgroundColor: "hsl(var(--primary))", display: "inline-block" }}
                />
              </div>
            </motion.div>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground/90 max-w-lg leading-relaxed"
              variants={item}
            >
              I craft <span className="font-semibold text-foreground">exceptional digital experiences</span> with modern technologies and user-centered design principles.
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-4 pt-2"
              variants={item}
            >
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="h-12 w-12 rounded-full bg-background/50 backdrop-blur-sm border border-border/50 flex items-center justify-center text-muted-foreground transition-all duration-300 hover:text-primary hover:border-primary/30 hover:bg-primary/5 hover:shadow-[0_0_15px_rgba(var(--primary),0.15)]"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Tech stack badges - Clean Minimalist style */}
            <motion.div 
              className="flex flex-wrap gap-2.5 mt-2"
              variants={item}
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="group flex items-center gap-2 bg-background/60 hover:bg-background/80 border border-border/40 hover:border-border/80 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 backdrop-blur-md cursor-default"
                >
                  <div className="relative h-4 w-4 opacity-80 group-hover:opacity-100 transition-opacity">
                    <Image 
                      src={tech.icon} 
                      alt={tech.name}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="hidden sm:inline-block text-muted-foreground group-hover:text-foreground transition-colors">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Last update information */}
            <motion.div 
              className="mt-4 flex items-center gap-2 text-sm text-muted-foreground/60"
              variants={item}
            >
              <img 
                src="https://www.svgrepo.com/show/532097/clock-check.svg" 
                alt=""
                className="h-4 w-4 opacity-60 dark:invert dark:opacity-50"
              />
              <span>Last updated: <span className="font-medium text-muted-foreground/80">{lastUpdateDate}</span></span>
            </motion.div>
          </motion.div>
          
          {/* PROFILE IMAGE SECTION - Refined Premium Look */}
          <motion.div 
            className="relative mt-12 lg:mt-0 flex justify-center"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ delay: 0.4, duration: 0.8, type: "spring", stiffness: 50 }}
          >
            <div className="relative w-full max-w-[24rem] aspect-square">
              {/* Outer elegant ring */}
              <div className="absolute inset-0 rounded-full border border-primary/10 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5 shadow-2xl shadow-primary/5"></div>
              
              {/* Rotating dashed border effect */}
              <div className="absolute inset-[-10px] rounded-full border border-dashed border-border/40 animate-[spin_60s_linear_infinite]"></div>
              
              {/* Main image container */}
              <div className="absolute inset-3 rounded-full bg-background/80 backdrop-blur-xl border border-border/50 flex items-center justify-center overflow-hidden shadow-inner p-1">
                <motion.div className="relative w-full h-full rounded-full overflow-hidden bg-muted/30" whileHover={{ scale: 1.03 }} transition={{ type: "spring" }}>
                  <img
                    src="/images/profile-2.png"
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
              </div>
              
              {/* FLOATING GLASS BADGES - iOS Style */}
              <motion.div 
                className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-background/70 backdrop-blur-xl border border-border/50 rounded-2xl px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.9, type: "spring" }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-6 w-6">
                    <Image src="https://www.svgrepo.com/show/354259/react.svg" alt="React" fill className="object-contain" />
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-foreground/90">React Expert</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-background/70 backdrop-blur-xl border border-border/50 rounded-2xl px-4 py-2.5 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1, type: "spring" }}
                whileHover={{ y: -4 }}
              >
                <div className="flex items-center gap-3">
                  <div className="relative h-6 w-6 bg-foreground rounded-full p-1">
                    <Image src="https://www.svgrepo.com/show/378440/nextjs-fill.svg" alt="Next.js" fill className="object-contain invert dark:invert-0" />
                  </div>
                  <span className="text-sm font-semibold tracking-tight text-foreground/90">Next.js Pro</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute bottom-8 -right-6 sm:bottom-12 sm:-right-10 bg-background/70 backdrop-blur-xl border border-border/50 rounded-2xl px-4 py-3 shadow-[0_8px_30px_rgb(0,0,0,0.06)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.2)] z-10"
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 1.3, type: "spring" }}
                whileHover={{ x: -4 }}
              >
                <div className="flex flex-col items-start gap-0.5">
                  <span className="text-[11px] font-medium text-primary uppercase tracking-wider">Status</span>
                  <p className="text-sm font-semibold text-foreground">Building CloudNest ☁️</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [typingText, setTypingText] = useState("");
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const lastUpdateDate = "13 June 2025";

  const roles = [
    "Full Stack Developer",
    "Frontend Specialist",
    "Backend Engineer",
    "UI/UX Enthusiast",
    "React Expert",
    "Next.js Pro"
  ];

  // Tech stack data
  const techStack = [
    { name: "React", icon: "https://www.svgrepo.com/show/354259/react.svg" },
    { name: "Next.js", icon: "https://www.svgrepo.com/show/378440/nextjs-fill.svg" },
    { name: "Nuxt.js", icon: "https://drive.alkademi.id/v1/upload/program/1693564681828.png" },
    { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
    { name: "TypeScript", icon: "https://www.svgrepo.com/show/349540/typescript.svg" },
    { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
    { name: "PostgreSQL", icon: "https://www.svgrepo.com/show/354200/postgresql.svg" },
    { name: "Angular", icon: "https://www.svgrepo.com/show/452156/angular.svg" },
    { name: "Ubuntu", icon: "https://www.svgrepo.com/show/452122/ubuntu.svg" },
    { name: "Python", icon: "https://www.svgrepo.com/show/452091/python.svg" },
    { name: "Prisma", icon: "https://www.svgrepo.com/show/354210/prisma.svg" },
    { name: "Flutter", icon: "https://www.svgrepo.com/show/373604/flutter.svg" },
  ];

  // Social links data
  const socialLinks = [
    { icon: Github, href: "https://github.com/mikumimiestu", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/zaki-mushthafa-billah-1a1762287/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/zakimshbll/", label: "Instagram" },
    { icon: Twitter, href: "https://x.com/Jakiine", label: "Twitter" }
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1]
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
        // Pause at end of typing before deleting
        timeoutId = setTimeout(() => {
          isDeleting = true;
          type();
        }, 2000);
        return;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        currentRole = roles[(currentRoleIndex + 1) % roles.length];
      }

      const speed = isDeleting ? 50 : 150;
      timeoutId = setTimeout(type, speed);
    };

    timeoutId = setTimeout(type, 1000);
    return () => clearTimeout(timeoutId);
  }, [currentRoleIndex]);

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 overflow-hidden bg-gradient-to-b from-background/10 via-background/50 to-background/80"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full filter blur-3xl opacity-70"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
            y: [0, -20, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute top-1/3 right-1/4 w-72 h-72 bg-secondary/20 rounded-full filter blur-3xl opacity-70"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -30, 0],
            y: [0, 20, 0]
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 5
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 left-1/2 w-60 h-60 bg-accent/20 rounded-full filter blur-3xl opacity-70"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 15, 0],
            y: [0, 30, 0]
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 8
          }}
        />
      </div>

      <div className="container px-4 md:px-6 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          {/* Content with staggered animations */}
          <motion.div 
            className="flex flex-col gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div className="space-y-3" variants={item}>
              <motion.h1 
                className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Hi, I'm ZAKI
              </motion.h1>
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground min-h-[2.5rem] flex items-center"
                variants={item}
              >
                <span>{typingText}</span>
                <motion.span 
                  className="ml-1 text-primary"
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ 
                    width: "0.5rem",
                    height: "1.5rem",
                    backgroundColor: "hsl(var(--primary))",
                    display: "inline-block",
                    marginLeft: "0.25rem"
                  }}
                />
              </motion.h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              variants={item}
            >
              I craft <span className="font-medium text-primary">exceptional digital experiences</span> with modern technologies and user-centered design principles.
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-4 mt-2"
              variants={item}
            >
              {socialLinks.map((social) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full h-12 w-12 flex items-center justify-center text-muted-foreground transition-all hover:text-foreground hover:bg-muted border border-border hover:border-primary/50 shadow-sm hover:shadow-primary/20 hover:shadow-lg"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Tech stack badges */}
            <motion.div 
              className="flex flex-wrap gap-3 mt-4"
              variants={item}
            >
              {techStack.map((tech) => (
                <motion.div
                  key={tech.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-muted/80 hover:bg-muted border border-border/50 hover:border-primary/50 rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-300 backdrop-blur-sm shadow-sm hover:shadow-md"
                >
                  <div className="relative h-5 w-5">
                    <Image 
                      src={tech.icon} 
                      alt={tech.name}
                      fill
                      className="object-contain"
                      loading="lazy"
                    />
                  </div>
                  <span className="hidden sm:inline-block">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>
            
            {/* Last update information */}
            <motion.div 
              className="mt-6 flex items-center gap-2 text-sm text-muted-foreground/80"
              variants={item}
            >
              <motion.div
                whileHover={{ rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img 
                  src="https://www.svgrepo.com/show/532097/clock-check.svg" 
                  alt=""
                  className="h-5 opacity-40 dark:invert dark:opacity-80"
                />
              </motion.div>
              <span>Last updated: <span className="font-medium text-muted-foreground">{lastUpdateDate}</span></span>
            </motion.div>
          </motion.div>
          
          {/* Profile image with enhanced effects */}
          <motion.div 
            className="relative mt-12 lg:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-1.5 shadow-2xl">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 blur-xl animate-pulse"></div>
              <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(120,119,198,0.1)_70%)] animate-spin-slow"></div>
              <div className="h-full w-full rounded-full bg-muted/70 backdrop-blur-sm border border-border/50 flex items-center justify-center overflow-hidden shadow-inner">
                <motion.img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
              
              {/* Tech stack floating badges */}
              <motion.div 
                className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-background/90 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, type: "spring" }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative h-5 w-5 sm:h-6 sm:w-6">
                    <Image 
                      src="https://www.svgrepo.com/show/354259/react.svg" 
                      alt="React" 
                      fill 
                      className="object-contain" 
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">React Expert</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-background/90 backdrop-blur-sm border border-border rounded-lg px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, type: "spring" }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative h-5 w-5 sm:h-6 sm:w-6">
                    <Image 
                      src="https://www.svgrepo.com/show/378440/nextjs-fill.svg" 
                      alt="Next.js" 
                      fill 
                      className="object-contain dark:invert" 
                    />
                  </div>
                  <span className="text-xs sm:text-sm font-medium">Next.js Pro</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-2 -right-2 sm:-bottom-4 sm:-right-4 bg-background/90 backdrop-blur-sm border border-border rounded-lg px-3 py-1 sm:px-4 sm:py-2 shadow-lg z-10"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2, type: "spring" }}
                whileHover={{ y: -5 }}
              >
                <div className="text-center">
                  <span className="text-xs sm:text-sm font-medium text-primary">Currently working on</span>
                  <p className="text-xs sm:text-sm">Exciting new project!</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
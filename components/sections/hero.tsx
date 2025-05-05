"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Github, Instagram, Linkedin, Twitter, X } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Tech stack data
  const techStack = [
    { name: "React", icon: "https://www.svgrepo.com/show/354259/react.svg" },
    { name: "Next.js", icon: "https://www.svgrepo.com/show/378440/nextjs-fill.svg" },
    { name: "Nuxt.js", icon: "https://drive.alkademi.id/v1/upload/program/1693564681828.png" },
    { name: "Laravel", icon: "https://www.svgrepo.com/show/353985/laravel.svg" },
    { name: "TypeScript", icon: "https://www.svgrepo.com/show/349540/typescript.svg" },
    { name: "Tailwind CSS", icon: "https://www.svgrepo.com/show/374118/tailwind.svg" },
  ];

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 overflow-hidden"
    >

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Content with staggered animations */}
          <motion.div 
            className="flex flex-col gap-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.div className="space-y-2 -mt-12" variants={item}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Hi, I'm ZAKI
              </h1>
              <motion.h2 
                className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground"
                variants={item}
              >
                Full Stack Developer
              </motion.h2>
            </motion.div>
            
            <motion.p 
              className="text-lg text-muted-foreground max-w-md leading-relaxed"
              variants={item}
            >
              I craft exceptional digital experiences with modern technologies and user-centered design principles.
            </motion.p>
            
            <motion.div 
              className="flex items-center gap-4 mt-2"
              variants={item}
            >
              {[
                { icon: Github, href: "https://github.com/mikumimiestu", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/zaki-mushthafa-billah-1a1762287/", label: "LinkedIn" },
                { icon: Instagram, href: "https://www.instagram.com/zakimshbll/", label: "Instagram" },
                { icon: Twitter, href: "https://x.com/Jakiine", label: "Twitter" }
              ].map((social, i) => (
                <motion.div
                  key={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full h-12 w-12 flex items-center justify-center text-muted-foreground transition-all hover:text-foreground hover:bg-muted border border-border hover:border-primary/50 shadow-sm hover:shadow-primary/10"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.label}</span>
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
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2 bg-muted/50 border border-border rounded-full px-3 py-1.5 text-sm font-medium"
                >
                  <div className="relative h-5 w-5">
                    <Image 
                      src={tech.icon} 
                      alt={tech.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                  {/* <span>{tech.name}</span> */}
                </motion.div>
              ))}
            </motion.div>
            
            {/* <motion.div variants={item}>
              <Button 
                asChild 
                className="mt-4 h-12 px-8 text-base font-medium bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 shadow-lg hover:shadow-primary/30 transition-all"
              >
                <Link href="#contact">
                  Get In Touch
                </Link>
              </Button>
            </motion.div> */}
          </motion.div>
          
          {/* Profile image with enhanced effects */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-1.5">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 blur-xl animate-pulse"></div>
              <div className="h-full w-full rounded-full bg-muted/50 backdrop-blur-sm border border-border/50 flex items-center justify-center overflow-hidden shadow-2xl">
                <motion.img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.03 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                />
              </div>
              
              {/* Tech stack floating badges */}
              <motion.div 
                className="absolute -bottom-6 -left-6 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative h-6 w-6">
                    <Image src="https://www.svgrepo.com/show/354259/react.svg" alt="React" fill className="object-contain" />
                  </div>
                  <span className="text-sm font-medium">React Expert</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -top-6 -right-6 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
              >
                <div className="flex items-center gap-2">
                  <div className="relative h-6 w-6">
                    <Image src="https://www.svgrepo.com/show/378440/nextjs-fill.svg" alt="Next.js" fill className="object-contain dark:invert" />
                  </div>
                  <span className="text-sm font-medium">Next.js Pro</span>
                </div>
              </motion.div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background/80 backdrop-blur-sm border border-border rounded-lg px-4 py-2 shadow-lg">
              <span className="text-sm font-medium text-primary">Currently working on</span>
              <p className="text-sm">Exciting new project!</p>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll indicator with animation */}
      {/* <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ y: -10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
      >
        <Link href="#about" scroll={false} aria-label="Scroll down">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="h-8 w-8 text-muted-foreground hover:text-primary transition-colors" />
          </motion.div>
        </Link>
      </motion.div> */}
    </section>
  );
}
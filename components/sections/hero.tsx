"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="home" 
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background/0 dark:from-background dark:via-background dark:to-background/0"></div>
        <div className="absolute inset-0 opacity-20 dark:opacity-30">
          <div className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,_#444444_0,_transparent_25%)] dark:bg-[radial-gradient(circle_at_center,_#111111_0,_transparent_25%)] [mask-image:radial-gradient(circle_at_center,_transparent_0,_black_60%)]"></div>
        </div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className={cn(
            "flex flex-col gap-6 transition-all duration-700 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight">
                Hi, I'm <span className="text-primary">ZAKI</span>
              </h1>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-medium text-muted-foreground">
                Full Stack Developer
              </h2>
            </div>
            <p className="text-lg text-muted-foreground max-w-md">
              I create beautiful, responsive websites and applications with modern technologies and user-centered design principles.
            </p>
            {/* <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="#contact" scroll={false}>Get in Touch</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="#projects" scroll={false}>View Projects</Link>
              </Button>
            </div> */}
            <div className="flex items-center gap-4 mt-2">
              <Link
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full h-10 w-10 flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full h-10 w-10 flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-full h-10 w-10 flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
              >
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
            </div>
          </div>
          <div className={cn(
            "relative transition-all duration-700 delay-300 ease-out",
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            <div className="relative mx-auto w-full max-w-md aspect-square rounded-full bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-1">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary to-secondary opacity-10 blur-xl"></div>
              <div className="h-full w-full rounded-full bg-muted/50 backdrop-blur-sm border border-border flex items-center justify-center overflow-hidden">
                <img
                  src="/images/profile.jpg"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <Link href="#about" scroll={false} aria-label="Scroll down">
          <ChevronDown className="h-8 w-8 text-muted-foreground" />
        </Link>
      </div>
    </section>
  );
}
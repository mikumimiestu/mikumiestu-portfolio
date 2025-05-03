"use client";

import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { BookOpen, Briefcase, GraduationCap } from "lucide-react";
import Link from "next/link";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-muted/20"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl mb-4 transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            About Me
          </h2>
          <div className={cn(
            "h-1 w-20 bg-primary rounded-full mb-6 transition-all duration-700 delay-100",
            isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          )}></div>
          <p className={cn(
            "text-lg text-muted-foreground max-w-3xl transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            I'm a passionate developer with over 2 years of experience creating beautiful and functional web experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn(
            "space-y-6 transition-all duration-700 delay-300",
            isInView ? "translate-x-0 opacity-100" : "translate-x-[-20px] opacity-0"
          )}>
            <h3 className="text-2xl font-semibold">My Journey</h3>
            <p className="text-muted-foreground leading-relaxed">
              I'am ZAKI MUSHTHAFA BILLAH from Indonesia, a passionate developer with a strong focus on frontend technologies. I specialize in creating responsive and user-friendly web applications using modern frameworks like React and Next.js.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              With a background in both design and development, I bring a unique perspective to projects, bridging the gap between beautiful aesthetics and functional code. I'm passionate about creating intuitive, accessible, and performant web experiences that delight users.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              When I'm not coding, you can find me exploring new design trends, contributing to open-source projects, or enjoying outdoor adventures.
            </p>
            <div className="flex gap-4 pt-2">
              <Button asChild>
                {/* <Link href="#contact" scroll={false}>Contact Me</Link> */}
              </Button>
              {/* <Button variant="outline">Download CV</Button> */}
            </div>
          </div>

          <div className={cn(
            "grid grid-cols-1 gap-6 transition-all duration-700 delay-400",
            isInView ? "translate-x-0 opacity-100" : "translate-x-[20px] opacity-0"
          )}>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Experience & Education</h3>
              
              <Card className="overflow-hidden border-none shadow-md bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Frontend Developer</h4>
                    <p className="text-muted-foreground">Tech Nova Group • 2024 - Now</p>
                    <p className="mt-2">Leading frontend development for enterprise applications.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">CEO & Owner</h4>
                    <p className="text-muted-foreground">Tech Nova Group • 2024 - Now</p>
                    <p className="mt-2">Leading a team of developers to deliver high-quality software solutions.</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden border-none shadow-md bg-card hover:shadow-lg transition-shadow">
                <CardContent className="p-6 flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-xl font-medium">Informatics Engineering</h4>
                    <p className="text-muted-foreground">University Putra Indonesia "YPTK" Padang • 2023 - Now</p>
                    <p className="mt-2">Bachelor's degree with focus on web technologies.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
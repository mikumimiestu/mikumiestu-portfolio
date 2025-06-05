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

  // Timeline items data
  const timelineItems = [
    {
      id: 1,
      title: "Founder AstByte",
      company: "AstByte",
      period: "2023 - Present",
      description: "AstByte is a software development company specializing in web and mobile applications.",
      icon: <Briefcase className="h-5 w-5 text-primary" />,
      color: "bg-primary/10"
    },
    {
      id: 3,
      title: "Informatics Engineering",
      company: "University Putra Indonesia 'YPTK' Padang",
      period: "2023 - Present",
      description: "Bachelor's degree with focus on web technologies and software engineering.",
      icon: <GraduationCap className="h-5 w-5 text-blue-500" />,
      color: "bg-blue-500/10"
    }
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 relative overflow-hidden"
    >
      
      <div className="container px-4 md:px-6">
        {/* Animated header section */}
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            About Me
          </h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.p
            className="text-xl text-muted-foreground max-w-3xl leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            A passionate developer with over 2 years of experience creating beautiful and functional web experiences.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Personal story section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold">My <span className="text-primary">Journey</span></h3>
            
            <div className="space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm <span className="font-medium text-foreground">Zaki Mushthafa Billah</span> from Indonesia, a passionate developer with a strong focus on frontend technologies. I specialize in creating responsive and user-friendly web applications using modern frameworks like React and Next.js.
              </p>
              
              <div className="relative pl-6 border-l-2 border-primary/20">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary mt-1 -ml-[7px]"></div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  With a background in both design and development, I bring a unique perspective to projects, bridging the gap between beautiful aesthetics and functional code.
                </p>
              </div>
              
              <div className="relative pl-6 border-l-2 border-primary/20">
                <div className="absolute left-0 top-0 w-3 h-3 rounded-full bg-primary mt-1 -ml-[7px]"></div>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  I'm passionate about creating intuitive, accessible, and performant web experiences that delight users and drive business results.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                {/* <Button asChild className="h-11 px-8">
                  <Link href="#contact" scroll={false}>
                    Contact Me
                  </Link>
                </Button> */}
                <Button variant="outline" className="h-11 px-8">
                  <a href="/404">Download CV</a>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Timeline section */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <h3 className="text-3xl font-semibold">Experience <span className="text-primary">&</span> Education</h3>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-0 h-full w-0.5 bg-gradient-to-b from-primary/20 via-primary to-primary/20 -z-10"></div>
              
              <div className="space-y-6">
                {timelineItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.9 + index * 0.15 }}
                  >
                    <Card className="border shadow-sm hover:shadow-md transition-shadow overflow-hidden group">
                      <CardContent className="p-0">
                        <div className="flex gap-6 p-6">
                          <div className={`h-12 w-12 rounded-full ${item.color} flex items-center justify-center shrink-0 mt-1 group-hover:scale-110 transition-transform`}>
                            {item.icon}
                          </div>
                          <div>
                            <h4 className="text-xl font-medium">{item.title}</h4>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mt-1">
                              <span className="text-muted-foreground font-medium">{item.company}</span>
                              <span className="hidden sm:block text-muted-foreground">•</span>
                              <span className="text-muted-foreground">{item.period}</span>
                            </div>
                            <p className="mt-3 text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
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
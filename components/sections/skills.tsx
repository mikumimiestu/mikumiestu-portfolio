"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { 
  Code, Database, Figma, Palette, PenTool, Server, Smartphone, Workflow
} from "lucide-react";
import { motion } from "framer-motion";

const skillsCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="h-10 w-10" />,
    skills: ["JavaScript/TypeScript", "React.js", "Next.js", "Tailwind CSS", "Vue.js", "Angular"],
    color: "text-blue-500"
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="h-10 w-10" />,
    skills: ["UI Design", "Prototyping", "Design Systems", "Accessibility"],
    color: "text-purple-500"
  },
  {
    title: "Backend Development",
    icon: <Server className="h-10 w-10" />,
    skills: ["Node.js", "Express", "RESTful APIs", "Authentication"],
    color: "text-green-500"
  },
  {
    title: "Database",
    icon: <Database className="h-10 w-10" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase", "Prisma"],
    color: "text-amber-500"
  },
  {
    title: "Design Tools",
    icon: <PenTool className="h-10 w-10" />,
    skills: ["Figma", "Adobe XD", "Illustrator", "Sketch"],
    color: "text-pink-500"
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-10 w-10" />,
    skills: ["React Native", "Responsive Design", "PWAs", "App Performance", "Mobile UX"],
    color: "text-red-500"
  },
  {
    title: "Design Principles",
    icon: <Figma className="h-10 w-10" />,
    skills: ["Color Theory", "Typography", "Composition", "Design Systems", "Accessibility"],
    color: "text-indigo-500"
  },
  {
    title: "Workflow",
    icon: <Workflow className="h-10 w-10" />,
    skills: ["Git", "GitHub/GitLab", "CI/CD", "Project Management"],
    color: "text-teal-500"
  }
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 bg-gradient-to-b from-background to-muted/10"
    >
      <div className="container px-4 md:px-6">
        <motion.div 
          className="flex flex-col items-center text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl mb-4">
            My Skills
          </h2>
          <motion.div
            className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full mb-6"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            I've developed expertise in a variety of technologies and design methodologies that help me build exceptional digital experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ 
                delay: 0.1 + index * 0.1,
                duration: 0.6,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ y: -5 }}
            >
              <Card className="border bg-card/50 hover:bg-card hover:shadow-lg transition-all h-full group overflow-hidden">
                <CardContent className="p-6 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className={`mb-4 ${category.color} transition-colors group-hover:text-primary`}>
                    {category.icon}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  
                  <ul className="space-y-2">
                    {category.skills.map((skill) => (
                      <li 
                        key={skill} 
                        className="text-muted-foreground flex items-center before:content-[''] before:block before:w-2 before:h-2 before:rounded-full before:bg-primary/50 before:mr-2 group-hover:text-foreground transition-colors"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
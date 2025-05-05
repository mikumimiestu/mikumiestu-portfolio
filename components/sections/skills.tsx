"use client";

import { useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { 
  Code, Database, Figma, Palette, PenTool, Server, Smartphone, Workflow
} from "lucide-react";

const skillsCategories = [
  {
    title: "Frontend Development",
    icon: <Code className="h-10 w-10" />,
    skills: ["HTML/CSS", "JavaScript/TypeScript", "React.js", "Next.js", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "UI/UX Design",
    icon: <Palette className="h-10 w-10" />,
    skills: ["UI Design", "UX Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"]
  },
  {
    title: "Backend Development",
    icon: <Server className="h-10 w-10" />,
    skills: ["Node.js", "Express", "RESTful APIs", "GraphQL", "Authentication"]
  },
  {
    title: "Database",
    icon: <Database className="h-10 w-10" />,
    skills: ["MongoDB", "PostgreSQL", "Firebase", "Supabase"]
  },
  {
    title: "Design Tools",
    icon: <PenTool className="h-10 w-10" />,
    skills: ["Figma", "Adobe XD", "Illustrator", "Sketch"]
  },
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-10 w-10" />,
    skills: ["React Native", "Responsive Design", "PWAs", "App Performance", "Mobile UX"]
  },
  {
    title: "Design Principles",
    icon: <Figma className="h-10 w-10" />,
    skills: ["Color Theory", "Typography", "Composition", "Design Systems", "Accessibility"]
  },
  {
    title: "Workflow",
    icon: <Workflow className="h-10 w-10" />,
    skills: ["Git", "GitHub/GitLab", "CI/CD", "Project Management"]
  }
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl mb-4 transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            My Skills
          </h2>
          <div className={cn(
            "h-1 w-20 bg-primary rounded-full mb-6 transition-all duration-700 delay-100",
            isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          )}></div>
          <p className={cn(
            "text-lg text-muted-foreground max-w-3xl transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            I've developed expertise in a variety of technologies and design methodologies.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsCategories.map((category, index) => (
            <Card
              key={category.title}
              className={cn(
                "border bg-card hover:shadow-md transition-all duration-500 ease-in-out hover:-translate-y-1",
                isInView 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-10 opacity-0",
                isInView && `transition-delay-[${300 + (index * 100)}ms]`
              )}
              style={{
                transitionDelay: isInView ? `${300 + (index * 100)}ms` : "0ms"
              }}
            >
              <CardContent className="p-6">
                <div className="mb-4 text-primary">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{category.title}</h3>
                <ul className="space-y-2">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-muted-foreground">
                      {skill}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
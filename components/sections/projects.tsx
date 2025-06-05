"use client";

import { useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useInView } from "@/hooks/use-in-view";
import { cn } from "@/lib/utils";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

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
  }
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

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section
      id="projects"
      ref={ref}
      className="py-20 bg-muted/20"
    >
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className={cn(
            "text-3xl font-bold tracking-tight sm:text-4xl mb-4 transition-all duration-700",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            My Projects
          </h2>
          <div className={cn(
            "h-1 w-20 bg-primary rounded-full mb-6 transition-all duration-700 delay-100",
            isInView ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"
          )}></div>
          <p className={cn(
            "text-lg text-muted-foreground max-w-3xl mb-8 transition-all duration-700 delay-200",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            Check out some of my recent work across different domains and technologies.
          </p>

          <div className={cn(
            "flex flex-wrap justify-center gap-2 mb-12 transition-all duration-700 delay-300",
            isInView ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          )}>
            {categories.map((category) => (
              <Button
                key={category.value}
                variant={activeCategory === category.value ? "default" : "outline"}
                size="sm"
                onClick={() => setActiveCategory(category.value)}
                className="px-4 py-2 rounded-full"
              >
                {category.label}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Mengurutkan Project Berdasarkan ID Terbesar dan Terkecil */}
          {[...filteredProjects]
            .sort((a, b) => b.id - a.id)
            .slice(0, 6)
            .map((project, index) => (
            <Card
              key={project.title}
              className={cn(
                "overflow-hidden border bg-card group hover:shadow-lg transition-all duration-500 ease-in-out hover:-translate-y-2",
                isInView 
                  ? "translate-y-0 opacity-100" 
                  : "translate-y-20 opacity-0",
                isInView && `transition-delay-[${400 + (index * 100)}ms]`
              )}
              style={{
                transitionDelay: isInView ? `${400 + (index * 100)}ms` : "0ms"
              }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex gap-4">
                    <Button size="sm" variant="outline" className="bg-background/20 backdrop-blur-sm" asChild>
                      <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </Link>
                    </Button>
                    <Button size="sm" className="bg-primary/90 backdrop-blur-sm" asChild>
                      <Link href={project.liveLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
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
    title: "Webcraft",
    description: "A website to display products sold by a webcraft and make it easier for users to order products.",
    image: "https://www.technovagroupinc.com/static/media/webcraft.e061e2396bcece9503b4.png",
    tags: ["Next.js", "Tailwind CSS"],
    liveLink: "https://web-dev-web.vercel.app/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 2,
    title: "First Nuxt.js",
    description: "My first website using Nuxt.js, built with Nuxt.js and Tailwind CSS, to introduce Nuxt.js.",
    image: "https://www.technovagroupinc.com/static/media/nuxt1.587ef4c76e92e04c1a69.png",
    tags: ["Nuxt.js", "Vue.js", "Tailwind CSS"],
    liveLink: "https://first-project-nuxtjs.vercel.app/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 3,
    title: "TNG Coffee Shop",
    description: "Coffee Shop Website to introduce coffee products sold by a coffee shop and make it easier for users to order products.",
    image: "https://www.technovagroupinc.com/static/media/coffee-tng.12a66ec5fe571788ae3a.png",
    tags: ["TypeScript", "React.js", "Tailwind CSS"],
    liveLink: "https://tng-coffe-1.tng-portfolio.my.id/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 4,
    title: "Pet Shop",
    description: "Pet shop website built with Vue.js and Tailwind CSS, to make it easier for users to find the pets they want.",
    image: "https://www.technovagroupinc.com/static/media/tng-ptshp-1.ed38f6684e04c3b92ed6.png",
    tags: ["Vue.js", "Tailwind CSS"],
    liveLink: "https://tng-ptshp-1.tng-portfolio.my.id/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 5,
    title: "Company Profile",
    description: "Immersive photo gallery showcasing travel photography with location mapping and storytelling.",
    image: "https://www.technovagroupinc.com/static/media/tng-profile-1.c480aedc8c84a9a78883.png",
    tags: ["TypeScript", "React.js", "Tailwind CSS"],
    liveLink: "https://tng-profile-1.tng-portfolio.my.id/",
    githubLink: "/404",
    category: "web"
  },
  {
    id: 6,
    title: "Admin Dashboard",
    description: "Admin dashboard for managing user data and displaying statistics using Chart.js.",
    image: "https://www.technovagroupinc.com/static/media/tng-adm-1.67509ef38abf5eeee5f1.png",
    tags: ["TypeScript", "Next.js", "Tailwind CSS"],
    liveLink: "https://tng-adm-1.vercel.app/dashboard",
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
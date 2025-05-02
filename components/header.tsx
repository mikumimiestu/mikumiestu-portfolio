"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      const offset = 80; // Adjust this value based on your header height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        isScrolled ? "py-2" : "py-4"
      )}
    >
      <div className="container px-4 mx-auto">
        <div className={cn(
          "rounded-full transition-all duration-300 backdrop-blur-md border px-4",
          isScrolled 
            ? "bg-background/80 py-2" 
            : "bg-background/50 py-3"
        )}>
          <div className="flex items-center justify-between">
            <button
              onClick={() => handleNavClick("#home")}
              className="text-xl font-bold transition-transform hover:scale-105"
            >
              Portfolio<span className="text-primary">.</span>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex md:items-center md:gap-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.href)}
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-full transition-colors",
                    activeSection === item.href.substring(1)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {item.name}
                </button>
              ))}
              <div className="ml-2 flex items-center gap-2">
                <ModeToggle />
                <Button size="sm" className="rounded-full">Resume</Button>
              </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex items-center gap-2 md:hidden">
              <ModeToggle />
              <Button
                variant="ghost"
                size="icon"
                aria-label="Toggle Menu"
                className="rounded-full"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-x-0 top-[72px] z-40 transform rounded-2xl bg-background/95 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden mx-4",
          isOpen 
            ? "translate-y-0 opacity-100" 
            : "translate-y-[-100%] opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.href)}
              className={cn(
                "px-4 py-3 text-lg font-medium rounded-xl transition-colors text-left",
                activeSection === item.href.substring(1)
                  ? "bg-primary/10 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted"
              )}
            >
              {item.name}
            </button>
          ))}
          <Button className="mt-4 rounded-xl">Resume</Button>
        </nav>
      </div>
    </header>
  );
}
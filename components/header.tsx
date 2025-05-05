"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

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
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

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
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setIsOpen(false);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return null;
  }

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
            : "bg-background/50 py-3",
          "border-border/50"
        )}>

          {/* Logo and Navigation */}
          <div className="flex items-center justify-between">
          <button
            onClick={() => handleNavClick("#home")}
            className="text-xl font-bold transition-transform hover:scale-105 flex items-center gap-2"
          >
            <img src="/images/icon.png" alt="Mikumiestu Icon" className="w-6 h-6" />
            Mikumiestu.
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
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full"
                  onClick={toggleTheme}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? (
                    <Sun className="h-5 w-5" />
                  ) : (
                    <Moon className="h-5 w-5" />
                  )}
                </Button>
              </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="flex items-center gap-2 md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full"
                onClick={toggleTheme}
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>
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
          "fixed mt-4 inset-x-0 top-[72px] z-40 transform rounded-2xl bg-background/95 p-6 shadow-lg backdrop-blur-lg transition-all duration-300 ease-in-out md:hidden mx-4",
          "border border-border/50",
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
        </nav>
      </div>
    </header>
  );
}
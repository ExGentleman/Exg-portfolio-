"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 px-6 py-4",
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-lg" : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center transition-transform group-hover:scale-110">
            <Code2 className="text-white w-6 h-6" />
          </div>
          <span className="font-headline font-bold text-xl tracking-tight">
            ExGentleman<span className="text-accent">Technologies</span>
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-medium hover:text-accent transition-colors"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="px-4 py-2 rounded-md bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all shadow-md active:scale-95"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-background/95 backdrop-blur-xl border-b border-border p-6 flex flex-col gap-4 animate-in slide-in-from-top duration-300 md:hidden">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-lg font-medium py-2"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/resume.pdf"
            className="w-full text-center px-4 py-3 rounded-md bg-primary text-white font-medium shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}

"use client";

import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Database, Layout, Smartphone, Code, Palette } from "lucide-react";

const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    icon: <Code className="text-primary" />,
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 85 },
      { name: "Java", level: 90 },
      { name: "JavaScript", level: 95 },
    ],
  },
  {
    title: "Web Designing",
    icon: <Layout className="text-accent" />,
    skills: [
      { name: "HTML5 & CSS3", level: 98 },
      { name: "React / Next.js", level: 92 },
      { name: "Tailwind CSS", level: 95 },
    ],
  },
  {
    title: "Mobile & Database",
    icon: <Database className="text-primary" />,
    skills: [
      { name: "Mobile App Dev", level: 88 },
      { name: "MySQL / Postgre", level: 90 },
      { name: "Database Optimization", level: 85 },
    ],
  },
  {
    title: "Graphics Designing",
    icon: <Palette className="text-accent" />,
    skills: [
      { name: "Business Card Design", level: 94 },
      { name: "Branding & Identity", level: 90 },
      { name: "Printing & Layout", level: 88 },
    ],
  },
];

export function Skills() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Technical Proficiency</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my expertise across the modern technology stack, from low-level algorithms to creative brand identity and high-quality print design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SKILL_CATEGORIES.map((cat, i) => (
            <div key={cat.title} className="p-8 rounded-2xl glass-morphism hover:border-primary/50 transition-colors group">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-lg bg-background border border-border group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h3 className="font-headline text-xl font-bold">{cat.title}</h3>
              </div>
              
              <div className="space-y-6">
                {cat.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={mounted ? skill.level : 0} className="h-1.5" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

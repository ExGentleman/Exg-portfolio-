
"use client";

import { useState } from "react";
import Image from "next/image";
import { ExternalLink, Github } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const PROJECTS = [
  {
    title: "EcoTrack Mobile",
    description: "A comprehensive sustainability tracking app built for cross-platform utility. Features real-time footprint calculation and social gamification.",
    image: PlaceHolderImages.find(img => img.id === 'project-1')?.imageUrl,
    tags: ["Java", "Android SDK", "Firebase"],
    live: "#",
    github: "#",
    category: "Mobile"
  },
  {
    title: "ExGentleman Technologies CMS",
    description: "Enterprise-grade content management system with a focus on SEO and performance. Built with security and scalability as core pillars.",
    image: PlaceHolderImages.find(img => img.id === 'project-2')?.imageUrl,
    tags: ["React", "MySQL", "Tailwind"],
    live: "#",
    github: "#",
    category: "Web"
  },
  {
    title: "Zenith Brand Identity",
    description: "Complete corporate rebranding including high-fidelity business cards, logo design systems, and premium print layouts for marketing collateral.",
    image: PlaceHolderImages.find(img => img.id === 'project-4')?.imageUrl,
    tags: ["Adobe Suite", "Branding", "Print Design"],
    live: "#",
    github: "#",
    category: "Graphics"
  },
  {
    title: "DataViz Analytics",
    description: "Advanced data visualization dashboard for analyzing complex MySQL databases. Provides intuitive insights through interactive charts.",
    image: PlaceHolderImages.find(img => img.id === 'project-3')?.imageUrl,
    tags: ["Python", "Pandas", "Node.js"],
    live: "#",
    github: "#",
    category: "Database"
  },
  {
    title: "Lumina Print Campaign",
    description: "High-end print design for an international marketing campaign, featuring bespoke typography, premium layouts, and specialized print finishes.",
    image: PlaceHolderImages.find(img => img.id === 'project-5')?.imageUrl,
    tags: ["InDesign", "Print", "Typography"],
    live: "#",
    github: "#",
    category: "Graphics"
  },
  {
    title: "Pulse Health Tracker",
    description: "Wearable-integrated health monitor providing deep analytics on cardiovascular health and sleep patterns using machine learning models.",
    image: PlaceHolderImages.find(img => img.id === 'project-6')?.imageUrl,
    tags: ["React Native", "Python", "HealthKit"],
    live: "#",
    github: "#",
    category: "Mobile"
  }
];

const CATEGORIES = ["All", "Web", "Mobile", "Graphics", "Database"];

export function ProjectGallery() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-4">Featured Projects</h2>
            <p className="text-muted-foreground">
              A selection of my recent work across web development, mobile applications, graphics design, and database architecture. Each project represents a unique challenge solved through code or design.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Badge
                key={cat}
                variant={activeFilter === cat ? "default" : "outline"}
                onClick={() => setActiveFilter(cat)}
                className={cn(
                  "px-4 py-1.5 cursor-pointer transition-all active:scale-95",
                  activeFilter === cat ? "bg-primary text-white" : "hover:bg-primary/10 hover:border-primary"
                )}
              >
                {cat}
              </Badge>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 min-h-[400px]">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, i) => (
              <div 
                key={project.title} 
                className="group flex flex-col rounded-2xl overflow-hidden glass-morphism border border-white/5 hover:border-accent/30 transition-all duration-300 animate-in fade-in zoom-in-95"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary/20">
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                      data-ai-hint="project showcase"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                    <div className="flex gap-3">
                      <a href={project.live} className="p-2 rounded-full bg-primary text-white hover:scale-110 transition-transform"><ExternalLink size={20} /></a>
                      <a href={project.github} className="p-2 rounded-full bg-secondary text-white hover:scale-110 transition-transform"><Github size={20} /></a>
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-[10px] uppercase tracking-wider text-accent border-accent/20">
                      {project.category}
                    </Badge>
                  </div>
                  <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-accent transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground text-sm line-clamp-3 mb-6 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[11px] font-code px-2 py-1 rounded bg-secondary/50 text-primary-foreground/80">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-24 text-center">
              <p className="text-muted-foreground">No projects found for this category.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

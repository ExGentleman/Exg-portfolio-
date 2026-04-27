
"use client";

import { ArrowRight, Terminal, Mail } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-6 text-center z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-white/5 text-accent text-sm font-medium mb-6 animate-fade-in-up opacity-0">
          <Terminal size={14} />
          <span>Crafting Digital & Creative Excellence</span>
        </div>
        
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 animate-fade-in-up opacity-0 [animation-delay:200ms]">
          Transforming Ideas into <br />
          <span className="gradient-text">Robust Solutions</span>
        </h1>
        
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-in-up opacity-0 [animation-delay:400ms]">
          Full-stack developers specializing in scalable mobile apps, high-performance web systems, and creative graphics design for branding and printing.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 [animation-delay:600ms]">
          <Link
            href="#projects"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-primary text-white font-semibold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25 group"
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-morphism text-foreground font-semibold hover:bg-white/5 transition-all flex items-center justify-center gap-2"
          >
            <Mail size={18} className="text-accent" />
            Contact Me
          </Link>
        </div>
      </div>
    </section>
  );
}

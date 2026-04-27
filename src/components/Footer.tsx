import Link from "next/link";
import { Github, Twitter, Linkedin, Code2, Download, Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center">
              <Code2 className="text-white w-5 h-5" />
            </div>
            <span className="font-headline font-bold text-lg tracking-tight">
              ExGentleman Technologies
            </span>
          </Link>

          <div className="flex gap-8 text-sm text-muted-foreground font-medium">
            <Link href="#about" className="hover:text-accent transition-colors">About</Link>
            <Link href="#skills" className="hover:text-accent transition-colors">Skills</Link>
            <Link href="#projects" className="hover:text-accent transition-colors">Projects</Link>
            <Link href="#contact" className="hover:text-accent transition-colors">Contact</Link>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <a href="https://linkedin.com/ExGentleman" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <Linkedin size={18} />
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <Github size={18} />
            </a>
            <a href="https://x.com/@ExGentlemans" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <Twitter size={18} />
            </a>
            <a href="https://facebook.com/ExGentleman Zw" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <Facebook size={18} />
            </a>
            <a href="https://instagram.com/@exgentleman_technologies" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <Instagram size={18} />
            </a>
            <a href="https://wa.me/263714658133" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
            </a>
            <a href="https://tiktok.com/@exgentlemantechnologies" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:bg-primary hover:border-primary hover:text-white transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border gap-4 text-xs text-muted-foreground uppercase tracking-widest font-bold">
          <p>© 2026 ExGentleman Technologies. All rights reserved.</p>
          <a href="/resume.pdf" className="flex items-center gap-2 text-accent hover:underline">
            <Download size={14} />
            Download CV
          </a>
        </div>
      </div>
    </footer>
  );
}

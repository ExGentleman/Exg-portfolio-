"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-secondary/10">
      <div className="max-w-7xl mx-auto px-6">  
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Let's Collaborate</h2>
            <p className="text-muted-foreground mb-12 max-w-md">
              Available for full-time opportunities, freelance projects, or speaking engagements. Let's discuss how we can build something amazing together.
            </p>

            <div className="space-y-8">
              <a 
                href="mailto:exgentlemantechnologies@gmail.com" 
                className="flex items-center gap-4 group/contact-item transition-all max-w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/contact-item:bg-primary group-hover/contact-item:text-white transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Email Me</p>
                  <p className="text-lg font-medium group-hover/contact-item:text-accent transition-colors">info@exgentlemantechnologies.co.zw</p>
                </div>
              </a>
              
              <a 
                href="tel:+263714658133" 
                className="flex items-center gap-4 group/contact-item transition-all max-w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent group-hover/contact-item:bg-accent group-hover/contact-item:text-accent-foreground transition-all">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Call Me</p>
                  <p className="text-lg font-medium group-hover/contact-item:text-accent transition-colors">+263 71 465 8133</p>
                </div>
              </a>

              <a 
                href="https://maps.google.com/?q=Bindura+University+of+Science+Education,+Zimbabwe" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 group/contact-item transition-all max-w-fit"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary group-hover/contact-item:bg-primary group-hover/contact-item:text-white transition-all">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Location</p>
                  <p className="text-lg font-medium group-hover/contact-item:text-accent transition-colors">Bindura, Zimbabwe</p>
                </div>
              </a>
            </div>
          </div>

          <div className="glass-morphism p-8 rounded-3xl border border-white/5 shadow-2xl">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center text-accent mb-6 animate-bounce">
                  <CheckCircle2 size={40} />
                </div>
                <h3 className="font-headline text-2xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground">Thank you for reaching out. I'll get back to you within 4 hours.</p>
                <Button onClick={() => setSubmitted(false)} variant="link" className="mt-8 text-accent">Send another message</Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium pl-1">Full Name</label>
                    <Input placeholder="ExGentleman Tech" required className="bg-background/50 border-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium pl-1">Email Address</label>
                    <Input type="email" placeholder="exgentleman@tech.com" required className="bg-background/50 border-white/10" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium pl-1">Subject</label>
                  <Input placeholder="Project Inquiry" className="bg-background/50 border-white/10" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium pl-1">Message</label>
                  <Textarea placeholder="Tell me about your project..." className="min-h-[150px] bg-background/50 border-white/10" required />
                </div>
                <Button type="submit" className="w-full h-12 bg-primary text-white font-bold text-lg hover:bg-primary/90 hover:scale-[1.02] transition-all group">
                  Send Message
                  <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

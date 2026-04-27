
"use client";

import Image from "next/image";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export function About() {
  const profileImg = PlaceHolderImages.find(img => img.id === 'profile-pic')?.imageUrl;

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1 hidden lg:block">
             <div className="absolute -top-4 -left-4 w-full h-full border-2 border-accent rounded-3xl" />
             <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-secondary/20">
                {profileImg && (
                  <Image
                    src={profileImg}
                    alt="IT Professional Profile"
                    fill
                    className="object-cover"
                    data-ai-hint="professional portrait"
                  />
                )}
             </div>
             <div className="absolute -bottom-8 -right-8 p-6 glass-morphism rounded-2xl hidden md:block max-w-[200px]">
                <p className="text-xs font-medium text-accent uppercase tracking-widest mb-2">Philosophy</p>
                <p className="text-sm italic leading-relaxed text-muted-foreground">"Empowering Zimbabwe through localized digital innovation."</p>
             </div>
          </div>

          <div className="order-1 lg:order-2">
            <h2 className="font-headline text-3xl md:text-5xl font-bold mb-8">Bridging <span className="text-primary">Academics</span> & <span className="text-accent">Industry</span></h2>
            
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                <span className="text-foreground font-bold">ExGentleman Technologies</span> is a Zimbabwean startup IT firm founded by <span className="text-foreground font-bold">Sir Lawrence Hororo</span>. As a current Software Engineering student at <span className="text-foreground font-medium underline decoration-accent/30">Bindura University</span>, aimed to provide high-impact technical solutions tailored for the local and international markets.
              </p>
              <p>
                Our journey is fueled by the academic excellence of Zimbabwe's leading institutions and a drive to solve real-world problems. We specialize in transforming complex requirements into elegant code and creative designs, ensuring that every project reflects the talent emerging from the heart of Southern Africa.
              </p>
              <p>
                Whether it's optimizing a <span className="text-foreground font-medium">MySQL</span> database or crafting a unique brand identity through <span className="text-foreground font-medium">Graphics Design</span>, we are committed to delivering excellence that puts Zimbabwean tech on the global stage.
              </p>
              
              <div className="grid grid-cols-2 gap-8 pt-4">
                <div>
                  <h4 className="text-foreground font-bold text-2xl mb-1">Zimbabwe</h4>
                  <p className="text-xs uppercase tracking-widest">Base of Operations</p>
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-2xl mb-1">BUSE</h4>
                  <p className="text-xs uppercase tracking-widest">Academic Excellence</p>
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-2xl mb-1">100%</h4>
                  <p className="text-xs uppercase tracking-widest">Client Focus</p>
                </div>
                <div>
                  <h4 className="text-foreground font-bold text-2xl mb-1">50+</h4>
                  <p className="text-xs uppercase tracking-widest">Successful Projects</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

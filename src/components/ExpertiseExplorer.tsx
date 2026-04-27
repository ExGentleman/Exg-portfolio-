"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Sparkles, Minimize2, Bot, User, Loader2, Send, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

export const ExpertiseExplorer: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'ai'; text: string }>>([]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim() || loading) return;

    const userMsg = query;
    setQuery("");
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    try {
      const response = await fetch('/api/expertise', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query: userMsg }),
      });

      if (!response.ok) throw new Error('Failed to get response');
      
      const result = await response.json();
      setMessages(prev => [...prev, { role: 'ai', text: result.answer }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-card w-[90vw] sm:w-[400px] h-[500px] rounded-2xl shadow-2xl border border-border flex flex-col overflow-hidden animate-in zoom-in-90 slide-in-from-bottom-5 duration-300">
          <div className="p-4 bg-primary text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles size={18} />
              <span className="font-headline font-bold">Expertise Explorer</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-1 rounded transition-colors">
              <Minimize2 size={18} />
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-background/50">
            {messages.map((msg, i) => (
              <div key={i} className={cn("flex gap-3", msg.role === 'user' ? "flex-row-reverse" : "")}>
                <div className={cn("w-8 h-8 rounded-full flex items-center justify-center shrink-0", msg.role === 'ai' ? "bg-accent text-accent-foreground" : "bg-primary text-white")}>
                  {msg.role === 'ai' ? <Bot size={16} /> : <User size={16} />}
                </div>
                <div className={cn("p-3 rounded-2xl text-sm max-w-[80%]", msg.role === 'ai' ? "bg-secondary/50 border border-border rounded-tl-none" : "bg-primary text-white rounded-tr-none shadow-md")}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex gap-3">
                <div className="w-8 h-8 rounded-full bg-accent text-accent-foreground flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div className="p-3 rounded-2xl bg-secondary/50 border border-border rounded-tl-none">
                  <Loader2 className="animate-spin text-accent" size={16} />
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 border-t border-border bg-card">
            <div className="relative">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Ask about my skills..."
                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary pr-12"
              />
              <button
                type="submit"
                disabled={loading}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-2 text-primary hover:text-accent disabled:opacity-50 transition-colors"
              >
                <Send size={18} />
              </button>
            </div>
          </form>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 rounded-full bg-primary text-white shadow-xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group relative"
        >
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full animate-ping" />
          <MessageSquare />
          <span className="absolute right-full mr-4 px-3 py-1 bg-card border border-border rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            Ask about my expertise
          </span>
        </button>
      )}
    </div>
  );
};

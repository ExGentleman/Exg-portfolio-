import React, { useState, useEffect } from 'react';
import { 
  ChevronLeft, 
  ChevronRight, 
  ShieldCheck, 
  Users, 
  Cpu, 
  Database, 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  Search,
  BookOpen,
  Layout,
  Lock
} from 'lucide-react';

const App = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 'title',
      title: "Student Exam Eligibility Verification System",
      subtitle: "Modernizing Academic Integrity through Digital ID Scanning",
      type: 'title',
      presenters: ["Lawrence Hororo", "Member 2", "Member 3", "Member 4"],
      bg: "bg-slate-900"
    },
    {
      id: 'concept',
      title: "The Core Concept",
      subtitle: "Proposed Topic & Workflow",
      content: [
        { label: "The Mission", text: "To implement an automated identification framework that validates a student's registration status in real-time." },
        { label: "The Mechanism", text: "Utilizing ID scanning technology at exam venue entry points to ensure only eligible candidates gain access." }
      ],
      visual: "flow"
    },
    {
      id: 'intro',
      title: "Introduction & Landscape",
      content: [
        { label: "The Challenge", text: "Educational institutions face significant hurdles in managing student flow and verifying eligibility during high-stakes examinations." },
        { label: "The Opportunity", text: "Transitioning to a digital verification ecosystem improves both record accuracy and invigilator operational efficiency." }
      ],
      icon: <Users className="w-16 h-16 text-sky-400" />
    },
    {
      id: 'problem',
      title: "Background & Problem Statement",
      subtitle: "Moving Beyond the Manual Burden",
      list: [
        { title: "Human Error", desc: "Manual logs are prone to oversight and misidentification.", icon: <AlertTriangle /> },
        { title: "Security Risks", desc: "Physical lists are vulnerable to student impersonation and unauthorized entry.", icon: <ShieldCheck /> },
        { title: "Time Inefficiency", desc: "Invigilators lose critical monitoring time to repetitive administrative tasks.", icon: <Clock /> }
      ]
    },
    {
      id: 'vision',
      title: "Research Vision",
      subtitle: "Aims & Technical Objectives",
      content: [
        { label: "Primary Aim", text: "To engineer a robust system capable of scanning student credentials and instantly cross-referencing them against a live registration database." }
      ],
      objectives: [
        "Hardware Integration: Seamless ID scanning interface.",
        "Data Validation: 1:1 verification against official databases.",
        "Instant Feedback: Immediate UI cues (Accept/Reject).",
        "Process Optimization: Elevated security and throughput."
      ]
    },
    {
      id: 'research',
      title: "Research & Context",
      subtitle: "Literature Review & Inquiries",
      questions: [
        "To what degree can automation mitigate the risk of exam impersonation?",
        "How does digital scanning impact speed and precision compared to manual methods?"
      ],
      context: "The Modern Standard: Over the last decade, leading systems have shifted toward QR codes, RFID, and Biometric authentication to solve identity challenges."
    },
    {
      id: 'methodology',
      title: "Implementation Path",
      subtitle: "Phased Development Methodology",
      phases: [
        { step: "01", title: "Architecture", desc: "System design and UI wireframing." },
        { step: "02", title: "Back-end", desc: "Structuring a secure student database." },
        { step: "03", title: "Module Dev", desc: "Programming the core scanning logic." },
        { step: "04", title: "QA", desc: "Rigorous testing with sample records." }
      ]
    },
    {
      id: 'limitations',
      title: "Addressing Constraints",
      subtitle: "Risks and Strategic Mitigation",
      risks: [
        { name: "Connectivity", desc: "Dependence on stable networks." },
        { name: "Investment", desc: "Hardware procurement costs." },
        { name: "Compliance", desc: "Data privacy concerns." }
      ],
      mitigation: [
        "Offline database backups for resilience.",
        "Encrypted data channels and multi-factor authentication.",
        "Secure access control protocols."
      ]
    },
    {
      id: 'outcomes',
      title: "Expected Outcomes",
      subtitle: "Results & Timeline",
      results: [
        "Fraud Reduction: Decreased identity theft.",
        "Operational Speed: Rapid student check-in.",
        "Administrative Clarity: Real-time eligibility tracking."
      ],
      timeline: [
        { week: "1-4", activity: "Research & Design" },
        { week: "5-8", activity: "Development & Testing" }
      ]
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const slide = slides[currentSlide];

  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans overflow-hidden flex flex-col">
      {/* Header / Nav */}
      <div className="p-6 flex justify-between items-center bg-slate-900/50 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-sky-500 rounded flex items-center justify-center">
            <ShieldCheck className="text-slate-950 w-5 h-5" />
          </div>
          <span className="text-sm font-bold tracking-widest text-slate-400 uppercase">Verification System v1.0</span>
        </div>
        <div className="flex items-center gap-4 text-xs font-mono text-sky-400">
          <span>SLIDE {currentSlide + 1} / {slides.length}</span>
        </div>
      </div>

      {/* Main Slide Area */}
      <div className="flex-1 relative flex items-center justify-center p-12 overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-64 h-64 bg-sky-500 rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-slate-700 rounded-full blur-3xl" />
        </div>

        <div className="max-w-5xl w-full z-10 transition-all duration-500 transform scale-100">
          
          {slide.type === 'title' ? (
            <div className="text-center space-y-8">
              <div className="inline-block p-2 px-4 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-400 text-sm font-medium mb-4">
                Academic Integrity Proposal
              </div>
              <h1 className="text-6xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                {slide.title}
              </h1>
              <p className="text-2xl text-slate-400 max-w-2xl mx-auto">
                {slide.subtitle}
              </p>
              <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                {slide.presenters.map((p, i) => (
                  <div key={i} className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                    <div className="text-sky-400 text-xs font-mono mb-1 uppercase">Contributor</div>
                    <div className="font-semibold text-slate-200">{p}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-7 space-y-6">
                <div>
                  <h2 className="text-sky-400 font-mono text-sm tracking-[0.2em] uppercase mb-2">
                    {slide.subtitle || "Overview"}
                  </h2>
                  <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                    {slide.title}
                  </h1>
                </div>

                {/* Content Logic */}
                {slide.content && slide.content.map((item, i) => (
                  <div key={i} className="space-y-2 border-l-2 border-sky-500/30 pl-6 py-2">
                    <h3 className="text-sky-400 font-bold text-lg">{item.label}</h3>
                    <p className="text-slate-300 text-xl leading-relaxed">{item.text}</p>
                  </div>
                ))}

                {slide.list && (
                  <div className="grid grid-cols-1 gap-4">
                    {slide.list.map((item, i) => (
                      <div key={i} className="flex gap-4 p-5 bg-slate-900/50 border border-slate-800 rounded-xl hover:border-sky-500/50 transition-colors">
                        <div className="bg-sky-500/10 p-3 rounded-lg text-sky-400 shrink-0">
                          {item.icon}
                        </div>
                        <div>
                          <h4 className="font-bold text-white text-lg">{item.title}</h4>
                          <p className="text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {slide.questions && (
                  <div className="space-y-4">
                    {slide.questions.map((q, i) => (
                      <div key={i} className="p-4 bg-sky-500/5 border-l-4 border-sky-500 rounded-r-lg italic text-slate-200 text-lg">
                        "{q}"
                      </div>
                    ))}
                    <p className="text-slate-400 mt-8 pt-8 border-t border-slate-800">{slide.context}</p>
                  </div>
                )}

                {slide.phases && (
                  <div className="grid grid-cols-2 gap-4">
                    {slide.phases.map((p, i) => (
                      <div key={i} className="p-4 bg-slate-900 border border-slate-800 rounded-lg">
                        <div className="text-sky-400 font-mono text-xs mb-2">PHASE {p.step}</div>
                        <h4 className="font-bold text-white mb-1">{p.title}</h4>
                        <p className="text-xs text-slate-400">{p.desc}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Visual Side */}
              <div className="md:col-span-5 bg-slate-900/50 border border-slate-800 rounded-2xl p-8 min-h-[400px] flex flex-col justify-center items-center shadow-2xl relative">
                {slide.visual === "flow" && (
                  <div className="space-y-6 w-full text-center">
                    <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">Student ID Card</div>
                    <div className="flex justify-center"><ChevronRight className="rotate-90 text-sky-500" /></div>
                    <div className="p-4 bg-sky-500/20 rounded-lg border border-sky-500 text-sky-400 font-bold">Scanning Module</div>
                    <div className="flex justify-center"><ChevronRight className="rotate-90 text-sky-500" /></div>
                    <div className="p-4 bg-slate-800 rounded-lg border border-slate-700">Database Verification</div>
                    <div className="mt-4 text-emerald-400 flex items-center justify-center gap-2">
                       <CheckCircle size={20} /> Access Granted
                    </div>
                  </div>
                )}
                
                {slide.icon && !slide.visual && slide.icon}
                
                {slide.objectives && (
                  <div className="w-full space-y-4">
                    <div className="text-xs font-mono text-slate-500 mb-4 tracking-widest uppercase">Key Milestones</div>
                    {slide.objectives.map((obj, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm text-slate-300">
                        <div className="mt-1 w-1.5 h-1.5 bg-sky-500 rounded-full shrink-0" />
                        {obj}
                      </div>
                    ))}
                  </div>
                )}

                {slide.risks && (
                  <div className="w-full space-y-6">
                    <div className="space-y-3">
                      <div className="text-xs font-mono text-rose-400 uppercase">Identified Risks</div>
                      {slide.risks.map((r, i) => (
                        <div key={i} className="text-xs flex justify-between">
                          <span className="text-slate-300 font-bold">{r.name}</span>
                          <span className="text-slate-500">{r.desc}</span>
                        </div>
                      ))}
                    </div>
                    <div className="space-y-3 pt-4 border-t border-slate-800">
                      <div className="text-xs font-mono text-emerald-400 uppercase">Strategic Mitigation</div>
                      {slide.mitigation.map((m, i) => (
                        <div key={i} className="text-xs text-slate-400 flex gap-2">
                          <CheckCircle size={12} className="text-emerald-500 shrink-0" /> {m}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {slide.results && (
                   <div className="w-full space-y-8">
                     <div className="grid grid-cols-1 gap-3">
                       {slide.results.map((res, i) => (
                         <div key={i} className="p-3 bg-sky-500/5 rounded border border-sky-500/20 text-sky-100 text-sm">
                           {res}
                         </div>
                       ))}
                     </div>
                     <div className="pt-4 border-t border-slate-800">
                        <div className="text-xs font-mono text-slate-500 mb-4 tracking-wider">PROJECT TIMELINE</div>
                        {slide.timeline.map((t, i) => (
                          <div key={i} className="flex gap-4 mb-2">
                            <span className="text-sky-500 font-bold min-w-[60px]">WK {t.week}</span>
                            <span className="text-slate-400 text-sm">{t.activity}</span>
                          </div>
                        ))}
                     </div>
                   </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Footer / Controls */}
      <div className="p-8 bg-slate-900/50 flex justify-between items-center border-t border-slate-800">
        <div className="flex gap-2">
          <button 
            onClick={prevSlide}
            className="p-3 bg-slate-800 hover:bg-sky-500 hover:text-slate-950 rounded-lg transition-all"
            aria-label="Previous Slide"
          >
            <ChevronLeft />
          </button>
          <button 
            onClick={nextSlide}
            className="p-3 bg-slate-800 hover:bg-sky-500 hover:text-slate-950 rounded-lg transition-all"
            aria-label="Next Slide"
          >
            <ChevronRight />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="flex-1 mx-12 h-1 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-sky-500 transition-all duration-300"
            style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
          />
        </div>

        <div className="text-slate-500 text-sm font-medium">
          {Math.round(((currentSlide + 1) / slides.length) * 100)}% Complete
        </div>
      </div>
    </div>
  );
};

export default App;
import { useState, useEffect } from 'react';
import { useTypingEffect } from '../utils/hooks';
import ProfileUpload from './ProfileUpload';
import { ArrowRight, Download, Mail, ChevronRight, FileText, X, Printer, Phone, MapPin, Calendar, Award } from 'lucide-react';
import { PERSONAL_INFO } from '../data';

interface HeroProps {
  isDarkMode: boolean;
}

export default function Hero({ isDarkMode }: HeroProps) {
  const typedText = useTypingEffect();
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showIntroNote, setShowIntroNote] = useState(true);

  const handleOpenResume = () => {
    setShowIntroNote(true);
    setShowResumeModal(true);
  };

  const handleScrollTo = (sectionId: string) => {
    const target = document.querySelector(sectionId);
    if (target) {
      const offsetTop = (target as HTMLElement).offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  const handlePrintResume = () => {
    window.print();
  };

  return (
    <section 
      id="home" 
      className="relative min-h-[92vh] flex items-center pt-24 pb-12 overflow-hidden"
    >
      {/* Decorative Background (Empty for clean background) */}

      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Text Content Block */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 text-center lg:text-left order-2 lg:order-1">
            
            <div className="space-y-3">
              <h1 className={`text-4xl sm:text-5xl md:text-6xl font-bold font-display tracking-tight leading-none ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Hi, I'm <br className="sm:hidden" />
                <span className={`text-transparent bg-clip-text bg-gradient-to-r ${
                  isDarkMode 
                    ? 'from-[#FF7A00] to-emerald-400' 
                    : 'from-emerald-600 to-teal-800'
                }`}>
                  {PERSONAL_INFO.name}
                </span>
              </h1>
            </div>

            <p className={`text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0 ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {PERSONAL_INFO.intro}
            </p>

            {/* Action Buttons Group */}
            <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start pt-2">
              <button
                id="btn-projects-view"
                onClick={() => handleScrollTo('#projects')}
                className="inline-flex items-center space-x-1.5 px-6 py-3 rounded-lg font-bold font-display text-sm bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-md shadow-emerald-500/10 hover:shadow-emerald-750/30 transition-all cursor-pointer active:scale-98 hover:scale-103"
              >
                <span>View Projects</span>
                <ArrowRight size={16} />
              </button>

              <button
                id="btn-contact-me"
                onClick={() => handleScrollTo('#contact')}
                className="inline-flex items-center space-x-1.5 px-5 py-3 rounded-lg font-bold font-display text-sm border bg-white border-slate-200 text-slate-800 hover:bg-slate-50 hover:shadow-md transition-all cursor-pointer active:scale-98"
              >
                <Mail size={16} />
                <span>Contact Me</span>
              </button>

              <button
                id="btn-resume-view"
                onClick={handleOpenResume}
                className="inline-flex items-center space-x-1.5 px-5 py-3 rounded-lg font-bold font-display text-sm border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100/55 transition-all cursor-pointer active:scale-98"
              >
                <Download size={16} />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Prominent LinkedIn & GitHub Buttons */}
            <div className="flex flex-wrap gap-3.5 justify-center lg:justify-start pt-1.5">
              <a
                href="https://www.linkedin.com/in/vineela-reddy-1270332b8"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg font-extrabold font-display text-sm bg-white border-2 border-emerald-100 text-slate-900 hover:bg-emerald-50/40 hover:border-[#FF7A00] hover:shadow-[0_0_20px_rgba(255,122,0,0.45)] transition-all cursor-pointer active:scale-98 hover:scale-103"
              >
                <span>💼 Connect on LinkedIn</span>
              </a>

              <a
                href="https://github.com/vineelareddy984"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-2 px-5 py-3 rounded-lg font-extrabold font-display text-sm bg-white border-2 border-emerald-100 text-slate-900 hover:bg-emerald-50/40 hover:border-[#FF7A00] hover:shadow-[0_0_20px_rgba(255,122,0,0.45)] transition-all cursor-pointer active:scale-98 hover:scale-103"
              >
                <span>💻 View GitHub</span>
              </a>
            </div>
          </div>

          {/* Profile Picture Upload Section */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <ProfileUpload isDarkMode={isDarkMode} />
          </div>

        </div>
      </div>

      {/* Recruiter-friendly Resume Viewer Modal */}
      {showResumeModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
          {showIntroNote ? (
            <div 
              id="resume-intro-card"
              className="w-full max-w-lg rounded-2xl overflow-hidden shadow-2xl relative border p-8 md:p-10 transition-all bg-white border-emerald-100 text-slate-850 hover:shadow-[0_0_35px_rgba(255,122,0,0.45)]"
            >
              {/* Decorative top green gradient */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-400 to-[#FF7A00]" />

              <button
                onClick={() => setShowResumeModal(false)}
                className="absolute top-4 right-4 p-1.5 rounded-lg border transition-all hover:scale-105 cursor-pointer bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-850"
                aria-label="Close"
              >
                <X size={16} />
              </button>

              <div className="space-y-6 pt-2">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl select-none">Waittt... 👀</span>
                </div>

                <div className="space-y-4 font-sans text-sm md:text-base leading-relaxed text-slate-705 text-left">
                  <p className="font-semibold text-slate-850">
                    You really came all the way here just to see my resume? That's kinda sweet. 💚
                  </p>
                  <p>
                    Anyways... Here's my resume ✨
                  </p>
                  
                  <div className="p-4 rounded-xl border border-emerald-100 bg-emerald-50/50 text-emerald-950 font-medium">
                    <p className="font-extrabold text-[11px] mb-2 text-emerald-990 tracking-wider font-mono">Inside you'll find:</p>
                    <ul className="space-y-1.5 text-slate-700 text-xs md:text-sm">
                      <li className="flex items-center"><span className="mr-2">🚀</span> Projects</li>
                      <li className="flex items-center"><span className="mr-2">💻</span> Skills</li>
                      <li className="flex items-center"><span className="mr-2">🏆</span> Achievements</li>
                      <li className="flex items-center"><span className="mr-2">🌱</span> Growth</li>
                    </ul>
                  </div>

                  <p className="italic text-slate-600 font-medium font-sans">
                    Enjoy stalking professionally. 😌
                  </p>
                </div>

                <div className="flex items-center justify-between pt-5 border-t border-dashed border-emerald-500/20 gap-4">
                  <span className="font-display font-black text-sm tracking-wide text-emerald-700">
                    — Vineela Reddy 💚
                  </span>
                  
                  <button
                    onClick={() => setShowIntroNote(false)}
                    className="inline-flex items-center space-x-1.5 px-5 py-2.5 rounded-xl font-bold font-display text-xs cursor-pointer transition-all hover:scale-103 active:scale-97 shadow-lg bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-500/10"
                  >
                    <span>Open Resume ✨</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div 
              id="resume-modal"
              className={`w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl relative border ${
                isDarkMode ? 'bg-slate-900 border-white/10 text-white' : 'bg-white border-slate-200 text-slate-800'
              }`}
            >
              {/* Header */}
              <div className={`px-6 py-4 flex items-center justify-between border-b ${
                isDarkMode ? 'border-white/10' : 'border-slate-100'
              }`}>
                <div className="flex items-center space-x-2">
                  <FileText className="text-[#FF7A00]" size={20} />
                  <h3 className="font-bold font-display text-lg">Professional Resume</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <button
                    onClick={handlePrintResume}
                    className={`p-2 rounded-lg border flex items-center space-x-1 text-xs font-semibold hover:scale-102 transition-transform ${
                      isDarkMode 
                        ? 'bg-slate-800 border-white/10 text-[#FF7A00] hover:bg-slate-700' 
                        : 'bg-slate-100 border-slate-200 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    <Printer size={14} />
                    <span>Print as PDF</span>
                  </button>
                  <button
                    onClick={() => setShowResumeModal(false)}
                    className={`p-1.5 rounded-lg border hover:scale-105 transition-transform ${
                      isDarkMode ? 'bg-slate-800 border-white/10 text-slate-400 hover:text-white' : 'bg-slate-100 border-slate-200 text-slate-500 hover:text-slate-850'
                    }`}
                  >
                    <X size={16} />
                  </button>
                </div>
              </div>

              {/* Resume Content (Scrollable printable section with specific styling) */}
              <div className="p-6 md:p-8 max-h-[70vh] overflow-y-auto print:max-h-none print:p-0">
                <div id="printable-resume-area" className="space-y-6">
                  
                  {/* Resume Top Card */}
                  <div className="border-b pb-5 border-dashed border-emerald-500/25 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                    <div>
                      <h2 className="text-2xl font-bold font-display tracking-tight text-emerald-400">{PERSONAL_INFO.name}</h2>
                      <p className="text-sm font-medium text-slate-400 mt-1">Computer Science & Engineering Student</p>
                      <div className="flex flex-wrap gap-x-4 gap-y-2 mt-3 text-xs text-slate-400">
                        <span className="flex items-center"><Mail size={12} className="mr-1 text-[#FF7A00]" /> {PERSONAL_INFO.email}</span>
                        <span className="flex items-center"><Phone size={12} className="mr-1 text-[#FF7A00]" /> {PERSONAL_INFO.phone}</span>
                        <span className="flex items-center"><MapPin size={12} className="mr-1 text-[#FF7A00]" /> {PERSONAL_INFO.location}</span>
                      </div>
                    </div>
                    <div className="text-left md:text-right hidden sm:block">
                      <span className="px-3 py-1 rounded bg-emerald-950 text-[#FF7A00] border border-emerald-500/20 text-xs font-semibold">
                        GPA: 8.78/10
                      </span>
                    </div>
                  </div>

                  {/* Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
                    
                    {/* Left Column */}
                    <div className="md:col-span-8 space-y-6">
                      {/* Summary */}
                      <div>
                        <h4 className="text-sm font-bold font-display uppercase tracking-wider text-emerald-400 border-b border-emerald-500/15 pb-1">Professional Summary</h4>
                        <p className="text-xs text-slate-300 mt-2.5 leading-relaxed">
                          Computer Science and Engineering student at Vignan's Institute. Equipped with solid foundations across Programming (Languages like Java, Python, C), Software Architecture, Machine Learning pipelines, and Cloud Infrastructures. Excellent team lead, proactive problem solver, and hands-on intern with direct exposure crafting full-stack platforms and predictive systems.
                        </p>
                      </div>

                      {/* Internships */}
                      <div>
                        <h4 className="text-sm font-bold font-display uppercase tracking-wider text-emerald-400 border-b border-emerald-500/15 pb-1">Experience & Internships</h4>
                        <div className="space-y-4 mt-3">
                          <div className="relative pl-4 border-l-2 border-[#FF7A00]/30">
                            <div className="absolute w-2 h-2 rounded-full bg-[#FF7A00] -left-[5px] top-1.5" />
                            <div className="flex justify-between items-start text-xs">
                              <h5 className="font-bold text-white">Foundation of AI & ML Intern</h5>
                              <span className="text-slate-400">May 2025 – July 2025</span>
                            </div>
                            <span className="text-[11px] text-emerald-400 font-medium">Data Valley</span>
                            <ul className="list-disc list-inside text-[11px] text-slate-300 mt-1.5 space-y-1">
                              <li>Studied foundational algorithms like Linear Regression, Random Forests, and NLP modules.</li>
                              <li>Applied Java algorithms on processing loops, accelerating sample executions.</li>
                            </ul>
                          </div>

                          <div className="relative pl-4 border-l-2 border-[#FF7A00]/30">
                            <div className="absolute w-2 h-2 rounded-full bg-[#FF7A00] -left-[5px] top-1.5" />
                            <div className="flex justify-between items-start text-xs">
                              <h5 className="font-bold text-white">AI Internship</h5>
                              <span className="text-slate-400">Sep 2024 – Nov 2024</span>
                            </div>
                            <span className="text-[11px] text-emerald-400 font-medium font-display">Skill Vertex</span>
                            <ul className="list-disc list-inside text-[11px] text-slate-300 mt-1.5 space-y-1">
                              <li>Built small-scale deep neural networks to perform health classification exercises.</li>
                              <li>Gained insights into professional engineering cycles, Agile reviews, and repositories.</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Featured Projects list */}
                      <div>
                        <h4 className="text-sm font-bold font-display uppercase tracking-wider text-emerald-400 border-b border-emerald-500/15 pb-1">Selected Projects</h4>
                        <div className="space-y-3 mt-3">
                          <div>
                            <h5 className="text-xs font-bold text-white">AI-Based Exam Paper Evaluator</h5>
                            <p className="text-[11px] text-slate-300 mt-1">Allows uploading and parsing of scripts with automated scoring logic based on rubrics, adding transcript calculation components.</p>
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">Disaster Management Prediction System</h5>
                            <p className="text-[11px] text-slate-300 mt-1">Real-time predictor drawing metrics on rain, pressure levels, wind and lighting for early warning systems.</p>
                          </div>
                          <div>
                            <h5 className="text-xs font-bold text-white">Vinshu Clothing & Beauty Platform</h5>
                            <p className="text-[11px] text-slate-300 mt-1">E-commerce brand framework with robust database linkages, interactive showcases, and automated checkout modules.</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="md:col-span-4 space-y-6">
                      {/* Education */}
                      <div>
                        <h4 className="text-sm font-bold font-display uppercase tracking-wider text-emerald-400 border-b border-emerald-500/15 pb-1">Education</h4>
                        <div className="space-y-3 mt-3 text-xs">
                          <div>
                            <h5 className="font-bold text-white">B.Tech in CSE</h5>
                            <p className="text-slate-400 text-[11px]">Vignan's Institute for Women</p>
                            <p className="text-[#FF7A00] text-[11px] font-semibold mt-0.5">CGPA: 8.78/10</p>
                          </div>
                          <div>
                            <h5 className="font-bold text-white">Intermediate (12th Board)</h5>
                            <p className="text-[#FF7A00] text-[11px] font-semibold">Percentage: 89.40%</p>
                          </div>
                          <div>
                            <h5 className="font-bold text-white font-display">SSC Schooling</h5>
                            <p className="text-[#FF7A00] text-[11px] font-semibold">Percentage: 96.50%</p>
                          </div>
                        </div>
                      </div>

                      {/* Skill Tags */}
                      <div>
                        <h4 className="text-sm font-bold font-display uppercase tracking-wider text-emerald-400 border-b border-emerald-500/15 pb-1">Key Skills</h4>
                        <div className="flex flex-wrap gap-1.5 mt-3">
                          {['Java', 'Python', 'C', 'SQL', 'AI & ML', 'Linux', 'Power BI', 'Jupyter', 'Networking', 'Routing'].map(tag => (
                            <span key={tag} className="px-2 py-0.5 rounded bg-slate-800 text-[#FF7A00] border border-white/5 text-[10px] font-medium">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Top Certifications */}
                      <div>
                        <h4 className="text-sm font-bold font-display uppercase tracking-wider text-emerald-400 border-b border-emerald-500/15 pb-1">Certifications</h4>
                        <div className="space-y-1.5 mt-3 text-[10px] text-slate-300">
                          <p className="flex items-center"><Award size={10} className="mr-1 text-[#FF7A00]" /> NPTEL DBMS Certified</p>
                          <p className="flex items-center"><Award size={10} className="mr-1 text-[#FF7A00]" /> AI ASCEND Fundamentals</p>
                          <p className="flex items-center"><Award size={10} className="mr-1 text-[#FF7A00]" /> Cybersecurity Workshop</p>
                          <p className="flex items-center"><Award size={10} className="mr-1 text-[#FF7A00]" /> Full Stack React with Java</p>
                          <p className="flex items-center"><Award size={10} className="mr-1 text-[#FF7A00]" /> Infosys Springboard FSD</p>
                        </div>
                      </div>
                    </div>

                  </div>

                </div>
              </div>

              {/* Footer buttons */}
              <div className={`px-6 py-4 flex items-center justify-end border-t ${
                isDarkMode ? 'bg-slate-950 border-white/10' : 'bg-slate-50 border-slate-200'
              }`}>
                <button
                  onClick={() => setShowResumeModal(false)}
                  className="px-4 py-2 text-xs font-bold font-display rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-400 cursor-pointer transition-all"
                >
                  Close Resume
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </section>
  );
}

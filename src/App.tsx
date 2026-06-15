import { useEffect, useState } from 'react';
import CustomCursor from './components/CustomCursor';
import NavBar from './components/NavBar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ExperienceCertifications from './components/ExperienceCertifications';
import ActivitiesStats from './components/ActivitiesStats';
import Contact from './components/Contact';
import { ArrowUp, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { PERSONAL_INFO } from './data';

export default function App() {
  const isDarkMode = true;
  const [activeSection, setActiveSection] = useState<string>('home');
  const [showScrollTop, setShowScrollTop] = useState<boolean>(false);

  // Sync state theme to class list
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Scroll handler for Active Navigation Tracker & Back-To-Top Button
  useEffect(() => {
    const handleScroll = () => {
      // Back to top visibility
      setShowScrollTop(window.scrollY > 350);

      // Section highlighters
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPosition = window.scrollY + 200; // Offset matches navbar header gap

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div 
      className={`min-h-screen relative select-none md:select-auto font-sans transition-colors duration-300 ${
        isDarkMode ? 'bg-black text-slate-100' : 'bg-white text-slate-800'
      }`}
    >
      {/* Subtle ambient background/grid container if needed, empty for clean background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      </div>

      {/* Laser circular glow cursor overlay */}
      <CustomCursor />

      {/* Dynamic Header & menu bars */}
      <NavBar 
        isDarkMode={isDarkMode} 
        setIsDarkMode={() => {}} 
        activeSection={activeSection} 
      />

      {/* Main Sections Grid */}
      <main className="relative z-10">
        <Hero isDarkMode={isDarkMode} />
        
        <About isDarkMode={isDarkMode} />
        
        <Skills isDarkMode={isDarkMode} />
        
        <Projects isDarkMode={isDarkMode} />
        
        <ExperienceCertifications isDarkMode={isDarkMode} />
        
        <ActivitiesStats isDarkMode={isDarkMode} />
        
        <Contact isDarkMode={isDarkMode} />
      </main>

      {/* Recruiter-friendly Footer section */}
      <footer className={`py-12 border-t backdrop-blur-md transition-all duration-300 relative z-10 font-sans ${isDarkMode ? 'bg-black/70 border-white/5 text-slate-300' : 'bg-white/70 border-emerald-100/60 text-slate-705'}`}>
        <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          <div className="space-y-1.5">
            <p className={`text-xs md:text-sm font-semibold tracking-tight ${isDarkMode ? 'text-slate-200' : 'text-slate-705'}`}>
              © 2026 {PERSONAL_INFO.name}. All Rights Reserved.
            </p>
            <p className={`text-[10px] font-medium ${isDarkMode ? 'text-slate-500' : 'text-slate-500'}`}>
              Built with <Heart size={10} className="inline text-emerald-500 fill-emerald-500 mx-0.5" /> and Passion for Technology
            </p>
          </div>

          {/* Prominent LinkedIn & GitHub Buttons in Footer */}
          <div className="flex flex-wrap gap-2.5 justify-center items-center py-1">
            <a
              href="https://www.linkedin.com/in/vineela-reddy-1270332b8"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg font-extrabold font-display text-xs transition-all cursor-pointer ${
                isDarkMode 
                  ? 'bg-slate-900 border-white/10 text-white hover:bg-slate-800 hover:border-[#FF7A00]/40 hover:shadow-[0_0_15px_rgba(255,122,0,0.3)]' 
                  : 'bg-white border-emerald-100 text-slate-900 hover:bg-[#FF7A00]/10 hover:border-[#FF7A00] hover:shadow-[0_0_15px_rgba(255,122,0,0.35)]'
              }`}
            >
              <span>💼 Connect on LinkedIn</span>
            </a>

            <a
              href="https://github.com/vineelareddy984"
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center space-x-1.5 px-4 py-2.5 rounded-lg font-extrabold font-display text-xs transition-all cursor-pointer ${
                isDarkMode 
                  ? 'bg-slate-900 border-white/10 text-white hover:bg-slate-800 hover:border-[#FF7A00]/40 hover:shadow-[0_0_15px_rgba(255,122,0,0.3)]' 
                  : 'bg-white border-emerald-100 text-slate-900 hover:bg-[#FF7A00]/10 hover:border-[#FF7A00] hover:shadow-[0_0_15px_rgba(255,122,0,0.35)]'
              }`}
            >
              <span>💻 View GitHub</span>
            </a>
          </div>

          <div id="footer-navigation-links" className={`flex items-center space-x-6 text-xs font-bold font-display ${isDarkMode ? 'text-slate-450' : 'text-slate-600'}`}>
            <a 
              href="#home" 
              className={`transition-colors ${isDarkMode ? 'hover:text-[#FF7A00]' : 'hover:text-emerald-700'}`}
              onClick={(e) => {
                e.preventDefault();
                handleScrollToTop();
              }}
            >
              Home
            </a>
            <a href="#about" className={`transition-colors ${isDarkMode ? 'hover:text-[#FF7A00]' : 'hover:text-emerald-750'}`}>About</a>
            <a href="#projects" className={`transition-colors ${isDarkMode ? 'hover:text-[#FF7A00]' : 'hover:text-emerald-750'}`}>Projects</a>
            <a href="#contact" className={`transition-colors ${isDarkMode ? 'hover:text-[#FF7A00]' : 'hover:text-emerald-750'}`}>Contact</a>
          </div>
        </div>
      </footer>

      {/* Sliding Fixed Left Side Social Media Rail */}
      <div className="hidden lg:flex flex-col space-y-4 fixed bottom-12 left-10 z-30">
        <a
          href={PERSONAL_INFO.linkedin}
          target="_blank"
          rel="noreferrer"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-md ${
            isDarkMode
              ? 'bg-slate-900 border-white/10 text-slate-300 hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 hover:border-[#FF7A00]/30 shadow-black/40'
              : 'bg-white border-emerald-100 text-slate-705 hover:text-emerald-700 hover:bg-[#FF7A00]/10 hover:border-emerald-300 shadow-emerald-100/20'
          }`}
          aria-label="Visit LinkedIn profile"
        >
          <Linkedin size={16} />
        </a>
        <a
          href={PERSONAL_INFO.github}
          target="_blank"
          rel="noreferrer"
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-md ${
            isDarkMode
              ? 'bg-slate-900 border-white/10 text-slate-300 hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 hover:border-[#FF7A00]/30 shadow-black/40'
              : 'bg-white border-emerald-100 text-slate-705 hover:text-emerald-700 hover:bg-[#FF7A00]/10 hover:border-emerald-300 shadow-emerald-100/20'
          }`}
          aria-label="Visit GitHub profile"
        >
          <Github size={16} />
        </a>
        <a
          href={`mailto:${PERSONAL_INFO.email}`}
          className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all duration-300 hover:-translate-y-1 active:scale-95 shadow-md ${
            isDarkMode
              ? 'bg-slate-900 border-white/10 text-slate-300 hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 hover:border-[#FF7A00]/30 shadow-black/40'
              : 'bg-white border-emerald-100 text-slate-705 hover:text-emerald-700 hover:bg-[#FF7A00]/10 hover:border-emerald-300 shadow-emerald-100/20'
          }`}
          aria-label="Send direct message email"
        >
          <Mail size={16} />
        </a>
        <div className={`w-[1.5px] h-20 mx-auto ${isDarkMode ? 'bg-white/10' : 'bg-emerald-100'}`} />
      </div>

      {/* Floating Back To Top button (Slide up-down) */}
      <button
        id="btn-back-to-top"
        onClick={handleScrollToTop}
        className={`fixed z-35 bottom-10 right-10 p-3 rounded-xl border flex items-center justify-center cursor-pointer transition-all duration-300 active:scale-95 ${
          showScrollTop 
            ? 'opacity-100 translate-y-0 visible scale-100' 
            : 'opacity-0 translate-y-3 invisible scale-90'
        } ${
          isDarkMode
            ? 'bg-slate-900 border-white/10 text-[#FF7A00] hover:bg-[#FF7A00]/10 hover:border-[#FF7A00]/40 shadow-[#FF7A00]/5'
            : 'bg-white border-emerald-100 text-emerald-800 hover:bg-[#FF7A00]/15 hover:border-emerald-300 shadow-emerald-200/20'
        } hover:scale-105 shadow-lg`}
        aria-label="Back to Top"
      >
        <ArrowUp size={16} />
      </button>
    </div>
  );
}

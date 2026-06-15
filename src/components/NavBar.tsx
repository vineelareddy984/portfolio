import { useEffect, useState, MouseEvent } from 'react';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavBarProps {
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  activeSection: string;
}

export default function NavBar({ isDarkMode, setIsDarkMode, activeSection }: NavBarProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Current scroll position
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      }

      // Check if scrolled past threshold for structural backdrop
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offsetTop = (targetElement as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="main-navigation"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? isDarkMode
            ? 'bg-black/80 backdrop-blur-md border-b border-white/5 py-3 shadow-md shadow-black/80'
            : 'bg-white/80 backdrop-blur-md border-b border-emerald-100 py-3 shadow-md shadow-emerald-50/20'
          : 'bg-transparent py-5'
      }`}
    >
      {/* Scroll Progress indicator */}
      <div 
        id="scroll-progress-bar"
        className="absolute top-0 left-0 h-[3px] transition-all duration-75 bg-emerald-600"
        style={{ width: `${scrollProgress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Brand/Logo */}
        <a 
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center space-x-2 font-display group"
        >
          <span className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-300 to-teal-400 shadow-sm shadow-emerald-500/10 flex items-center justify-center font-bold text-slate-950 text-base transition-transform group-hover:scale-105">
            N
          </span>
          <div className="flex flex-col">
            <span className={`text-sm md:text-base font-bold tracking-tight ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
              Vineela Reddy
            </span>
            <span className={`text-[10px] font-semibold tracking-widest uppercase ${isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-750'}`}>
              AI Engineer
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`px-4 py-2 text-sm font-semibold rounded-lg transition-all border ${
                  isActive
                    ? isDarkMode
                      ? 'text-[#FF7A00] bg-[#FF7A00]/15 border-[#FF7A00]/30 shadow-sm shadow-[#FF7A00]/5'
                      : 'text-emerald-800 bg-[#FF7A00]/15 border-emerald-250 shadow-sm shadow-[#FF7A00]/10'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent'
                      : 'text-slate-650 hover:text-slate-950 hover:bg-slate-100 border-transparent'
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Right Side Buttons: Mode toggle & mobile toggle */}
        <div className="flex items-center space-x-3">
          {/* Contact Highlight CTA (Desktop) */}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-bold rounded-lg bg-emerald-500 hover:bg-emerald-450 text-slate-950 transition-all font-display hover:shadow-lg hover:shadow-emerald-500/10 active:scale-95"
          >
            Contact Me
          </a>

          {/* Mobile Hamburguer Menu Button */}
          <button
            id="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2.5 rounded-lg border transition-all ${
              isDarkMode
                ? 'bg-slate-950 border-white/10 text-slate-300 hover:bg-white/5'
                : 'bg-slate-50 border-slate-200 text-slate-800 hover:bg-slate-100'
            }`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`lg:hidden border-t mt-3 overflow-hidden shadow-xl ${
              isDarkMode ? 'bg-black border-white/5 shadow-black/85' : 'bg-white border-slate-200 shadow-emerald-100/10'
            }`}
          >
            <div className="px-5 py-4 space-y-1.5 flex flex-col">
              {navItems.map((item) => {
                const isActive = activeSection === item.href.slice(1);
                return (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 text-base font-bold rounded-lg transition-all border ${
                      isActive
                        ? isDarkMode
                          ? 'text-[#FF7A00] bg-[#FF7A00]/10 border-[#FF7A00]/20'
                          : 'text-emerald-850 bg-[#FF7A00]/10 border-emerald-200/60'
                        : isDarkMode
                          ? 'text-slate-400 hover:text-white hover:bg-white/5 border-transparent'
                          : 'text-slate-600 hover:text-slate-950 hover:bg-slate-50 border-transparent'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full mt-2 inline-flex items-center justify-center px-4 py-3 text-base font-extrabold rounded-lg bg-emerald-500 text-slate-950 transition-all font-display text-center active:scale-95 shadow-md shadow-emerald-500/10"
              >
                Contact Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

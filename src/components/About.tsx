import { GraduationCap, Award, BookOpen, Briefcase, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PERSONAL_INFO, ACADEMIC_HIGHLIGHTS } from '../data';

interface AboutProps {
  isDarkMode: boolean;
}

export default function About({ isDarkMode }: AboutProps) {
  const interests = [
    'Artificial Intelligence',
    'Machine Learning',
    'Software Development',
    'Problem Solving',
    'Data Analytics',
    'Full Stack Development',
  ];

  return (
    <section 
      id="about" 
      className={`py-20 border-t ${
        isDarkMode ? 'bg-slate-950/40 border-white/5' : 'bg-slate-50/50 border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className={`text-xs font-extrabold tracking-widest uppercase font-display ${
            isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
          }`}>
            Who I Am
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold font-display mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            About Me
          </h2>
          <div className={`w-12 h-1 mx-auto mt-4 rounded-full ${
            isDarkMode ? 'bg-[#FF7A00]' : 'bg-emerald-600'
          }`} />
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Biography Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <h3 className={`text-xl md:text-2xl font-bold font-display leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-800'
            }`}>
              Designing the future of technology at Vignan's Institute of Engineering for Women.
            </h3>
            
            <p className={`text-sm md:text-base leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              {PERSONAL_INFO.about} I enjoy analyzing messy datasets, building beautiful and optimized web tools, and studying how modern deep neural architectures can be applied to solve critical daily issues, such as early disaster prediction or automated educational grading.
            </p>

            {/* Structured Interests Group */}
            <div className="space-y-4">
              <h4 className={`text-xs font-bold uppercase tracking-wider font-display ${
                isDarkMode ? 'text-slate-400' : 'text-slate-500'
              }`}>
                Core Fields of Interest
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {interests.map((interest) => (
                  <div 
                    key={interest}
                    className={`flex items-center space-x-2.5 px-4 py-3 rounded-lg border transition-all ${
                      isDarkMode 
                        ? 'bg-slate-900/60 border-white/5 text-slate-300 hover:border-[#FF7A00]/30 hover:bg-[#FF7A00]/5' 
                        : 'bg-white border-slate-100 text-slate-700 shadow-xs hover:border-[#FF7A00]/50 hover:shadow-xs'
                    }`}
                  >
                    <CheckCircle2 size={16} className={`flex-shrink-0 animate-pulse ${
                      isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-600'
                    }`} />
                    <span className="text-xs md:text-sm font-semibold">{interest}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Academic Highlights Column */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <div className={`p-6 md:p-8 rounded-2xl border ${
              isDarkMode ? 'glass-panel bg-slate-900/40' : 'glass-panel-light bg-white/70 shadow-lg'
            }`}>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-[#FF7A00]/10 text-[#FF7A00] flex items-center justify-center">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <h4 className={`text-base font-bold font-display ${
                    isDarkMode ? 'text-white' : 'text-slate-900'
                  }`}>
                    Academic Highlights
                  </h4>
                  <p className="text-[11px] text-slate-500">My structured learning timeline</p>
                </div>
              </div>

              {/* Education Cards Grid */}
              <div className="space-y-4">
                {ACADEMIC_HIGHLIGHTS.map((item, idx) => (
                  <div 
                    key={item.level}
                    className={`p-4 md:p-5 rounded-xl border relative transition-all duration-300 hover:scale-[1.01] ${
                      isDarkMode 
                        ? 'bg-slate-950/60 border-white/5 hover:border-emerald-500/20' 
                        : 'bg-white border-slate-100 hover:border-emerald-200 hover:shadow-md'
                    }`}
                  >
                    {/* Highlight Badge */}
                    <span className={`absolute top-4 right-4 text-xs font-extrabold font-mono ${
                      isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
                    }`}>
                      {item.score}
                    </span>

                    <div className="flex flex-col space-y-1">
                      <span className={`text-xs md:text-sm font-bold font-display ${
                        isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
                      }`}>
                        {item.level}
                      </span>
                      <span className={`text-xs md:text-sm font-semibold ${
                        isDarkMode ? 'text-slate-300' : 'text-slate-800'
                      }`}>
                        {item.institute}
                      </span>
                      <span className="text-[10px] text-slate-500 font-medium">
                        {item.period}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Callout badge */}
              <div className={`mt-6 flex items-center space-x-2 p-3.5 rounded-lg border text-xs font-semibold ${
                isDarkMode 
                  ? 'bg-[#FF7A00]/10 border-[#FF7A00]/20 text-[#FF7A00]' 
                  : 'bg-emerald-100/60 border-emerald-300/30 text-emerald-900'
              }`}>
                <Award size={14} className="flex-shrink-0" />
                <span>Consistently maintained high academic scores & peer leadership.</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

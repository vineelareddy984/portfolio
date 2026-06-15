import * as Icons from 'lucide-react';
import { SKILL_CATEGORIES } from '../data';

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  
  return (
    <section 
      id="skills" 
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className={`text-xs font-extrabold tracking-widest uppercase font-display ${
            isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
          }`}>
            My Toolbox
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold font-display mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Skills & Expertise
          </h2>
          <div className={`w-12 h-1 mx-auto mt-4 rounded-full ${
            isDarkMode ? 'bg-[#FF7A00]' : 'bg-emerald-600'
          }`} />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SKILL_CATEGORIES.map((category) => {
            // Resolve Lucide Icon dynamically
            const LucideIcon = (Icons as any)[category.icon] || Icons.Terminal;

            return (
              <div
                key={category.title}
                className={`p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-slate-900/40 border-white/5 hover:border-[#FF7A00]/40 hover:shadow-xl hover:shadow-[#FF7A00]/5' 
                    : 'bg-white border-slate-205 hover:border-emerald-300 hover:shadow-xl hover:shadow-emerald-100'
                }`}
              >
                {/* Card Title & Icon */}
                <div className="flex items-center space-x-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                    isDarkMode ? 'bg-[#FF7A00]/10 text-[#FF7A00]' : 'bg-emerald-50 text-emerald-700'
                  }`}>
                    <LucideIcon size={18} />
                  </div>
                  <h3 className={`text-sm md:text-base font-bold font-display ${
                    isDarkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {category.title}
                  </h3>
                </div>

                {/* Skills Badges Grid */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center text-xs px-3 py-1.5 rounded-lg border transition-all ${
                        isDarkMode
                          ? 'bg-slate-950/60 border-white/5 text-slate-300 hover:text-[#FF7A00] hover:bg-[#FF7A00]/10 hover:border-[#FF7A00]/30'
                          : 'bg-slate-50 border-slate-200 text-slate-700 hover:text-emerald-800 hover:bg-emerald-50 hover:border-emerald-300'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Decorative Expertise Callout Banner */}
        <div className={`mt-12 p-6 md:p-8 rounded-2xl border text-center ${
          isDarkMode 
            ? 'glass-panel bg-[#FF7A00]/5 border-white/5' 
            : 'glass-panel-light bg-emerald-50/45 border-emerald-100 shadow-sm'
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-xl">
              <h4 className={`text-base md:text-lg font-bold font-display ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Continuous Learning & Adaptive Approach
              </h4>
              <p className={`text-xs md:text-sm mt-1 ${
                isDarkMode ? 'text-slate-400' : 'text-slate-600'
              }`}>
                Deeply invested in applying mathematical machine learning models on full-stack frameworks. Highly adaptable to cutting-edge development environments.
              </p>
            </div>
            <div className="flex-shrink-0">
              <a
                href="#contact"
                className={`inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs font-bold font-display hover:scale-103 transition-all ${
                  isDarkMode 
                    ? 'bg-[#FF7A00] text-slate-950 hover:bg-emerald-400 shadow-md shadow-[#FF7A00]/20' 
                    : 'bg-emerald-600 text-white hover:bg-emerald-700 shadow-sm shadow-emerald-600/20'
                }`}
              >
                Request Custom Skill Evaluation
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

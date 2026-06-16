import { Briefcase, Calendar, Award, GraduationCap, ChevronRight, CheckCircle, Zap } from 'lucide-react';
import { EXPERIENCE_LIST, CERTIFICATIONS } from '../data';

interface ExperienceCertificationsProps {
  isDarkMode: boolean;
}

export default function ExperienceCertifications({ isDarkMode }: ExperienceCertificationsProps) {
  
  return (
    <section 
      id="experience" 
      className={`py-20 border-t ${
        isDarkMode ? 'bg-slate-950/40 border-white/5' : 'bg-slate-50/50 border-slate-200/40'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Experience Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className={`text-xs font-extrabold tracking-widest uppercase font-display ${
            isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
          }`}>
            Career Chronicle
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold font-display mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Experience & Credentials
          </h2>
          <div className={`w-12 h-1 mx-auto mt-4 rounded-full ${
            isDarkMode ? 'bg-[#FF7A00]' : 'bg-emerald-600'
          }`} />
        </div>

        {/* Master Double-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Experience */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-[#FF7A00] flex items-center justify-center">
                <Briefcase size={18} />
              </div>
              <h3 className={`text-xl font-bold font-display ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Work History & Internships
              </h3>
            </div>

            {/* Experience Items List */}
            <div className="space-y-6">
              {EXPERIENCE_LIST.map((exp, idx) => (
                <div
                  key={exp.id}
                  className={`p-6 rounded-2xl border relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                    isDarkMode 
                      ? 'bg-slate-900/40 border-white/5 hover:border-emerald-500/20' 
                      : 'bg-white border-slate-205 hover:border-emerald-200'
                  }`}
                >
                  {/* Timeline Badge Duration */}
                  <div className={`flex flex-wrap items-center gap-x-2 text-[10px] sm:text-xs font-bold font-display uppercase tracking-wider mb-3 ${
                    isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
                  }`}>
                    <Calendar size={12} />
                    <span>{exp.duration}</span>
                  </div>

                  <h4 className={`text-base md:text-lg font-bold font-display ${
                    isDarkMode ? 'text-white' : 'text-slate-800'
                  }`}>
                    {exp.role}
                  </h4>
                  <span className={`text-sm font-semibold block mt-0.5 ${
                    isDarkMode ? 'text-emerald-400' : 'text-emerald-700 font-display'
                  }`}>
                    {exp.company}
                  </span>

                  {/* Bullets lists */}
                  <ul className="mt-4 space-y-2">
                    {exp.description.map((bullet, bidx) => (
                      <li key={bidx} className="flex items-start text-xs leading-relaxed text-slate-400">
                        <span className={`mr-2 text-sm select-none ${isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-600'}`}>•</span>
                        <span className={`${isDarkMode ? 'text-slate-300' : 'text-slate-600'}`}>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Certifications Timeline */}
          <div id="certifications" className="lg:col-span-6 space-y-8">
            <div className="flex items-center space-x-3 mb-2">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 text-[#FF7A00] flex items-center justify-center animate-bounce">
                <Award size={18} />
              </div>
              <h3 className={`text-xl font-bold font-display ${
                isDarkMode ? 'text-white' : 'text-slate-900'
              }`}>
                Timeline & Certifications
              </h3>
            </div>

            {/* Timeline Wrapper of Certifications */}
            <div className="relative pl-6 md:pl-8 border-l border-emerald-500/15 space-y-6">
              
              {CERTIFICATIONS.map((cert) => {
                // Style icon based on certification type
                const isWinner = cert.title.includes(' runner') || cert.title.includes('Certification') || cert.title.includes('First');
                return (
                  <div 
                    key={cert.id}
                    className="relative group"
                  >
                    {/* Pulsing point node */}
                    <div className="absolute -left-[31px] md:-left-[39px] top-1.5 flex items-center justify-center">
                      <div className={`w-3.5 h-3.5 rounded-full border transition-transform duration-300 group-hover:scale-130 flex items-center justify-center ${
                        isWinner 
                          ? isDarkMode
                            ? 'bg-[#FF7A00] border-[#FF7A00]'
                            : 'bg-emerald-500 border-emerald-500'
                          : isDarkMode
                            ? 'bg-slate-950 border-emerald-500'
                            : 'bg-white border-emerald-500'
                      }`}>
                        <div className={`w-1 h-1 rounded-full ${isDarkMode ? 'bg-slate-950' : 'bg-emerald-800'}`} />
                      </div>
                    </div>

                    {/* Timeline card block */}
                    <div className={`p-4 rounded-xl border transition-all duration-300 hover:translate-x-1.5 ${
                      isDarkMode 
                        ? 'bg-slate-900/30 border-white/5 hover:border-[#FF7A00]/15' 
                        : 'bg-white border-slate-100 hover:border-emerald-300 hover:shadow shadow-zinc-200/50'
                    }`}>
                      <div className="flex items-center justify-between gap-2">
                        <span className={`text-[10px] font-mono font-bold tracking-wider uppercase px-1.5 py-0.5 rounded border ${
                          isDarkMode
                            ? 'text-emerald-400 bg-emerald-950/20 border-emerald-500/10'
                            : 'text-emerald-800 bg-emerald-50 border-emerald-300/30'
                        }`}>
                          {cert.type}
                        </span>
                        {cert.issuer && (
                          <span className="text-[10px] text-slate-500 font-semibold">{cert.issuer}</span>
                        )}
                      </div>

                      <h4 className={`text-xs md:text-sm font-bold font-display mt-2 transition-colors ${
                        isDarkMode ? 'text-white group-hover:text-[#FF7A00]' : 'text-slate-800 group-hover:text-emerald-700'
                      }`}>
                        {cert.title}
                      </h4>
                    </div>
                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

import { useEffect, useState, useRef } from 'react';
import { Award, ShieldAlert, HeartHandshake, Compass, Users, Sparkles, Trophy } from 'lucide-react';
import { STATS, LEADERSHIP_ACTIVITIES } from '../data';

interface ActivitiesStatsProps {
  isDarkMode: boolean;
}

// Custom Counter Hook component
function CountUp({ end, duration = 1200, suffix = '', isDarkMode = true }: { end: number; duration?: number; suffix?: string; isDarkMode?: boolean }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const step = Math.min(progress / duration, 1);
      
      setCount(Math.floor(step * end));

      if (step < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return (
    <div 
      ref={elementRef} 
      className={`font-display font-black text-4xl sm:text-5xl md:text-6xl text-transparent bg-clip-text bg-gradient-to-r tracking-tight leading-none ${
        isDarkMode 
          ? 'from-[#FF7A00] to-emerald-400' 
          : 'from-emerald-700 to-teal-800'
      }`}
    >
      {count}
      {suffix}
    </div>
  );
}

export default function ActivitiesStats({ isDarkMode }: ActivitiesStatsProps) {
  return (
    <section 
      id="activities-stats" 
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Achievements Counter Section Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className={`text-xs font-extrabold tracking-widest uppercase font-display ${
            isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
          }`}>
            Acreages of Excellence
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold font-display mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Impact & Achievements
          </h2>
          <div className={`w-12 h-1 mx-auto mt-4 rounded-full ${
            isDarkMode ? 'bg-[#FF7A00]' : 'bg-emerald-600'
          }`} />
        </div>

        {/* Dynamic Achievements counters grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20 text-center">
          {STATS.map((stat) => (
            <div
              key={stat.id}
              className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-slate-900 to-slate-950/40 border-white/5 shadow-md shadow-slate-950/20' 
                  : 'bg-white border-zinc-200/50 shadow shadow-slate-100'
              }`}
            >
              {/* Count effect */}
              <CountUp end={stat.count} suffix={stat.suffix} isDarkMode={isDarkMode} />
              
              <p className={`text-xs md:text-sm font-semibold tracking-wide font-display mt-3.5 ${
                isDarkMode ? 'text-slate-300' : 'text-slate-600'
              }`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Leadership & Activities layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Illustration/Quote block */}
          <div className="lg:col-span-4 flex flex-col justify-center space-y-4">
            <span className={`text-xs uppercase font-extrabold tracking-wider font-mono ${
              isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
            }`}>
              Leadership Roleplay
            </span>
            <h3 className={`text-2xl md:text-3xl font-bold font-display leading-tight ${
              isDarkMode ? 'text-white' : 'text-slate-950'
            }`}>
              Stepping Up to Coordinate & Guide Peer Student Networks
            </h3>
            <p className={`text-xs md:text-sm leading-relaxed ${
              isDarkMode ? 'text-slate-400' : 'text-slate-600'
            }`}>
              True engineering consists not only of code compilations but structuring social circles. I actively coordinate departmental schedules, plan campus hackathons, and acts as liaison to foster engineering networks.
            </p>
            
            <div className={`p-4 rounded-xl border flex items-center space-x-3 ${
              isDarkMode ? 'bg-[#FF7A00]/5 border-[#FF7A00]/10' : 'bg-emerald-50 border-emerald-200'
            }`}>
              <Users className={`flex-shrink-0 ${isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'}`} size={18} />
              <span className={`text-[11px] font-semibold ${isDarkMode ? 'text-slate-300' : 'text-slate-700'}`}>
                Elected liaison to represent 70+ Computer Science students.
              </span>
            </div>
          </div>

          {/* Leadership Cards Block */}
          <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
            {LEADERSHIP_ACTIVITIES.map((activity) => (
              <div
                key={activity.id}
                className={`p-6 rounded-2xl border flex flex-col h-full justify-between transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-slate-900/40 border-white/5 hover:border-emerald-500/20' 
                    : 'bg-white border-slate-200/60 hover:border-emerald-200 hover:shadow-lg'
                }`}
              >
                <div>
                  <div className="flex items-center space-x-3 mb-4.5">
                    <div className={`w-9 h-9 rounded-lg flex items-center justify-center animate-pulse ${
                      isDarkMode ? 'bg-[#FF7A00]/10 text-[#FF7A00]' : 'bg-emerald-50 text-emerald-700'
                    }`}>
                      <Trophy size={16} />
                    </div>
                    <div>
                      <h4 className={`text-sm md:text-base font-bold font-display ${
                        isDarkMode ? 'text-white' : 'text-slate-800'
                      }`}>
                        {activity.role}
                      </h4>
                      <span className={`text-[11px] font-medium tracking-wide uppercase font-mono ${
                        isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
                      }`}>
                        {activity.company}
                      </span>
                    </div>
                  </div>

                  <p className={`text-xs md:text-sm leading-relaxed ${
                    isDarkMode ? 'text-slate-400' : 'text-slate-600'
                  }`}>
                    {activity.details}
                  </p>
                </div>

                <div className="mt-6 flex items-center space-x-1.5 text-slate-500 text-[10px] font-bold uppercase tracking-wider">
                  <span>Leadership Badge Verified</span>
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

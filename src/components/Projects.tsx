import { useState } from 'react';
import { PROJECTS } from '../data';
import { Project } from '../types';
import { ExternalLink, Github, Layers, Code, Sparkles, Filter, Database, Workflow, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [selectedFilter, setSelectedFilter] = useState<'All' | 'AI & ML' | 'E-commerce'>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories: Array<'All' | 'AI & ML' | 'E-commerce'> = [
    'All',
    'AI & ML',
    'E-commerce',
  ];

  const filteredProjects = selectedFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedFilter);

  return (
    <section 
      id="projects" 
      className="py-20"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className={`text-xs font-extrabold tracking-widest uppercase font-display ${
            isDarkMode ? 'text-[#FF7A00]' : 'text-emerald-700'
          }`}>
            Portfolio
          </span>
          <h2 className={`text-3xl md:text-4xl font-bold font-display mt-2 ${
            isDarkMode ? 'text-white' : 'text-slate-900'
          }`}>
            Featured Projects
          </h2>
          <div className={`w-12 h-1 mx-auto mt-4 rounded-full ${
            isDarkMode ? 'bg-[#FF7A00]' : 'bg-emerald-600'
          }`} />
        </div>

        {/* Filters Tabs Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className={`p-1.5 rounded-xl border flex flex-wrap gap-1.5 ${
            isDarkMode ? 'bg-slate-900/60 border-white/5' : 'bg-slate-100 border-slate-200/60 shadow-sm'
          }`}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedFilter(cat)}
                className={`px-4.5 py-2 text-xs font-bold rounded-lg font-display transition-all ${
                  selectedFilter === cat
                    ? 'bg-[#FF7A00] text-slate-950 shadow-md shadow-[#FF7A00]/15'
                    : isDarkMode
                      ? 'text-slate-400 hover:text-white hover:bg-white/5'
                      : 'text-slate-600 hover:text-slate-950 hover:bg-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                key={project.id}
                className="bg-white/80 backdrop-blur-md rounded-2xl border border-emerald-100 flex flex-col h-full transform transition-all duration-350 ease-out hover:-translate-y-2 hover:border-[#FF7A00] hover:shadow-[0_20px_40px_rgba(255,122,0,0.30)] overflow-hidden group"
              >
                {/* Card Content body */}
                <div className="p-6 md:p-7 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Category Stamp & Live Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="inline-flex items-center space-x-1 text-[10px] font-bold font-mono tracking-wider uppercase px-2.5 py-0.5 rounded border text-emerald-800 bg-emerald-50 border-emerald-200/50">
                        <Layers size={10} className="mr-1" />
                        {project.category}
                      </span>
                      {project.isLive && (
                        <span className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded border border-emerald-200/50 bg-emerald-50 text-emerald-800 text-[9px] font-extrabold uppercase font-mono tracking-wider shadow-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          <span>LIVE PROJECT</span>
                        </span>
                      )}
                    </div>

                    <h3 className="text-base md:text-lg font-bold font-display leading-snug text-slate-900 group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs md:text-sm mt-3 leading-relaxed font-sans line-clamp-3 text-slate-600">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 font-sans">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="text-[9.5px] font-semibold px-2 py-0.5 rounded border bg-slate-50 border-slate-200/60 text-slate-600"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Card Actions Footer */}
                    <div className="flex items-center justify-between border-t border-dashed border-emerald-500/10 pt-4 mt-auto">
                      <button
                        onClick={() => setActiveProjectModal(project)}
                        className="text-xs font-bold font-display tracking-tight flex items-center space-x-1 transition-all hover:translate-x-1 text-emerald-700 hover:text-emerald-800 cursor-pointer"
                      >
                        <span>Analyze Architecture</span>
                        <ExternalLink size={12} />
                      </button>

                      <div className="flex items-center space-x-2">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            className="px-4 py-2 rounded-lg text-[10.5px] font-extrabold font-display flex items-center space-x-1 bg-emerald-600 text-white hover:bg-emerald-700 shadow-md shadow-emerald-500/10 hover:scale-103 transition-all duration-300"
                          >
                            <span>{project.buttonText || "View Live Project"}</span>
                            <ArrowRight size={11} className="transform group-hover:translate-x-1 transition-transform duration-300" />
                          </a>
                        )}

                        <a
                          href={project.github || "https://github.com/vineelareddy984"}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg border bg-slate-50 border-slate-200 text-slate-600 hover:text-emerald-750 hover:bg-slate-200 shadow-sm transition-all"
                          aria-label="View Github link"
                        >
                          <Github size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Interactive Architecture Explaner Modal */}
        <AnimatePresence>
          {activeProjectModal && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-fade-in">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative border bg-white border-slate-250 text-slate-800"
              >
                 {/* Header */}
                <div className="px-6 py-4 flex items-center justify-between border-b border-slate-100">
                  <div className="flex items-center space-x-2">
                    <Sparkles className="text-emerald-700" size={16} />
                    <span className="text-[10px] uppercase font-mono tracking-widest text-emerald-850 font-bold">System Architecture</span>
                  </div>
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="p-1 rounded-lg border bg-slate-50 border-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer"
                  >
                    ✕
                  </button>
                </div>
 
                {/* Modal Body */}
                <div className="p-6 md:p-8 space-y-6">
                  <div>
                    <h4 className="text-sm font-bold font-display uppercase tracking-widest text-slate-400">Project Title</h4>
                    <h3 className="text-xl font-bold font-display mt-1 text-slate-950">
                      {activeProjectModal.title}
                    </h3>
                  </div>

                  <div>
                    <h4 className="text-sm font-bold font-display uppercase tracking-widest text-slate-400 mb-2">Theoretical Concept</h4>
                    <p className="text-xs md:text-sm leading-relaxed text-slate-700">
                      This platform bridges the gap between raw data collection and user action. By using structured database states and optimized querying algorithms, it performs high-efficiency calculations to yield diagnostic previews, prediction dashboards, or real-time early warnings, depending on parameters.
                    </p>
                  </div>

                  {/* Architecture Diagram Box (Mock Visual) */}
                  <div className="p-5 rounded-xl border font-mono text-[10px] leading-relaxed relative overflow-hidden bg-slate-50 border-slate-205">
                    {/* Glow effect */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-xl rounded-full" />

                    <span className="text-emerald-700 font-bold block mb-3">// ARCHITECTURE SCHEMATIC DIAGRAM</span>
                    
                    <div className="space-y-1.5 text-slate-650">
                      <p className="flex items-center"><span className="mr-2 text-emerald-800 font-bold">✦ [Client-Side View Port]</span> ── (React Hooks State) ──▶ Sends JSON Schema</p>
                      <p className="flex items-center"><span className="mr-2 text-emerald-800 font-bold">✦ [Data Parsing Engine]</span> ── (Structured Algorithms) ──▶ Computes Metrics</p>
                      <p className="flex items-center"><span className="mr-2 text-emerald-800 font-bold">✦ [Local Cache Engine]</span> ── (LocalStorage Sync / JSON) ──▶ Offline Fallback DB</p>
                    </div>

                    <div className="mt-4 flex items-center gap-4 text-[9px] border-t border-emerald-500/10 pt-3 text-slate-500">
                      <span className="flex items-center"><Database size={10} className="mr-1 text-emerald-800" /> Dual Layer Storage</span>
                      <span className="flex items-center"><Workflow size={10} className="mr-1 text-emerald-800" /> Agile Delivery</span>
                    </div>
                  </div>

                  <div className="flex justify-between items-center p-4 rounded-xl border bg-emerald-50/50 border-emerald-100">
                    <span className="text-xs text-slate-700 font-bold">Seeking full detailed implementation code?</span>
                    <a
                      href="https://github.com/vineelareddy984"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs font-bold font-display hover:underline flex items-center space-x-1 text-emerald-800"
                    >
                      <span>Explore Repository</span>
                      <Github size={12} className="ml-1" />
                    </a>
                  </div>
                </div>

                {/* Footer */}
                <div className="px-6 py-4 flex items-center justify-end border-t bg-slate-50 border-slate-200">
                  <button
                    onClick={() => setActiveProjectModal(null)}
                    className="px-5 py-2.5 text-xs font-bold font-display rounded-lg bg-emerald-500 text-slate-950 hover:bg-emerald-450 transition-all cursor-pointer shadow-md shadow-emerald-500/10"
                  >
                    Got It, Close
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}

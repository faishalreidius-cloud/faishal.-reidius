import { useState } from 'react';
import { Building2, MapPin, ArrowRight, ShieldCheck, CheckCircle2, Eye } from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/companyData';
import { PortfolioProject } from '../types';

interface PortfolioSectionProps {
  onSelectProject: (project: PortfolioProject) => void;
  onInquireProject: (projectName: string) => void;
}

export const PortfolioSection = ({ onSelectProject, onInquireProject }: PortfolioSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Industrial', 'Pharmaceutical', 'Hospitality', 'Commercial', 'Data Centers'];

  const filteredProjects =
    activeCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase">
              Proven Enterprise Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Featured Engineering Portfolio
            </h2>
            <p className="text-slate-600 text-base">
              Explore how Reidius Solution protects mission-critical commercial high-rises,
              export textile manufacturers, sterile pharmaceutical cleanrooms, and data centers.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-200 shadow-sm shrink-0">
            <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <div className="text-xl font-black text-slate-900">100%</div>
              <div className="text-xs text-slate-500 font-medium">Audit Pass Rate (Accord/RSC/BNBC)</div>
            </div>
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat
                  ? 'bg-teal-600 text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-200 hover:text-slate-900 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div>
                {/* Visual Top */}
                <div className="relative h-52 overflow-hidden bg-slate-900">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent" />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-slate-900 shadow">
                      {project.badge}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-900/80 text-teal-300 border border-slate-700">
                      {project.category}
                    </span>
                  </div>

                  {/* Bottom Image Overlay */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300">
                    <span className="flex items-center gap-1 font-semibold text-white">
                      <Building2 className="w-3.5 h-3.5 text-teal-400" />
                      {project.client}
                    </span>
                    <span className="flex items-center gap-1 text-[11px]">
                      <MapPin className="w-3 h-3 text-red-400" />
                      {project.location.split(',')[0]}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-base font-bold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {project.title}
                  </h3>

                  {/* Systems preview */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-semibold uppercase text-slate-400 tracking-wider">
                      Deployed Infrastructure
                    </div>
                    <ul className="space-y-1 text-xs text-slate-600">
                      {project.systemsInstalled.slice(0, 2).map((sys, idx) => (
                        <li key={idx} className="flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                          <span className="line-clamp-1">{sys}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Challenge brief snippet */}
                  <p className="text-xs text-slate-500 line-clamp-2 italic pt-1 border-t border-slate-100">
                    &ldquo;{project.challenge}&rdquo;
                  </p>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-3">
                <button
                  onClick={() => onSelectProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-teal-600 transition-colors cursor-pointer"
                >
                  <Eye className="w-3.5 h-3.5 text-teal-600" />
                  <span>Case Study</span>
                </button>

                <button
                  onClick={() => onInquireProject(project.title)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <span>Similar Solution</span>
                  <ArrowRight className="w-3.5 h-3.5 text-teal-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

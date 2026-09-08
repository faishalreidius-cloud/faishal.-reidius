import { X, CheckCircle2, Shield, Calendar, MapPin, Building, Award, ArrowRight } from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onSelectProjectForInquiry: (projectTitle: string) => void;
}

export const ProjectDetailModal = ({
  project,
  onClose,
  onSelectProjectForInquiry
}: ProjectDetailModalProps) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Modal Banner */}
        <div className="relative h-60 sm:h-72 bg-slate-900">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover opacity-60"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 space-y-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal-500 text-slate-950 uppercase tracking-wider">
                {project.badge}
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                {project.category}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm">
            <div>
              <span className="text-slate-400 block text-[11px] uppercase font-semibold">Client</span>
              <span className="font-bold text-slate-900 flex items-center gap-1 mt-0.5">
                <Building className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                {project.client}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px] uppercase font-semibold">Location</span>
              <span className="font-medium text-slate-700 flex items-center gap-1 mt-0.5">
                <MapPin className="w-3.5 h-3.5 text-red-500 shrink-0" />
                {project.location}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px] uppercase font-semibold">Timeline</span>
              <span className="font-medium text-slate-700 flex items-center gap-1 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                {project.year}
              </span>
            </div>
            <div>
              <span className="text-slate-400 block text-[11px] uppercase font-semibold">
                {project.stats?.label || 'Scale'}
              </span>
              <span className="font-bold text-teal-700 mt-0.5 block">
                {project.stats?.value || 'Enterprise Level'}
              </span>
            </div>
          </div>

          {/* Systems Installed */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-2.5">
              <Shield className="w-4 h-4 text-teal-600" />
              Integrated Systems &amp; Equipment
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {project.systemsInstalled.map((sys, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-100 border border-slate-200 text-xs font-medium text-slate-800 flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-600 shrink-0" />
                  <span>{sys}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="p-4 rounded-xl bg-amber-50/60 border border-amber-200/80 space-y-1.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-amber-900">
                The Engineering Challenge
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-teal-50/60 border border-teal-200/80 space-y-1.5">
              <h5 className="text-xs font-bold uppercase tracking-wider text-teal-900">
                The Reidius Engineered Solution
              </h5>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Measured Outcomes & Audit Results */}
          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
              <Award className="w-4 h-4 text-emerald-600" />
              Verified Results &amp; Compliance Achieved
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
              {project.results.map((res, rIdx) => (
                <li key={rIdx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close Case Study
          </button>

          <button
            onClick={() => {
              onClose();
              onSelectProjectForInquiry(`Inquiry regarding similar deployment as ${project.title}`);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
          >
            Deploy Similar System For Your Facility
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

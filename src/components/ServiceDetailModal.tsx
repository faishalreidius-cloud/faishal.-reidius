import { X, CheckCircle2, Shield, ArrowRight, Award, FileCheck2 } from 'lucide-react';
import { ServiceItem } from '../types';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectServiceForInquiry: (serviceTitle: string) => void;
}

export const ServiceDetailModal = ({
  service,
  onClose,
  onSelectServiceForInquiry
}: ServiceDetailModalProps) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-8">
        {/* Header with image */}
        <div className="relative h-56 sm:h-64 bg-slate-900">
          <img
            src={service.imageUrl}
            alt={service.title}
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
              <span className="px-2.5 py-1 rounded-full text-xs font-bold bg-teal-500/90 text-white uppercase tracking-wider">
                Engineering Domain
              </span>
              <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800/90 text-slate-300 border border-slate-700">
                Official Supply &amp; Commissioning
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {service.title}
            </h3>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-teal-700 mb-2">
              Technical Overview
            </h4>
            <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Key Features & Standards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5">
                <FileCheck2 className="w-4 h-4 text-teal-600" />
                Key Capabilities &amp; Specs
              </h4>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                {service.keyFeatures.map((feat, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  Primary Applications
                </h4>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-600">
                  {service.applications.map((app, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                      <span>{app}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-2 border-t border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-1.5 mb-2">
                  <Award className="w-4 h-4 text-amber-500" />
                  Associated Brands &amp; Certifications
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {service.brands.map((b, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-800"
                    >
                      {b}
                    </span>
                  ))}
                  {service.certifications.map((c, i) => (
                    <span
                      key={i}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-teal-50 text-teal-700 border border-teal-200"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Architecture & Operational Schematic Diagram */}
          {service.diagramUrl && (
            <div className="pt-4 border-t border-slate-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-teal-600">
                    Engineering Schematic
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900">
                    {service.diagramTitle || 'System Architecture & Signal Distribution'}
                  </h4>
                </div>
                <span className="px-2 py-1 rounded text-[10px] font-bold bg-slate-100 text-slate-700 border border-slate-200">
                  NFPA &amp; EN 54 Topology
                </span>
              </div>

              {service.diagramExplanation && (
                <p className="text-xs text-slate-600 leading-relaxed">
                  {service.diagramExplanation}
                </p>
              )}

              {/* Diagram Visual Card */}
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-slate-900 shadow-md">
                <div className="relative max-h-80 sm:max-h-96 flex items-center justify-center p-2 bg-slate-950">
                  <img
                    src={service.diagramUrl}
                    alt={service.diagramTitle || service.title}
                    className="max-h-80 w-auto object-contain rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-3 bg-slate-900 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <span>Authorized Engineering Schematic &amp; Component Layout</span>
                  <span className="text-teal-400 font-medium">Reidius Solution Engineering</span>
                </div>
              </div>

              {/* Schematic Component Breakdown */}
              {service.schematicDetails && service.schematicDetails.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                  {service.schematicDetails.map((detail, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-1"
                    >
                      <div className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-500" />
                        {detail.title}
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed">
                        {detail.desc}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Turnkey On-Site Field Installation Reference */}
          {service.installationUrl && (
            <div className="pt-4 border-t border-slate-200 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">
                    Real Installation Showcase
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Turnkey Control Room &amp; Wall Station Execution
                  </h4>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                  Verified On-Site Deployment
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-center rounded-xl p-3 bg-slate-50 border border-slate-200">
                <div className="sm:col-span-1 rounded-lg overflow-hidden border border-slate-200">
                  <img
                    src={service.installationUrl}
                    alt="On-Site Equipment Installation"
                    className="w-full h-32 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="sm:col-span-2 space-y-1 text-xs text-slate-600">
                  <div className="font-bold text-slate-900">
                    Complete Life Safety Station Integration
                  </div>
                  <p>
                    Turnkey installation featuring main addressable control panels, emergency evacuation plan displays, fire extinguisher stations, and certified wiring raceways executed to BNBC standards.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Close Details
          </button>
          
          <button
            onClick={() => {
              onClose();
              onSelectServiceForInquiry(service.title);
            }}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-xs shadow-md transition-all cursor-pointer"
          >
            Request Inquiry for this System
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

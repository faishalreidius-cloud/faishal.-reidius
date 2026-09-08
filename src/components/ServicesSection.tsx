import { useState } from 'react';
import {
  Flame,
  ShieldAlert,
  Activity,
  Zap,
  Radio,
  Fingerprint,
  Megaphone,
  ArrowRight,
  CheckCircle2,
  ExternalLink
} from 'lucide-react';
import { SERVICES } from '../data/companyData';
import { ServiceItem } from '../types';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onInquireService: (serviceTitle: string) => void;
}

export const ServicesSection = ({ onSelectService, onInquireService }: ServicesSectionProps) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Core Systems' },
    { id: 'fire-detection', label: 'Fire Detection & Alarm' },
    { id: 'fire-suppression', label: 'Gas & Panel Suppression' },
    { id: 'pumps', label: 'NFPA Fire Pumps' },
    { id: 'lhd', label: 'Linear Heat Detection' },
    { id: 'access-control', label: 'Biometrics & Access' },
    { id: 'pa-bms', label: 'Voice Alarm & BMS' }
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES
      : SERVICES.filter((s) => s.category === activeCategory);

  const getServiceIcon = (name: string) => {
    switch (name) {
      case 'Flame':
        return <Flame className="w-5 h-5 text-red-500" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-teal-600" />;
      case 'Activity':
        return <Activity className="w-5 h-5 text-blue-600" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-emerald-600" />;
      case 'Fingerprint':
        return <Fingerprint className="w-5 h-5 text-indigo-600" />;
      case 'Megaphone':
        return <Megaphone className="w-5 h-5 text-rose-600" />;
      default:
        return <Flame className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="services" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-800 text-xs font-bold tracking-wide uppercase border border-slate-200">
            Turnkey Engineering &amp; Sourcing
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Our Core Systems &amp; Engineering Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Authorized supply, precision hydraulic calculation, installation, testing, and 
            commissioning of world-class life safety and automated infrastructure.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-slate-900 text-white shadow-sm'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="group flex flex-col justify-between rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              <div>
                {/* Visual Header */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={service.imageUrl}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                  
                  {/* Category icon badge */}
                  <div className="absolute top-4 left-4 p-2 rounded-xl bg-white/95 shadow-md">
                    {getServiceIcon(service.iconName)}
                  </div>

                  {/* Certifications & Schematic chip */}
                  <div className="absolute bottom-3 left-4 right-4 flex flex-wrap gap-1">
                    {service.diagramUrl && (
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-teal-950/90 text-teal-300 border border-teal-600 backdrop-blur-sm shadow-sm flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse" />
                        Schematic Included
                      </span>
                    )}
                    {service.certifications.slice(0, 2).map((cert, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[10px] font-bold bg-slate-900/90 text-slate-200 border border-slate-700 backdrop-blur-sm"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-teal-600 transition-colors line-clamp-2">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-3 leading-relaxed">
                    {service.shortDesc}
                  </p>

                  {/* Brand Partners */}
                  <div className="pt-2 border-t border-slate-100">
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1.5">
                      Authorized Brands
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {service.brands.map((b, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 rounded text-[11px] font-semibold bg-slate-100 text-slate-800"
                        >
                          {b}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Top Key Features preview */}
                  <div className="space-y-1.5 pt-1">
                    {service.keyFeatures.slice(0, 2).map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-1.5 text-xs text-slate-600">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 hover:text-teal-600 transition-colors cursor-pointer"
                >
                  <span>Specs &amp; Details</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onInquireService(service.title)}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-teal-600 hover:bg-teal-700 text-white text-xs font-semibold shadow-sm transition-all cursor-pointer"
                >
                  <span>Inquire</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner with Emergency Support Note */}
        <div className="mt-16 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-800 shadow-lg">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Need Multi-Brand Commissioning or AMC Support for Existing Systems?
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl">
              Our engineers conduct comprehensive on-site inspections, addressable loop diagnostics,
              gas room integrity tests, and NFPA flow testing for all existing facilities.
            </p>
          </div>
          <button
            onClick={() => onInquireService('AMC & System Testing Support')}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 text-xs sm:text-sm font-bold shadow-md transition-all shrink-0 cursor-pointer"
          >
            Schedule Technical Survey
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

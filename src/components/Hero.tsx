import { ShieldCheck, Flame, Award, ArrowRight, FileCheck, PhoneCall, CheckCircle2 } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface HeroProps {
  onExploreServices: () => void;
  onExplorePortfolio: () => void;
  onOpenPlanner: () => void;
  onOpenBrochure: () => void;
}

export const Hero = ({
  onExploreServices,
  onExplorePortfolio,
  onOpenPlanner,
  onOpenBrochure
}: HeroProps) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-slate-900 text-white overflow-hidden">
      {/* Subtle geometric background grid and ambient lighting */}
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      {/* Radiant glow spots */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Slogan Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-teal-400 text-xs font-semibold tracking-wide">
              <span className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
              <span>{COMPANY_INFO.tagline}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Enterprise Fire Safety Engineering &amp; Intelligent Building Systems
            </h1>

            {/* Descriptive Body */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Authorized channel partner delivering turnkey addressable fire alarm, clean agent gas
              flooding, UL/NFPA fire pumps, biometric security, and fiber optic linear heat
              detection engineered for maximum life safety and seamless audit compliance.
            </p>

            {/* Bullet Proof Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-sm text-slate-200">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Siemens &amp; Simplex Authorized Partner</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>NFPA 20, UL 448 &amp; EN54 Norm Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>Single-Basket Sourcing &amp; Commissioning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0" />
                <span>24/7 Emergency Support &amp; AMC Maintenance</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenPlanner}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-bold text-slate-900 bg-teal-400 hover:bg-teal-300 shadow-lg shadow-teal-500/20 transition-all transform hover:-translate-y-0.5 cursor-pointer"
              >
                <ShieldCheck className="w-4 h-4 text-slate-950" />
                Configure System Scope
                <ArrowRight className="w-4 h-4 text-slate-950" />
              </button>

              <button
                onClick={onExplorePortfolio}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all cursor-pointer"
              >
                <FileCheck className="w-4 h-4 text-teal-400" />
                View Enterprise Portfolio
              </button>

              <button
                onClick={onOpenBrochure}
                className="inline-flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
              >
                <Award className="w-4 h-4 text-amber-400" />
                View Company Profile
              </button>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl bg-gradient-to-br from-slate-800 to-slate-850 p-2 border border-slate-700 shadow-2xl">
              {/* Image banner */}
              <div className="relative h-72 sm:h-80 rounded-xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1000&q=80"
                  alt="Reidius Solution Fire Engineering"
                  className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent" />

                {/* Floating Badge */}
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 px-3 py-1.5 rounded-lg flex items-center gap-2 shadow-lg">
                  <Flame className="w-4 h-4 text-red-400 animate-pulse" />
                  <span className="text-xs font-bold text-white tracking-wide">UL • FM • EN54</span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-4 left-4 right-4 space-y-1">
                  <div className="text-xs text-teal-400 font-semibold tracking-wider uppercase">
                    Trusted by Industry Giants
                  </div>
                  <div className="text-sm font-bold text-white">
                    Ha-Meem Group • Renata Pharma • The Westin Dhaka • Bombay Sweets
                  </div>
                </div>
              </div>

              {/* Quick Metrics Strip */}
              <div className="grid grid-cols-3 gap-2 mt-2 p-2 bg-slate-900/80 rounded-xl border border-slate-800/80 text-center">
                <div className="p-2">
                  <div className="text-xl sm:text-2xl font-black text-teal-400">100+</div>
                  <div className="text-[11px] text-slate-400 font-medium">Enterprise Sites</div>
                </div>
                <div className="p-2 border-x border-slate-800">
                  <div className="text-xl sm:text-2xl font-black text-white">&lt;10s</div>
                  <div className="text-[11px] text-slate-400 font-medium">Gas Discharge</div>
                </div>
                <div className="p-2">
                  <div className="text-xl sm:text-2xl font-black text-amber-400">100%</div>
                  <div className="text-[11px] text-slate-400 font-medium">Audit Approval</div>
                </div>
              </div>
            </div>

            {/* Floating Trust Card */}
            <div className="hidden sm:flex absolute -bottom-6 -left-6 bg-white text-slate-900 p-4 rounded-xl shadow-xl border border-slate-200 items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-teal-50 flex items-center justify-center text-teal-600">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs text-slate-500 font-medium">Engineering Support</div>
                <div className="text-sm font-bold text-slate-900">Multi-Brand Commissioning</div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategic Brand Strip below hero */}
        <div className="mt-16 pt-10 border-t border-slate-800/80">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-400 text-center mb-6">
            Authorized Channel Partnerships &amp; Certified Technologies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-slate-400">
            <span className="font-extrabold text-lg tracking-widest text-slate-300 hover:text-white transition-colors">
              SIEMENS
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-bold text-lg tracking-wide text-slate-300 hover:text-white transition-colors">
              Simplex
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-black text-lg tracking-wider text-slate-300 hover:text-white transition-colors">
              BOSCH
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-extrabold text-lg tracking-tight text-slate-300 hover:text-white transition-colors">
              MAS DAF
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-bold text-lg tracking-widest text-slate-300 hover:text-white transition-colors">
              VIRDI
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-bold text-lg tracking-wider text-slate-300 hover:text-white transition-colors">
              FIPRON
            </span>
            <span className="text-slate-600">•</span>
            <span className="font-semibold text-lg tracking-normal text-slate-300 hover:text-white transition-colors">
              AP SENSING
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

import { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, CheckCircle2, Building, ShieldCheck } from 'lucide-react';
import { TESTIMONIALS, FAQ_ITEMS } from '../data/companyData';

export const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-teal-100 text-teal-800 text-xs font-bold tracking-wide uppercase">
            Client Endorsements &amp; Audits
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Trusted by Bangladesh’s Leading Industry Leaders
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Hear from engineering directors, plant general managers, and EHS heads who count on
            Reidius Solution for mission-critical fire safety and building systems.
          </p>
        </div>

        {/* Featured Testimonial Spotlight */}
        <div className="relative max-w-4xl mx-auto bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl overflow-hidden mb-16">
          <div className="absolute top-0 right-0 w-64 h-64 bg-teal-50 rounded-full blur-3xl -mr-24 -mt-24 pointer-events-none" />
          
          <div className="relative space-y-8">
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Enterprise Client</span>
              </div>
            </div>

            {/* Testimonial Quote */}
            <p className="text-lg sm:text-2xl font-medium text-slate-800 leading-relaxed italic">
              &ldquo;{current.comment}&rdquo;
            </p>

            {/* Client Info and Project Category */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-slate-100">
              <div className="flex items-center gap-4">
                <img
                  src={current.avatarUrl}
                  alt={current.name}
                  className="w-14 h-14 rounded-2xl object-cover border-2 border-teal-500 shadow-sm"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-slate-900 text-base sm:text-lg">
                    {current.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 font-medium">
                    {current.role}
                  </p>
                  <p className="text-xs font-semibold text-teal-700 flex items-center gap-1 mt-0.5">
                    <Building className="w-3 h-3 text-teal-600" />
                    {current.company} • {current.location}
                  </p>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center gap-3">
                <button
                  onClick={prevTestimonial}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <span className="text-xs font-bold text-slate-400">
                  {currentIndex + 1} / {TESTIMONIALS.length}
                </span>
                <button
                  onClick={nextTestimonial}
                  className="p-3 rounded-xl border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-slate-900 transition-colors cursor-pointer"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All Testimonials Quick Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={t.id}
              onClick={() => setCurrentIndex(idx)}
              className={`p-6 rounded-2xl bg-white border cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                currentIndex === idx
                  ? 'border-teal-600 shadow-md ring-2 ring-teal-500/20'
                  : 'border-slate-200 hover:border-slate-300 shadow-sm'
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center gap-1">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-slate-600 line-clamp-3 italic">
                  &ldquo;{t.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-100">
                <div className="font-bold text-slate-900 text-xs">{t.name}</div>
                <div className="text-[11px] text-teal-700 font-semibold line-clamp-1">{t.company}</div>
                <div className="text-[10px] text-slate-400 mt-0.5">{t.projectType}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Frequently Asked Questions */}
        <div id="faq" className="max-w-4xl mx-auto pt-8">
          <div className="text-center mb-10 space-y-2">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-teal-700">
              <ShieldCheck className="w-4 h-4" />
              Technical Clarity
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              Clear answers regarding system design, supply logistics, compliance, and AMC contracts.
            </p>
          </div>

          <div className="space-y-4">
            {FAQ_ITEMS.map((faq, fIdx) => (
              <div
                key={fIdx}
                className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm space-y-2"
              >
                <h4 className="text-base font-bold text-slate-900 flex items-start gap-2">
                  <span className="text-teal-600 font-extrabold">Q.</span>
                  <span>{faq.q}</span>
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed pl-5">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

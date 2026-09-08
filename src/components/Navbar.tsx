import { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Menu, X, Shield, FileText, ChevronRight } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface NavbarProps {
  onOpenBrochure: () => void;
  onOpenPlanner: () => void;
  onNavigateToContact: () => void;
}

export const Navbar = ({ onOpenBrochure, onOpenPlanner, onNavigateToContact }: NavbarProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Choose Us', href: '#why-us' },
    { label: 'Partners', href: '#partners' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Corporate Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-2 px-4 border-b border-slate-800 hidden md:block">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors">
              <MapPin className="w-3.5 h-3.5 text-teal-400" />
              Nikunja-2, Khilkhet, Dhaka-1229
            </span>
            <a
              href="mailto:reidius.solution@gmail.com"
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-teal-400" />
              reidius.solution@gmail.com
            </a>
            <span className="text-slate-500">|</span>
            <span className="text-teal-400 font-medium">
              Authorized Partner: Siemens • Simplex • Bosch • MAS DAF
            </span>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href={`tel:${COMPANY_INFO.phones[0].value}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-teal-300 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-teal-400" />
              Hotline: {COMPANY_INFO.phones[0].display}
            </a>
            <button
              onClick={onOpenBrochure}
              className="flex items-center gap-1 bg-slate-800 hover:bg-slate-700 text-teal-300 px-2.5 py-1 rounded text-xs font-medium border border-slate-700 transition-all cursor-pointer"
            >
              <FileText className="w-3 h-3" />
              Company Profile
            </button>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200'
            : 'bg-white py-4 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo matching PDF styling */}
          <a href="#" className="flex items-center gap-3 group">
            {/* Custom SVG logo representing Reidius dual-element swirl */}
            <div className="relative w-10 h-10 flex items-center justify-center rounded-xl bg-slate-900 shadow-inner group-hover:scale-105 transition-transform duration-300">
              <svg className="w-7 h-7" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Emerald dynamic crescent */}
                <path
                  d="M10 20C10 14.4772 14.4772 10 20 10C24.4183 10 28.1633 12.8596 29.4721 16.8506C28.2323 15.6987 26.5768 15 24.75 15C20.4698 15 17 18.4698 17 22.75C17 25.108 18.0504 27.2208 19.7143 28.6479C14.2494 27.5684 10 24.2384 10 20Z"
                  fill="#0D9488"
                />
                {/* Crimson vibrant core */}
                <circle cx="25" cy="24" r="6.5" fill="#EF4444" />
                {/* Center highlight */}
                <circle cx="25" cy="24" r="2.5" fill="#FFFFFF" />
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900 font-sans">
                  REIDIUS
                </span>
                <span className="font-semibold text-xl tracking-wider text-teal-600 font-sans">
                  SOLUTION
                </span>
              </div>
              <p className="text-[10px] text-slate-500 font-medium tracking-wide uppercase">
                Life Safety & Building Automation
              </p>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-teal-600 hover:bg-slate-50 rounded-lg transition-colors cursor-pointer"
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={onOpenPlanner}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors cursor-pointer"
            >
              <Shield className="w-3.5 h-3.5 text-teal-600" />
              System Estimator
            </button>
            <button
              onClick={onNavigateToContact}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold text-white bg-teal-600 hover:bg-teal-700 shadow-sm hover:shadow transition-all cursor-pointer"
            >
              Get In Touch
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              onClick={onNavigateToContact}
              className="px-3 py-1.5 text-xs font-semibold text-white bg-teal-600 rounded-md"
            >
              Inquire
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-teal-600 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200 px-4 pt-3 pb-6 space-y-3 animate-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => handleLinkClick(link.href)}
                  className="text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-teal-50 hover:text-teal-700 rounded-lg transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenPlanner();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-100 text-slate-800 font-medium text-xs border border-slate-200"
              >
                <Shield className="w-4 h-4 text-teal-600" />
                Configure System Scope / Estimator
              </button>
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenBrochure();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-800 text-teal-300 font-medium text-xs"
              >
                <FileText className="w-4 h-4" />
                View Company Profile PDF
              </button>
              <a
                href={`tel:${COMPANY_INFO.phones[0].value}`}
                className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-teal-600 text-white font-medium text-xs shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Call: {COMPANY_INFO.phones[0].display}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ServicesSection } from './components/ServicesSection';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { PortfolioSection } from './components/PortfolioSection';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PartnersSection } from './components/PartnersSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { SystemPlanner } from './components/SystemPlanner';
import { CompanyProfileModal } from './components/CompanyProfileModal';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServiceItem, PortfolioProject } from './types';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = useState<PortfolioProject | null>(null);
  const [isPlannerOpen, setIsPlannerOpen] = useState(false);
  const [isBrochureOpen, setIsBrochureOpen] = useState(false);

  // Inquiries prefill state
  const [inquiryPrefill, setInquiryPrefill] = useState<{
    service?: string;
    message?: string;
    facility?: string;
  }>({});

  const scrollToContact = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToServices = () => {
    const servicesElement = document.getElementById('services');
    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToPortfolio = () => {
    const portfolioElement = document.getElementById('portfolio');
    if (portfolioElement) {
      portfolioElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleServiceInquiry = (serviceTitle: string) => {
    setInquiryPrefill((prev) => ({
      ...prev,
      service: serviceTitle,
      message: `I would like to request an official quotation, technical data sheet, and consultation for: ${serviceTitle}.`
    }));
    scrollToContact();
  };

  const handleProjectInquiry = (projectName: string) => {
    setInquiryPrefill((prev) => ({
      ...prev,
      message: `We are interested in a solution comparable to your project: "${projectName}". Please connect us with your lead engineer for a site survey.`
    }));
    scrollToContact();
  };

  const handleApplyConfigFromPlanner = (configSummary: string, facilityType: string) => {
    setInquiryPrefill((prev) => ({
      ...prev,
      facility: facilityType,
      message: configSummary
    }));
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-teal-600 selection:text-white">
      {/* Sticky Top Header Navigation */}
      <Navbar
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenPlanner={() => setIsPlannerOpen(true)}
        onNavigateToContact={scrollToContact}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreServices={scrollToServices}
          onExplorePortfolio={scrollToPortfolio}
          onOpenPlanner={() => setIsPlannerOpen(true)}
          onOpenBrochure={() => setIsBrochureOpen(true)}
        />

        {/* 4 Strategic Pillars & Operating Philosophy */}
        <WhyChooseUs />

        {/* Core Systems & Engineering Services */}
        <ServicesSection
          onSelectService={(service) => setSelectedService(service)}
          onInquireService={handleServiceInquiry}
        />

        {/* Professional Enterprise Portfolio */}
        <PortfolioSection
          onSelectProject={(project) => setSelectedProject(project)}
          onInquireProject={handleProjectInquiry}
        />

        {/* World-Class Brand Alliances & Certifications */}
        <PartnersSection />

        {/* Client Testimonials & FAQ Area */}
        <TestimonialsSection />

        {/* Official Inquiry & Consultation Desk */}
        <ContactSection
          initialService={inquiryPrefill.service}
          initialMessage={inquiryPrefill.message}
          initialFacility={inquiryPrefill.facility}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenBrochure={() => setIsBrochureOpen(true)}
        onOpenPlanner={() => setIsPlannerOpen(true)}
      />

      {/* Service Detailed Specs Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectServiceForInquiry={handleServiceInquiry}
      />

      {/* Project Case Study Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProjectForInquiry={handleProjectInquiry}
      />

      {/* Interactive System Scope Estimator Modal */}
      <SystemPlanner
        isOpen={isPlannerOpen}
        onClose={() => setIsPlannerOpen(false)}
        onApplyToInquiry={handleApplyConfigFromPlanner}
      />

      {/* Digital Company Profile PDF Modal */}
      <CompanyProfileModal
        isOpen={isBrochureOpen}
        onClose={() => setIsBrochureOpen(false)}
        onNavigateToContact={scrollToContact}
      />
    </div>
  );
}

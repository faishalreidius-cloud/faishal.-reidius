import React, { useState } from 'react';
import {
  Layers,
  ZoomIn,
  CheckCircle2,
  Cpu,
  Flame,
  Volume2,
  ShieldAlert,
  Droplets,
  ExternalLink,
  ChevronRight,
  Info
} from 'lucide-react';

interface SystemDiagramItem {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  imageUrl: string;
  icon: React.ReactNode;
  standards: string[];
  summary: string;
  callouts: {
    title: string;
    description: string;
    category: string;
  }[];
  specSheetHighlights: { label: string; value: string }[];
}

const SYSTEM_SHOWCASE_ITEMS: SystemDiagramItem[] = [
  {
    id: 'fire-alarm-topology',
    title: 'Fire Alarm System Operational Architecture',
    subtitle: 'Integrated Signal Distribution & Power Backup Topology',
    category: 'Addressable Detection',
    imageUrl: '/images/fire-alarm-system-diagram.jpg',
    icon: <Cpu className="w-5 h-5 text-red-500" />,
    standards: ['NFPA 72', 'EN 54-2', 'BNBC Part 4'],
    summary:
      'Complete end-to-end fire alarm infrastructure illustrating dual-redundant power supplies, multi-sensor initiating loops, microprocessor control units, and synchronized multi-candela notification circuits.',
    callouts: [
      {
        title: 'Primary & Standby Power Supplies',
        category: 'Power Management',
        description:
          'Mains 220V AC with transient surge protection coupled with regulated 24V DC battery bank providing minimum 24-hour quiescent standby plus 30 minutes continuous full-alarm state.'
      },
      {
        title: 'Addressable Initiating Devices Network',
        category: 'Field Sensing',
        description:
          'Loop-isolated optical smoke detectors, rate-of-rise thermal sensors, multi-criteria smoke/heat sensors, and manual break-glass call points.'
      },
      {
        title: 'Central Control Panel & Logic Engine',
        category: 'Microprocessor Unit',
        description:
          'High-speed dual-microprocessor unit handling cause-and-effect matrix execution, loop polling at under 2.5 seconds, and BACnet/Modbus gateway for BMS integration.'
      },
      {
        title: 'Notification Appliances & Firefighter Intercom',
        category: 'Emergency Notification',
        description:
          'Synchronized xenon/LED strobe horns (up to 110 cd), motorized fire bells, directional egress beacons, and two-way warden phone jacks.'
      }
    ],
    specSheetHighlights: [
      { label: 'Loop Capacity', value: '1 to 8 Loops (Up to 2,000 Pts)' },
      { label: 'Polling Speed', value: '< 2.5s per 120 Addresses' },
      { label: 'Battery Standby', value: '24h Normal + 30m Alarm' },
      { label: 'BMS Protocols', value: 'BACnet, Modbus, IP Web-Server' }
    ]
  },
  {
    id: 'siemens-cerberus-sinorix',
    title: 'Siemens Cerberus PRO & Sinorix Gas Extinguishing',
    subtitle: 'Intelligent Detection & Clean Agent Flooding Integration',
    category: 'Integrated Safety',
    imageUrl: '/images/cerberus-pro.jpg',
    icon: <Flame className="w-5 h-5 text-teal-600" />,
    standards: ['UL Listed', 'FM Approved', 'VdS', 'EN 54'],
    summary:
      'The flagship Siemens Cerberus PRO ecosystem unified with Sinorix clean agent gas cylinders, floor repeater displays, and Desigo CC telemetry for mission-critical facilities.',
    callouts: [
      {
        title: 'Siemens Cerberus PRO Addressable Panel',
        category: 'Control Unit',
        description:
          'Modular FC722/FC724 intelligent fire terminal with patented ASAtechnology™ (Advanced Signal Analysis) eliminating deceptive false alarms.'
      },
      {
        title: 'Sinorix Clean Agent Storage Cylinder',
        category: 'Gas Extinguishing',
        description:
          'Seamless alloy steel container pressurized with dry nitrogen to 42-bar for rapid clean agent vaporization, safe for human occupancy.'
      },
      {
        title: 'Graphic Workstation & Floor Repeater',
        category: 'Annunciation',
        description:
          'Color touchscreen terminal providing live isometric floor plan navigation, smoke density trending, and automated emergency service dispatch.'
      },
      {
        title: 'Electromagnetic Actuator Valve',
        category: 'Release Mechanism',
        description:
          'Precision solenoid actuator with mechanical emergency pin override, triggering within 50 milliseconds of confirmed fire sequence.'
      }
    ],
    specSheetHighlights: [
      { label: 'Agent Options', value: 'Novec 1230 & FM-200 (HFC-227ea)' },
      { label: 'Discharge Time', value: '< 10 Seconds Total' },
      { label: 'Cylinder Pressure', value: '25 Bar / 42 Bar High Pressure' },
      { label: 'False Alarm Immunity', value: 'Patented ASAtechnology™' }
    ]
  },
  {
    id: 'fm200-gas-suppression',
    title: 'FM-200 Clean Agent Total Flooding Schematic',
    subtitle: 'Cross-Zoned Coincidence Detection & Piping Network',
    category: 'Gas Suppression',
    imageUrl: '/images/fm200-fire-suppression.jpg',
    icon: <ShieldAlert className="w-5 h-5 text-blue-600" />,
    standards: ['NFPA 2001', 'ISO 14520', 'UL 2166'],
    summary:
      'Detailed engineering schematic demonstrating the coincidence cross-zoned smoke detection logic, pneumatic actuator loops, abort hold-off controls, and ceiling discharge diffuser matrix.',
    callouts: [
      {
        title: 'Cross-Zoned Dual Detection Logic',
        category: 'Trigger Verification',
        description:
          'Requires confirmation from two separate detection circuits (Zone A and Zone B) before commencing 30-second discharge warning countdown.'
      },
      {
        title: 'Hold-Off Abort Switch & Manual Station',
        category: 'Safety Interlock',
        description:
          'Dead-man style abort switch allows on-site personnel to prevent gas discharge during false alerts, while manual pull enables instant override.'
      },
      {
        title: 'Pre-Discharge Warning Alarms',
        category: 'Occupant Warning',
        description:
          'Two-stage audible hooters and illuminated door warning signs warning occupants to evacuate immediately before agent release.'
      },
      {
        title: 'Hydraulic Manifold & 360° Ceiling Nozzles',
        category: 'Distribution',
        description:
          'Calibrated Schedule 40 seamless piping and engineered discharge nozzles delivering uniform gas distribution across underfloor and ceiling voids.'
      }
    ],
    specSheetHighlights: [
      { label: 'Design Concentration', value: '7.9% to 8.5% v/v' },
      { label: 'Nozzle Coverage', value: 'Up to 9.2m x 9.2m per Nozzle' },
      { label: 'Holding Time', value: '> 10 Minutes Room Integrity' },
      { label: 'Toxicity Profile', value: 'NOAEL 9.0% (Safe for Humans)' }
    ]
  },
  {
    id: 'bosch-voice-evacuation',
    title: 'Bosch Public Address & EN 54 Voice Alarm',
    subtitle: 'Priority Paging, Supervised Amplifiers & Sound Projectors',
    category: 'Voice Evacuation',
    imageUrl: '/images/bosch-public-address-system.jpg',
    icon: <Volume2 className="w-5 h-5 text-indigo-600" />,
    standards: ['EN 54-16', 'EN 54-24', 'ISO 7240-16'],
    summary:
      'Professional Bosch Communications infrastructure providing clear, spoken directional emergency evacuation instructions proven to avert crowd panic and accelerate exit times.',
    callouts: [
      {
        title: 'Desktop Zone Paging Call Station',
        category: 'Microphone Console',
        description:
          'Rugged condenser gooseneck microphone with programmable zone selector keys, priority override, and pre-recorded digital chime generator.'
      },
      {
        title: 'Rackmount Power Amplifiers (Plena/Paviro)',
        category: 'Audio Amplification',
        description:
          'High-efficiency modular power amplifiers with continuous 20kHz pilot tone loudspeaker line surveillance and automatic backup amplifier takeover.'
      },
      {
        title: 'EN 54-24 Certified Ceiling & Wall Speakers',
        category: 'Acoustic Projectors',
        description:
          'Metal-bodied ceiling flush speakers (LHM 0606/xx) with fire dome and 100V matching transformer delivering Speech Transmission Index (STI) above 0.50.'
      },
      {
        title: 'Fire Alarm Matrix Interlock',
        category: 'Control Interface',
        description:
          'Dry-contact and RS485 Ethernet interface that instantly mutes commercial BGM and executes prioritized phased floor-by-floor evacuation messages.'
      }
    ],
    specSheetHighlights: [
      { label: 'Amplifier Power', value: '480W RMS per Module' },
      { label: 'Line Surveillance', value: 'Impedance & Pilot Tone 20kHz' },
      { label: 'Speech Intelligibility', value: 'STI > 0.50 (Clear Voice)' },
      { label: 'Standby Power', value: 'Supervised 24V DC Inverter' }
    ]
  },
  {
    id: 'fire-sprinkler-discharge',
    title: 'Automatic Fire Sprinkler Hydraulic Discharge',
    subtitle: 'Thermal Quartzoid Bulb Activation & Umbrella Flame Knockdown',
    category: 'Water Suppression',
    imageUrl: '/images/fire-sprinkler-discharge.jpg',
    icon: <Droplets className="w-5 h-5 text-cyan-600" />,
    standards: ['NFPA 13', 'UL 199', 'FM 2000'],
    summary:
      'High-velocity hydrodynamic water umbrella discharging immediately upon thermal activation of the glass bulb, starving convective heat and shielding building structures.',
    callouts: [
      {
        title: 'Fast-Response Quartzoid Glass Bulb',
        category: 'Thermal Trigger',
        description:
          'Precision liquid-filled bulb calibrated to burst instantly at 68°C (155°F) or specified hazards, releasing water seat plug without electrical dependency.'
      },
      {
        title: 'Engineered Conical Deflector Plate',
        category: 'Spray Geometry',
        description:
          'Perforated serrated brass deflector transforms pressurized water stream into a uniform, overlapping droplet canopy knocking down flame fronts.'
      },
      {
        title: 'NFPA 20 Automated Pump Booster Staging',
        category: 'Hydraulic Supply',
        description:
          'Riser pressure loss immediately activates the MAS DAF electric and diesel fire pump skid, delivering up to 2500 GPM sustained deluge volume.'
      },
      {
        title: 'Waterflow Alarm Switch & Mechanical Gong',
        category: 'Supervision',
        description:
          'Vane-type flow detectors trip supervisory signals to the central fire panel and actuate local non-electric water motor gongs.'
      }
    ],
    specSheetHighlights: [
      { label: 'K-Factor Rating', value: 'K-5.6 (80 metric) / K-8.0' },
      { label: 'Operating Temp', value: '68°C (Red Bulb) Standard' },
      { label: 'Spray Pattern', value: 'Hemispherical Umbrella 360°' },
      { label: 'Max Working Pressure', value: '175 PSI (12.1 Bar)' }
    ]
  },
  {
    id: 'turnkey-installation-station',
    title: 'Turnkey Wall-Mounted Life Safety Station',
    subtitle: 'Certified Central Panel, Evacuation Plan & Extinguisher Suite',
    category: 'On-Site Execution',
    imageUrl: '/images/aspirating-fire-smoke-detection-systems.jpg',
    icon: <Layers className="w-5 h-5 text-emerald-600" />,
    standards: ['BNBC 2020', 'NFPA 10', 'ISO 7010'],
    summary:
      'Standardized on-site control room installation engineered by Reidius Solution, combining primary addressable panels, battery enclosures, emergency architectural evacuation maps, and certified fire extinguishers.',
    callouts: [
      {
        title: 'Central Addressable Panel & Power Enclosure',
        category: 'Wall Console',
        description:
          'Heavy-gauge powder-coated steel enclosure housing main motherboard, loop controller cards, power supply unit, and lockable front door with viewing window.'
      },
      {
        title: 'Standardized Evacuation Plan Display',
        category: 'Life Safety Egress',
        description:
          'High-contrast photoluminescent architectural floor layout showing designated emergency exits, assembly points, and manual pull station locations.'
      },
      {
        title: 'Certified Fire Extinguisher Station',
        category: 'First-Line Defense',
        description:
          'Mounted dry powder / CO2 extinguishers in tamper-evident glass cabinets positioned for immediate manual firefighting access.'
      },
      {
        title: 'Fire-Resistant Conduit & Cable Management',
        category: 'Infrastructure',
        description:
          'Metallic conduit raceways maintaining circuit integrity under high thermal exposure, preventing signal loss during building evacuations.'
      }
    ],
    specSheetHighlights: [
      { label: 'Installation Standard', value: 'BNBC 2020 & Accord/RSC' },
      { label: 'Cabinet Rating', value: 'IP54 Dust & Splash Protected' },
      { label: 'Conduit Type', value: 'Galvanized Rigid Steel (GRS)' },
      { label: 'Emergency Signage', value: 'Class C Photoluminescent' }
    ]
  }
];

interface SystemsArchitectureSectionProps {
  onInquireSystem: (systemName: string) => void;
}

export const SystemsArchitectureSection: React.FC<SystemsArchitectureSectionProps> = ({
  onInquireSystem
}) => {
  const [selectedId, setSelectedId] = useState<string>(SYSTEM_SHOWCASE_ITEMS[0].id);
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);

  const activeItem =
    SYSTEM_SHOWCASE_ITEMS.find((item) => item.id === selectedId) ||
    SYSTEM_SHOWCASE_ITEMS[0];

  return (
    <section id="systems-architecture" className="py-20 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-teal-400 text-xs font-semibold uppercase tracking-wider">
            <Layers className="w-4 h-4 text-teal-400" />
            <span>Interactive Engineering Schematics</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Certified System Architecture &amp; Field Equipment
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Examine the operational signal flow, hydraulic delivery, and certified hardware
            components deployed across Reidius Solution&apos;s industrial and commercial projects.
          </p>
        </div>

        {/* System Selector Nav Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {SYSTEM_SHOWCASE_ITEMS.map((item) => {
            const isSelected = item.id === activeItem.id;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedId(item.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-teal-500 text-slate-950 shadow-lg shadow-teal-500/20 font-bold scale-102'
                    : 'bg-slate-800/80 text-slate-300 hover:bg-slate-750 hover:text-white border border-slate-700/60'
                }`}
              >
                {item.icon}
                <span>{item.category}</span>
              </button>
            );
          })}
        </div>

        {/* Active System Showcase Layout */}
        <div className="bg-slate-850 rounded-3xl border border-slate-750 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          {/* Left Column: Interactive Visual Display (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-750 space-y-6">
            <div>
              {/* Header Info */}
              <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-800 text-teal-400 border border-slate-700">
                  {activeItem.category}
                </span>
                <div className="flex items-center gap-1.5">
                  {activeItem.standards.map((std, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-800/80 text-slate-300 border border-slate-700"
                    >
                      {std}
                    </span>
                  ))}
                </div>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                {activeItem.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-400">
                {activeItem.subtitle}
              </p>
            </div>

            {/* High-Resolution Diagram Preview Box */}
            <div className="relative group rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-inner flex items-center justify-center p-3 sm:p-4 min-h-[300px] sm:min-h-[380px]">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[340px] sm:max-h-[400px] w-auto object-contain transition-transform duration-500 group-hover:scale-103"
                referrerPolicy="no-referrer"
              />

              {/* Click to Enlarge Overlay */}
              <button
                onClick={() => setLightboxOpen(true)}
                className="absolute top-4 right-4 p-2.5 rounded-xl bg-slate-900/90 text-white hover:text-teal-300 border border-slate-700 hover:border-teal-500 shadow-lg transition-all cursor-pointer flex items-center gap-1.5 text-xs font-semibold backdrop-blur-sm"
              >
                <ZoomIn className="w-4 h-4" />
                <span className="hidden sm:inline">View Full High-Res</span>
              </button>

              <div className="absolute bottom-3 left-3 right-3 py-1.5 px-3 bg-slate-900/90 backdrop-blur-md rounded-lg border border-slate-800 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Info className="w-3.5 h-3.5 text-teal-400" />
                  Official Engineering Asset
                </span>
                <span className="text-teal-400 font-medium">Reidius Solution</span>
              </div>
            </div>

            {/* Technical Highlights Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-2">
              {activeItem.specSheetHighlights.map((spec, i) => (
                <div
                  key={i}
                  className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700/70 text-center"
                >
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider">
                    {spec.label}
                  </div>
                  <div className="text-xs font-bold text-teal-300 truncate mt-0.5">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Engineering Breakdown & Component Callouts (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-slate-850 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-2">
                  System Overview
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {activeItem.summary}
                </p>
              </div>

              {/* Component Callouts List */}
              <div className="space-y-3 pt-2">
                <h4 className="text-xs font-bold uppercase tracking-wider text-white flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-teal-400" />
                  Key Sub-Systems &amp; Signal Topology
                </h4>

                <div className="space-y-2.5">
                  {activeItem.callouts.map((callout, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-800/90 border border-slate-750 hover:border-teal-500/50 transition-all text-left space-y-1"
                    >
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-bold text-white flex items-center gap-1.5">
                          <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                          {callout.title}
                        </span>
                        <span className="text-[10px] px-2 py-0.5 rounded bg-slate-900 text-slate-400 font-mono">
                          {callout.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 leading-relaxed">
                        {callout.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Card */}
            <div className="pt-4 border-t border-slate-750 space-y-3">
              <div className="flex flex-col sm:flex-row items-center gap-3">
                <button
                  onClick={() => onInquireSystem(activeItem.title)}
                  className="w-full sm:flex-1 py-3 px-4 rounded-xl bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-teal-500/20 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <span>Request Engineering Proposal</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => setLightboxOpen(true)}
                  className="w-full sm:w-auto py-3 px-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 hover:text-white font-semibold text-xs border border-slate-700 transition-all cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <ZoomIn className="w-4 h-4" />
                  <span>Enlarge</span>
                </button>
              </div>

              <div className="text-center">
                <span className="text-[11px] text-slate-400">
                  Compliant with NFPA 72, NFPA 2001, NFPA 13, EN 54 &amp; BNBC Standards
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Lightbox Modal */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-5xl w-full bg-slate-900 border border-slate-750 rounded-2xl overflow-hidden shadow-2xl p-4 sm:p-6 space-y-4"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <div>
                <span className="text-xs text-teal-400 font-bold uppercase tracking-wider">
                  {activeItem.category} • High-Resolution View
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-white">
                  {activeItem.title}
                </h3>
              </div>
              <button
                onClick={() => setLightboxOpen(false)}
                className="p-2 rounded-lg bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="max-h-[70vh] flex items-center justify-center bg-slate-950 rounded-xl p-2 sm:p-4 overflow-auto">
              <img
                src={activeItem.imageUrl}
                alt={activeItem.title}
                className="max-h-[65vh] w-auto object-contain rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-400">
              <span>{activeItem.subtitle}</span>
              <button
                onClick={() => {
                  setLightboxOpen(false);
                  onInquireSystem(activeItem.title);
                }}
                className="px-4 py-2 rounded-lg bg-teal-500 hover:bg-teal-400 text-slate-950 font-bold text-xs cursor-pointer inline-flex items-center gap-1.5"
              >
                <span>Consult on this Architecture</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

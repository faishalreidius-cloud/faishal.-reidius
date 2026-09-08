import { ServiceItem, PortfolioProject, TestimonialItem, PartnerBrand } from '../types';

export const COMPANY_INFO = {
  name: 'Reidius Solution',
  legalName: 'Reidius Solution Engineering & Technology',
  tagline: 'For Sustainable & Profitable Growth With Us',
  quote:
    'We believe to give real support partners must add something which cannot be bought or measured with money, and that is Sincerity & Integrity.',
  mission:
    'Always support our Partners in every way to increase their profitability and commitments to end customers by providing on-or-before-time delivery and hands-on technical support. We build long-term relationships ensuring significant, sustainable, and highly profitable business across every vertical.',
  vision:
    'Establish trustworthy collaboration with Partners, Traders, and System Integrators to guarantee completely fire-hazard-safe and secured premises across all infrastructures. Every building must be equipped with intelligent Fire Detection, Alarm, Security, and Comfort Systems cost-effectively within budget.',
  address: {
    line1: 'Ayan Vila, H:21, R: 08',
    line2: 'Nikunja-2, Khilkhet',
    city: 'Dhaka-1229',
    country: 'Bangladesh',
    full: 'Ayan Vila, H:21, R: 08, Nikunja-2, Khilkhet, Dhaka-1229, Bangladesh'
  },
  phones: [
    { display: '+880 1633-060214', value: '+8801633060214' },
    { display: '+880 1731-894966', value: '+8801731894966' }
  ],
  emails: [
    'reidius.solution@gmail.com',
    'faishal.reidius@gmail.com',
    'ariful.reidius@gmail.com'
  ],
  workingHours: 'Saturday – Thursday: 9:00 AM – 6:30 PM (24/7 Emergency Support)'
};

export const CORE_PILLARS = [
  {
    id: 'pricing',
    title: 'Most Competitive Pricing',
    desc: 'Direct channel partnership access guarantees the industry’s most competitive procurement and turnkey installation rates.',
    iconName: 'BadgePercent',
    color: 'emerald'
  },
  {
    id: 'delivery',
    title: 'Faster & On-Time Delivery',
    desc: 'Strict project timelines with rapid, insured logistics so your systems are delivered and commissioned on or before schedule.',
    iconName: 'ClockCheck',
    color: 'blue'
  },
  {
    id: 'range',
    title: 'Single-Basket Product Range',
    desc: 'Comprehensive inventory across fire alarm, gas flooding, fire pumps, access control, BMS, and specialized cables under one roof.',
    iconName: 'Layers',
    color: 'teal'
  },
  {
    id: 'competency',
    title: 'Multi-Brand Technical Competency',
    desc: 'Certified engineers providing hands-on testing, commissioning, and AMC maintenance regardless of makes and legacy models.',
    iconName: 'Wrench',
    color: 'amber'
  }
];

export const PARTNER_BRANDS: PartnerBrand[] = [
  {
    name: 'Siemens',
    role: 'Authorized Channel Partner',
    specialty: 'Desigo CC Building Automation (BMS), Cerberus PRO Fire & Sinorix Suppression',
    origin: 'Germany',
    logoText: 'SIEMENS',
    accentColor: '#00646E'
  },
  {
    name: 'Simplex',
    role: 'Authorized Channel Partner',
    specialty: 'Advanced Networked Life Safety & Touchscreen Control Units',
    origin: 'Johnson Controls',
    logoText: 'Simplex',
    accentColor: '#D9232E'
  },
  {
    name: 'Bosch',
    role: 'Authorized Solution Partner',
    specialty: 'Public Address, Plena Amplifiers & EN 54 Voice Alarm Systems',
    origin: 'Germany',
    logoText: 'BOSCH',
    accentColor: '#C8102E'
  },
  {
    name: 'MAS DAF',
    role: 'Official Distribution Partner',
    specialty: 'UL Listed & NFPA 20 Certified Fire Pumps and Control Units',
    origin: 'Europe / Turkey',
    logoText: 'MAS DAF',
    accentColor: '#1E3A8A'
  },
  {
    name: 'Zettler',
    role: 'Channel Partner',
    specialty: 'EN54, LPCB & VdS Certified Intelligent Fire Alarm Systems',
    origin: 'Johnson Controls',
    logoText: 'ZETTLER',
    accentColor: '#0F172A'
  },
  {
    name: 'Virdi',
    role: 'Biometric Technology Partner',
    specialty: 'Patented Fake Finger Detection & Face Recognition Terminals',
    origin: 'South Korea',
    logoText: 'VIRDI',
    accentColor: '#2563EB'
  },
  {
    name: 'Fipron',
    role: 'Micro-Suppression Partner',
    specialty: 'Fipron Cord & Sticker Micro-encapsulated Panel Fire Extinguishers',
    origin: 'Europe',
    logoText: 'FIPRON',
    accentColor: '#DC2626'
  },
  {
    name: 'AP Sensing / Bandweaver',
    role: 'Distributed Sensing Partner',
    specialty: 'Fiber Optic Linear Heat Detection (LHD) for Tunnels & Trays',
    origin: 'Germany / UK',
    logoText: 'AP SENSING',
    accentColor: '#0D9488'
  }
];

export const CERTIFICATIONS = [
  { code: 'EN 54', name: 'European Fire Safety Norm', desc: 'Standard for Fire Detection & Fire Alarm Systems' },
  { code: 'UL LISTED', name: 'Underwriters Laboratories', desc: 'Global safety standard for fire alarm panels, pumps & detectors' },
  { code: 'FM APPROVED', name: 'FM Global Standards', desc: 'Property loss prevention certification for industrial fire protection' },
  { code: 'NFPA 20 / 72', name: 'National Fire Protection Assoc.', desc: 'Stationary pumps for fire protection & National Fire Alarm code' },
  { code: 'VdS', name: 'VdS Schadenverhütung GmbH', desc: 'German premier fire protection inspection and certification body' },
  { code: 'LPCB', name: 'Loss Prevention Certification Board', desc: 'International standard for security and fire suppression' }
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'fire-detection',
    title: 'Intelligent Addressable Fire Detection & Alarm',
    shortDesc: 'EN54, UL-listed, and FM-approved intelligent addressable fire detection systems with in-built isolator technology and remote touchscreen management.',
    fullDesc:
      'We design, supply, install, and commission state-of-the-art addressable fire detection networks. Featuring intelligent multi-sensor smoke and heat detectors, loop-powered sounder-strobes, manual call points, and advanced control panels from Siemens Cerberus, Simplex, Zettler, and Fireclass. Built to ensure zero false alarms, pinpoint fire localization, and seamless integration with building HVAC and emergency elevators.',
    category: 'fire-detection',
    iconName: 'Flame',
    brands: ['Siemens Cerberus PRO', 'Simplex (Johnson Controls)', 'Zettler', 'Fireclass', 'Asenware'],
    certifications: ['UL Listed', 'FM Approved', 'EN 54', 'VdS', 'ULC'],
    keyFeatures: [
      'In-built loop isolator technology preventing whole-loop failures',
      'Addressable multi-criteria optical smoke & heat detection',
      'Non-polarity two-wire connection topology (1-120 addresses/loop)',
      'High-decibel loop sounders (90dB@1m) with synchronized strobes',
      'Graphic BMS workstation & touchscreen remote annunciation',
      'Full compliance with NFPA 72 and BNBC fire standards'
    ],
    applications: [
      'Commercial High-Rise Towers',
      'Garment & Industrial Manufacturing Complexes',
      'Pharmaceutical Production Facilities',
      'Educational & Healthcare Campuses'
    ],
    imageUrl: '/images/cerberus-pro.jpg',
    diagramUrl: '/images/fire-alarm-system-diagram.jpg',
    diagramTitle: 'Fire Alarm System Architecture & Signal Distribution',
    diagramExplanation: 'Illustrates the complete operational signal flow between Primary/Backup power supplies, Initiating Devices (optical smoke, heat, flame detectors, manual call points), Central Addressable Control Panel, and Notification Appliances (strobe horns, motorized bells, and firefighter telephone handsets).',
    schematicDetails: [
      { title: 'Primary & Backup Power Supply', desc: 'Dual-source 220V AC mains input backed by supervised 24V DC battery packs guaranteeing 24h standby + 30m continuous full-alarm state.' },
      { title: 'Initiating Devices Network', desc: 'Loop-powered optical smoke detectors, rate-of-rise thermal sensors, multi-sensor heads, and manual call points with built-in isolators.' },
      { title: 'Central Microprocessor Control', desc: 'Multi-loop addressable controller managing polling cycles, cause-and-effect matrix logic, and BACnet/Modbus BMS integration.' },
      { title: 'Emergency Notification Appliances', desc: 'High-candela synchronized strobes, 90dB+ electronic horns, motorized bells, and firefighter telephone handsets.' }
    ],
    installationUrl: '/images/aspirating-fire-smoke-detection-systems.jpg'
  },
  {
    id: 'fire-suppression',
    title: 'Gas-Based Total Flooding & Clean Agent Suppression',
    shortDesc: 'Siemens Sinorix automatic chemical extinguishing systems using sustainable 3M™ Novec™ 1230 & FM-200 (HFC-227ea) for critical mission assets.',
    fullDesc:
      'Protect high-value assets, mission-critical servers, electrical switchgear, and telecommunication infrastructure without water damage. We specialize in Siemens Sinorix high-pressure technology, rapidly discharging clean agents within 10 seconds to starve flame reactions while remaining safe for human occupancy and zero ozone depletion.',
    category: 'fire-suppression',
    iconName: 'ShieldAlert',
    brands: ['Siemens Sinorix', '3M Novec 1230', 'FM-200 (HFC-227ea)'],
    certifications: ['UL Listed', 'FM Approved', 'VdS', 'NFPA 2001'],
    keyFeatures: [
      'Discharge time under 10 seconds for swift flashover prevention',
      'Zero ozone depletion potential (ODP) & ultra-low global warming potential',
      'Electrically non-conductive & non-corrosive clean agents',
      'High-pressure cylinder technology maximizing footprint efficiency',
      'Automated abort switches and dual-stage gas release warning horns',
      'Room integrity fan testing and certified hydraulic calculations'
    ],
    applications: [
      'Server Rooms & Tier-3/4 Data Centers',
      'Hospital MRI / CT Scan Rooms',
      'Bank Vaults & Telecommunication Hubs',
      'Industrial HT/LT Substation Control Rooms'
    ],
    imageUrl: '/images/fm200-fire-suppression.jpg',
    diagramUrl: '/images/fm200-fire-suppression.jpg',
    diagramTitle: 'FM-200 / Clean Agent Gas Total Flooding Schematic',
    diagramExplanation: 'Engineering schematic showing agent storage cylinder bank with solenoid release actuator, coincidence cross-zoned smoke detection logic, manual pull station, abort switch, high-pressure piping manifold, and ceiling discharge nozzles.',
    schematicDetails: [
      { title: 'Agent Storage Cylinder & Valve', desc: 'Heavy-gauge seamless steel cylinder pressurized with dry nitrogen to 25/42 bar with differential pressure gauge.' },
      { title: 'Electric Solenoid Actuator', desc: 'Fast-acting electromagnetic latch actuator triggered automatically upon confirmed 2-zone cross-detection.' },
      { title: 'Coincidence Cross-Zoned Detection', desc: 'Prevents accidental discharge by requiring two distinct detector zones to confirm smoke verification before release countdown.' },
      { title: 'Hold-Off Abort Switch & Manual Station', desc: 'Allows on-site personnel to halt gas discharge in case of false alarm, or trigger immediate manual discharge in an emergency.' }
    ],
    installationUrl: '/images/cerberus-pro.jpg'
  },
  {
    id: 'pumps',
    title: 'NFPA 20 & UL 448 Fire Pumps & Automated Controllers',
    shortDesc: 'MAS DAF industrial fire pump units, electric motor drives, FM-certified diesel engines, and integrated jockey pump controllers.',
    fullDesc:
      'Robust water supply is the backbone of any reliable fire protection system. Reidius Solution supplies and commissions MAS DAF YP Series fire pump packages compliant with NFPA 20 and UL 448 standards. Available in End-Suction, Horizontal Split-Case, and In-Line configurations with automatic Star-Delta or Direct-Starting controllers, pressure recorders, and weekly test timers.',
    category: 'pumps',
    iconName: 'Activity',
    brands: ['MAS DAF', 'TÜV CERT', 'Europump', 'NFPA'],
    certifications: ['UL Listed', 'NFPA 20', 'UL 448', 'ISO 9001'],
    keyFeatures: [
      'Capacity ranges up to 2500 GPM with head pressures over 200 PSI',
      'Electric Motor Drive and FM-Certified Diesel Engines with heat exchangers',
      'Dedicated Jockey Pump unit to sustain constant system pressure',
      'Automatic transfer switch controllers with weekly exercise timer',
      'Complete pump-house skid assembly including flow meters and valves',
      'Vibration-isolated heavy-duty cast baseplates'
    ],
    applications: [
      'Heavy Industrial Plants & Steel Mills',
      'Textile & Export Garment Factories',
      'Airport Terminals & Seaports',
      'Luxury Hotels & Multi-Story Commercial Plazas'
    ],
    imageUrl: '/images/fire-sprinkler-discharge.jpg',
    diagramUrl: '/images/fire-sprinkler-discharge.jpg',
    diagramTitle: 'Automatic Fire Sprinkler & High-Pressure Hydraulic Suppression',
    diagramExplanation: 'Fast-response pendent sprinkler head activated by thermal expansion of quartzoid bulb, delivering immediate conical water curtain suppressing fire flashover while signaling the NFPA 20 fire pump controller.',
    schematicDetails: [
      { title: 'Thermal Quartzoid Bulb (68°C)', desc: 'Precision heat-sensitive liquid bulb breaks instantly at calibrated trigger temperature, releasing water seal plug.' },
      { title: 'Conical Deflector Umbrella Spray', desc: 'Specially engineered deflector teeth atomize water into a dense cooling blanket starving convective thermal lift.' },
      { title: 'Pressure Switch & Water Motor Gong', desc: 'Waterflow through alarm check valve trips pressure switches and mechanical water motor gong alarm.' },
      { title: 'NFPA 20 Automated Booster Staging', desc: 'Jockey pump maintains static riser pressure; main electric/diesel fire pumps start automatically on line pressure drop.' }
    ]
  },
  {
    id: 'panel-suppression',
    title: 'Electrical Panel & Aerosol Micro-Suppression',
    shortDesc: 'Fipron Cord, Fipron Sticker, and Aerosol generators for enclosures up to 3m³ volume—simple, affordable, and requires no pipes or refills.',
    fullDesc:
      'More than 60% of commercial fires ignite inside closed electrical panels. Reidius Solution offers compact micro-encapsulated panel suppression technology. Fipron cords and stickers automatically react to elevated temperatures, bursting micro-capsules directly over the ignition source. For larger cabinets, our Aerosol generators provide up to 5.7kg suppression volume without maintenance overhead.',
    category: 'fire-suppression',
    iconName: 'Zap',
    brands: ['Fipron', 'Aerosol Systems'],
    certifications: ['CE Mark', 'ISO 9001', 'Eco-Safe Certified'],
    keyFeatures: [
      'Direct-at-source fire knockdown within enclosed cabinets',
      'Requires no electrical power, pipework, or manifold tanks',
      'Maintenance-free with extended multi-year operational lifespan',
      'Ideal for enclosures ranging from 0.05m³ up to 3.0m³ and 5.7kg',
      'Completely residue-free and harmless to sensitive circuit boards',
      'Affordable retrofit for existing distribution switchboards'
    ],
    applications: [
      'MCC & PCC Electrical Panels',
      'Inverter & Solar Combiner Boxes',
      'CNC Machine Cabinets & Telecom Racks',
      'Elevator Motor Control Centers'
    ],
    imageUrl: '/images/aspirating-fire-smoke-detection-systems.jpg'
  },
  {
    id: 'lhd-cables',
    title: 'Fiber Optic Linear Heat Detection (LHD) & MICC Cables',
    shortDesc: 'Distributed temperature sensing over multi-kilometer cable runs with zero EMI interference, plus Mineral Insulated Copper Cables (MICC).',
    fullDesc:
      'Continuous thermal profiling for harsh, inaccessible environments where conventional spot detectors cannot survive. Fiber optic LHD systems (from AP Sensing and Bandweaver) use standard optical fibers to detect minute temperature fluctuations down to the exact meter. We also supply Mineral Insulated Copper Cables (MICC) capable of maintaining electrical continuity during raging fires.',
    category: 'lhd',
    iconName: 'Radio',
    brands: ['AP Sensing', 'Bandweaver', 'Patol', 'MICC Technologies'],
    certifications: ['UL Listed', 'FM Approved', 'VdS', 'ATEX Explosive Proof'],
    keyFeatures: [
      'Continuous gapless temperature profile over several kilometers',
      '100% immune to electromagnetic interference (EMI) and lightning',
      'Simultaneous multi-zone event detection and rate-of-rise alarms',
      'Flexible alarm thresholds and customizable dynamic zoning',
      'Fire-rated Mineral Insulated Copper Cables (MICC) for survival circuits',
      'Precise location mapping with graphical software overlay'
    ],
    applications: [
      'Cable Trays & Industrial Cable Tunnels',
      'Conveyor Belts & Coal Handling Plants',
      'Highway & Railway Tunnels',
      'Oil & Gas Refineries, Petrochemical Storage Tanks'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'access-control',
    title: 'Biometric Access Control & Surveillance',
    shortDesc: 'Virdi high-performance face recognition and patented fake-finger detection terminals (AC-7000, AC-2100 Plus) and integrated IP CCTV.',
    fullDesc:
      'Physical perimeter defense and identity verification powered by Virdi biometric engineering. Patented optical sensors differentiate human living skin from silicone, paper, and gelatin molds. Dual CPU architectures support simultaneous face and fingerprint matching in under one second for up to 250,000 users, integrated into enterprise time & attendance software.',
    category: 'access-control',
    iconName: 'Fingerprint',
    brands: ['Virdi', 'Android OS Smart Terminals', 'OSDP Protocol'],
    certifications: ['FBI PIV Certified', 'KC', 'CE', 'FCC', 'RoHS', 'IP65'],
    keyFeatures: [
      'Patented live vs fake finger algorithm detecting spoof materials',
      'AC-7000 auto-tilt motorized camera with IR night face recognition',
      'IP65 rated weatherproof construction for outdoor gate turnstiles',
      'Large memory capacity: 250,000 users and 10,000,000 event log records',
      'Dual card reader supporting 125KHz EM, 13.56MHz Mifare & HID Prox',
      'OSDP supervised device protocol for encrypted controller integration'
    ],
    applications: [
      'Corporate Headquarters & Executive Offices',
      'Industrial Factory Gates & Worker Turnstiles',
      'Server Farm High-Security Mantrap Doors',
      'Government & Financial Institutions'
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 'pa-bms',
    title: 'Building Automation (BMS/BAS), Public Address & Voice Evacuation',
    shortDesc: 'Siemens Desigo CC Building Management Systems (BMS/BAS), modular PXC DDC automation stations, HVAC control, and Bosch Plena EN 54 voice alarm integration.',
    fullDesc:
      'Reidius Solution engineers comprehensive Building Management Systems (BMS/BAS) powered by Siemens Desigo CC and modular Desigo PXC DDC automation stations. We integrate central chilled water plants, Air Handling Units (AHUs), variable air volume (VAV) dampers, fire smoke extraction fans, and lighting into unified graphical SCADA telemetry. Seamlessly unified with Bosch Communications EN 54 voice evacuation systems, our installations guarantee optimal occupant comfort, automated energy efficiency (up to 30% reduction), and instantaneous life safety coordination.',
    category: 'pa-bms',
    iconName: 'Building2',
    brands: ['Siemens Desigo CC', 'Desigo PXC', 'Bosch Public Address', 'BACnet/IP', 'KNX'],
    certifications: ['BTL Certified B-AWS', 'EN ISO 16484-5', 'EN 54-16', 'EN 54-24', 'CE'],
    keyFeatures: [
      'Siemens Desigo CC central SCADA workstation with live graphical AHU & chiller plant telemetry',
      'Modular Desigo PXC programmable DDC automation stations with TX-I/O plug-in field cards',
      'Motorized rotary damper actuators for VAV boxes, ventilation, and emergency smoke dampers',
      'Intelligent room automation with KNX multi-scene switches, digital thermostats, and CO2 sensors',
      'Full protocol interoperability supporting BACnet/IP, BACnet MS/TP, Modbus RTU/TCP, and KNX',
      'Bosch EN 54-16 voice evacuation interlock broadcasting prioritized phased emergency messages'
    ],
    applications: [
      'Corporate High-Rise Towers & Commercial Plazas',
      'Pharmaceutical Cleanroom HVAC & Pressure Cascade Control',
      'Luxury 5-Star Hotels & International Convention Centers',
      'Data Centers & Industrial Manufacturing Facilities'
    ],
    imageUrl: '/images/siemens-desigo-bms.jpg',
    diagramUrl: '/images/siemens-desigo-bms.jpg',
    diagramTitle: 'Siemens Desigo CC Building Automation & DDC Topology',
    diagramExplanation: 'Comprehensive Siemens Desigo CC building automation infrastructure connecting central management workstations, touch operator units, modular DDC controllers (PXC), TX-I/O field cards, rotary damper actuators, and KNX intelligent room climate sensors over BACnet/IP.',
    schematicDetails: [
      { title: 'Desigo CC Supervisory Station', desc: 'Central monitoring terminal running Desigo System Manager with live AHU plant flow schematics, temperature curves, and alarm logging.' },
      { title: 'Modular Desigo PXC & TX-I/O', desc: 'BACnet/IP programmable DDC automation stations with modular plug-in I/O terminals for sensor inputs and analog actuator outputs.' },
      { title: 'OpenAir Damper Actuators', desc: 'Precision electronic rotary actuators for accurate air volume damper positioning and emergency smoke isolation.' },
      { title: 'KNX Room Units & Thermostats', desc: 'Digital LCD room climate controllers and multi-button wall switches managing temperature, lighting, and motorized blinds.' }
    ],
    installationUrl: '/images/bosch-public-address-system.jpg'
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'ha-meem-industrial',
    title: 'Industrial Garment & Spinning Mill Life Safety Upgrade',
    client: 'Ha-Meem Group',
    category: 'Industrial',
    location: 'Ashulia & Mawna Industrial Belt, Bangladesh',
    year: '2023 - 2024',
    systemsInstalled: [
      'Siemens Addressable Fire Alarm (2,400+ Detectors)',
      'MAS DAF NFPA 20 Fire Pump 1500 GPM',
      'Linear Heat Detection across 3.2km Cable Trays',
      'Fipron Electrical Panel Micro-Suppression'
    ],
    challenge:
      'Massive export manufacturing facility with dense combustible fabric dust, extensive ceiling heights, and multiple industrial distribution sub-stations requiring zero production downtime.',
    solution:
      'Engineered an intelligent Siemens Cerberus addressable loop network with built-in isolators, fiber optic Linear Heat Detection along heavy cable conduits, and MAS DAF diesel fire pump sets integrated into automatic sprinkler manifolds.',
    results: [
      '100% compliance achieved for international buyer safety audits (Accord / RSC)',
      'Zero false alarms reported across 18+ months of continuous operations',
      'Emergency response time reduced to under 30 seconds via graphic BMS annunciation'
    ],
    badge: 'Enterprise Turnkey Project',
    stats: { label: 'Floor Area Protected', value: '450,000 sq ft' },
    imageUrl: '/images/aspirating-fire-smoke-detection-systems.jpg'
  },
  {
    id: 'renata-pharma-cleanroom',
    title: 'High-Potency Pharmaceutical Lab & Cleanroom Protection',
    client: 'Renata Pharmaceuticals Limited',
    category: 'Pharmaceutical',
    location: 'Mirpur & Rajendrapur, Bangladesh',
    year: '2023',
    systemsInstalled: [
      'Siemens Sinorix Novec 1230 Gas Flooding System',
      'Very Early Warning Aspiration Smoke Detection (ASD)',
      'Virdi AC-7000 Biometric Cleanroom Interlock Access'
    ],
    challenge:
      'Sterile pharmaceutical cleanrooms containing multi-million dollar chemical analysis equipment and strict HVAC pressure balances where conventional water sprinklers would ruin sensitive production.',
    solution:
      'Deployed Siemens Sinorix Novec 1230 clean agent suppression with rapid 10-second discharge nozzles, integrated with multi-point aspiration detectors and Virdi touchless facial recognition terminals for airlock mantrap doors.',
    results: [
      'Full US-FDA and WHO GMP compliance for clean agent fire safety',
      'Safe for occupied sterile rooms with zero toxic residue',
      'High-speed airlock access control tracking all personnel entry logs'
    ],
    badge: 'Clean Agent Specialization',
    stats: { label: 'Cleanrooms Covered', value: '14 Specialized Labs' },
    imageUrl: '/images/cerberus-pro.jpg'
  },
  {
    id: 'westin-dhaka-hospitality',
    title: '5-Star Luxury Hotel Life Safety & Voice Evacuation',
    client: 'The Westin Dhaka',
    category: 'Hospitality',
    location: 'Gulshan-2, Dhaka',
    year: '2022 - 2023',
    systemsInstalled: [
      'Simplex Addressable Fire Alarm (Johnson Controls)',
      'Bosch Plena EN 54-16 Certified Voice Evacuation System',
      'Kitchen Hood Wet Chemical Automatic Suppression',
      'Virdi Keycard & Biometric Staff Entry'
    ],
    challenge:
      'Continuous 24/7 guest occupancy requiring discreet aesthetic installation, acoustic clarity for multilingual evacuation instructions, and strict kitchen hood fire suppression.',
    solution:
      'Installed Simplex 4100ES networked panels connected with Bosch ceiling loudspeakers, calibrated for optimal speech transmission index (STI), alongside UL-300 certified kitchen wet chemical suppression.',
    results: [
      'Certified under Marriott International Global Fire & Life Safety Standards',
      'Phased floor-by-floor evacuation sequencing minimizing panic',
      'Aesthetic flush-mounted sensors seamlessly integrated into luxury finishes'
    ],
    badge: 'Hospitality Standard',
    stats: { label: 'Guest Rooms & Suites', value: '235 Rooms + Ballrooms' },
    imageUrl: '/images/bosch-public-address-system.jpg'
  },
  {
    id: 'bombay-sweets-processing',
    title: 'Automated Food Processing Plant Fire Mitigation',
    client: 'Bombay Sweets & Co.',
    category: 'Industrial',
    location: 'Narayanganj Industrial Zone',
    year: '2023',
    systemsInstalled: [
      'Fipron Micro-Suppression across 42 Control Panels',
      'Patol Linear Heat Detection on Packaging Lines',
      'Zettler Addressable Smoke & Heat Sensor Network',
      'MAS DAF Electric Fire Pump Set 750 GPM'
    ],
    challenge:
      'High ambient heat generated from industrial baking and frying equipment, creating frequent risk of false thermal alarms and potential electrical cabinet ignition.',
    solution:
      'Engineered localized Fipron Cord and Sticker micro-suppression directly inside all motor control centers, backed by digital Linear Heat Detection with customizable rate-of-rise parameters.',
    results: [
      'Prevented localized thermal flare-ups with zero chemical contamination of food products',
      'No production interruption during installation',
      'Annual maintenance costs reduced by 35% compared to legacy infrastructure'
    ],
    badge: 'Food Grade Protection',
    stats: { label: 'Enclosures Protected', value: '42 Electrical Panels' },
    imageUrl: '/images/fire-sprinkler-discharge.jpg'
  },
  {
    id: 'commercial-tower-nikunja',
    title: 'Multi-Tenant Commercial Tower BMS & Life Safety',
    client: 'Fintech Corporate Tower',
    category: 'Commercial',
    location: 'Nikunja-2 / Airport Road, Dhaka',
    year: '2024',
    systemsInstalled: [
      'Siemens Desigo CC Building Management System',
      'Siemens Addressable Fire Alarm (18 Stories)',
      'Virdi AC-7000 Turnstile Biometric Access Matrix',
      'MAS DAF High-Pressure Fire Booster Pumps'
    ],
    challenge:
      'Rapid influx of thousands of daily commuters, multiple commercial tenants with varying security clearance levels, and need for unified building automation.',
    solution:
      'Integrated fire alarm, smoke exhaust dampers, elevator recall, and Virdi high-throughput optical turnstiles into a unified Siemens graphical workstation.',
    results: [
      'Over 4,500 daily authenticated turnstile passages with zero throughput bottlenecks',
      'Automated HVAC night setback saving 18% on monthly energy consumption',
      'Full compliance with BNBC 2020 high-rise building regulations'
    ],
    badge: 'Smart Building Automation',
    stats: { label: 'Building Scale', value: '18 Stories + 3 Basements' },
    imageUrl: '/images/siemens-desigo-bms.jpg'
  },
  {
    id: 'tier3-datacenter-suppression',
    title: 'Tier-III Cloud Data Center Clean Agent Flooding',
    client: 'National Telecom Infrastructure Partner',
    category: 'Data Centers',
    location: 'Dhaka Tech Park',
    year: '2024',
    systemsInstalled: [
      'Siemens Sinorix Novec 1230 Clean Agent Flooding (4 Zones)',
      'Laser-Based High Sensitivity Smoke Detection (HSSD)',
      'LHS Thermal Monitoring on High-Density Server Racks',
      'Virdi Multi-Factor Biometric Airlocks'
    ],
    challenge:
      'Zero-tolerance for downtime, mission-critical banking transactions, and intense server thermal heat dissipation requiring split-second detection before smoke is visible.',
    solution:
      'Implemented dual-stage cross-zoned aspirating detection linked to Siemens Sinorix cylinders with 42-bar discharge technology, guaranteeing containment within 10 seconds.',
    results: [
      'Passed Uptime Institute Tier-III fire safety compliance on initial review',
      'Zero ozone depletion and non-toxic for engineers on site',
      'Full digital telemetry feeding 24/7 Network Operations Center (NOC)'
    ],
    badge: 'Mission Critical 99.999%',
    stats: { label: 'Extinguishing Speed', value: '< 10 Seconds' },
    imageUrl: '/images/fm200-fire-suppression.jpg'
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    name: 'Engr. Mahbubul Alam',
    role: 'General Manager – Engineering & Utility',
    company: 'Ha-Meem Group',
    location: 'Dhaka, Bangladesh',
    comment:
      'Reidius Solution demonstrated unmatched technical competence during our 450,000 sq ft facility overhaul. Their engineers calibrated the Siemens addressable system and MAS DAF fire pump package flawlessly. Our international safety audit was approved on the very first round without a single non-compliance note.',
    rating: 5,
    projectType: 'Industrial Fire Alarm & NFPA Fire Pump',
    avatarUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-2',
    name: 'Dr. Tariqul Islam',
    role: 'Head of EHS & Quality Assurance',
    company: 'Renata Pharmaceuticals Limited',
    location: 'Mirpur, Dhaka',
    comment:
      'For our sterile cleanrooms and pharmaceutical R&D labs, water or dry chemicals were never an option. Reidius Solution supplied and commissioned the Siemens Sinorix Novec 1230 gas flooding system. Their adherence to delivery schedules and cleanroom protocols was exemplary.',
    rating: 5,
    projectType: 'Clean Agent Gas Suppression (Novec 1230)',
    avatarUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-3',
    name: 'Sazzad Hossain',
    role: 'Director of Loss Prevention & Life Safety',
    company: 'The Westin Dhaka',
    location: 'Gulshan, Dhaka',
    comment:
      'Operating a 5-star hotel means life safety must be seamless and silent until an emergency arises. Reidius Solution integrated Simplex panels with Bosch voice evacuation with supreme professionalism. Their 24/7 technical team is always responsive.',
    rating: 5,
    projectType: 'Simplex Fire Alarm & Bosch Voice Alarm',
    avatarUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  },
  {
    id: 'test-4',
    name: 'Mustafizur Rahman',
    role: 'Lead Project Consultant',
    company: 'National Infrastructure Systems',
    location: 'Nikunja-2, Dhaka',
    comment:
      'What sets Reidius Solution apart is their single-basket supply model and deep engineering honesty. Whether it is Virdi biometrics or specialized linear heat detection cables, they source genuine products with original manufacturer warranties and competitive pricing.',
    rating: 5,
    projectType: 'Multi-Tenant Commercial Tower BMS',
    avatarUrl: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80'
  }
];

export const FAQ_ITEMS = [
  {
    q: 'Why choose Reidius Solution as your fire safety partner in Bangladesh?',
    a: 'We are authorized channel partners for world-class manufacturers including Siemens, Simplex, Bosch, MAS DAF, Virdi, and Fipron. Our in-house certified engineering team handles everything from NFPA/BNBC compliant system design to supply, installation, testing, commissioning, and annual maintenance contracts (AMC).'
  },
  {
    q: 'What is the advantage of Siemens Sinorix Novec 1230 over conventional sprinkler systems?',
    a: 'Novec 1230 is an electrically non-conductive, clean agent chemical gas that extinguishes fires in under 10 seconds through rapid thermal cooling. It leaves zero residue, causes zero water damage to sensitive electronics, has zero ozone depletion, and is completely safe for occupied spaces.'
  },
  {
    q: 'Can Reidius Solution service and inspect existing fire alarm brands installed by other vendors?',
    a: 'Yes. One of our core competencies is multi-brand technical capability. Our engineers provide testing, programming, fault diagnostics, and commissioning support for virtually all major addressable and conventional makes and models across Bangladesh and South Asia.'
  },
  {
    q: 'How does Fipron panel micro-suppression protect electrical switchboards?',
    a: 'Fipron cords and stickers contain millions of micro-capsules filled with liquefied fire extinguishing agent. When an electrical short circuit or thermal overload occurs inside the panel, the capsules automatically burst at specific temperatures, extinguishing the flame at its origin within seconds before it can spread.'
  },
  {
    q: 'Do your fire pump packages comply with local BNBC and international NFPA 20 codes?',
    a: 'Absolutely. Our MAS DAF fire pump packages are UL Listed and comply strictly with NFPA 20 and UL 448 standards. Each unit comes with certified pump performance test curves, factory test certificates, and automated controllers with dual power source switching.'
  }
];

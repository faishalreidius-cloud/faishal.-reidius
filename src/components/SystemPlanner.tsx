import { useState } from 'react';
import { ShieldCheck, Calculator, Check, ArrowRight, Sparkles, Building2, Layers, AlertCircle, FileSpreadsheet } from 'lucide-react';

interface SystemPlannerProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyToInquiry: (configSummary: string, facilityType: string) => void;
}

export const SystemPlanner = ({ isOpen, onClose, onApplyToInquiry }: SystemPlannerProps) => {
  const [facilityType, setFacilityType] = useState('Industrial Factory / Garments');
  const [areaSqFt, setAreaSqFt] = useState(50000);
  const [selectedSystems, setSelectedSystems] = useState<string[]>([
    'Addressable Fire Detection & Alarm (Siemens / Simplex)',
    'NFPA 20 Fire Pump & Sprinkler Unit (MAS DAF)'
  ]);

  if (!isOpen) return null;

  const facilities = [
    { id: 'factory', name: 'Industrial Factory / Garments', defaultRisk: 'Medium-High Combustible' },
    { id: 'pharma', name: 'Pharmaceutical Cleanroom / R&D', defaultRisk: 'High-Value Sterile / Chemical' },
    { id: 'commercial', name: 'Commercial High-Rise / Office', defaultRisk: 'High Occupancy / Multi-Floor' },
    { id: 'hotel', name: 'Hotel / Hospitality & Resort', defaultRisk: '24/7 Occupancy & Guest Life Safety' },
    { id: 'datacenter', name: 'Data Center / Telecom NOC', defaultRisk: 'Zero Water Tolerance / Mission Critical' },
    { id: 'hospital', name: 'Hospital / Healthcare Facility', defaultRisk: 'Non-Ambulatory Evacuation' }
  ];

  const availableSystems = [
    {
      id: 'fire-alarm',
      name: 'Addressable Fire Detection & Alarm (Siemens / Simplex)',
      desc: 'Loop isolators, multi-criteria optical sensors, manual call points & hooter strobes.',
      standard: 'NFPA 72 / EN 54'
    },
    {
      id: 'gas-suppression',
      name: 'Clean Agent Gas Flooding (Siemens Sinorix Novec 1230)',
      desc: 'Under 10s non-conductive discharge for server rooms, MCC panels & control hubs.',
      standard: 'NFPA 2001 / UL Listed'
    },
    {
      id: 'fire-pumps',
      name: 'NFPA 20 Fire Pump & Sprinkler Unit (MAS DAF)',
      desc: 'Electric motor, FM-certified diesel engine & jockey pump skid with auto controller.',
      standard: 'NFPA 20 / UL 448'
    },
    {
      id: 'panel-micro',
      name: 'Electrical Panel Micro-Suppression (Fipron Cord & Sticker)',
      desc: 'Micro-encapsulated thermal knockdown for distribution boards & switchgears up to 3m³.',
      standard: 'CE Mark / Eco-Safe'
    },
    {
      id: 'lhd',
      name: 'Fiber Optic Linear Heat Detection (AP Sensing / Patol)',
      desc: 'Gapless temperature sensing along industrial cable trays, conveyors & tunnels.',
      standard: 'FM Approved / VdS'
    },
    {
      id: 'biometrics',
      name: 'Biometric Access Control & Turnstiles (Virdi)',
      desc: 'Patented fake-finger detection, AC-7000 face terminal & automated turnstiles.',
      standard: 'FBI PIV / IP65'
    },
    {
      id: 'pa-va',
      name: 'Bosch Voice Alarm & Building Management System (BMS)',
      desc: 'EN 54-16 certified phased voice evacuation, ceiling loudspeakers & graphic monitoring.',
      standard: 'EN 54-16 / ISO 9001'
    }
  ];

  const toggleSystem = (systemName: string) => {
    if (selectedSystems.includes(systemName)) {
      setSelectedSystems(selectedSystems.filter((s) => s !== systemName));
    } else {
      setSelectedSystems([...selectedSystems, systemName]);
    }
  };

  // Calculations
  const estimatedDetectors = Math.max(12, Math.round(areaSqFt / 450));
  const estimatedLoops = Math.max(1, Math.ceil(estimatedDetectors / 120));
  const estimatedHydrantPoints = Math.max(4, Math.round(areaSqFt / 5000));
  const recommendedPumpGpm = areaSqFt > 150000 ? '1500 GPM' : areaSqFt > 50000 ? '1000 GPM' : '750 GPM';

  const handleApply = () => {
    const summary = `System Scope Configuration:
- Facility: ${facilityType} (${areaSqFt.toLocaleString()} sq ft)
- Systems Required: ${selectedSystems.join(', ')}
- Preliminary Sizing: ~${estimatedDetectors} Addressable Detector points across ${estimatedLoops} loops, Recommended Pump: ${recommendedPumpGpm}`;

    onApplyToInquiry(summary, facilityType);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-6">
        {/* Header */}
        <div className="p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white flex items-center justify-between">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-teal-500/20 text-teal-300 text-xs font-bold border border-teal-500/30">
              <Calculator className="w-3.5 h-3.5" />
              Interactive Solution Configurator
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              Reidius System Scope &amp; Preliminary Estimator
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Configure your facility requirements to generate recommended equipment topologies and standards.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            ✕
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[70vh] overflow-y-auto">
          {/* Step 1: Facility Type */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <Building2 className="w-4 h-4 text-teal-600" />
              1. Select Facility Type
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {facilities.map((fac) => (
                <button
                  key={fac.id}
                  onClick={() => setFacilityType(fac.name)}
                  className={`p-3.5 rounded-xl border text-left transition-all cursor-pointer ${
                    facilityType === fac.name
                      ? 'border-teal-600 bg-teal-50/50 shadow-sm ring-2 ring-teal-500/20'
                      : 'border-slate-200 hover:border-slate-300 bg-white'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-900">{fac.name}</div>
                  <div className="text-[11px] text-slate-500 mt-0.5">{fac.defaultRisk}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Step 2: Facility Size Range */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-600" />
                2. Approximate Covered Area
              </label>
              <span className="text-sm font-extrabold text-teal-700 bg-teal-50 px-3 py-1 rounded-lg border border-teal-200">
                {areaSqFt.toLocaleString()} sq ft
              </span>
            </div>

            <input
              type="range"
              min="5000"
              max="300000"
              step="5000"
              value={areaSqFt}
              onChange={(e) => setAreaSqFt(Number(e.target.value))}
              className="w-full accent-teal-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-400 font-medium">
              <span>Small Enclosure (5,000 sq ft)</span>
              <span>Medium Facility (150,000 sq ft)</span>
              <span>Massive Campus (300,000+ sq ft)</span>
            </div>
          </div>

          {/* Step 3: Required Engineering Systems */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-teal-600" />
              3. Required Systems (Select All That Apply)
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {availableSystems.map((sys) => {
                const isChecked = selectedSystems.includes(sys.name);
                return (
                  <div
                    key={sys.id}
                    onClick={() => toggleSystem(sys.name)}
                    className={`p-3.5 rounded-xl border cursor-pointer transition-all flex items-start gap-3 ${
                      isChecked
                        ? 'border-teal-600 bg-teal-50/40 shadow-sm'
                        : 'border-slate-200 hover:border-slate-300 bg-white'
                    }`}
                  >
                    <div
                      className={`w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                        isChecked ? 'bg-teal-600 text-white' : 'border border-slate-300'
                      }`}
                    >
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <div className="space-y-0.5">
                      <div className="text-xs font-bold text-slate-900">{sys.name}</div>
                      <p className="text-[11px] text-slate-500 leading-tight">{sys.desc}</p>
                      <div className="text-[10px] font-bold text-teal-700">{sys.standard}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Generated Preliminary Engineering Sizing Box */}
          <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-4 shadow-lg">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-bold text-teal-400 uppercase tracking-wider flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Preliminary Engineering Estimation
              </span>
              <span className="text-[11px] text-slate-400">NFPA &amp; BNBC Guideline Baseline</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xl font-black text-teal-400">~{estimatedDetectors}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-medium">Detectors / Addressable Points</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xl font-black text-white">{estimatedLoops}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-medium">SLC Loops (120 pts/loop)</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xl font-black text-amber-400">{recommendedPumpGpm}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-medium">Recommended NFPA Pump</div>
              </div>
              <div className="p-2.5 rounded-xl bg-slate-800/80 border border-slate-700">
                <div className="text-xl font-black text-emerald-400">{selectedSystems.length}</div>
                <div className="text-[10px] text-slate-400 mt-0.5 font-medium">Integrated Sub-Systems</div>
              </div>
            </div>

            <p className="text-[11px] text-slate-400 italic">
              * Note: Actual system design will be validated via hydraulic calculations, clean agent room integrity testing, and NFPA/BNBC code blueprints during site inspection.
            </p>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Cancel
          </button>

          <button
            onClick={handleApply}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-bold text-xs sm:text-sm shadow-md transition-all cursor-pointer"
          >
            <span>Attach Config to Contact Form</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};

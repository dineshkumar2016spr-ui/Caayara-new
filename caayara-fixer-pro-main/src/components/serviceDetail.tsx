import React, { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { 
  ArrowLeft, 
  Phone, 
  MessagesSquare, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Wrench 
} from "lucide-react";
import { motion } from "framer-motion";

// Service data definition matching your site's serviceItems
const serviceData: Record<string, {
  num: string;
  name: string;
  desc: string;
  overview: string;
  benefits: string[];
  process: string[];
  estimatedTime: string;
  warranty: string;
}> = {
  "screen-replacement": {
    num: "01",
    name: "SCREEN REPLACEMENT",
    desc: "Broken, cracked or damaged smartphone screen repair and replacement.",
    overview: "We offer high-quality display replacements for all major smartphone brands. Whether your screen glass is cracked, the touch display is unresponsive, or you have black spots/lines across the screen, our technicians replace it with precision quality hardware.",
    benefits: ["Original / OEM-grade quality screens", "Full touch sensitivity and color vibrancy restore", "Fast turnaround time", "Tested for multi-touch and brightness accuracy"],
    process: ["Initial inspection & display check", "Safe disassembly of cracked panel", "Precision cleaning of frame housing", "New display installation & multi-point test"],
    estimatedTime: "45 - 90 Minutes",
    warranty: "90 Days Service Warranty"
  },
  "battery-replacement": {
    num: "02",
    name: "BATTERY REPLACEMENT",
    desc: "Battery-related issues including rapid draining and poor battery performance.",
    overview: "Is your phone shutting down unexpectedly or running out of charge within hours? We replace degraded batteries with fresh, high-capacity units designed to restore your phone's full battery health and day-long usage.",
    benefits: ["100% health capacity restoration", "Protection against overheating & swelling", "Clean battery flex connection setup", "Optimized power delivery"],
    process: ["Battery performance & health testing", "Safe adhesive removal", "Fresh battery placement and internal seal check", "Charging cycle & thermal testing"],
    estimatedTime: "30 - 60 Minutes",
    warranty: "90 Days Service Warranty"
  },
  "charging-repair": {
    num: "03",
    name: "CHARGING REPAIR",
    desc: "Diagnosis and repair for charging ports and charging-related problems.",
    overview: "Loose charging port? Phone only charges at certain angles or not at all? We clean, repair, or replace broken Type-C, Lightning, and Micro-USB charging ports and charging IC flex cables.",
    benefits: ["Fast charging support restored", "Secure cable dock fitment", "Fixes loose connection issues", "Power delivery diagnostics included"],
    process: ["Port lint cleaning and inspection", "Voltage pin test", "Port module / IC micro-soldering replacement", "Fast charging verification"],
    estimatedTime: "45 - 60 Minutes",
    warranty: "90 Days Service Warranty"
  },
  "software-service": {
    num: "04",
    name: "SOFTWARE SERVICE",
    desc: "Software-related issues, system problems and performance-related service.",
    overview: "Stuck on boot logo, experiencing constant app crashes, or facing locked system software? Our experts perform OS re-flashing, malware removal, system recovery, and performance optimization.",
    benefits: ["Fixes boot loop & freezing issues", "Latest OS version recovery", "System speed and stability improvement", "Safe firmware flashing"],
    process: ["System error code diagnosis", "Data backup assessment", "Official firmware re-flashing", "Post-update performance test"],
    estimatedTime: "1 - 2 Hours",
    warranty: "Service Guarantee"
  },
  "motherboard-repair": {
    num: "05",
    name: "MOTHERBOARD / IC REPAIR",
    desc: "Hardware-level diagnosis and repair for motherboard and IC-related issues.",
    overview: "Motherboard micro-soldering requires advanced equipment and expertise. We fix dead phones, short circuits, power IC failures, audio IC bugs, and network IC issues right here in Jagdish Market.",
    benefits: ["Chip-level micro-soldering precision", "Saves expensive mainboard replacements", "Short circuit removal", "Advanced diagnostic equipment"],
    process: ["Microscope component inspection", "Short circuit isolation using thermal imaging", "BGA reballing or IC replacement", "Full board stress testing"],
    estimatedTime: "Same Day / Next Day",
    warranty: "30 Days Hardware Warranty"
  },
  "camera-repair": {
    num: "06",
    name: "CAMERA REPAIR",
    desc: "Repair and diagnosis for smartphone camera problems.",
    overview: "Blurry photos, shaking lens, black screen when opening the camera, or cracked camera glass? We replace front and rear camera modules and outer lens glass covers.",
    benefits: ["Crystal clear focus & optical stabilization fix", "Original sensor resolution", "Dust-free lens housing cleaning", "Front and back camera replacement"],
    process: ["Lens alignment check", "Faulty module removal", "Internal dust cleaning", "New camera testing in all photo/video modes"],
    estimatedTime: "45 - 60 Minutes",
    warranty: "90 Days Service Warranty"
  },
  "speaker-microphone-repair": {
    num: "07",
    name: "SPEAKER & MICROPHONE",
    desc: "Solutions for speaker, microphone and audio-related issues.",
    overview: "Can't hear call audio? Low ringtone volume or distorted sound? Callers can't hear you? We clean and replace damaged earpieces, bottom speakers, and noise-canceling microphones.",
    benefits: ["Loud and crisp audio quality", "Fixes low or muffled sound", "Earpiece mesh deep cleaning", "Mic replacement for clear calling"],
    process: ["Acoustic mesh inspection", "Audio IC and speaker unit testing", "Component cleaning/replacement", "Call quality test"],
    estimatedTime: "30 - 45 Minutes",
    warranty: "90 Days Service Warranty"
  },
  "water-damage-repair": {
    num: "08",
    name: "WATER DAMAGE",
    desc: "Assessment and repair support for water or liquid-damaged phones.",
    overview: "Dropped your phone in water? Act quickly! We disassemble liquid-damaged devices, perform ultrasonic chemical board cleaning, dry components, and repair corroded board traces.",
    benefits: ["Ultrasonic bath corrosion cleaning", "Prevents long-term motherboard rust", "Maximum data safety attempt", "Complete hardware diagnostic"],
    process: ["Immediate battery disconnection", "Ultrasonic cleaning of mainboard in alcohol solution", "Thermal drying and trace inspection", "Component replacement and re-assembly"],
    estimatedTime: "2 - 4 Hours",
    warranty: "Diagnostic Guarantee"
  },
  "back-glass-body-repair": {
    num: "09",
    name: "BACK GLASS / BODY REPAIR",
    desc: "Repair support for damaged phone bodies and back glass.",
    overview: "Cracked rear glass or bent housing? We replace back panel glass, camera rings, and middle frames to restore your phone's original structural integrity and aesthetic look.",
    benefits: ["Laser back glass removal for clean fitment", "Restores original feel and design", "Protects internal components from dust", "Frame straightening"],
    process: ["Safe removal of broken back panel", "Adhesive resin cleanup", "Frame alignment", "Precision bonding of new back glass"],
    estimatedTime: "1 - 2 Hours",
    warranty: "Fitment Guarantee"
  },
  "general-mobile-repair": {
    num: "10",
    name: "GENERAL MOBILE REPAIR",
    desc: "Diagnosis and repair for other smartphone problems.",
    overview: "Power button stuck? Volume keys not responding? Vibration motor dead? We handle all hardware and mechanical repairs for all brands.",
    benefits: ["Comprehensive phone health check", "Flex cable and key replacements", "Genuine spare parts", "Quick inspection turnaround"],
    process: ["Physical and mechanical inspection", "Faulty key or sensor replacement", "Re-assembly and final functionality check"],
    estimatedTime: "30 - 60 Minutes",
    warranty: "90 Days Service Warranty"
  }
};

const PHONE_NUMBER = "918121777725";
const TEL_LINK = "tel:+918121777725";
const WA_LINK = "https://wa.me/918121777725";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const service = slug ? serviceData[slug] : null;

  if (!service) {
    return (
      <div className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] flex flex-col items-center justify-center p-6 text-center">
        <h2 className="text-4xl font-bold uppercase mb-4">Service Not Found</h2>
        <p className="text-white/60 mb-8">The service page you are looking for does not exist.</p>
        <Link
          to="/"
          className="px-8 py-3 rounded-full bg-purple-600 text-white font-bold text-xs uppercase tracking-widest hover:bg-purple-500 transition-colors"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-[#0C0C0C] text-[#D7E2EA] font-sans selection:bg-purple-600 selection:text-white"
      style={{ fontFamily: "'Kanit', sans-serif" }}
    >
      {/* HEADER BAR */}
      <header className="px-6 md:px-10 py-6 border-b border-white/10 flex items-center justify-between bg-[#0C0C0C]/80 backdrop-blur-md sticky top-0 z-50">
        <button
          onClick={() => navigate("/")}
          className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-white/70 hover:text-purple-400 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to All Services
        </button>
        <span className="text-xs font-mono uppercase tracking-widest text-purple-400">
          Caayara Mobiles • Jagdish Market
        </span>
      </header>

      {/* HERO SECTION */}
      <section className="px-6 md:px-10 py-16 max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-purple-950/60 border border-purple-500/30 text-purple-300">
            Service {service.num}
          </span>
        </div>

        <h1
          className="font-black uppercase tracking-tight leading-none text-white mb-6"
          style={{ fontSize: "clamp(2.5rem, 7vw, 90px)" }}
        >
          {service.name}
        </h1>

        <p className="text-lg sm:text-2xl font-light leading-relaxed text-[#D7E2EA]/80 max-w-3xl mb-10">
          {service.desc}
        </p>

        {/* QUICK METRICS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 border-y border-white/10 py-6 my-8">
          <div className="flex items-center gap-3">
            <Clock className="w-6 h-6 text-purple-400" />
            <div>
              <span className="text-[10px] font-mono text-white/40 uppercase block">Estimated Time</span>
              <span className="text-sm font-bold text-white uppercase">{service.estimatedTime}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-400" />
            <div>
              <span className="text-[10px] font-mono text-white/40 uppercase block">Warranty</span>
              <span className="text-sm font-bold text-white uppercase">{service.warranty}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Wrench className="w-6 h-6 text-indigo-400" />
            <div>
              <span className="text-[10px] font-mono text-white/40 uppercase block">Location</span>
              <span className="text-sm font-bold text-white uppercase">Jagdish Market, Abids</span>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE OVERVIEW */}
      <section className="px-6 md:px-10 py-12 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-8">
          <div>
            <h2 className="text-xs font-mono uppercase tracking-widest text-purple-400 mb-2">• Overview •</h2>
            <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight mb-4">
              Service Details
            </h3>
            <p className="text-base leading-relaxed text-white/80 font-light">
              {service.overview}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase text-white tracking-tight mb-4">Key Benefits</h3>
            <div className="space-y-3">
              {service.benefits.map((b, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-sm text-white/90">{b}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold uppercase text-white tracking-tight mb-4">Our Repair Process</h3>
            <div className="space-y-3">
              {service.process.map((p, idx) => (
                <div key={idx} className="flex items-center gap-4 bg-[#141414] border border-white/10 rounded-xl p-4">
                  <span className="font-mono font-black text-purple-400 text-lg">0{idx + 1}</span>
                  <span className="text-sm text-white/90">{p}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SIDEBAR CTA BOX */}
        <div className="md:col-span-5">
          <div className="bg-[#141414] border border-white/15 rounded-3xl p-8 sticky top-28 space-y-6">
            <h3 className="text-2xl font-black uppercase text-white tracking-tight">
              Get {service.name}
            </h3>
            <p className="text-xs text-white/60 font-mono uppercase leading-relaxed">
              Visit our shop at Jagdish Market or talk to our technical expert for price quotes & availability.
            </p>

            <div className="space-y-3 pt-2">
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessagesSquare className="w-4 h-4" /> WHATSAPP US
              </a>
              <a
                href={TEL_LINK}
                className="w-full py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 text-purple-400" /> CALL {PHONE_NUMBER}
              </a>
            </div>

            <div className="pt-4 border-t border-white/10 text-center">
              <Link to="/" className="text-xs font-mono uppercase tracking-widest text-purple-400 hover:underline">
                &larr; Return to main page
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
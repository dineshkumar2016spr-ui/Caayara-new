import React, { useState, useEffect, useRef, useMemo } from "react";
import logo from '../assets/cayara logo without back ground.png';
import batteryImg from '../assets/battery.jpeg';
import chargingImg from '../assets/charging port.jpeg';
import mbRepairImg from '../assets/MB repair.jpeg';
import screenRepairImg from '../assets/screen epair.jpeg';
import wdRepairImg from '../assets/WD repair.jpeg';
import {
  Phone,
  MessagesSquare,
  MapPin,
  Smartphone,
  Cpu,
  Battery,
  Wrench,
  Droplets,
  Volume2,
  Camera,
  Layers,
  ChevronDown,
  CheckCircle2,
  X,
  Menu,
  Navigation,
  ShieldAlert,
  HelpCircle,
  Clock,
  Sparkles,
} from "lucide-react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
  useSpring,
  useMotionValue,
} from "framer-motion";
import phoneVideo from '../assets/phone.mp4';// =======================================================
// CONSTANTS & LINKS
 // =======================================================
const PHONE_NUMBER = "918121777725";
const TEL_LINK = "tel:+918121777725";
const WA_LINK = "https://wa.me/918121777725";
const MAPS_LINK = "https://maps.google.com/?q=Jagdish+Market+Abids+Hyderabad";
// REUSABLE COMPONENTS
// ==========================================

// 1. FADEIN COMPONENT
interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}

function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = "",
}: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "50px", amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 2. MAGNET COMPONENT
interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

function Magnet({
  children,
  padding = 150,
  strength = 3,
  className = "",
}: MagnetProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 150, mass: 0.5 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;
      const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);

      if (distance < padding) {
        x.set(distanceX / strength);
        y.set(distanceY / strength);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [padding, strength, x, y]);

  return (
    <motion.div
      ref={ref}
      style={{ x: springX, y: springY, willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 3. ANIMATED TEXT COMPONENT (Character-by-character scroll reveal)
function AnimatedText({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.2"],
  });

  const words = text.split(" ");

  return (
    <p ref={containerRef} className={`flex flex-wrap justify-center ${className}`}>
      {words.map((word, wordIdx) => {
        const wordChars = word.split("");
        return (
          <span key={wordIdx} className="inline-block mr-[0.3em] whitespace-nowrap">
            {wordChars.map((char, charIdx) => {
              const charPosition = (wordIdx * 6 + charIdx) / (text.length || 1);
              const opacity = useTransform(
                scrollYProgress,
                [Math.max(0, charPosition - 0.1), Math.min(1, charPosition + 0.1)],
                [0.2, 1]
              );
              return (
                <motion.span key={charIdx} style={{ opacity }}>
                  {char}
                </motion.span>
              );
            })}
          </span>
        );
      })}
    </p>
  );
}

// 4. CUSTOM GRADIENT CONTACT BUTTON
interface ButtonProps {
  label: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

function ContactButton({ label, href, onClick, className = "" }: ButtonProps) {
  const content = (
    <span
      className={`inline-flex items-center justify-center px-8 py-3 sm:px-10 sm:py-3.5 md:px-12 md:py-4 rounded-full text-white font-medium uppercase tracking-widest text-xs sm:text-sm transition-transform duration-300 hover:scale-105 active:scale-95 text-center cursor-pointer ${className}`}
      style={{
        background:
          "linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)",
        boxShadow:
          "0px 4px 4px rgba(181, 1, 167, 0.25), inset 4px 4px 12px #7721B1",
        outline: "2px solid rgba(255, 255, 255, 0.9)",
        outlineOffset: "-3px",
      }}
    >
      {label}
    </span>
  );

  if (href) {
    return (
      <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <button onClick={onClick}>{content}</button>;
}

// ==========================================
// 3D GRAPHIC RENDERERS (SVG/CSS STYLED)
// ==========================================
function Hero3DDevice({ videoSrc }: { videoSrc?: string }) {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background Neon Glow */}
      <div className="absolute w-72 h-72 sm:w-96 sm:h-96 bg-purple-600/30 rounded-full blur-[90px] animate-pulse" />

      {/* 3D Smartphone Frame */}
      <div className="relative z-10 w-64 sm:w-80 md:w-96 h-[340px] sm:h-[420px] md:h-[480px] bg-gradient-to-b from-[#1E1B2E] via-[#0F0D18] to-[#08070E] rounded-[48px] p-3 border-2 border-white/20 shadow-[0_25px_60px_rgba(118,33,176,0.4)] backdrop-blur-2xl transform -rotate-6 hover:rotate-0 transition-transform duration-700 ease-out flex flex-col justify-between overflow-hidden">
        
        {/* Notch / Dynamic Island */}
        <div className="mx-auto w-28 h-5 bg-black rounded-full flex items-center justify-between px-3 border border-white/10 z-20">
          <div className="w-2.5 h-2.5 rounded-full bg-blue-500/80 animate-ping" />
          <div className="w-10 h-1 bg-white/20 rounded-full" />
        </div>

        {/* Video Display Screen */}
        <div className="relative my-2 flex-1 rounded-[32px] overflow-hidden bg-black border border-purple-500/30">
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* Home Bar */}
        <div className="w-32 h-1 bg-white/40 rounded-full mx-auto my-1 z-20" />
      </div>
    </div>
  );
  }
// ==========================================
// MAIN WEBSITE COMPONENT
// ==========================================
export default function CaayaraMobilesWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    brand: "Apple",
    model: "",
    problem: "Broken Screen",
    contactPref: "WhatsApp",
  });

  // Dynamic Metadata & Inject Styles
  useEffect(() => {
    document.title = "Caayara Mobiles -- Mobile Repair & Service";

    // Add SEO Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement("meta");
      metaDesc.setAttribute("name", "description");
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute(
      "content",
      "Caayara Mobiles provides professional mobile phone repair and service in Jagdish Market, Hyderabad. Screen replacement, battery replacement, charging repair, software service, motherboard repair and more. Call or WhatsApp 8121777725."
    );

    // Google Font Link
    const fontLink = document.createElement("link");
    fontLink.href =
      "https://fonts.googleapis.com/css2?family=Kanit:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,400&display=swap";
    fontLink.rel = "stylesheet";
    document.head.appendChild(fontLink);

    // Structured JSON-LD Data for Local Business
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "MobilePhoneStore",
      "name": "Caayara Mobiles",
      "image": "https://wa.me/918121777725",
      "telephone": "+918121777725",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Jagdish Market, Abids",
        "addressRegion": "Hyderabad, Telangana",
        "addressCountry": "IN"
      },
      "areaServed": "Hyderabad",
      "description": "Professional mobile phone repair and service in Jagdish Market, Hyderabad."
    };
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(fontLink);
      document.head.removeChild(script);
    };
  }, []);

  const scrollToEnquiry = () => {
    const el = document.getElementById("enquiry");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  // Marquee Tile Items
  const marqueeTilesRow1 = [
    { title: "SCREEN REPAIR", sub: "Display & Glass Fix", icon: Smartphone },
    { title: "BATTERY REPLACEMENT", sub: "Li-Ion Health Check", icon: Battery },
    { title: "CHARGING REPAIR", sub: "Port & Flex Cable", icon: Battery },
    { title: "MOTHERBOARD REPAIR", sub: "IC & Chip Micro-Solder", icon: Cpu },
    { title: "SOFTWARE SERVICE", sub: "OS & System Recovery", icon: Layers },
  ];

  const marqueeTilesRow2 = [
    { title: "CAMERA REPAIR", sub: "Sensor & Lens Alignment", icon: Camera },
    { title: "SPEAKER REPAIR", sub: "Earpiece & Mic Fix", icon: Volume2 },
    { title: "WATER DAMAGE", sub: "Ultrasonic Chemical Clean", icon: Droplets },
    { title: "SMARTPHONE COMPONENTS", sub: "Genuine Hardware", icon: Wrench },
    { title: "CAAYARA MOBILES", sub: "Jagdish Market • Hyderabad", icon: MapPin },
  ];

  // 10 Services List
  const serviceItems = [
    { num: "01", name: "SCREEN REPLACEMENT", desc: "Broken, cracked or damaged smartphone screen repair and replacement." },
    { num: "02", name: "BATTERY REPLACEMENT", desc: "Battery-related issues including rapid draining and poor battery performance." },
    { num: "03", name: "CHARGING REPAIR", desc: "Diagnosis and repair for charging ports and charging-related problems." },
    { num: "04", name: "SOFTWARE SERVICE", desc: "Software-related issues, system problems and performance-related service." },
    { num: "05", name: "MOTHERBOARD / IC REPAIR", desc: "Hardware-level diagnosis and repair for motherboard and IC-related issues." },
    { num: "06", name: "CAMERA REPAIR", desc: "Repair and diagnosis for smartphone camera problems." },
    { num: "07", name: "SPEAKER & MICROPHONE", desc: "Solutions for speaker, microphone and audio-related issues." },
    { num: "08", name: "WATER DAMAGE", desc: "Assessment and repair support for water or liquid-damaged phones." },
    { num: "09", name: "BACK GLASS / BODY REPAIR", desc: "Repair support for damaged phone bodies and back glass." },
    { num: "10", name: "GENERAL MOBILE REPAIR", desc: "Diagnosis and repair for other smartphone problems." },
  ];

  // Stacking Repair Cards
  const repairCards = [
    {
      num: "01",
      category: "DISPLAY",
      title: "SCREEN REPAIR",
      desc: "Professional diagnosis and repair for cracked, broken or damaged smartphone displays.",
      icon: Smartphone,
    },
    {
      num: "02",
      category: "POWER",
      title: "BATTERY & CHARGING",
      desc: "Battery replacement and charging-related diagnosis for smartphones experiencing power issues.",
      icon: Battery,
    },
    {
      num: "03",
      category: "HARDWARE",
      title: "MOTHERBOARD & IC",
      desc: "Hardware-level diagnosis and repair for motherboard and component-related problems.",
      icon: Cpu,
    },
  ];

  // Problem Grid Items
  const problemCards = [
    "SCREEN BROKEN?",
    "BATTERY DRAINING?",
    "PHONE NOT CHARGING?",
    "CAMERA NOT WORKING?",
    "PHONE NOT TURNING ON?",
    "WATER DAMAGE?",
    "SOFTWARE ISSUE?",
    "MOTHERBOARD PROBLEM?",
    "SPEAKER NOT WORKING?",
    "MICROPHONE NOT WORKING?",
  ];

  // FAQs
  const faqs = [
    { q: "What types of phones do you repair?", a: "We repair smartphones from major brands including Apple, Samsung, OnePlus, Xiaomi, Redmi, Realme, Vivo, Oppo, Google Pixel, Motorola, and Nothing." },
    { q: "Do you repair broken screens?", a: "Yes, we specialize in screen replacements for cracked, shattered, or un-responsive touch displays." },
    { q: "Can you fix charging problems?", a: "Yes, we diagnose and fix loose charging ports, damaged flex cables, and power IC issues." },
    { q: "Do you repair motherboard and IC problems?", a: "Yes, we handle hardware-level diagnosis and micro-soldering for motherboard and component-related issues." },
    { q: "Can you check water-damaged phones?", a: "Yes, we provide chemical cleaning and deep inspection for liquid or water-damaged devices." },
    { q: "My phone is not turning on. Can you diagnose it?", a: "Yes, bring your dead or un-bootable phone in for hardware and power diagnostics." },
    { q: "How can I contact Caayara Mobiles?", a: `Call or WhatsApp ${PHONE_NUMBER}` },
  ];

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] font-sans overflow-x-clip selection:bg-purple-600 selection:text-white"
      style={{ fontFamily: "'Kanit', sans-serif" }}
    >
      <style>{`
        .hero-heading {
          background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* ==========================================
          1. HERO SECTION
      ========================================== */}
      <section className="relative h-screen min-h-[700px] w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C] px-6 md:px-10 pt-6 md:pt-8 pb-8">
        {/* NAVBAR */}
        ⁠<header className="relative z-30 flex items-center justify-between w-full">
            <FadeIn delay={0} y={-20}>
              <a href="#" className="flex items-center">⁠
                 <img src={logo} alt="Caayara Logo" className="h-20 sm:h-24 md:h-28 w-auto object-contain" />
                 </a>
              </FadeIn>
          <FadeIn y={-20} delay={0.1}>
            <nav className="hidden md:flex items-center gap-8 font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] text-[#D7E2EA]">
              <a href="#about" className="hover:opacity-70 transition-opacity duration-200">About</a>
              <a href="#services" className="hover:opacity-70 transition-opacity duration-200">Services</a>
              <a href="#repairs" className="hover:opacity-70 transition-opacity duration-200">Repairs</a>
              <a href="#contact" className="hover:opacity-70 transition-opacity duration-200">Contact</a>
            </nav>
          </FadeIn>

          <FadeIn y={-20} delay={0.2} className="flex items-center gap-3">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600/20 border border-emerald-500/40 text-emerald-300 font-medium uppercase tracking-wider text-xs hover:bg-emerald-600/30 transition-all"
            >
              <MessagesSquare className="w-4 h-4" /> WHATSAPP US
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-white"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </FadeIn>
        </header>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-20 left-6 right-6 z-50 bg-[#141414] border border-white/15 rounded-3xl p-6 flex flex-col gap-4 font-medium uppercase tracking-wider text-base text-[#D7E2EA] shadow-2xl md:hidden"
            >
              <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
              <a href="#services" onClick={() => setMobileMenuOpen(false)}>Services</a>
              <a href="#repairs" onClick={() => setMobileMenuOpen(false)}>Repairs</a>
              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
              <div className="pt-4 border-t border-white/10 flex flex-col gap-2">
                <a href={TEL_LINK} className="py-3 text-center bg-white/10 rounded-xl text-xs font-bold">CALL NOW</a>
                <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="py-3 text-center bg-emerald-600 text-white rounded-xl text-xs font-bold">WHATSAPP US</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* HERO HEADING & CENTRAL VISUAL */}
        <div className="relative z-10 my-auto flex flex-col items-center justify-center text-center">
          <div className="overflow-hidden w-full">
            <FadeIn y={40} delay={0.15}>
              <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center select-none text-[9vw] sm:text-[10vw] md:text-[11vw] lg:text-[11.5vw]">
                YOUR PHONE.<br />OUR EXPERTISE.
              </h1>
            </FadeIn>
          </div>

          {/* HERO VISUAL (WITH MAGNET MOUSE TRACKING) */}
          <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] top-1/2 -translate-y-1/2 md:top-auto md:bottom-0 pointer-events-auto">
            <FadeIn y={30} delay={0.6}>
              <Magnet padding={150} strength={3}>
               <Hero3DDevice videoSrc={phoneVideo} />
              </Magnet>
            </FadeIn>
          </div>
        </div>

        {/* HERO BOTTOM STRIP */}
        <div className="relative z-20 flex flex-col md:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
          <FadeIn y={20} delay={0.35} className="w-full md:w-auto">
            <p
              className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[180px] sm:max-w-[240px] md:max-w-[300px]"
              style={{ fontSize: "clamp(0.75rem, 1.4vw, 1.5rem)" }}
            >
              PROFESSIONAL MOBILE PHONE REPAIR & SERVICE IN JAGDISH MARKET, HYDERABAD
            </p>
          </FadeIn>

          {/* HERO CTA BUTTONS */}
          <FadeIn y={20} delay={0.5} className="flex flex-wrap items-center justify-center gap-3">
            <ContactButton label="GET YOUR PHONE REPAIRED" onClick={scrollToEnquiry} />
            <a
              href={TEL_LINK}
              className="px-6 py-3 rounded-full bg-white/5 border border-white/20 text-white font-medium text-xs uppercase tracking-widest hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-purple-400" /> CALL NOW
            </a>
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-medium text-xs uppercase tracking-widest hover:bg-emerald-600/40 transition-all flex items-center gap-2"
            >
              <MessagesSquare className="w-3.5 h-3.5" /> WHATSAPP US
            </a>
          </FadeIn>

          <FadeIn y={20} delay={0.65} className="hidden lg:block text-right">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400 block">Location</span>
            <span className="text-sm font-bold uppercase tracking-wider text-white">JAGDISH MARKET • HYDERABAD</span>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================
          2. MARQUEE SECTION
      ========================================== */}
      <section className="bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden">
        <div className="space-y-4">
          {/* Row 1 - Right Moving Animation */}
          <div className="flex w-max gap-3 animate-[marqueeRight_35s_linear_infinite] hover:[animation-play-state:paused]">
            {[...marqueeTilesRow1, ...marqueeTilesRow1, ...marqueeTilesRow1].map((tile, idx) => {
              const Icon = tile.icon;
              return (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[420px] h-[180px] sm:h-[270px] rounded-2xl bg-gradient-to-br from-[#181528] to-[#0A0A12] border border-white/15 p-6 flex flex-col justify-between shrink-0 hover:border-purple-500/50 transition-all group"
                  style={{ willChange: "transform" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-500/30 text-purple-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-1 rounded-full">
                      SERVICE TILE
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white uppercase tracking-tight">{tile.title}</h3>
                    <p className="text-xs sm:text-sm font-mono text-purple-300/80 uppercase">{tile.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Row 2 - Left Moving Animation */}
          <div className="flex w-max gap-3 animate-[marqueeLeft_35s_linear_infinite] hover:[animation-play-state:paused]">
            {[...marqueeTilesRow2, ...marqueeTilesRow2, ...marqueeTilesRow2].map((tile, idx) => {
              const Icon = tile.icon;
              return (
                <div
                  key={idx}
                  className="w-[300px] sm:w-[420px] h-[180px] sm:h-[270px] rounded-2xl bg-gradient-to-br from-[#12121D] to-[#08080E] border border-white/15 p-6 flex flex-col justify-between shrink-0 hover:border-indigo-500/50 transition-all group"
                  style={{ willChange: "transform" }}
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-indigo-950/60 border border-indigo-500/30 text-indigo-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6 sm:w-8 sm:h-8" />
                    </div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 border border-white/10 px-2.5 py-1 rounded-full">
                      HYDERABAD
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-2xl font-bold text-white uppercase tracking-tight">{tile.title}</h3>
                    <p className="text-xs sm:text-sm font-mono text-indigo-300/80 uppercase">{tile.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <style>{`
          @keyframes marqueeRight {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0%); }
          }
          @keyframes marqueeLeft {
            0% { transform: translateX(0%); }
            100% { transform: translateX(-50%); }
          }
        `}</style>
      </section>

      {/* ==========================================
          3. ABOUT SECTION
      ========================================== */}
      <section id="about" className="min-h-screen px-5 sm:px-8 md:px-10 py-20 relative flex flex-col items-center justify-center bg-[#0C0C0C]">
        {/* Floating 3D Decorative Objects in Corners */}
        <div className="absolute top-12 left-10 p-4 rounded-3xl bg-purple-950/30 border border-purple-500/20 blur-[1px] hidden lg:block animate-bounce">
          <Smartphone className="w-12 h-12 text-purple-400" />
        </div>
        <div className="absolute top-20 right-12 p-4 rounded-3xl bg-indigo-950/30 border border-indigo-500/20 blur-[1px] hidden lg:block">
          <Battery className="w-12 h-12 text-emerald-400" />
        </div>
        <div className="absolute bottom-16 left-16 p-4 rounded-3xl bg-pink-950/30 border border-pink-500/20 blur-[1px] hidden lg:block">
          <Cpu className="w-12 h-12 text-pink-400" />
        </div>
        <div className="absolute bottom-20 right-16 p-4 rounded-3xl bg-blue-950/30 border border-blue-500/20 blur-[1px] hidden lg:block animate-pulse">
          <Wrench className="w-12 h-12 text-blue-400" />
        </div>

        <div className="max-w-4xl mx-auto text-center space-y-10 z-10">
          <FadeIn>
            <h2
              className="hero-heading font-black uppercase leading-none tracking-tight text-center"
              style={{ fontSize: "clamp(3rem, 10vw, 150px)" }}
            >
              ABOUT CAAYARA MOBILES
            </h2>
          </FadeIn>

          <AnimatedText
            text="Your phone is part of your everyday life. When something goes wrong, you need a repair service that understands the problem and focuses on getting it fixed properly. Caayara Mobiles provides mobile phone repair and service in Jagdish Market, Hyderabad, with a focus on proper diagnosis, repair quality and clear communication."
            className="text-[#D7E2EA] font-medium leading-relaxed max-w-[560px] mx-auto uppercase"
          />

          <FadeIn delay={0.3} className="pt-8 flex flex-wrap items-center justify-center gap-4">
            <ContactButton label="GET YOUR PHONE REPAIRED" onClick={scrollToEnquiry} />
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-medium text-xs uppercase tracking-widest hover:bg-emerald-600/40 transition-all flex items-center gap-2"
            >
              <MessagesSquare className="w-4 h-4" /> WHATSAPP US
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================
          4. SERVICES SECTION
      ========================================== */}
      <section
        id="services"
        className="bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32"
      >
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <h2
              className="font-black uppercase text-center text-[#0C0C0C] tracking-tight mb-16 sm:mb-20 md:mb-28"
              style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
            >
              SERVICES
            </h2>
          </FadeIn>

          <div className="space-y-0">
            {serviceItems.map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="border-t border-black/15 py-8 sm:py-10 md:py-12">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-baseline">
                  {/* Number */}
                  <div className="md:col-span-3">
                    <span
                      className="font-black text-[#0C0C0C] leading-none tracking-tighter"
                      style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                    >
                      {item.num}
                    </span>
                  </div>

                  {/* Title */}
                  <div className="md:col-span-4">
                    <h3
                      className="font-medium uppercase text-[#0C0C0C] tracking-tight"
                      style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                    >
                      {item.name}
                    </h3>
                  </div>

                  {/* Description */}
                  <div className="md:col-span-5">
                    <p
                      className="font-light leading-relaxed text-[#0C0C0C] opacity-70 max-w-2xl"
                      style={{ fontSize: "clamp(0.85rem, 1.6vw, 1.25rem)" }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          5. REPAIRS SECTION (STICKY STACKING CARDS)
      ========================================== */}
      <section
        id="repairs"
        className="bg-[#0C0C0C] text-[#D7E2EA] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24"
      >
        <div className="max-w-6xl mx-auto">
          <FadeIn className="text-center mb-16">
            <h2
              className="hero-heading font-black uppercase tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 120px)" }}
            >
              REPAIR EXPERTISE
            </h2>
          </FadeIn>

          {/* STACKING STICKY CARDS CONTAINER */}
          <div className="space-y-12">
            {repairCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="sticky top-24 md:top-32 h-auto min-h-[400px] sm:min-h-[460px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:p-10 md:p-12 flex flex-col justify-between shadow-2xl transition-all"
                  style={{
                    transform: `scale(${1 - (repairCards.length - 1 - idx) * 0.02})`,
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-xs font-mono uppercase tracking-widest text-purple-400 block mb-1">
                        CATEGORY • {card.category}
                      </span>
                      <h3 className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                        {card.title}
                      </h3>
                    </div>
                    <span className="text-4xl sm:text-6xl font-black font-mono text-white/20">
                      {card.num}
                    </span>
                  </div>

                  <div className="my-8 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                    <div className="md:col-span-8 space-y-4">
                      <p className="text-base sm:text-xl font-light leading-relaxed text-[#D7E2EA]/90 max-w-xl">
                        {card.desc}
                      </p>
                      <div className="flex flex-wrap gap-2 pt-2">
                        <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono uppercase">Precision Tools</span>
                        <span className="px-3 py-1 rounded-full bg-white/10 text-xs font-mono uppercase">Jagdish Market</span>
                      </div>
                    </div>
                    <div className="md:col-span-4 flex justify-center md:justify-end">
                      <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-purple-900/40 to-indigo-900/40 border border-purple-500/30 flex items-center justify-center">
                        <Icon className="w-14 h-14 sm:w-20 sm:h-20 text-purple-400" />
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
                    <ContactButton label="GET YOUR PHONE REPAIRED" onClick={scrollToEnquiry} />
                    <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-xs font-mono uppercase tracking-widest text-emerald-400 hover:underline flex items-center gap-1">
                      <MessagesSquare className="w-4 h-4" /> WhatsApp Diagnostics
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==========================================
          6. COMMON PROBLEMS SECTION
      ========================================== */}
      <section className="bg-[#0C0C0C] py-20 px-5 sm:px-8 md:px-10 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <FadeIn className="text-center mb-16 space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">• Common Issues •</span>
            <h2
              className="hero-heading font-black uppercase tracking-tight"
              style={{ fontSize: "clamp(2rem, 6vw, 90px)" }}
            >
              WHAT'S WRONG WITH YOUR PHONE?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {problemCards.map((problem, idx) => (
              <FadeIn key={idx} delay={idx * 0.05} className="h-full">
                <div className="bg-[#141414] border border-white/10 hover:border-purple-500/50 rounded-2xl p-6 h-full flex flex-col justify-between group transition-all hover:-translate-y-1">
                  <div>
                    <ShieldAlert className="w-6 h-6 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
                    <h3 className="text-base font-bold text-white uppercase tracking-wider">{problem}</h3>
                  </div>
                  <button
                    onClick={scrollToEnquiry}
                    className="mt-6 text-xs font-bold uppercase tracking-widest text-purple-400 group-hover:text-purple-300 flex items-center justify-between border-t border-white/5 pt-3"
                  >
                    <span>GET IT CHECKED</span>
                    <span>&rarr;</span>
                  </button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          7. REPAIR ENQUIRY SECTION
      ========================================== */}
      <section id="enquiry" className="bg-[#0C0C0C] py-24 px-5 sm:px-8 md:px-10 border-t border-white/10">
        <div className="max-w-3xl mx-auto bg-[#141414] border border-white/15 rounded-[36px] p-8 sm:p-12 shadow-2xl relative">
          <FadeIn className="text-center mb-10 space-y-2">
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              TELL US WHAT'S WRONG
            </h2>
            <p className="text-xs font-mono text-white/60 uppercase tracking-widest">
              Submit details for phone inspection in Jagdish Market
            </p>
          </FadeIn>

          {formSubmitted ? (
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-10 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-bold text-white uppercase">Request Submitted!</h3>
              <p className="text-sm text-white/70 max-w-md mx-auto">
                Thank you, <span className="text-purple-300 font-bold">{formData.name}</span>. We have received your inquiry for <span className="text-white font-mono">{formData.brand} {formData.model}</span>.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest hover:bg-white/20"
              >
                Submit Another Request
              </button>
            </motion.div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setFormSubmitted(true);
              }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/60 mb-2">Name</label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/60 mb-2">Phone Number</label>
                  <input
                    required
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="10-digit mobile number"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/60 mb-2">Phone Brand</label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500 transition-colors"
                  >
                    {["Apple", "Samsung", "OnePlus", "Xiaomi", "Redmi", "Realme", "Vivo", "Oppo", "Motorola", "Google Pixel", "Nothing", "Other"].map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-mono uppercase tracking-widest text-white/60 mb-2">Phone Model</label>
                  <input
                    required
                    type="text"
                    value={formData.model}
                    onChange={(e) => setFormData({ ...formData, model: e.target.value })}
                    placeholder="e.g. iPhone 13 / OnePlus 9"
                    className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-white/60 mb-2">Problem</label>
                <select
                  value={formData.problem}
                  onChange={(e) => setFormData({ ...formData, problem: e.target.value })}
                  className="w-full bg-black/60 border border-white/15 rounded-xl px-4 py-3 text-white text-sm outline-none focus:border-purple-500 transition-colors"
                >
                  {[
                    "Broken Screen",
                    "Battery Problem",
                    "Charging Problem",
                    "Camera Problem",
                    "Speaker Problem",
                    "Microphone Problem",
                    "Water Damage",
                    "Software Problem",
                    "Phone Not Turning On",
                    "Motherboard Problem",
                    "Other"
                  ].map((p) => (
                    <option key={p} value={p}>{p}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-widest text-white/60 mb-2">Preferred Contact</label>
                <div className="flex gap-4">
                  {["Call", "WhatsApp"].map((pref) => (
                    <label key={pref} className="flex items-center gap-2 cursor-pointer text-xs font-mono uppercase">
                      <input
                        type="radio"
                        name="contactPref"
                        value={pref}
                        checked={formData.contactPref === pref}
                        onChange={(e) => setFormData({ ...formData, contactPref: e.target.value })}
                        className="accent-purple-500"
                      />
                      {pref}
                    </label>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-lg"
                >
                  REQUEST REPAIR
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* ==========================================
          8. CONTACT SECTION
      ========================================== */}
      <section id="contact" className="bg-[#0C0C0C] py-24 px-5 sm:px-8 md:px-10 border-t border-white/10">
        <div className="max-w-6xl mx-auto space-y-16">
          <FadeIn className="text-center space-y-4">
            <h2
              className="hero-heading font-black uppercase tracking-tight"
              style={{ fontSize: "clamp(3rem, 10vw, 130px)" }}
            >
              LET'S FIX YOUR PHONE.
            </h2>
            <p className="text-sm sm:text-lg text-[#D7E2EA]/70 font-light uppercase tracking-wider max-w-xl mx-auto">
              Professional mobile phone repair and service in Jagdish Market, Hyderabad.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* CALL */}
            <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <Phone className="w-8 h-8 text-purple-400" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/50">CALL</h3>
                <p className="text-2xl font-black text-white font-mono">{PHONE_NUMBER}</p>
              </div>
              <a
                href={TEL_LINK}
                className="w-full py-3 text-center rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest transition-all"
              >
                CALL NOW
              </a>
            </div>

            {/* WHATSAPP */}
            <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <MessagesSquare className="w-8 h-8 text-emerald-400" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/50">WHATSAPP</h3>
                <p className="text-2xl font-black text-white font-mono">{PHONE_NUMBER}</p>
              </div>
              <a
                href={WA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-widest transition-all"
              >
                WHATSAPP US
              </a>
            </div>

            {/* VISIT */}
            <div className="bg-[#141414] border border-white/10 rounded-3xl p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-2">
                <MapPin className="w-8 h-8 text-indigo-400" />
                <h3 className="text-xs font-mono uppercase tracking-widest text-white/50">VISIT</h3>
                <p className="text-base font-bold text-white uppercase leading-snug">
                  JAGDISH MARKET, HYDERABAD, TELANGANA, INDIA
                </p>
              </div>
              <a
                href={MAPS_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 text-center rounded-full bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2"
              >
                <Navigation className="w-3.5 h-3.5" /> GET DIRECTIONS
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ==========================================
          9. FAQ SECTION
      ========================================== */}
      <section className="bg-[#0C0C0C] py-20 px-5 sm:px-8 md:px-10 border-t border-white/10">
        <div className="max-w-4xl mx-auto space-y-12">
          <FadeIn className="text-center space-y-2">
            <span className="text-xs font-mono uppercase tracking-widest text-purple-400">• Clear Answers •</span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white tracking-tight">
              FREQUENTLY ASKED QUESTIONS
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#141414] border border-white/10 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-6 text-left font-bold text-white uppercase text-base sm:text-lg flex justify-between items-center gap-4 hover:text-purple-300 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 text-purple-400 transition-transform ${openFaq === idx ? "rotate-180" : ""}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-sm text-white/70 leading-relaxed border-t border-white/5 pt-4 font-light">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          10. FINAL CTA
      ========================================== */}
      <section className="bg-[#0C0C0C] py-24 px-5 sm:px-8 md:px-10 border-t border-white/10 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <FadeIn>
            <h2
              className="hero-heading font-black uppercase tracking-tight leading-tight"
              style={{ fontSize: "clamp(2.5rem, 8vw, 110px)" }}
            >
              DON'T LET A BROKEN PHONE SLOW YOU DOWN.
            </h2>
          </FadeIn>

          <p className="text-sm sm:text-lg text-[#D7E2EA]/70 font-light uppercase tracking-wider max-w-2xl mx-auto">
            Bring your phone in for professional diagnosis and repair in Jagdish Market, Hyderabad.
          </p>

          <FadeIn delay={0.2} className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <ContactButton label="GET YOUR PHONE REPAIRED" onClick={scrollToEnquiry} />
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-emerald-600/30 border border-emerald-500/40 text-emerald-300 font-medium text-xs uppercase tracking-widest hover:bg-emerald-600/40 transition-all flex items-center gap-2"
            >
              <MessagesSquare className="w-4 h-4" /> WHATSAPP US
            </a>
           <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
    if ((window as any).vapiSDK) {
  (window as any).vapiSDK.run({
    apiKey: "559be8c0-3973-451c-9320-fbd97156acd6",
    assistant: "91069644-060f-4443-8f6d-ae99327a8204",
  });
}
  }}
  className="px-8 py-4 rounded-full bg-white/10 border border-white/20 text-white font-medium text-xs uppercase tracking-widest ..."
>
  <Phone className="w-4 h-4 text-purple-400" /> CALL NOW
</a>
          </FadeIn>
        </div>
      </section>

      {/* ==========================================
          11. FOOTER
      ========================================== */}
      <footer className="bg-[#0C0C0C] py-16 px-5 sm:px-8 md:px-10 border-t border-white/10 text-xs text-[#D7E2EA]/60 font-mono">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="space-y-3">
            <h3 className="text-base font-black text-white uppercase tracking-tighter">CAAYARA MOBILES</h3>
            <p className="text-xs font-light text-white/50 uppercase">MOBILE REPAIR. DONE RIGHT.</p>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-white uppercase tracking-wider">Location</p>
            <p className="font-light">Jagdish Market, Hyderabad, Telangana, India</p>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-white uppercase tracking-wider">Contact</p>
            <p className="font-light">Phone / WhatsApp: {PHONE_NUMBER}</p>
            <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="text-emerald-400 block hover:underline">
              WHATSAPP US
            </a>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-white uppercase tracking-wider">Navigation</p>
            <div className="flex flex-col gap-1 uppercase">
              <a href="#" className="hover:text-white">Home</a>
              <a href="#about" className="hover:text-white">About</a>
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#repairs" className="hover:text-white">Repairs</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-[10px] uppercase tracking-widest text-white/40">
          ©️ 2026 Caayara Mobiles. All Rights Reserved.
        </div>
      </footer>

      {/* ==========================================
          12. MOBILE EXPERIENCE BOTTOM BAR
      ========================================== */}
      <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0C0C0C]/95 backdrop-blur-lg border-t border-white/15 p-3 flex md:hidden items-center justify-around gap-2 text-[10px] font-bold uppercase tracking-wider">
       <a
  href="#"
  onClick={(e) => {
    e.preventDefault();
   if ((window as any).vapiSDK) {
  (window as any).vapiSDK.run({
    apiKey: "559be8c0-3973-451c-9320-fbd97156acd6",
    assistant: "91069644-060f-4443-8f6d-ae99327a8204",
  });
}
  }}
  className="flex-1 py-3 bg-white/10 rounded-xl text-center text-white flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
>
  <Phone className="w-3.5 h-3.5 text-purple-400" /> CALL
</a>
        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-emerald-600 rounded-xl text-center text-white flex items-center justify-center gap-1.5 active:scale-95 transition-transform shadow-lg shadow-emerald-600/30"
        >
          <MessagesSquare className="w-3.5 h-3.5" /> WHATSAPP
        </a>
        <a
          href={MAPS_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 py-3 bg-white/10 rounded-xl text-center text-white flex items-center justify-center gap-1.5 active:scale-95 transition-transform"
        >
          <Navigation className="w-3.5 h-3.5 text-indigo-400" /> MAPS
        </a>
      </div>
    </div>
  );
}

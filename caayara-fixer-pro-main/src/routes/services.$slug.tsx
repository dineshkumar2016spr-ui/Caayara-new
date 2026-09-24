import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logo from "../assets/cayara logo without back ground.png";

const services: Record<string, { title: string; description: string }> = {
  "screen-replacement": {
    title: "Screen Replacement",
    description:
      "Professional repair and replacement for cracked or damaged mobile screens.",
  },
  "battery-replacement": {
    title: "Battery Replacement",
    description:
      "Battery diagnosis and replacement for poor battery performance.",
  },
  "charging-repair": {
    title: "Charging Repair",
    description:
      "Repair for damaged charging ports and charging-related problems.",
  },
  "software-service": {
    title: "Software Service",
    description:
      "Professional support for software, system, and performance problems.",
  },
  "motherboard-repair": {
    title: "Motherboard / IC Repair",
    description:
      "Advanced diagnosis and repair for motherboard and IC-related issues.",
  },
  "camera-repair": {
    title: "Camera Repair",
    description: "Diagnosis and repair for smartphone camera problems.",
  },
  "speaker-microphone-repair": {
    title: "Speaker & Microphone Repair",
    description: "Solutions for speaker, microphone, and audio-related issues.",
  },
  "water-damage-repair": {
    title: "Water Damage Repair",
    description: "Inspection and repair support for liquid-damaged phones.",
  },
  "back-glass-body-repair": {
    title: "Back Glass / Body Repair",
    description: "Repair support for damaged phone bodies and back glass.",
  },
  "general-mobile-repair": {
    title: "General Mobile Repair",
    description: "Diagnosis and repair for other smartphone problems.",
  },
};

export const Route = createFileRoute("/services/$slug")({
  component: ServicePage,
});

function ServicePage() {
  const { slug } = Route.useParams();
  const service = services[slug];

  if (!service) {
    return (
      <main className="min-h-screen bg-[#0C0C0C] p-10 text-white">
        <Link to="/" className="text-purple-400">
          ← Home
        </Link>
        <h1 className="mt-12 text-4xl font-black uppercase">
          Service not found
        </h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] px-6 py-8 text-[#D7E2EA] md:px-10">
      <header className="flex items-center justify-between">
        <Link to="/" className="inline-block">
          <img
            src={logo}
            alt="Caayara Mobiles"
            className="h-20 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        <Link
          to="/services"
          className="text-xs font-bold uppercase tracking-widest text-purple-400"
        >
          All Services
        </Link>
      </header>

      <section className="mx-auto max-w-6xl py-24 sm:py-32">
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 text-xs uppercase tracking-[0.3em] text-purple-400"
        >
          Caayara Mobiles / Service
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-5xl font-black uppercase leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 10vw, 9rem)" }}
        >
          {service.title}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-white/65 sm:text-2xl"
        >
          {service.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12"
        >
          <Link
            to="/contact"
            className="inline-flex rounded-full bg-purple-600 px-8 py-4 text-xs font-bold uppercase tracking-widest text-white transition hover:scale-105 hover:bg-purple-500"
          >
            Get Your Phone Repaired
          </Link>
        </motion.div>
      </section>
    </main>
  );
}
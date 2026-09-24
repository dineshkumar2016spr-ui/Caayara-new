import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logo from "../assets/cayara logo without back ground.png";

const serviceItems = [
  { num: "01", slug: "screen-replacement", name: "Screen Replacement", desc: "Professional replacement for cracked or damaged screens." },
  { num: "02", slug: "battery-replacement", name: "Battery Replacement", desc: "Restore battery life and reliable daily performance." },
  { num: "03", slug: "charging-repair", name: "Charging Repair", desc: "Repair damaged charging ports and charging issues." },
  { num: "04", slug: "software-service", name: "Software Service", desc: "Resolve software problems, updates, and performance issues." },
  { num: "05", slug: "motherboard-repair", name: "Motherboard / IC Repair", desc: "Advanced diagnosis and motherboard-level repairs." },
  { num: "06", slug: "camera-repair", name: "Camera Repair", desc: "Fix camera focus, glass, and camera performance issues." },
  { num: "07", slug: "speaker-microphone-repair", name: "Speaker & Microphone", desc: "Restore clear audio for calls, music, and recordings." },
  { num: "08", slug: "water-damage-repair", name: "Water Damage", desc: "Inspection and repair for liquid-damaged devices." },
  { num: "09", slug: "back-glass-body-repair", name: "Back Glass / Body Repair", desc: "Repair damaged back glass and mobile body components." },
  { num: "10", slug: "general-mobile-repair", name: "General Mobile Repair", desc: "Reliable diagnosis and repair for other mobile problems." },
];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-white px-5 py-8 text-[#0C0C0C] sm:px-8 md:px-10">
      <header className="flex items-center justify-between">
        <Link to="/" className="inline-block">
          <img
            src={logo}
            alt="Caayara Mobiles"
            className="h-20 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        <Link
          to="/"
          className="text-sm font-bold uppercase text-purple-600"
        >
          Home
        </Link>
      </header>

      <section className="mx-auto max-w-7xl py-20 sm:py-24 md:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center font-black uppercase tracking-tight sm:mb-20 md:mb-28"
          style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
        >
          Services
        </motion.h1>

        <div>
          {serviceItems.map((item, index) => (
            <motion.div
              key={item.slug}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: index * 0.05 }}
              className="border-t border-black/15 py-8 sm:py-10 md:py-12"
            >
              <div className="grid items-baseline gap-6 md:grid-cols-12">
                <div className="md:col-span-3">
                  <span
                    className="font-black leading-none tracking-tighter"
                    style={{ fontSize: "clamp(3rem, 10vw, 140px)" }}
                  >
                    {item.num}
                  </span>
                </div>

                <div className="md:col-span-4">
                  <Link
                    to="/services/$slug"
                    params={{ slug: item.slug }}
                    className="flex items-center gap-2 font-medium uppercase transition-colors hover:text-purple-600"
                    style={{ fontSize: "clamp(1rem, 2.2vw, 2.1rem)" }}
                  >
                    {item.name}
                    <span>→</span>
                  </Link>
                </div>

                <p className="max-w-2xl font-light leading-relaxed opacity-70 md:col-span-5">
                  {item.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
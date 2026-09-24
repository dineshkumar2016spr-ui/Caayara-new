import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { Battery, Cpu, Smartphone } from "lucide-react";
import { useRef } from "react";
import logo from "../assets/cayara logo without back ground.png";

export const Route = createFileRoute("/repairs")({
  component: RepairsPage,
});

const repairCards = [
  {
    number: "01",
    category: "DISPLAY",
    title: "SCREEN REPAIR",
    description:
      "Professional diagnosis and repair for cracked, broken or damaged smartphone displays.",
    icon: Smartphone,
  },
  {
    number: "02",
    category: "POWER",
    title: "BATTERY & CHARGING",
    description:
      "Battery replacement and charging-related diagnosis for smartphones experiencing power issues.",
    icon: Battery,
  },
  {
    number: "03",
    category: "HARDWARE",
    title: "MOTHERBOARD & IC",
    description:
      "Hardware-level diagnosis and repair for motherboard and component-related problems.",
    icon: Cpu,
  },
];

const problems = [
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

function RepairCard({
  card,
  index,
}: {
  card: (typeof repairCards)[number];
  index: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (repairCards.length - 1 - index) * 0.03],
  );

  const y = useTransform(scrollYProgress, [0, 1], [28, 0]);
  const Icon = card.icon;

  return (
    <div ref={cardRef} className="relative h-[85vh]">
      <motion.div
        style={{ scale, y, top: `${index * 28}px` }}
        className="sticky mx-auto flex h-[70vh] max-w-6xl flex-col justify-between overflow-hidden rounded-[40px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-6 sm:rounded-[50px] sm:p-10 md:rounded-[60px] md:p-14"
      >
        <div className="flex items-start justify-between">
          <span className="font-mono text-sm text-white/60">
            {card.number} / {card.category}
          </span>
          <Icon className="h-10 w-10 text-purple-400" />
        </div>

        <div className="relative">
          <div className="absolute -bottom-10 -left-6 h-48 w-48 rounded-full bg-purple-700/20 blur-3xl" />
          <h2
            className="relative font-black uppercase leading-none tracking-tight text-[#D7E2EA]"
            style={{ fontSize: "clamp(2.5rem, 8vw, 8rem)" }}
          >
            {card.title}
          </h2>
          <p className="relative mt-6 max-w-2xl text-base leading-relaxed text-white/60 sm:text-xl">
            {card.description}
          </p>
        </div>
      </motion.div>
    </div>
  );
}

function RepairsPage() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] text-[#D7E2EA]">
      <header className="flex items-center justify-between px-6 py-6 md:px-10">
        <Link to="/" className="inline-block">
          <img
            src={logo}
            alt="Caayara Mobiles"
            className="h-20 w-auto object-contain transition-transform hover:scale-105"
          />
        </Link>

        <Link
          to="/contact"
          className="rounded-full border border-white/20 px-5 py-2 text-xs uppercase tracking-widest text-white"
        >
          Contact
        </Link>
      </header>

      <section className="px-5 py-24 sm:px-8 md:px-10">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-20 max-w-7xl text-center font-black uppercase leading-none tracking-tight"
          style={{ fontSize: "clamp(3rem, 12vw, 10rem)" }}
        >
          REPAIR EXPERTISE
        </motion.h1>

        <div>
          {repairCards.map((card, index) => (
            <RepairCard key={card.number} card={card} index={index} />
          ))}
        </div>
      </section>

      <section className="border-t border-white/10 px-5 py-24 sm:px-8 md:px-10">
        <div className="mx-auto max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="mb-14 text-center font-black uppercase leading-none"
            style={{ fontSize: "clamp(2.5rem, 8vw, 7rem)" }}
          >
            WHAT&apos;S WRONG WITH YOUR PHONE?
          </motion.h2>

          {problems.map((problem, index) => (
            <motion.div
              key={problem}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="border-t border-white/15 py-7"
            >
              <Link
                to="/contact"
                className="flex items-center justify-between text-lg font-bold uppercase transition-colors hover:text-purple-400 sm:text-2xl"
              >
                <span>{problem}</span>
                <span>→</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
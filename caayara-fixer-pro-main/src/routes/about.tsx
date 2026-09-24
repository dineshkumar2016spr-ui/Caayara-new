import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import logo from "../assets/cayara logo without back ground.png";
import com1 from "../assets/Com 1.jpeg";
import com2 from "../assets/Com 2.jpeg";
import com4 from "../assets/Com 4.jpeg";
import com5 from "../assets/Com 5.jpeg";
import com6 from "../assets/Com 6.jpeg";
import com7 from "../assets/Com 7.jpeg";

const WA_LINK = "https://wa.me/918121777725";

const gallery = [
  { image: com1, title: "Professional Repairs" },
  { image: com2, title: "Expert Mobile Service" },
  { image: com4, title: "Quality Components" },
  { image: com5, title: "Advanced Diagnosis" },
  { image: com6, title: "Trusted Workmanship" },
  { image: com7, title: "Caayara Mobiles" },
];

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
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
          to="/"
          className="text-sm font-bold uppercase text-purple-400"
        >
          Home
        </Link>
      </header>

      <section className="mx-auto max-w-7xl py-24 text-center sm:py-32">
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="font-black uppercase leading-none tracking-tight text-white"
          style={{ fontSize: "clamp(3rem, 11vw, 10rem)" }}
        >
          About Caayara
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mx-auto mt-10 max-w-3xl text-base leading-relaxed text-[#D7E2EA]/70 sm:text-xl"
        >
          Your phone is part of your everyday life. Caayara Mobiles provides
          professional mobile phone repair and service in Jagdish Market,
          Hyderabad, with proper diagnosis, repair quality, and clear
          communication.
        </motion.p>
      </section>

      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {gallery.map((item, index) => (
          <motion.figure
            key={item.title}
            initial={{ opacity: 0, y: 70, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              delay: index * 0.1,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            whileHover={{ y: -12, scale: 1.02 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/15 bg-[#141414]"
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-[360px] w-full object-cover transition duration-700 group-hover:scale-110"
            />

            <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 to-transparent p-6 pt-20 text-lg font-bold uppercase">
              {item.title}
            </figcaption>
          </motion.figure>
        ))}
      </section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="mx-auto max-w-4xl py-24 text-center"
      >
        <h2 className="text-3xl font-black uppercase sm:text-5xl">
          Mobile Repair. Done Right.
        </h2>

        <a
          href={WA_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex rounded-full bg-emerald-600 px-8 py-4 text-xs font-bold uppercase tracking-widest transition hover:scale-105 hover:bg-emerald-500"
        >
          WhatsApp Us
        </a>
      </motion.section>
    </main>
  );
}
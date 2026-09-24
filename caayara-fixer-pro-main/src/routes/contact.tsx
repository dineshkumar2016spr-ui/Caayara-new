import { createFileRoute, Link } from "@tanstack/react-router";
import logo from "../assets/cayara logo without back ground.png";

const TEL_LINK = "tel:+918121777725";
const WA_LINK = "https://wa.me/918121777725";
const MAPS_LINK = "https://maps.google.com/?q=Jagdish+Market+Abids+Hyderabad";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0C0C0C] px-6 py-8 text-white md:px-10">
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

      <section className="mx-auto max-w-4xl py-24 text-center">
        <h1 className="text-5xl font-black uppercase sm:text-7xl">
          Contact Us
        </h1>

        <p className="mt-8 text-white/70">
          Need a mobile repair? Contact Caayara Mobiles today.
        </p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href={TEL_LINK}
            className="rounded-full bg-purple-600 px-8 py-4 font-bold transition hover:bg-purple-500"
          >
            Call Now
          </a>

          <a
            href={WA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-emerald-600 px-8 py-4 font-bold transition hover:bg-emerald-500"
          >
            WhatsApp
          </a>

          <a
            href={MAPS_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-white/10 px-8 py-4 font-bold transition hover:bg-white/20"
          >
            Open Maps
          </a>
        </div>
      </section>
    </main>
  );
}
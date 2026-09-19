import { createFileRoute } from "@tanstack/react-router";
import CaayaraSite from "@/components/caayara-site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Caayara Mobiles | Mobile Phone Repair in Jagdish Market, Hyderabad" },
      { name: "description", content: "Caayara Mobiles provides professional mobile phone repair and service in Jagdish Market, Hyderabad. Screen replacement, battery replacement, charging repair, software service, motherboard repair and more. Call or WhatsApp 8121777725." },
      { property: "og:title", content: "Caayara Mobiles -- Mobile Repair & Service" },
      { property: "og:description", content: "Professional mobile phone repair and service in Jagdish Market, Hyderabad." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "LocalBusiness", name: "Caayara Mobiles", telephone: "+918121777725", address: { "@type": "PostalAddress", addressLocality: "Hyderabad", addressRegion: "Telangana", addressCountry: "IN" } }) }],
  }),
});

// IMPORTANT: Replace this placeholder. See ./README.md for routing conventions.
function Index() {
  return <CaayaraSite />;
}

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Your Carpentry Yard",
  description:
    "General carpentry services: custom furniture, decks and outdoor structures, and framing/construction.",
  telephone: "+254700000000",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Your Town",
    addressCountry: "KE",
  },
  areaServed: {
    "@type": "City",
    name: "Your Town and surrounding areas",
  },
};

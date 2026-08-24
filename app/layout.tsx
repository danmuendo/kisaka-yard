import type { Metadata } from "next";
import { NavBar, Footer } from "@/components/NavFooter";
import { localBusinessSchema } from "@/lib/schema";
import "./globals.css";

export const metadata: Metadata = {
  title: "Your Carpentry Yard — Custom Furniture, Decks & Framing",
  description:
    "General carpentry: custom furniture, decks and outdoor structures, and framing/construction. Made to measure, built to last.",
  keywords: ["carpentry", "custom furniture", "decking", "framing", "construction", "carpenter"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

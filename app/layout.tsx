import type { Metadata } from "next";
import { NavBar, Footer } from "@/components/NavFooter";
import "./globals.css";

// Note: this sandbox can't reach fonts.googleapis.com, so font-family
// fallback stacks are used here instead of next/font/google. Once deployed
// to Vercel (which has open internet access), swap these for the real
// Fraunces / Inter / IBM Plex Mono via next/font/google — see README.

export const metadata: Metadata = {
  title: "Kisaka Yard — Custom Tables, Sofa Sets & Furniture",
  description:
    "Handbuilt tables, sofa sets, beds and storage furniture, made to order at our carpentry yard.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

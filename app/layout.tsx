import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Midlands Bedrooms and Kitchens — Bespoke fitted wardrobes and kitchens",
  description:
    "Bespoke fitted wardrobes and kitchens built in our Leicester workshop. Free measure-up, no flatpack, custom glass splashbacks.",
  openGraph: {
    title: "Midlands Bedrooms and Kitchens",
    description:
      "Bespoke fitted wardrobes and kitchens, built in our own workshop. Free consultation in Leicester.",
    type: "website",
    locale: "en_GB",
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Midlands Bedrooms and Kitchens",
  telephone: "+447312094979",
  areaServed: "Leicester and surrounding towns",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Leicester",
    addressCountry: "GB",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {children}
      </body>
    </html>
  );
}

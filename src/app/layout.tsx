import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { COMPANY } from "@/lib/data";
import SmoothScroll from "@/components/layout/SmoothScroll";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import Preloader from "@/components/layout/Preloader";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const siteUrl = "https://www.altura-construcciones.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${COMPANY.fullName} — Arquitectura y construcción de alto nivel`,
    template: `%s — ${COMPANY.name}`,
  },
  description:
    "Diseño, ingeniería y construcción de proyectos arquitectónicos de alto nivel. Construimos espacios que trascienden, combinando innovación, precisión y excelencia.",
  keywords: [
    "constructora premium",
    "arquitectura de lujo",
    "construcción comercial",
    "construcción residencial",
    "diseño arquitectónico",
    "remodelación",
    "supervisión de obra",
  ],
  authors: [{ name: COMPANY.fullName }],
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: siteUrl,
    siteName: COMPANY.fullName,
    title: `${COMPANY.fullName} — Construimos espacios que trascienden`,
    description:
      "Diseño, ingeniería y construcción de proyectos que combinan innovación, precisión y excelencia.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
        width: 1200,
        height: 630,
        alt: "Proyecto arquitectónico de ALTURA Construcciones",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${COMPANY.fullName} — Construimos espacios que trascienden`,
    description:
      "Diseño, ingeniería y construcción de proyectos arquitectónicos de alto nivel.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  name: COMPANY.fullName,
  image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  "@id": siteUrl,
  url: siteUrl,
  telephone: COMPANY.phone,
  email: COMPANY.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: COMPANY.address,
    addressCountry: "MX",
  },
  priceRange: "$$$",
  openingHours: "Mo-Fr 09:00-19:00",
  sameAs: [],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${fraunces.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Preloader />
        <SmoothScroll>
          {children}
          <WhatsAppButton />
        </SmoothScroll>
      </body>
    </html>
  );
}

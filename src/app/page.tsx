import type { Metadata } from "next";
import { JsonLd, LandingPage } from "./components";
import { brand, siteUrl } from "./site-data";

export const metadata: Metadata = {
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Fisioterapia Pélvica em Salvador | Fernanda Souza",
    description: brand.description,
    url: siteUrl,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <JsonLd />
      <LandingPage />
    </>
  );
}

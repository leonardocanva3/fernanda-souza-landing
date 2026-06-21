import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { brand, siteUrl } from "./site-data";

const ga4Id = process.env.NEXT_PUBLIC_GA4_ID;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Fisioterapia Pélvica em Salvador | Fernanda Souza",
    template: "%s",
  },
  description: brand.description,
  keywords: [
    "fisioterapia pélvica em Salvador",
    "fisioterapeuta pélvica Salvador",
    "incontinência urinária Salvador",
    "dor pélvica Salvador",
    "uroginecologia Salvador",
    "fisioterapia para gestantes Salvador",
  ],
  authors: [{ name: brand.name }],
  creator: brand.name,
  publisher: brand.name,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: `${brand.name} - ${brand.title}`,
    title: "Fisioterapia Pélvica em Salvador | Fernanda Souza",
    description: brand.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fisioterapia Pélvica em Salvador | Fernanda Souza",
    description: brand.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth">
      <body className="min-h-full overflow-x-hidden antialiased">
        {ga4Id ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                window.gtag = gtag;
                gtag('js', new Date());
                gtag('config', '${ga4Id}');
              `}
            </Script>
          </>
        ) : null}
        {children}
      </body>
    </html>
  );
}

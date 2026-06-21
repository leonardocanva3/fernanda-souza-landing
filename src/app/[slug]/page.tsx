import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { JsonLd, SeoServicePage } from "../components";
import { brand, seoPages, siteUrl } from "../site-data";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return seoPages.map((page) => ({ slug: page.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = seoPages.find((item) => item.slug === slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: `${siteUrl}/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `${siteUrl}/${page.slug}`,
      type: "website",
      locale: "pt_BR",
      siteName: `${brand.name} - ${brand.title}`,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.metaTitle,
      description: page.description,
      images: ["/og-image.jpg"],
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = seoPages.find((item) => item.slug === slug);

  if (!page) {
    notFound();
  }

  return (
    <>
      <JsonLd />
      <SeoServicePage page={page} />
    </>
  );
}

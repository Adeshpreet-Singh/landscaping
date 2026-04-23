import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terraverde | Portland's Premier Landscape Atelier",
  description:
    "Terraverde composes living environments — bespoke landscape design, master installation, artisan hardscaping, atmospheric lighting, and white-glove maintenance. Serving Greater Portland since 2005.",
  keywords: [
    "landscaping",
    "landscape design",
    "landscape architecture",
    "hardscaping",
    "patio installation",
    "outdoor lighting",
    "premium landscaping",
    "Portland landscaper",
    "outdoor living",
    "garden design",
  ],
  openGraph: {
    title: "Terraverde | Portland's Premier Landscape Atelier",
    description:
      "Bespoke landscape design, master installation, and artisan hardscaping. Composing living environments since 2005.",
    url: "https://terraverde.com",
    siteName: "Terraverde Landscape Atelier",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=630&q=85",
        width: 1200,
        height: 630,
        alt: "Lush garden pathway with native plantings by Terraverde",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terraverde | Portland's Premier Landscape Atelier",
    description:
      "Bespoke landscape design, master installation, and artisan hardscaping. Composing living environments since 2005.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=630&q=85",
    ],
  },
  robots: { index: true, follow: true },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: "Terraverde Landscape Atelier",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    "@id": "https://terraverde.com",
    url: "https://terraverde.com",
    telephone: "+150****1234",
    email: "hello@terraverde.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1234 Garden Way",
      addressLocality: "Portland",
      addressRegion: "OR",
      postalCode: "97201",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 45.5152,
      longitude: -122.6784,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "07:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "08:00",
        closes: "14:00",
      },
    ],
    priceRange: "$$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "247",
    },
    sameAs: [
      "https://www.facebook.com/terraverdelandscapes",
      "https://www.instagram.com/terraverdelandscapes",
      "https://www.pinterest.com/terraverdelandscapes",
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
          if (typeof window !== 'undefined') {
            const obs = new IntersectionObserver((entries) => {
              entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
            }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
            document.addEventListener('DOMContentLoaded', () => {
              document.querySelectorAll('.land-reveal').forEach(el => obs.observe(el));
            });
            const mo = new MutationObserver(() => {
              document.querySelectorAll('.land-reveal:not(.visible)').forEach(el => obs.observe(el));
            });
            mo.observe(document.body, { childList: true, subtree: true });
          }
        `,
          }}
        />
      </body>
    </html>
  );
}
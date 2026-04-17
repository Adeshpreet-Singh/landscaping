import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Verdant Landscapes | Expert Design, Installation & Maintenance",
  description:
    "Transform your outdoor space with Verdant Landscapes. Expert landscape design, installation, maintenance, hardscaping, lighting, and irrigation services. Free estimates. Serving the Greater Portland area since 2005.",
  keywords: [
    "landscaping",
    "landscape design",
    "lawn maintenance",
    "hardscaping",
    "patio installation",
    "outdoor lighting",
    "irrigation",
    "Portland landscaper",
  ],
  openGraph: {
    title: "Verdant Landscapes | Expert Design, Installation & Maintenance",
    description:
      "Transform your outdoor space. Expert design, installation, maintenance, hardscaping, and irrigation. Free estimates.",
    url: "https://verdantlandscapes.com",
    siteName: "Verdant Landscapes",
    images: [
      {
        url: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=630&q=80",
        width: 1200,
        height: 630,
        alt: "Beautiful landscaped garden by Verdant Landscapes",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Verdant Landscapes | Expert Design, Installation & Maintenance",
    description:
      "Transform your outdoor space. Expert design, installation, maintenance, hardscaping, and irrigation. Free estimates.",
    images: [
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1200&h=630&q=80",
    ],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LandscapingBusiness",
    name: "Verdant Landscapes",
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80",
    "@id": "https://verdantlandscapes.com",
    url: "https://verdantlandscapes.com",
    telephone: "+15035551234",
    email: "hello@verdantlandscapes.com",
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
    priceRange: "$$",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "247",
    },
    sameAs: [
      "https://www.facebook.com/verdantlandscapes",
      "https://www.instagram.com/verdantlandscapes",
      "https://www.pinterest.com/verdantlandscapes",
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

// lib/seo.ts

export const seoConfig = {
  baseUrl: "https://hexerve.in/",
  siteName: "GoHighLevel Automation Audit",

  title:
    "FREE GoHighLevel Automation Audit | Convert More Leads | SMS, Email & Call Automation",

  description:
    "Get your FREE GoHighLevel Automation Audit today. Increase booked appointments by 25–30% with SMS, Email & Call automation. For USA agencies, real estate, coaches & local service businesses.",

  keywords: [
    "GoHighLevel automation",
    "GHL setup",
    "SMS automation",
    "email automation",
    "call automation",
    "lead generation",
    "conversion optimization",
    "booking automation",
    "GoHighLevel tutorial",
    "automation agency",
    "marketing automation",
    "CRM automation",
  ],

  author: "GoHighLevel Automation Experts",
  twitterHandle: "@ghlautomation",
  ogImage: "/og-image.jpg",
  locale: "en_US",
};

/**
 * Generate Metadata for Next.js pages
 */

export const generateMetadata = (
  title?: string,
  description?: string
) => ({
  title: title ? `${title} | ${seoConfig.siteName}` : seoConfig.title,

  description: description || seoConfig.description,

  keywords: seoConfig.keywords,

  authors: [
    {
      name: seoConfig.author,
    },
  ],

  metadataBase: new URL(seoConfig.baseUrl),

  alternates: {
    canonical: seoConfig.baseUrl,
  },

  openGraph: {
    title: seoConfig.title,
    description: seoConfig.description,
    url: seoConfig.baseUrl,
    siteName: seoConfig.siteName,
    locale: seoConfig.locale,
    type: "website",
    images: [
      {
        url: seoConfig.ogImage,
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    creator: seoConfig.twitterHandle,
    images: [seoConfig.ogImage],
  },
});

/**
 * Local Business Schema
 */

export const schemaMarkup = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",

  name: "GoHighLevel Automation Experts",

  description: seoConfig.description,

  url: seoConfig.baseUrl,

  telephone: "+1-XXX-XXX-XXXX",

  areaServed: "US",

  priceRange: "Free Audit",

  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    ratingCount: "127",
  },

  address: {
    "@type": "PostalAddress",
    streetAddress: "Your Address",
    addressLocality: "Your City",
    addressRegion: "Your State",
    postalCode: "Your Zip",
    addressCountry: "US",
  },

  sameAs: [
    "https://facebook.com",
    "https://twitter.com",
    "https://linkedin.com",
  ],
};

/**
 * Breadcrumb Schema
 */

export const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: seoConfig.baseUrl,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Free Audit",
      item: `${seoConfig.baseUrl}/#audit`,
    },
  ],
};
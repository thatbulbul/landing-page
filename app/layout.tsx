import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'FREE GoHighLevel Automation Audit | Convert More Leads | SMS, Email & Call Automation',
  description: 'Get your FREE GoHighLevel Automation Audit today. Increase booked appointments by 25-30% with SMS, Email & Call automation. For USA agencies, real estate, coaches & local service businesses.',
  keywords: 'GoHighLevel automation, GHL setup, SMS automation, email automation, call automation, lead generation, conversion optimization',
  metadataBase: new URL('https://gohighlevel-audit.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://gohighlevel-audit.com',
    siteName: 'GoHighLevel Automation Audit',
    title: 'FREE GoHighLevel Automation Audit | Convert More Leads',
    description: 'Get your FREE GHL Automation Audit. Increase appointments by 25-30% with automation. For agencies, real estate & local businesses.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'GoHighLevel Automation Audit',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FREE GoHighLevel Automation Audit | Convert More Leads',
    description: 'Increase booked appointments with SMS, Email & Call automation. Get your FREE audit today!',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'GoHighLevel Automation Experts',
    description: 'Professional GoHighLevel automation setup and optimization for agencies and local businesses',
    url: 'https://gohighlevel-audit.com',
    telephone: '+1-XXX-XXX-XXXX',
    areaServed: 'US',
    priceRange: 'Free Audit',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      ratingCount: '127',
    },
    sameAs: [
      'https://facebook.com',
      'https://twitter.com',
      'https://linkedin.com',
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
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  )
}

import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://futuresolutions.aifreelancing.uz'),
  title: {
    default: "Future Solution | Premier CDL-A Truck Detailing & Logistics",
    template: "%s | Future Solution"
  },
  description: "Future Solution is a top-tier U.S. logistics and truck dispatching company. We provide CDL-A driver recruitment, truck dispatching, and comprehensive freight solutions.",
  keywords: [
    "future solution", "future solution logistics", "cdl-a drivers", "hire cdl-a drivers", 
    "truck dispatching services", "logistics company usa", "freight forwarding uzbekistan us", 
    "trucking recruitment", "cdl driver agency", "premier logistics solutions"
  ],
  authors: [{ name: "Future Solution Team" }],
  creator: "Future Solution",
  publisher: "Future Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Future Solution | Premier Logistics & Driver Recruitment",
    description: "Accelerate your fleet's growth. We specialize in CDL-A driver recruitment and professional truck dispatching services.",
    url: 'https://futuresolutions.aifreelancing.uz',
    siteName: 'Future Solution',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Future Solution | CDL-A Recruitment & Dispatching',
    description: 'Grow your freight business with our expert CDL-A driver recruitment and top-tier dispatching services.',
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Future Solution",
    "url": "https://futuresolutions.aifreelancing.uz",
    "logo": "https://futuresolutions.aifreelancing.uz/favicon.ico",
    "description": "Premier U.S. logistics company specializing in CDL-A driver recruitment and truck dispatching services.",
  };

  return (
    <html lang="en">
      <body>
        <Header />
        <main className="main-wrapper" style={{ overflowX: 'hidden', width: '100%', position: 'relative' }}>
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}

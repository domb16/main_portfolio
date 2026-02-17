import type { Metadata, Viewport } from "next";
import { Inter, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });

export const viewport: Viewport = {
  themeColor: '#0f172a',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://kyrenn.com'),
  title: {
    default: "Dom B. | FinTech Founder / API Specialist / Python specialist",
    template: "%s | Dom B. Portfolio"
  },
  description: "Senior Fintech Architect specializing in high-frequency trading systems, API infrastructure, and solvent wind-downs. 10+ years experience in Python, Rust, and Go.",
  keywords: ["Fintech", "Quant Trading", "System Architecture", "API Design", "Python", "Pandas", "NumPy"],
  authors: [{ name: "Dom B." }],
  creator: "Dom B",

  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://kyrenn.com",
    title: "Dom B. | Systems Architect",
    description: "Building the financial infrastructure of tomorrow. Specialized in low-latency APIs and risk engines.",
    siteName: "Dom B. Portfolio",
    images: [
      {
        url: "/android-chrome-192x192.png",
        width: 192,
        height: 192,
        alt: "Dom B. Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dom B. | Architect",
    description: "Specialized in APIs and Compliance Engineering.",
    creator: "@itsKyrenn_",
    images: ["/android-chrome-192x192.png"],
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Dom B.",
  "jobTitle": "Python Engineer | Architect",
  "url": "https://kyrenn.com",
  "sameAs": [
    "https://www.linkedin.com/in/dominik-ky",
    "https://github.com/domb16"
  ],
  "knowsAbout": [
    "Financial Technology",
    "API Development",
    "System Architecture",
    "Python",
    "Pandas",
    "NumPy"
  ],
  "worksFor": {
    "@type": "Organization",
    "name": "Independent Consultant"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${robotoMono.variable} font-sans antialiased bg-white`}>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
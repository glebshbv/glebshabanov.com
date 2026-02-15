import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Gleb Shabanov",
  "url": "https://glebshabanov.com",
  "jobTitle": "Tech Entrepreneur & Software Engineer",
  "worksFor": {
    "@type": "Organization",
    "name": "Independent"
  },
  "knowsAbout": ["Go", "React", "Ruby on Rails", "Python", "Next.JS", "Software Development", "Entrepreneurship"],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Singapore",
    "addressCountry": "SG"
  },
  "sameAs": [
    "https://github.com/glebshbv",
    "https://sg.linkedin.com/in/glebshabanov",
    "https://x.com/itisgleb",
    "https://www.instagram.com/gleeeeb/"
  ]
};


export const metadata: Metadata = {
  title: {
    default: "Gleb Shabanov - Tech Entrepreneur & Software Engineer",
    template: "%s | Gleb Shabanov"
  },
  description: "Tech entrepreneur based in Singapore specializing in Go, React, Ruby on Rails, Python, and Next.JS. Building products that help people live better lives. Connect for opportunities in software development and entrepreneurship.",
  keywords: ["Gleb Shabanov", "tech entrepreneur", "software engineer", "Go engineer", "React engineer", "Ruby on Rails engineer", "Python engineer", "Next.JS engineer", "Singapore", "startup", "entrepreneurship"],
  authors: [{ name: "Gleb Shabanov" }],
  creator: "Gleb Shabanov",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glebshabanov.com",
    title: "Gleb Shabanov - Tech Entrepreneur & Software Engineer",
    description: "Tech entrepreneur based in Singapore specializing in Go, React, Ruby on Rails, Python, and Next.JS. Building products that help people live better lives.",
    siteName: "Gleb Shabanov",
  },
  twitter: {
    card: "summary_large_image",
    title: "Gleb Shabanov - Tech Entrepreneur & Software Engineer",
    description: "Tech entrepreneur based in Singapore specializing in Go, React, Ruby on Rails, Python, and Next.JS. Building products that help people live better lives.",
    creator: "@itisgleb",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification-token",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${jetbrainsMono.variable} ${jetbrainsMono.className} antialiased font-sans`}>
        {children}
      </body>
    </html>
  );
}

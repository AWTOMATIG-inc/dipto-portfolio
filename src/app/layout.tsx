import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const siteTitle = "Dipto Communication — Creative Communication Ecosystem";
const siteDescription =
  "Dipto Communication is a creative communication ecosystem blending digital innovation, AI, strategy and storytelling to power sustainable growth.";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  authors: [{ name: "Dipto Communication" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: siteTitle,
    description:
      "A digital ecosystem for business, creativity, innovation & social impact. Connect. Create. Empower.",
    type: "website",
    siteName: "Dipto Communication",
  },
  twitter: {
    card: "summary_large_image",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Dipto Communication",
  url: "https://diptocommunication.com",
  email: "hello@diptocommunication.com",
  telephone: "+880 1234 567890",
  description:
    "Creative Communication Ecosystem blending digital innovation, creativity, AI, strategic growth and community impact.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}

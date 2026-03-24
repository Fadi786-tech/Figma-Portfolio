import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fahad Sohail - Software Engineer",
  description: "A self-taught Software Engineer at DevGate. Creating meaningful and delightful digital products that balance user needs and business goals. 1+ years of industry experience.",
  keywords: [
    "Fahad Sohail",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Web Designer",
    "DevGate Engineer",
    "Portfolio",
  ],
  authors: [{ name: "Fahad Sohail" }],
  creator: "Fahad Sohail",
  publisher: "Fahad Sohail",
  // openGraph: {
  //   type: "website",
  //   locale: "en_US",
  //   url: "https://",
  //   title: "Fahad Sohail - Software Engineer & UI/UX Designer",
  //   description: "A self-taught UI/UX designer and Software Engineer at DevGate. Creating meaningful and delightful digital products.",
  //   siteName: "Fahad Sohail Portfolio",
  // },
  twitter: {
    card: "summary_large_image",
    title: "Fahad Sohail - Software Engineer",
    description: "A self-taught Software Engineer at DevGate.",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://.com" />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}

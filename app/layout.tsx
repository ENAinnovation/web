import type { Metadata } from "next";
import { Inter, Work_Sans, IBM_Plex_Serif } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-work-sans",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  style: ["italic"],
  weight: ["300", "400", "500"],
  variable: "--font-ibm-plex-serif",
});

export const metadata: Metadata = {
  title: "ENA Innovation - Coming Soon",
  description: "AI-powered enterprise software solutions for science and healthcare.",
  keywords: "healthcare software, academic software, artificial intelligence, enterprise solutions, ENA Innovation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${workSans.variable} ${ibmPlexSerif.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}


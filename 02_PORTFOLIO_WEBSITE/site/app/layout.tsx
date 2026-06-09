import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Inter, Caveat } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Body / UI text
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

// Large condensed display — hero name, strong labels
const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Handwritten side note
const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mohamed Yehia — Growth Marketing, E-commerce & AI Transformation Lead",
  description:
    "15+ years turning marketing and e-commerce into measurable revenue across UAE, KSA, and Egypt.",
  metadataBase: new URL("https://yehia.digital"),
  openGraph: {
    title: "Mohamed Yehia — Growth Marketing, E-commerce & AI Transformation Lead",
    description:
      "15+ years turning marketing and e-commerce into measurable revenue across UAE, KSA, and Egypt.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${bebasNeue.variable} ${caveat.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}

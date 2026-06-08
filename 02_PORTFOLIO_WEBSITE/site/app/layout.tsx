import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}

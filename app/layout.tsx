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
  metadataBase: new URL("https://huntersgroup.agency"),
  title: {
    default: "Hunters Group | E-Commerce, Import & Export Solutions",
    template: "%s | Hunters Group",
  },
  description:
    "Hunters Group provides business-focused e-commerce, import and export, warehousing, logistics, and sourcing solutions.",
  applicationName: "Hunters Group",
  openGraph: {
    type: "website",
    siteName: "Hunters Group",
    title: "Hunters Group | E-Commerce, Import & Export Solutions",
    description:
      "Explore e-commerce, international trade, warehousing, logistics and sourcing solutions with Hunters Group.",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hunters Group | E-Commerce, Import & Export Solutions",
    description:
      "Explore e-commerce, international trade, warehousing, logistics and sourcing solutions with Hunters Group.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/hunters-logo.png",
  },
};


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

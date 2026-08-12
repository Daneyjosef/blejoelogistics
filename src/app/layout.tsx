import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { MobileTabBar } from "@/components/layout/MobileTabBar";
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
  title: {
    default: "Blejoe Logistics — Logistics & Heavy Equipment Hire in Lagos",
    template: "%s | Blejoe Logistics",
  },
  description:
    "Warehousing, transportation, and supply chain logistics — plus forklift, crane, HIAB, and heavy machinery hire, all from one trusted partner in Lagos.",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Blejoe Logistics",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#ffffff",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <MobileTabBar />
      </body>
    </html>
  );
}

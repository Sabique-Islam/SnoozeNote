import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "./globals.css";
import LenisProvider from "@/components/providers/LenisScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SnoozeNote",
  description: "Catch your dreams before they fade",
  manifest: "/manifest.json",
  icons: {
    icon: "/assets/icon.svg",
    apple: "/assets/icon-192.png"
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "SnoozeNote"
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: "cover"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider signInUrl="/sign-in" signUpUrl="/sign-up">
      <html lang="en">
        <head>
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="SnoozeNote" />
          <meta name="theme-color" content="#000000" />
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/assets/icon-192.png" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <LenisProvider>
            {children}
          </LenisProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}

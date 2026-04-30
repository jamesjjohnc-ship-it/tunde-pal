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
  title: "D&H Partners LLC - Financial Representatives",
  description: "Join our elite team of Financial Representatives. Facilitate financial transactions and earn competitive compensation.",
  openGraph: {
    title: "D&H Partners LLC - Financial Representatives",
    description: "Join our elite team of Financial Representatives. Facilitate financial transactions and earn competitive compensation.",
    type: "website",
    siteName: "D&H Partners LLC",
  },
  twitter: {
    card: "summary_large_image",
    title: "D&H Partners LLC - Financial Representatives",
    description: "Join our elite team of Financial Representatives.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GLedger.ai — AI-Powered Accounting Made Simple",
  description:
    "Modern accounting platform powered by AI. No accounting degree required. Automate bookkeeping, generate reports, and manage your finances with confidence.",
  keywords: [
    "accounting",
    "AI",
    "bookkeeping",
    "ERP",
    "financial management",
    "automation",
  ],
  openGraph: {
    title: "GLedger.ai — AI-Powered Accounting Made Simple",
    description:
      "Modern accounting platform powered by AI. No accounting degree required.",
    url: "https://www.gledger.ai",
    siteName: "GLedger.ai",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

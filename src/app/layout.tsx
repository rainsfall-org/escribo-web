import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Escribo AI - Helping every Writer bring ideas to life",
  description: "Escribo AI turns that chaos into clarity, giving you the tools to organize your story, stay motivated, and keep moving forward.",
};

export const viewport = {
  width: 'device-width',
  initialScale: 0.4,
  minimumScale: 0.3,
  maximumScale: 2.0,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "shashwat dubey -- portfolio",
  description:
    "product designer and engineer at physera. building thoughtful things on the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className="antialiased tracking-snug text-[13px] leading-relaxed flex items-center justify-center min-h-screen p-6">
        {children}
      </body>
    </html>
  );
}

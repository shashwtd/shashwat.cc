import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Shashwat Dubey",
  description:
    "Product designer and engineer at Physera. Building thoughtful things on the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className="antialiased text-[13px] leading-relaxed flex items-center justify-center min-h-screen p-6">
        {children}
      </body>
    </html>
  );
}

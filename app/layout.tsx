import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shashwat Dubey",
  description: "Product designer and engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

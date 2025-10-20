import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Navbar1 from "@/components/navbar1";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // mencegah flash font saat sedang loading
});

export const metadata: Metadata = {
  title: "Project ADHITYARP",
  description: "Semua project dan pengalaman saya",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Navbar1 />
        {children}
      </body>
    </html>
  );
}

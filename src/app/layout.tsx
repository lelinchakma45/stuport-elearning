import type { Metadata } from "next";
import { Inter } from "next/font/google";
import SiteChrome from "@/components/common/SiteChrome";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Study Mind | Courses",
  description: "Course dashboard recreation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F9F9F9] text-[#181826]">
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}

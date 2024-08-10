import type { Metadata } from "next";
import { Pixelify_Sans} from "next/font/google";
import "./globals.css";
import React from "react";

const font = Pixelify_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Filip Kasperski - Portfolio",
  description: "This is my portfolio website. I'm a junior programmer with skills in web development. I'm looking for a job.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <body className={`${font.className} flex flex-col text-emerald-500 min-h-screen bg-gradient-radial from-emerald-950 to-[#010d0a]`}>
      {children}
      </body>
    </html>
  );
}

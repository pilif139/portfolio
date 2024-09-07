import type { Metadata } from "next";
import {  Raleway as googleFont} from "next/font/google";
import "./globals.css";
import React from "react";
import BurgerMenu from "@/components/BurgerMenu";

const font = googleFont( {subsets: ["latin"]});

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
    <html lang="en">
      <body className={`${font.className} flex flex-col items-center font-bold bg-neutral-900 text-white min-h-screen`}>
      <BurgerMenu />
      {children}
      </body>
    </html>
  );
}

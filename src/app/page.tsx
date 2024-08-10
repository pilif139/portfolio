"use client";


import AnimatedText from "@/utils/animatedText";
import React from "react";
import AboutMe from "@/components/AboutMe";

export default function Home() {

  return (
    <main className="flex flex-col text-center justify-center items-center min-h-screen gap-5 text-3xl">
      <AnimatedText className="text-4xl">
        Welcome to my portfolio.
      </AnimatedText>
      <AboutMe/>
    </main>
  );
}

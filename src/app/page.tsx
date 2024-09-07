"use client";

import React from "react";
import AboutMe from "@/components/AboutMe";
import {useState} from "react";
import Animated from "@/components/Animated";
import {motion} from "framer-motion";

export default function Home() {
  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
    <main className=" flex flex-col items-center py-8 gap-5 min-h-screen">
      <Animated className="text-4xl">Welcome to my portfolio!</Animated>
      <motion.button
          onClick={()=>setShowAboutMe(true)}
          className="px-6 py-4 bg-red-500 text-xl rounded-xl"
          whileTap={{scale: 0.9, borderRadius: "15%"}}
      > Who I Am?</motion.button>
      {showAboutMe && <AboutMe />}
    </main>
  );
}

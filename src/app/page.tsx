'use client';

import {motion} from "framer-motion";
import Description from "@/app/description";
import Technologies from "@/app/Technologies";

export default function Home() {

  return (
    <main className="flex flex-col items-center p-12 gap-10 text-lg">
      <motion.h1
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1 , scale: 1}}
        className="text-4xl font-bold">Filip Kasperski's Portfolio</motion.h1>
      <Description/>
      <Technologies/>
    </main>
  );
}

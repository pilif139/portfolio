import React from "react";
import AboutMe from "@/components/AboutMe";
import Animated from "@/components/Animated";
import {popUp} from "@/utils/animations";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Tools from "@/components/Tools";

export default function Home() {

  return (
      <main className=" flex flex-col items-center py-8 gap-4 min-h-screen w-full">
        <Animated className="text-5xl" animation={popUp}>Welcome to my portfolio!</Animated>
        <AboutMe/>
        <Skills/>
        <Tools/>
        <Projects/>
      </main>
  );
}

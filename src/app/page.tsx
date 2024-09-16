import React from "react";
import AboutMe from "@/app/AboutMe";
import Animated from "@/components/Animated";
import {popUp} from "@/utils/animations";
import Projects from "@/app/Projects";
import Skills from "@/app/Skills";
import Tools from "@/app/Tools";

export default function Home() {

  return (
      <main className=" flex flex-col items-center py-8 gap-4 min-h-screen w-full">
        <div className="md:w-[60vw] lg:w-[50vw] 2xl:w-[40vw] w-full">
          <Animated className="text-5xl mt-24 md:mt-0 text-center" animation={popUp}>Welcome to my portfolio!</Animated>
          <AboutMe/>
          <Skills/>
          <Tools/>
        </div>
        <Projects/>
      </main>
  );
}

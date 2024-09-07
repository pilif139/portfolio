import Animated from "@/components/Animated";
import {popUp} from "@/utils/animations";
import React from "react";

export default function AboutMe(){
  return (
      <div className="p-4">
        <Animated animation={{...popUp, duration: 0.3}}>
          <h1 className="text-4xl">Filip Kasperski</h1>
        </Animated>
        <Animated animation={popUp} className="w-[35vw] mt-3">
          <p className="text-lg">I am a 17-year-old programmer based in <span className="text-red-400">Poznań</span>, currently studying programming at <span className="text-red-400">Zespół Szkół Komunikacji im. Hipolita Cegielskiego</span> in Poznań. I am actively seeking an internship opportunity to further develop my skills and gain hands-on experience.</p>
        </Animated>
      </div>
  )
}
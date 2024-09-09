"use client";

import Animated from "@/components/Animated";
import {popUp} from "@/utils/animations";
import React, {useState} from "react";
import {motion} from "framer-motion";

export default function AboutMe(){
  const [showAboutMe, setShowAboutMe] = useState(false);

  return (
      <div className="w-full flex flex-col items-center p-5">
        <motion.button
            onClick={() => setShowAboutMe(true)}
            className="px-6 py-4 bg-red-500 text-xl rounded-xl"
            whileHover={{scale: 1.1}}
            {...popUp}
            whileTap={{scale: 0.9, borderRadius: "15%"}}
        > Who I am?
        </motion.button>
        {showAboutMe &&
            <div className="p-4">
                <Animated animation={{...popUp, duration: 0.3}}>
                    <h1 className="text-4xl">Filip Kasperski</h1>
                </Animated>
                <Animated animation={popUp} className="w-[35vw] mt-3">
                    <p className="text-lg">I am a 17-year-old programmer based in <span
                        className="text-red-400">Poznań</span>,
                        currently studying programming at <span className="text-red-400">Zespół Szkół Komunikacji im. Hipolita Cegielskiego</span> in
                        Poznań. I am actively seeking an internship opportunity to further develop my skills and gain
                        hands-on experience.</p>
                </Animated>
            </div>
        }
      </div>
  )
}
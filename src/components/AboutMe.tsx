'use client';

import AnimatedText from "@/utils/animatedText";
import {motion} from "framer-motion";
import {useState} from "react";

export default function AboutMe(){
  const [aboutMeVisible, setAboutMeVisible] = useState(false);

  return (
      <div className="w-[30%]">
        {!aboutMeVisible &&
            <motion.button
                initial={{opacity: 0, scale: 0.6, y: 20}}
                animate={{opacity: 1, scale: 1, y: 0}}
                transition={{duration: 0.8}}
                className="bg-green-400 text-green-800 p-2 px-6 rounded-sm hover:bg-green-500 hover:text-green-950"
                onClick={() => setAboutMeVisible(true)}>
                About Me!
            </motion.button>
        }
        {aboutMeVisible &&
            <AnimatedText>
                I am a software engineer with a passion for web development.
            </AnimatedText>
        }
      </div>
  )
}
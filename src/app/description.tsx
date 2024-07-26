"use client";

import {motion} from "framer-motion";
import {useState} from "react";

export default function Description(){
  const [isClicked, setIsClicked] = useState(false);

  return (
      <div className="flex flex-col items-center gap-8 w-[30vw] text-center">
        <motion.button
            className="bg-gray-200 hover:bg-gray-300 p-5 px-12 text-black rounded-2xl font-bold"
            initial={{opacity: 0, scale: 0.5}}
            animate={{opacity: 1, scale: 1}}
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.9}}
            onClick={() => setIsClicked(true)}
        >
          Who am I?
        </motion.button>
        {
          isClicked && (
                <motion.p
                    initial={{opacity: 0, scale: 0.5}}
                    animate={{opacity: 1, scale: 1}}
                    className="text-xl"
                >
                    I'm a <span className="text-blue-400 font-bold">junior front-end developer</span>, who's passionate about web development. I'm currenlty going to school and working on my own projects. I'm looking for a job to gain more experience and learn new things.
                </motion.p>
            )
        }
      </div>
  )
}
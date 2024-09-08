"use client";

import {motion} from "framer-motion";
import React, {useEffect, useState} from "react";

type Props = {
    children: React.ReactNode;
    duration? : number;
}

export default function FadeOutOverlay({children, duration = 0.9} : Props){
    const [endAnimation, setEndAnimation] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setEndAnimation(true);
      }, duration*1000);
      return () => clearTimeout(timer);
    }, [duration]);

    if(endAnimation){
      return null;
    }

    return (
          <motion.div
              initial={{opacity: 1}}
              animate={{opacity: 0}}
              transition={{duration: duration}}
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
          >
            {children}
          </motion.div>
    )
}
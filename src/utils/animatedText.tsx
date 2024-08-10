'use client';

import {motion} from "framer-motion";
import React from "react";

type Props = {
    children: React.ReactNode;
    className?: string;
}

export default function AnimatedText({children, className} : Props) {
  return (
      <div className={className}>
        {
            typeof children === "string" ?
            children.split("").map((char, index) => (
                <motion.span
                    key={index}
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{duration: 0.05, delay: index * 0.1}}
                >
                    {char}
                </motion.span>
            )) : children
        }
      </div>
  )
}
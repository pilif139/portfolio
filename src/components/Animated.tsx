"use client"

import React  from "react";
import { motion } from "framer-motion";

type Props = {
  children : React.ReactNode;
  className? : string;
  animation : {
    initial : Record<string, any>;
    animate : Record<string, any>;
    transition? : Record<string, any>;
    duration? : number;
  };
  onHoverStart? : () => void;
  onHoverEnd? : () => void;
}

export default function Animated({children, className, animation, onHoverEnd, onHoverStart}: Props){
    return (
        <motion.div
          onHoverStart={onHoverStart}
          onHoverEnd={onHoverEnd}
          className={className}
          {...animation}
        >
            {children}
        </motion.div>
    );
}
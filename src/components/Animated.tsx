"use client"

import React  from "react";
import { motion } from "framer-motion";

type Props = {
  children : React.ReactNode;
  className? : string;
  animation? : {
    initial : Record<string, any>;
    animate : Record<string, any>;
    transition? : Record<string, any>;
    duration? : number;
  };
}

export default function Animated({children, className, animation}: Props){
    return (
        <motion.div
          className={className}
          {...animation}
        >
            {children}
        </motion.div>
    );
}
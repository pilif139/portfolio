"use client";

import {AnimatePresence, motion} from "framer-motion";
import React, {useState} from "react";
import exp from "node:constants";

type Props = {
  name: string;
  children: React.ReactNode;
}

export default function ExpandedMenu({name, children}: Props){
  const [expandMenu, setExpandMenu] = useState(false);

  return (
    <>
      <button className="cursor-pointer flex hover:text-gray-400 transition-colors" onClick={()=>setExpandMenu(!expandMenu)}>{name}</button>
      <AnimatePresence>
      {expandMenu &&
        <motion.div initial={{opacity: 0, x: "-10%"}}
                    animate={{opacity: 1,x: 0}}
                    exit={{opacity: 0,x: "-10%"}}
                    transition={{duration: 0.2, type: "spring", stiffness: 250, damping: 25}}>
          {children}
        </motion.div>
            }
      </AnimatePresence>
    </>
  )

}
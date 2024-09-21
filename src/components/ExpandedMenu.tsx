"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";

type Props = {
  name: string;
  children: React.ReactNode[];
};

export default function ExpandedMenu({ name, children }: Props) {
  const [expandMenu, setExpandMenu] = useState(false);

  return (
    <>
      <button
        className="cursor-pointer flex hover:text-gray-400 transition-colors"
        onClick={() => setExpandMenu(!expandMenu)}
      >
        {name}
      </button>

      <ul
        className={
          "flex flex-col gap-2 mx-8 text-2xl font-bold text-gray-300 list-disc"
        }
      >
        <AnimatePresence>
          {expandMenu &&
            children.map((child, index) => (
              <motion.div
                key={index}
                className="flex flex-col gap-2"
                initial={{ opacity: 0, x: "-10%" }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: "-10%" }}
                transition={{
                  duration: 0.2,
                  type: "spring",
                  stiffness: 250,
                  damping: 25,
                  delay: index * 0.1,
                }}
              >
                {child}
              </motion.div>
            ))}
        </AnimatePresence>
      </ul>
    </>
  );
}

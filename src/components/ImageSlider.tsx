"use client";

import { motion } from "framer-motion";
import {StaticImageData} from "next/image";
import React, {useState} from "react";
import {AnimatePresence} from "framer-motion";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {popUp} from "@/utils/animations";

type Props = {
  images: StaticImageData[];
}

export default function ImageSlider({images}: Props) {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    if(page + newDirection < 0 || page + newDirection >= images.length) return;
    setPage([page + newDirection, newDirection]);
  };

  return (
      <div className="w-[45vw] h-[55vh] flex items-center mx-5">
        <button className="scale-150 bg-neutral-950 p-3 rounded-xl cursor-pointer focus:outline-none" onClick={() => paginate(-1)}>
          <FaChevronLeft />
        </button>
        <AnimatePresence initial={false} custom={direction}>
          <div
              className="w-full h-full flex items-center justify-center bg-neutral-900 rounded-xl shadow-xl shadow-black overflow-hidden">
            <motion.img
                className="max-w-full max-h-full object-contain"
                key={page}
                src={images[page].src}
                initial={{opacity: 0, scale: 0.5}}
                animate={{opacity: 1, scale: 1}}
                transition={{duration: 0.35}}
            />
          </div>
        </AnimatePresence>
        <button className="scale-150 bg-neutral-950 p-3 rounded-xl cursor-pointer focus:outline-none"
                onClick={() => paginate(1)}>
          <FaChevronRight/>
        </button>

      </div>
  );
}
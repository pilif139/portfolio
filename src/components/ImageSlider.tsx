"use client";

import { motion } from "framer-motion";
import {StaticImageData} from "next/image";
import React, {Dispatch, SetStateAction, useState} from "react";
import {AnimatePresence} from "framer-motion";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {popUp} from "@/utils/animations";
import Modal from "@/components/Modal";
import {IoMdClose} from "react-icons/io";

type Props = {
  images: StaticImageData[];
}

export default function ImageSliderWithModal({images}: Props) {
  const [[page, direction], setPage] = useState([0, 0]);
  const paginate = (newDirection: number) => {
    if (page + newDirection < 0 || page + newDirection >= images.length) return;
    setPage([page + newDirection, newDirection]);
  };
  const [showModal, setShowModal] = useState(false);

  return (
      <>
        <Modal isOpen={showModal} onClose={()=>setShowModal(false)}>
          <motion.div className={"w-[80vw] h-[80vh] flex items-center mx-5"}
                      initial={{opacity: 0, scale: 0.5}}
                      animate={{opacity: 1, scale: 1}}
                      exit={{opacity: 0, scale: 0.5}}
          >
            <button
                className="scale-150 bg-neutral-900 hover:bg-neutral-950 transition-colors rounded-xl p-3 relative z-10 left-16 bg-opacity-50 cursor-pointer focus:outline-none"
                onClick={() => paginate(-1)}>
              <FaChevronLeft/>
            </button>
            <AnimatePresence initial={false} custom={direction}>
              <div
                  className="w-full h-full flex items-center justify-center bg-neutral-950 rounded-xl shadow-xl shadow-black overflow-hidden cursor-pointer">
                <motion.img
                    className="max-w-full max-h-full object-contain rounded-xl"
                    key={page}
                    src={images[page].src}
                    initial={{opacity: 0,x: 500 * direction, scale: 0.5}}
                    animate={{opacity: 1,x: 0, scale: 1}}
                    exit={{opacity: 0, scale: 0.5}}
                    transition={{duration: 0.5}}
                />
              </div>
            </AnimatePresence>
            <button
                className="scale-150 bg-neutral-900 hover:bg-neutral-950 transition-colors rounded-xl p-3 relative z-10 right-16 bg-opacity-50 cursor-pointer focus:outline-none"
                onClick={() => paginate(1)}>
              <FaChevronRight/>
            </button>

          </motion.div>
        </Modal>

        <div className={"w-[50vw] h-[45vh] flex items-center mx-10"}
        >
          <button
              className="scale-150 bg-neutral-950 hover:bg-neutral-800 transition-colors rounded-xl p-3 cursor-pointer focus:outline-none"
              onClick={() => paginate(-1)}>
            <FaChevronLeft/>
          </button>
          <AnimatePresence initial={false} custom={direction}>
            <div
                onClick={()=>setShowModal(true)}
                className="w-full h-full flex items-center justify-center bg-neutral-950 rounded-xl shadow-xl shadow-black overflow-hidden cursor-pointer">
              <motion.img
                  className="h-fit w-fit rounded-xl"
                  key={page}
                  src={images[page].src}
                  initial={{opacity: 0, scale: 0.5}}
                  animate={{opacity: 1, scale: 1}}
                  transition={{duration: 0.35}}
              />
            </div>
          </AnimatePresence>
          <button
              className="scale-150 bg-neutral-950 hover:bg-neutral-800 transition-colors rounded-xl p-3 cursor-pointer focus:outline-none"
              onClick={() => paginate(1)}>
            <FaChevronRight/>
          </button>

        </div>
      </>
  );
}
"use client";

import { motion } from "framer-motion";
import {StaticImageData} from "next/image";
import React from "react";
import {AnimatePresence} from "framer-motion";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import {IoMdClose} from "react-icons/io";
import {useModal} from "@/app/context/ModalContext";
import SliderContextProvider, {
  useSlider
} from "@/app/context/ImageSliderContext";

type Props = {
  images: StaticImageData[];
}

export default function ImageSlider({images}: Props) {
  const {setComponent, setIsOpen, setClassName} = useModal();

  const handleModal = () =>{
    setComponent(
        <ModalSlider images={images}/>
    );
    setClassName("rounded-3xl");
    setIsOpen(true);
  }

  const { page, direction, paginate } = useSlider();

  const handlePagination = (newDirection: number) =>{
    if(page + newDirection >= images.length || page + newDirection < 0){
      return;
    }
    paginate(newDirection);
  }

  return (
      <>
        <div className={"md:w-[50vw] md:h-[45vh] w-screen h-screen flex items-center mx-10"}
        >
          <button
              className="scale-150 bg-neutral-950 hover:bg-neutral-800 transition-colors rounded-xl p-3 cursor-pointer focus:outline-none"
              onClick={() => handlePagination(-1)}>
            <FaChevronLeft/>
          </button>
          <AnimatePresence initial={false} custom={direction}>
            <div
                onClick={handleModal}
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
              onClick={() => handlePagination(1)}>
            <FaChevronRight/>
          </button>

        </div>
      </>
  );
}

type ModalProps = {
    images: StaticImageData[];
}

const ModalSlider = ({images} : ModalProps) =>{
  const {setIsOpen, setComponent} = useModal();

  const { page, direction, paginate } = useSlider();

  const handlePagination = (newDirection: number) =>{
    if(page + newDirection >= images.length || page + newDirection < 0){
      return;
    }
    paginate(newDirection);
  }

  return (
      <motion.div className={"w-[80vw] h-[80vh] flex items-center mx-5 rounded-3xl"}
                  initial={{opacity: 0, scale: 0.5}}
                  animate={{opacity: 1, scale: 1}}
                  exit={{opacity: 0, scale: 0.5}}
      >
        <button onClick={() => setIsOpen(false)}
                className="bg-neutral-900 hover:bg-neutral-800 transition-colors p-4 rounded-xl z-10 absolute top-[-2rem] right-[2rem]">
          <IoMdClose size={30}/>
        </button>
        <button
            className="scale-150 bg-neutral-900 hover:bg-neutral-950 transition-colors rounded-xl p-3 relative z-10 left-16 bg-opacity-50 cursor-pointer focus:outline-none"
            onClick={() => handlePagination(-1)}>
          <FaChevronLeft/>
        </button>
        <AnimatePresence initial={false} custom={direction}>
          <div
              className="w-full h-full flex items-center justify-center bg-neutral-950 rounded-xl shadow-xl shadow-black overflow-hidden cursor-pointer">
            <motion.img
                className="max-w-full max-h-full object-contain rounded-xl"
                key={page}
                src={images[page].src}
                initial={{opacity: 0, x: 500 * direction, scale: 0.5}}
                animate={{opacity: 1, x: 0, scale: 1}}
                exit={{opacity: 0, scale: 0.5}}
                transition={{duration: 0.5}}
            />
          </div>
        </AnimatePresence>
        <button
            className="scale-150 bg-neutral-900 hover:bg-neutral-950 transition-colors rounded-xl p-3 relative z-10 right-16 bg-opacity-50 cursor-pointer focus:outline-none"
            onClick={() => handlePagination(1)}>
          <FaChevronRight/>
        </button>

      </motion.div>
  )
}
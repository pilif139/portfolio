"use client";

import React from "react";
import {useState} from "react";
import {AnimatePresence, motion} from "framer-motion";
import Animated from "@/components/Animated";
import {slideIn} from "@/utils/animations";
import Link from 'next/link'

export default function BurgerMenu(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
          <div
              className="flex flex-col items-center justify-center gap-2 absolute top-0 right-0 m-5 scale-125"
              onClick={()=>setIsOpen(!isOpen)}
          >
            <div className="w-10 h-1 bg-white rounded-2xl"></div>
            <div className="w-10 h-1 bg-white rounded-2xl"></div>
            <div className="w-10 h-1 bg-white rounded-2xl"></div>
          </div>
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ul className="flex flex-col text-3xl gap-3 w-[18vw]">
              <Link href={"/about"}>About Me</Link>
              <Link href={"/projects"}>Projects</Link>
            </ul>
          </Modal>
        </>
    )
}

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

function Modal({ isOpen, onClose, children }: ModalProps) {

  return (
      <AnimatePresence>
      {isOpen &&
      <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-80" onClick={onClose}></div>

          <motion.div
              initial={{x: "100%"}}
              animate={{x: 0}}
              exit={{x: "100%"}}
              transition={{duration: 0.5, type: "spring", stiffness: 200, damping: 25}}
              className="absolute right-0 top-0 p-6 bg-neutral-800 h-screen min-w-[10vw]">
            {children}
          </motion.div>
      </div>
      }
      </AnimatePresence>
  );
}
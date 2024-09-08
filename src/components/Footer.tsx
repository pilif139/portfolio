"use client";

import {motion} from "framer-motion";
import {FaGithub} from "react-icons/fa";
import {fadeIn} from "@/utils/animations";
import React from "react";
import Animated from "@/components/Animated";

export default function Footer(){
    return (
        <footer className="w-full h-24 bg-neutral-800 flex items-center justify-center">
          <Animated animation={fadeIn} className="text-white text-xl">Made by <a href="http://github.com/pilif139" className="underline text-blue-200 hover:text-blue-400 transition-colors cursor-pointer" target="_blank">pilif139</a></Animated>
          <motion.div
              initial={{opacity: 0}}
              animate={{opacity: 1}}
              whileHover={{scale: 1.3}}
          >
            <a href="https://github.com/pilif139" target="_blank">
            <FaGithub size={40} className="text-white mx-5 cursor-pointer hover:text-gray-300 transition-colors"/>
            </a>
          </motion.div>
        </footer>
    )
}
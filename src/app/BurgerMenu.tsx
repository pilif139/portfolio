"use client";

import React from "react";
import {useState} from "react";
import { motion} from "framer-motion";
import Modal from "@/components/Modal";
import Link from 'next/link'
import {popUp} from "@/utils/animations";
import ExpandedMenu from "@/components/ExpandedMenu";
import {projects} from "@/assets/projects";

export default function BurgerMenu(){
    const [isOpen, setIsOpen] = useState(false);

    const routes = [
        {name: "Home", path: "/"},
        {name: "About Me", path: "/about"},
    ]

    return (
        <>
          {/*background of the modal*/}
          <motion.div
              className="flex flex-col items-center justify-center gap-2 absolute top-0 right-0 m-5 scale-125 cursor-pointer [&>*]:hover:bg-gray-300 transition-colors"
              onClick={()=>setIsOpen(!isOpen)}
              whileHover={{scale: 1.2}}
              {...popUp}
          >
            <div className="w-10 h-1 bg-white rounded-2xl"></div>
            <div className="w-10 h-1 bg-white rounded-2xl"></div>
            <div className="w-10 h-1 bg-white rounded-2xl"></div>
          </motion.div>
          {/*menu*/}
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="right-0 top-0">
            <motion.div
                initial={{x: "100%"}}
                animate={{x: 0}}
                exit={{x: "100%"}}
                transition={{duration: 0.25, type: "spring", stiffness: 150, damping: 25}}
                className="p-6 bg-gradient-to-l from-neutral-950 to-neutral-900 h-screen min-w-[10vw]">
              <ul className="flex flex-col text-3xl gap-3 w-[18vw]">
                {routes.map((route, index) => (
                    <Link onClick={()=>setIsOpen(false)} href={route.path} className="hover:text-gray-400 transition-colors" key={index}>{route.name}</Link>
                ))}
                <ExpandedMenu name="Projects">
                  <ul className={"flex flex-col gap-2 mx-8 text-2xl font-semibold text-gray-300 list-disc"}
                >
                  {projects && projects.map((project, index) => (
                      <li><Link href={`/project/${project.id}`} onClick={() => setIsOpen(false)}
                                key={index}>{project.title}</Link></li>
                  ))}
                </ul>
              </ExpandedMenu>
            </ul>
          </motion.div>
        </Modal>
</>
)
}

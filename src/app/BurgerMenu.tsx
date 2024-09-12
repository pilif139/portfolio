"use client";

import React, {useEffect} from "react";
import {useState} from "react";
import { motion} from "framer-motion";
import Modal from "@/components/Modal";
import Link from 'next/link'
import {popUp} from "@/utils/animations";
import ExpandedMenu from "@/components/ExpandedMenu";
import {projects} from "@/assets/projects";
import {IoMdClose} from "react-icons/io";

export default function BurgerMenu(){
    const [isOpen, setIsOpen] = useState(false);

    type animationType = {
      initial: any;
      animate: any;
      exit?: any;
      transition?: any;
    }

    const [animation,setAnimation] = useState<animationType>({
      initial:{x: "100%"},
      animate:{x: 0},
      exit:{x: "100%"},
      transition:{duration: 0.25, type: "spring", stiffness: 150, damping: 25}
    });

    useEffect(() => {
      if(window.innerWidth < 768){
        setAnimation({
          initial: {y: "-100%"},
          animate: {y: 0},
          exit: {y: "-100%"},
          transition: {duration: 0.25, type: "spring", stiffness: 150, damping: 25}
        })
      }
    }, []);


    const routes = [
        {name: "Home", path: "/"},
        {name: "About Me", path: "/about"},
        {name: "Contact", path: "/contact"}
    ]

    return (
        <>
          {/*Burger*/}
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
          {/*modal that pops up*/}
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} className="right-0 top-0">
            <motion.div
                {...animation}
                className="p-6 bg-gradient-to-l from-neutral-950 to-neutral-900 h-screen  md:w-[25vw] w-screen">

              <IoMdClose size={30} onClick={()=>setIsOpen(false)} className="absolute top-5 right-5 cursor-pointer"/>

              <ul className="flex flex-col text-3xl gap-3 w-full">
                {routes.map((route, index) => (
                    <Link onClick={()=>setIsOpen(false)} href={route.path} className="hover:text-gray-400 transition-colors" key={index}>{route.name}</Link>
                ))}
                <ExpandedMenu name="Projects">
                  <ul className={"flex flex-col gap-2 mx-8 text-2xl font-bold text-gray-300 list-disc"}
                >
                  {projects && projects.map((project, index) => (
                      <li key={index}><Link href={`/project/${project.id}`}
                                onClick={() => setIsOpen(false)}
                                className="hover:text-gray-100 transition-colors"
                      >
                        {project.title}</Link></li>
                  ))}
                </ul>
              </ExpandedMenu>
            </ul>
          </motion.div>
        </Modal>
</>
)
}

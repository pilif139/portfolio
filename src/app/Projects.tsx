"use client";

import Animated from "@/components/Animated";
import {popUp} from "@/utils/animations";
import {projects} from "@/assets/projects";
import Link from "next/link";
import {motion} from "framer-motion";
import Image from "next/image";
import React from "react";

export default function Projects() {
 
  return (
      <div className="w-full flex flex-col items-center bg-neutral-800 gap-5 py-8 px-8"  id="projects">
        <Animated className="text-4xl" animation={popUp}>My Projects</Animated>
        <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
            <Link href={"/project/" + project.id} key={index}>
              <motion.div className="bg-neutral-900 rounded-xl shadow-2xl shadow-black flex flex-col gap-4 p-5 bg-gradient-to-t to-neutral-800 via-black from-red-500 bg-size-200 bg-pos-0 hover:bg-pos-100 transition-all duration-700 cursor-pointer"
                          initial={{opacity: 0, scale: 0.9}}
                          whileInView={{opacity: 1, scale: 1}}
                          whileHover={{scale: 0.975}}
                          transition={{duration: 0.40}}
                          viewport={{ once: true }}
              >
                  <div className="flex justify-between items-center bg-neutral-950 p-3 rounded-xl shadow-black">
                    <p className="text-3xl mb-3">{project.title}</p>
                    <div className="flex gap-4 mb-auto mr-2">
                      {project.technologies.map(({Icon}, index) => (
                        <Icon size={40} key={index}/>
                      ))}
                    </div>
                  </div>
                  <Image src={project.image} alt={project.title} className="rounded-xl h-full w-full"/>
              </motion.div>
            </Link>
        ))}
        </div>
      </div>
  );
}
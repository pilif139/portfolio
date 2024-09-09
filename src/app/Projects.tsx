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
      <div className="w-full flex flex-col items-center bg-neutral-800 gap-5 py-8 px-8">
        <Animated className="text-4xl" animation={popUp}>My Projects</Animated>
        <div className="grid grid-cols-2 gap-6">
        {projects.map((project, index) => (
            <Link href={"/project/" + project.id} key={index} className=" hover:scale-95 transition-transform">
              <motion.div className="bg-neutral-700 p-5 rounded-xl shadow-2xl shadow-black hover:bg-neutral-600 transition-colors"
                          initial={{opacity: 0, scale: 0.9}}
                          whileInView={{opacity: 1, scale: 1}}
              >
                <p className="text-2xl mb-3">{project.title}</p>
                <Image src={project.image} alt={project.title} className="rounded-xl h-max w-max"/>
              </motion.div>
            </Link>
        ))}
        </div>
      </div>
  );
}
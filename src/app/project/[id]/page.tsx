"use client";

import {projects} from "@/assets/projects";
import {notFound} from "next/navigation";
import FadeOutOverlay from "@/components/FadeOutOverlay";
import Image from "next/image";
import IconList from "@/components/IconList";
import Animated from "@/components/Animated";
import {fadeIn} from "@/utils/animations";
import React from "react";
import {FaGithub} from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import ImageSlider from "@/components/ImageSlider";

export default function ProjectPage({params} : {params: {id : string}}) {
    const project = projects.find(project => project.id === Number(params.id));
    if(!project){
        notFound();
    }

    return (
        <>
            <FadeOutOverlay>
                <h1 className="text-6xl">{project?.title}</h1>
            </FadeOutOverlay>

            <Animated animation={fadeIn} className="py-6 flex flex-col items-center justify-center gap-6 text-xl md:m-auto md:mt-auto mt-24 w-[95vw]">
              <h1 className="text-6xl text-center">{project?.title}</h1>
              <p>{project?.description}</p>
              <div className="flex md:flex-row flex-col gap-20 justify-center font-semibold py-16">

                {project?.images === undefined && <Image src={project?.image} alt={project?.title} className="w-[45vw] h-fit rounded-xl" />}
                { project?.images &&
                  <div className="md:w-[50vw] w-full h-fit md:h-max">
                  <ImageSlider images={project?.images}/>
                </div>
                }

                <div className="flex flex-col px-24 items-center justify-center text-justify h-fit w-fit">

                  {/*About project*/}
                  <p>{project?.longDescription}</p>
                  <div className="flex flex-wrap items-center gap-4 my-4">
                    <IconList icons={project?.technologies} infoAtBottom={true}/>
                  </div>

                  {/*Links*/}
                  <div className="flex gap-4">
                    {project?.githubLink &&
                    <a href={project?.githubLink} target="_blank"
                       className="btn flex gap-4 items-center bg-neutral-950 hover:bg-neutral-800 transition-colors rounded-xl p-4 w-fit"><FaGithub
                        size={30}/>Source Code</a>
                    }
                    
                    {project?.link &&
                    <a href={project?.link} target="_blank"
                       className="btn flex gap-4 items-center bg-neutral-950 hover:bg-neutral-800 transition-colors rounded-xl p-4 w-fit"><TbWorldWww
                        size={30}/>Link To Site</a>}
                  </div>
                </div>

              </div>
            </Animated>
        </>
    );
}
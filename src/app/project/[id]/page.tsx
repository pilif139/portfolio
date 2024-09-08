"use client";

import {motion} from "framer-motion";
import {projects} from "@/assets/projects";
import {useEffect, useState} from "react";
import {notFound} from "next/navigation";

export default function ProjectPage({params} : {params: {id : string}}) {
    const project = projects.find(project => project.id === Number(params.id));
    const [endAnimation, setEndAnimation] = useState(false);
    if(!project){
        notFound();
    }

    useEffect(() => {
        const timer = setTimeout(() => {
            setEndAnimation(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {!endAnimation &&
                <motion.div
                    initial={{opacity: 1}}
                    animate={{opacity: 0}}
                    transition={{duration: 0.9}}
                    className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-50 flex justify-center items-center"
                    >
                        <h1 className="text-6xl">{project?.title}</h1>
                </motion.div>
            }

            <main className="py-6">
                <h1 className="text-6xl">{project?.title}</h1>
                <p>{project?.description}</p>
            </main>
        </>
    );
}
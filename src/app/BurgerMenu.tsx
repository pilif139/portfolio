"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { popUp } from "@/utils/animations";
import ExpandedMenu from "@/components/ExpandedMenu";
import { projects } from "@/assets/projects";
import { IoMdClose } from "react-icons/io";
import {useModal} from "@/app/context/ModalContext";

type MenuProps = {
  routes: {
    name: string,
    path: string,
  }[]
}

type animationType = {
  initial: any;
  animate: any;
  exit?: any;
  transition?: any;
};


export default function BurgerMenu({routes} : MenuProps) {
  const [animation, setAnimation] = useState<animationType>({
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: { duration: 0.25, type: "spring", stiffness: 150, damping: 25 },
  });

  useEffect(() => {
    const handleResize = () =>{
      if (window.innerWidth < 768) {
        setAnimation({
          initial: { y: "-100%" },
          animate: { y: 0 },
          exit: { y: "-100%" },
          transition: {
            duration: 0.25,
            type: "spring",
            stiffness: 150,
            damping: 25,
          },
        });
      } else {
        setAnimation({
          initial: { x: "100%" },
          animate: { x: 0 },
          exit: { x: "100%" },
          transition: {
            duration: 0.25,
            type: "spring",
            stiffness: 150,
            damping: 25,
          },
        });
      }
    }

    //initial render sets values
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, [window.innerWidth]);

  const { setComponent, setIsOpen, setClassName } = useModal();

  const handleModal = () => {
        setComponent(<Menu routes={routes} animation={animation}/>);
        setIsOpen(true);
        setClassName("right-0");
  };

  return (
      <>
        {/*Burger*/}
        <motion.div
            className="flex flex-col items-center justify-center gap-2 scale-125 cursor-pointer [&>*]:hover:bg-gray-300 transition-colors"
            onClick={handleModal}
            whileHover={{ scale: 1.2 }}
            {...popUp}
        >
          <BurgerIcon/>
        </motion.div>
      </>
  );
}

type ModalProps = {
  routes: {
    name: string,
    path: string,
  }[],
  animation : animationType,
}

function Menu({ routes, animation}: ModalProps) {

  const {setIsOpen} = useModal();

  return (
      <motion.div
          {...animation}
          className="p-6 bg-gradient-to-l from-neutral-950 to-neutral-900 h-screen md:w-[25vw] w-screen"
      >
        <IoMdClose
            size={30}
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 cursor-pointer"
        />

        <ul className="flex flex-col text-3xl gap-3 w-full">
          {routes.map((route, index) => (
              <Link
                  onClick={() => setIsOpen(false)}
                  href={route.path}
                  className="hover:text-gray-400 transition-colors"
                  key={index}
              >
                {route.name}
              </Link>
          ))}

          <ExpandedMenu name="Projects">
            {projects &&
                projects.map((project, index) => (
                    <li key={index}>
                      <Link
                          href={`/project/${project.id}`}
                          onClick={() => setIsOpen(false)}
                          className="hover:text-gray-100 transition-colors"
                      >
                        {project.title}
                      </Link>
                    </li>
                ))}
          </ExpandedMenu>
        </ul>
      </motion.div>
  )
}

const BurgerIcon = () => Array.from({length: 3})
    .map((_, index) =>
        (<div key={index} className="w-10 h-1 bg-white rounded-xl"></div>)
    );
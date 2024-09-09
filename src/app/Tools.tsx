import Animated from "@/components/Animated";
import {popUp} from "@/utils/animations";
import React from "react";
import Badge from "@/components/Badge";
import {VscVscode} from "react-icons/vsc";
import {FaLinux} from "react-icons/fa";
import {SiJetbrains, SiPostman, SiWebstorm} from "react-icons/si";
import IconList from "@/components/IconList";

export default function Skills() {
  const icons = [
    {Icon: VscVscode, name: "VSCode"},
    {Icon: FaLinux, name: "Linux"},
    {Icon: SiWebstorm, name: "Webstorm"},
    {Icon: SiJetbrains, name: "Jetbrains"},
    {Icon: SiPostman, name: "Postman"},
  ];

  return (
      <div className="flex flex-col items-center">
        <Animated animation={popUp} className="text-4xl">Tools that i use</Animated>
        <div className="md:w-[35vw] w-full h-max flex gap-4 my-6 mb-12 rounded-xl flex-wrap">
          <IconList icons={icons}/>
        </div>
      </div>
  )

}

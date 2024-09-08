import Animated from "@/components/Animated";
import {popUp} from "@/utils/animations";
import React from "react";
import Badge from "@/components/Badge";
import {VscVscode} from "react-icons/vsc";
import {FaLinux} from "react-icons/fa";
import {SiJetbrains, SiPostman, SiWebstorm} from "react-icons/si";

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
        <div className="w-[35vw] h-32 flex gap-4 my-6 rounded-xl flex-wrap">
          {icons.map(({Icon, name}, index) => (
              <Badge key={index} name={name}><Icon size={30}/></Badge>
          ))}
        </div>
      </div>
  )

}

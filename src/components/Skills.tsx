import Animated from "@/components/Animated";
import {popUp} from "@/utils/animations";
import React from "react";
import Badge from "@/components/Badge";

//icons imports
import {FaCss3, FaGitAlt, FaHtml5, FaJs, FaPython, FaReact} from "react-icons/fa";
import {SiCsharp, SiMariadb, SiMysql, SiPrisma, SiTypescript} from "react-icons/si";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {FaGolang} from "react-icons/fa6";

export default function Skills() {
  const icons = [
    {Icon: FaJs, name: "Javascript"},
    {Icon: SiTypescript, name: "Typescript"},
    {Icon: FaReact, name: "React"},
    {Icon: RiNextjsFill, name: "Next.js"},
    {Icon: RiTailwindCssFill, name: "Tailwind CSS"},
    {Icon: FaHtml5, name: "HTML5"},
    {Icon: FaCss3, name: "CSS3"},
    {Icon: SiMysql, name: "MySQL"},
    {Icon: SiMariadb, name: "MariaDB"},
    {Icon: FaGolang, name: "Golang"},
    {Icon: SiCsharp, name: "C#"},
    {Icon: FaGitAlt, name: "Git"},
    {Icon: FaPython, name: "Python"},
    {Icon: SiPrisma, name: "Prisma ORM"},
];

  return (
      <div className="flex flex-col items-center">
        <Animated animation={popUp} className="text-4xl">My Skills</Animated>
        <div className="w-[35vw] h-32 flex gap-4 my-6 rounded-xl flex-wrap">
          {icons.map(({Icon, name}, index) => (
              <Badge key={index} name={name}><Icon size={30}/></Badge>
              ))}
        </div>
    </div>
  )

}

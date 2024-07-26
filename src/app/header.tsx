"use client";

import Link from "next/link";
import {motion} from "framer-motion";

export default function Header(){

  const links = [
    {
      name: "Home",
      href: "/"
    },
    {
      name: "About",
      href: "/about"
    },
    {
      name: "Projects",
      href: "/projects"
    }
  ]

  return (
    <header className="flex flex-row justify-between items-center p-4 w-full bg-[rgba(20,20,20,0.3)] shadow-lg"
    >
      <motion.h1 className="text-2xl font-bold"
        initial={{opacity:0, scale: 0.8}}
        animate={{opacity:1, scale:1}}
      >
        Filip Kasperski
      </motion.h1>
      <nav>
        <ul className="flex flex-row space-x-4">
          {links.map((link, index) => (
            <motion.li key={index} className="text-xl px-2"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1}}
            >
              <Link href={link.href}>
                {link.name}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
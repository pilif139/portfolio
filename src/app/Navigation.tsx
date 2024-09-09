"use client";

import {motion} from "framer-motion";
import {FaHome} from "react-icons/fa";
import Link from "next/link";
import {popUp} from "@/utils/animations";

export default function NavigationButtons() {
  return (
    <motion.div className="flex gap-4 absolute top-3 left-3"
                {...popUp}
                whileHover={{scale: 1.1}}
    >
      <Link href={"/"} className="hover:text-gray-300 transition-colors"><FaHome size={55}/></Link>
    </motion.div>
  );
}
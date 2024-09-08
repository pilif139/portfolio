"use client";

import React, { useState } from "react";
import Animated from "@/components/Animated";
import {popUp} from "@/utils/animations";

type Props = {
    children: React.ReactNode;
    name?: string;
    infoAtBottom?: boolean;
}

export default function Badge({children, name, infoAtBottom}: Props) {
  const [showInfo, setShowInfo] = useState(false);

  return (
      <div className="relative">
        {name!=undefined && name !=="" && showInfo && <Animated animation={popUp} className={`text-lg text-white absolute ${infoAtBottom ? "top-[3em]" : "top-[-3em]"} right-[-2em] bg-neutral-700 p-2 w-max rounded-xl bg-opacity-80`}>{name}</Animated>
        }
        <Animated animation={popUp}
                  className="text-white p-4 bg-neutral-950 h-fit rounded-xl hover:bg-neutral-800 transition-colors hover:cursor-pointer"
                  onHoverStart={() => setShowInfo(true)}
                  onHoverEnd={() => setShowInfo(false)}
        >
          {children}
        </Animated>
      </div>
  )
}
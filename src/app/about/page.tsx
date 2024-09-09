import FadeOutOverlay from "@/components/FadeOutOverlay";
import {fadeIn} from "@/utils/animations";
import Animated from "@/components/Animated";
import React from "react";

export default function About(){
  return (
      <>
        <FadeOutOverlay>
          <h1 className="text-6xl">About Me</h1>
        </FadeOutOverlay>

        <Animated animation={fadeIn} className="flex flex-col items-center justify-center gap-4 m-auto text-center text-6xl">
          About Me
        </Animated>
      </>
  )
}
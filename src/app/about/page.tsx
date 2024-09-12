import FadeOutOverlay from "@/components/FadeOutOverlay";
import {fadeIn} from "@/utils/animations";
import Animated from "@/components/Animated";
import React from "react";

export default function About(){
  return (
      <>
        <FadeOutOverlay duration={1.5}>
          <h1 className="text-6xl">About Me</h1>
        </FadeOutOverlay>

        <Animated animation={fadeIn} className="flex flex-col items-center gap-4 p-16 text-xl w-[45vw]">
          <h1 className="text-5xl">Filip Kasperski</h1>
          <p className="text-2xl font-bold w-full">Overiew</p>
          <p className="text-xl w-full">I am a 17-year-old programmer based in <span
              className="text-red-400">Poznań</span>,
            currently studying programming at <span className="text-red-400">Zespół Szkół Komunikacji im. Hipolita Cegielskiego</span> in
            Poznań. I am actively seeking an internship opportunity to further develop my skills and gain
            hands-on experience.</p>
          <hr className="w-full border-2 my-1"></hr>
          <p className="text-2xl font-bold w-full">Experience</p>
          <p className="text-xl w-full">My programming journey began when I was 9 years old, creating my first simple website using HTML and CSS. It wasn&apos;t much, but it was all I could manage at the time. When I was around 13 or 14, I dove into <span className="text-red-400">C++</span> and a bit of <span className="text-red-400">Python</span>. It was challenging, but it laid a solid foundation by teaching me core programming concepts like functions and data types. Now, in high school, I&apos;m expanding my skills, learning frontend development <span className="text-red-400">(JavaScript, HTML, CSS)</span>, backend programming <span className="text-red-400">(PHP)</span>, and working with console applications in <span className="text-red-400">C#, C++, and Python</span>. In 2024, I participated in the <span className="text-red-400">HackYeah contest</span>, where my team and I had to create an application within 24 hours using Google AppSheet. Our 4-person team won 1,000 PLN for our efforts.</p>
        </Animated>
      </>
  )
}
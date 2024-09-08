import p1i1 from "./project_1/1.png";
import p1i2 from "./project_1/2.png";
import p1i3 from "./project_1/3.png";
import p1i4 from "./project_1/4.png";
import p1i5 from "./project_1/5.png";

import p2i1 from "./project_2/1.png";
import p2i2 from "./project_2/2.png";
import p2i3 from "./project_2/3.png";
import p2i4 from "./project_2/4.png";

import p3i1 from "./project_3/1.png";

import p4i1 from "./project_4/1.png";
import p4i2 from "./project_4/2.png";

import p5i1 from "./project_5/1.png";
import p5i2 from "./project_5/2.png";
import p5i3 from "./project_5/3.png";
import p5i4 from "./project_5/4.png";
import p5i5 from "./project_5/5.png";
import p5i6 from "./project_5/6.png";
import p5i7 from "./project_5/7.png";
import p5i8 from "./project_5/8.png";
import p5i9 from "./project_5/9.png";

import {SiJavascript, SiJsonwebtokens, SiPostgresql, SiPrisma, SiReact, SiSqlite, SiTypescript} from "react-icons/si";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {FaDocker} from "react-icons/fa";
import {FaGolang} from "react-icons/fa6";

export const projects = [
  {
    id: 1,
    title: "URL Shortener",
    description: "A simple URL shortener.",
    longDescription: "I recently built a URL Shortener using Next.js, which was my first time using it for something more than a basic to-do app. I also got to work with databases on the frontend for the first time, using a PostgreSQL database that I set up through Docker and connected with Prisma ORM. It was a great intro to backend development, where I handled things like URL redirection, data validation, and storing URLs externally. For the design, I used Tailwind CSS and added some cool animations with Framer Motion. Very difficult problem to solve was authorization. I needed to learn basics of how to authenticate user, store JWT tokens, encrypt data and make everything secure .I also integrated the Shadcn/ui library for the first time to create graphs and display user statistics. Once everything was ready, I deployed it on Vercel. Overall, this project helped me understand how full-stack apps come together, and it was a lot of fun to see everything in action.",
    technologies:
      [
        {Icon: SiTypescript, name: "Typescript"},
        {Icon: RiNextjsFill, name: "Next.js"},
        {Icon: RiTailwindCssFill, name: "Tailwind CSS"},
        {Icon: SiPostgresql, name: "PostgreSQL"},
        {Icon: SiPrisma, name: "Prisma ORM"},
        {Icon: FaDocker, name: "Docker"}
      ]
    ,
    githubLink: "https://github.com/pilif139/url-shortener",
    link: "https://url-shortener-mu-three.vercel.app/",
    image : p1i1,
    images: [p1i1,p1i2,p1i3,p1i4,p1i5]
  },
  {
    id: 2,
    title: "Shop Example",
    description: "A simple shop example.",
    longDescription: "This project was my first complex React application. It was my first time working with TypeScript and Tailwind CSS for styling the site. Throughout the development process, I gained a solid understanding of key React concepts and hooks, including state management, effects, the Context API, and custom hooks. One of cool features that i implemented is dark mode toggler that i created with local storage. I deployed the application on GitHub Pages, marking a significant milestone in my journey into the world of React development.",
    technologies: [
      {Icon: SiTypescript, name: "Typescript"},
      {Icon: SiReact, name: "React"},
      {Icon: RiTailwindCssFill, name: "Tailwind CSS"},
    ],
    githubLink: "https://github.com/pilif139/react-shop-app",
    link: "https://pilif139.github.io/react-shop-app/",
    image : p2i1,
    images: [p2i1,p2i2,p2i3,p2i4]
  },
  {
    id: 3,
    title: "Image gallery",
    description: "A simple image gallery.",
    longDescription: "This project was my first React application, where I learned the basics of React, including how to use hooks. I also gained an understanding of APIs and how to fetch data from them. The app uses the Pixabay API to retrieve images.",
    technologies: [
      {Icon: SiReact, name: "React"},
      {Icon: SiJavascript, name: "JavaScript"},
    ],
    githubLink: "https://github.com/pilif139/image_gallery",
    image : p3i1,
  },
  {
    id: 4,
    title: "Go Shell",
    description: "A simple shell written in Go.",
   longDescription: "This project was my first Go application. I learned standard library, how to use go modules, how to work with files and directories, how to create simple shell commands. Before that I had no experience with Go, so i had to learn basics of go from Go By Example course and go documentation. ",
    technologies: [
      {Icon: FaGolang, name: "Go"},
    ],
    githubLink: "https://github.com/pilif139/go-shell",
    image : p4i1,
    images: [p4i1,p4i2]
  },
  {
    id: 5,
    title: "Go To Do App",
    description: "A simple to do app written in Go.",
    longDescription: "This was my first go web appliaction. I used here fiber framework, which is very similar to express.js. I learned how to create routes, use context, create middleware etc. For database i used sqlite3, which is very easy to use. I didn't use any ORM, for this i used SQLx library that allows me to use sql queries in go without any security problems. I exapanded my knowledge about web security. I used JWT tokens stored in cookies to authenticate users. I also learned how to hash passwords and store them in database.",
    technologies: [
        {Icon: FaGolang, name: "Go"},
        {Icon: SiSqlite, name: "SQLite"},
        {Icon : SiJsonwebtokens , name: "JWT"},
    ],
    githubLink: "https://github.com/pilif139/go-fiber-to-do",
    image : p5i1,
    images: [p5i1,p5i2,p5i3,p5i4,p5i5,p5i6,p5i7,p5i8,p5i9],
  }
]
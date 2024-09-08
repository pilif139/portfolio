import img1 from "./project_1.png";
import img2 from "./project_2.png";
import img3 from "./project_3.png";
import {SiJavascript, SiPostgresql, SiPrisma, SiReact, SiTypescript} from "react-icons/si";
import {RiNextjsFill, RiTailwindCssFill} from "react-icons/ri";
import {FaDocker} from "react-icons/fa";

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
    image : img1,
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
    image : img2,
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
    image : img3,
  }
]
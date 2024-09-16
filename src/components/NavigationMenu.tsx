"use client";

import { useState } from "react";

const itemClass = "text-white p-4 rounded-full hover:bg-neutral-900 transition-colors";
const activeClass = "text-white p-4 bg-neutral-950 rounded-full transition-colors";

type Props = {
    elements: {name: string, href: string}[]
}

export default function NavigationMenu({elements}: Props) {
    const [active, setActive] = useState("");

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, name:string, href:string) => {
        event.preventDefault();
        setActive(name);
        const element = document.querySelector(href);
        const y = element!.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    return (
        <div className="rounded-full border-white border-2 p-4 text-2xl fixed top-5 left-[50vw] transform -translate-x-1/2 bg-neutral-700 bg-opacity-60 backdrop-blur-md z-50">
            {elements.map(({name, href}, index) => (
                <a key={index} href={href} className={active === name ? activeClass : itemClass} onClick={(e)=>handleClick(e,name,href)}>{name}</a>
            ))}
        </div>
    )
}
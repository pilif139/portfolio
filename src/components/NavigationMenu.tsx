"use client";

import Animated from "@/components/Animated";
import { fadeIn } from "@/utils/animations";

const itemClass = "text-white p-4 rounded-full hover:bg-neutral-900 transition-colors";

type Props = {
    elements: {name: string, href: string}[]
}

export default function NavigationMenu({elements}: Props) {
    const handleClick = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href:string) => {
        event.preventDefault();
        const element = document.querySelector(href);
        const y = element!.getBoundingClientRect().top + window.scrollY - 100;
        window.scrollTo({top: y, behavior: 'smooth'});
    }

    return (
        <Animated animation={fadeIn} className="rounded-full border-white border-2 p-4 text-2xl fixed top-5 left-[50vw] transform -translate-x-1/2 bg-neutral-700 bg-opacity-60 backdrop-blur-md z-50">
            {elements.map(({name, href}, index) => (
                <a key={index} href={href} className={itemClass} onClick={(e)=>handleClick(e,href)}>
                    {name}
                </a>
            ))}
        </Animated>
    )
}
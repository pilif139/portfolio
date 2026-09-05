import type { AnchorHTMLAttributes, CSSProperties } from "react";
import { cn } from "@/lib/cn";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({ href, children, className, style, ...props }: LinkProps) {
    const tilt = `${((Math.random() < 0.5 ? -1 : 1) * (2 + Math.random() * 2)).toFixed(2)}deg`;
    return (
        <>
            <style>{`.link-tilt:hover{rotate:var(--tilt)}`}</style>
            <a
                href={`${href}`}
                className={cn("flex w-fit text-heading underline hover:opacity-80 link-tilt", className)}
                style={{ ...style, transition: "rotate 150ms ease", "--tilt": tilt } as CSSProperties}
                {...props}
            >
                {children}
            </a>
        </>
    )
}

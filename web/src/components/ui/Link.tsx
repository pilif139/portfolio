import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({ href, children, className, style, ...props }: LinkProps) {
    return (
        <a
            href={`${href}`}
            className={cn("text-heading underline hover:opacity-80", className)}
            style={style}
            {...props}
        >
            {children}
        </a>
    )
}

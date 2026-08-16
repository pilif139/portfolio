import type { AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement>

export default function Link({ href, children, className, ...props }: LinkProps) {
    return (
        <a
            href={`${href}`}
            className={cn("text-heading underline hover:bg-primary hover:text-accent", className)}
            {...props}
        >
            {children}
        </a>
    )
}

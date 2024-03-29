import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import { NavLink } from "react-router-dom";

type Props = {
    href: string;
    active?: boolean;
    children: ReactNode;
};

export function Link({ href, active, children }: Props) {
    const activeClass = "bg-gray-08 border-opacity-100";
    const currentPathClass = activeClass
        .split(" ")
        .map((cls) => `aria-[current]:${cls}`)
        .join(" ");

    return (
        <NavLink
            to={href}
            className={cn(
                "rounded-lg border border-zinc-800 border-opacity-0 px-5 py-3 text-lg",
                currentPathClass,
                active && activeClass,
            )}
        >
            {children}
        </NavLink>
    );
}

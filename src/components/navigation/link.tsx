import { cn } from "@/lib/utils";
import { NavLink, NavLinkProps } from "react-router-dom";

type Props = NavLinkProps & {
    active?: boolean;
};

export function Link({ to, active, children, className }: Props) {
    return (
        <NavLink
            to={to}
            className={cn(
                "rounded-lg border border-zinc-800 border-opacity-0 px-5 py-3 aria-[current]:border-opacity-100 aria-[current]:bg-gray-08",
                active && "border-opacity-100 bg-gray-08",
                className,
            )}
        >
            {children}
        </NavLink>
    );
}

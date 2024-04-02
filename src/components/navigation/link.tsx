import { cn } from "@/lib/utils";
import { NavLink, NavLinkProps, useLocation } from "react-router-dom";

type Props = NavLinkProps & {
    active?: boolean;
};

export function Link({ to, active, children, className }: Props) {
    const location = useLocation();
    const isCurrentRoute = location.pathname === to;
    const activeClass = "border-opacity-100 bg-gray-08";

    return (
        <NavLink
            to={to}
            className={cn(
                "whitespace-nowrap rounded-lg border border-zinc-800 border-opacity-0 px-5 py-3",
                isCurrentRoute && activeClass,
                active && activeClass,
                className,
            )}
        >
            {children}
        </NavLink>
    );
}

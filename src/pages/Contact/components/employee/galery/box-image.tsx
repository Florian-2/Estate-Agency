import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export function BoxImages({ children, className }: Props) {
    return (
        <div className={cn("flex max-h-60 gap-3 overflow-hidden rounded-xl lg:gap-6", className)}>
            {children}
        </div>
    );
}

import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
    className?: string;
};

export function CardBorder({ children, className }: Props) {
    return (
        <article className="rounded-lg bg-gray-10 p-2">
            <div className={cn("h-full rounded-lg border bg-gray-08 p-6 md:p-10", className)}>
                {children}
            </div>
        </article>
    );
}

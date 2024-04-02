import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
    className?: string;
};

export function Section({ children, className }: Props) {
    return <section className={cn("space-y-6 lg:space-y-14", className)}>{children}</section>;
}

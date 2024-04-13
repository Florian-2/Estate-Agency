import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export function ContainerOfficeList({ children, className }: Props) {
    return <div className={cn("grid grid-cols-1 gap-7 lg:grid-cols-2", className)}>{children}</div>;
}

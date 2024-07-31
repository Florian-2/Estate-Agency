import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type Props = {
    children: ReactNode;
    className?: string;
};

export function Container({ children, className }: Props) {
    return (
        <div
            className={cn(
                "mx-2 my-10 flex flex-col items-center lg:mx-4 lg:my-16 lg:mb-20",
                className,
            )}
        >
            <div className="w-full max-w-screen-2xl space-y-14 lg:space-y-32">{children}</div>
        </div>
    );
}

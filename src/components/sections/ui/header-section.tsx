import { Link } from "@/components/navigation/link";
import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";
import { Sparkle } from "lucide-react";

type SectionChildrenProps = PropsWithChildren & {
    link?: { href?: string; label: string };
    className?: string;
};

export function SectionHeader({ children, link, className }: SectionChildrenProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-end justify-between gap-4 md:flex-row md:gap-14",
                className,
            )}
        >
            <div className="space-y-2 lg:space-y-3">
                <div className="flex items-center gap-1 xl:-ml-3.5">
                    <Sparkle className="fill-gray-40 text-gray-40" strokeWidth={0.5} />
                    <Sparkle className="fill-gray-20 text-gray-20" size={18} strokeWidth={0.5} />
                    <Sparkle className="fill-gray-20 text-gray-20" size={10} strokeWidth={0.5} />
                </div>

                {children}
            </div>

            {link && (
                <Link
                    to={link.href || "#"}
                    active
                    className="w-full bg-gray-10 text-center text-sm md:w-fit xl:text-base"
                >
                    {link.label}
                </Link>
            )}
        </div>
    );
}

type ChildrenProps = PropsWithChildren & {
    className?: string;
};

export function SectionTitle({ children, className }: ChildrenProps) {
    return <h2 className={cn("text-2xl lg:text-3xl", className)}>{children}</h2>;
}

export function SectionDescription({ children, className }: ChildrenProps) {
    return <p className={cn("lg:max-w-4xl xl:max-w-5xl", className)}>{children}</p>;
}

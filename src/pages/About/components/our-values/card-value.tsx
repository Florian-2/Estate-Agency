import { OurValue } from "@/data/our-values";
import { cn } from "@/lib/utils";

type Props = OurValue & {
    className?: string;
};

export function CardValue({ label, description, icon, className }: Props) {
    return (
        <div className={cn("space-y-4 pt-3 first:pt-0 md:pt-0", className)}>
            <div className="flex items-center gap-2.5">
                <span className="rounded-full border-2 border-primary p-2">{icon}</span>
                <h4 className="text-lg md:text-xl">{label}</h4>
            </div>
            <p>{description}</p>
        </div>
    );
}

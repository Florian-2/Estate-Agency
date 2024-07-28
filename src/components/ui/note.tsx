import { useMediaQuery } from "@/hooks";
import { Separator } from "./separator";
import { cn } from "@/lib/utils";

type Props = {
    message: string;
};

export function Note({ message }: Props) {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <div className="flex flex-col gap-5 rounded-lg border bg-gray-10 px-10 py-5 md:flex-row md:items-center ">
            <p className="text-base font-semibold text-white md:text-xl">Note</p>
            <Separator
                orientation={isDesktop ? "vertical" : "horizontal"}
                className={cn(isDesktop ? "min-h-10" : "h-[1px]")}
            />
            <p className="text-sm md:text-base">{message}</p>
        </div>
    );
}

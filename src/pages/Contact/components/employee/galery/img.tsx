import { cn } from "@/lib/utils";
import { ComponentProps } from "react";

type Props = ComponentProps<"img">;

export function Img(props: Props) {
    const { src, alt, className } = props;

    return (
        <img
            src={src}
            alt={alt}
            {...props}
            className={cn("h-full w-full rounded-xl object-cover", className)}
        />
    );
}

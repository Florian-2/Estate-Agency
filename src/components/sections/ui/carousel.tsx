import Autoplay from "embla-carousel-autoplay";
import {
    Carousel as CarouselEmbla,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

type Props = {
    elements: JSX.Element[];
};

export function Carousel({ elements }: Props) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <CarouselEmbla
            setApi={setApi}
            opts={{
                align: "end",
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3500,
                    stopOnInteraction: false,
                    stopOnMouseEnter: true,
                }),
            ]}
            className="space-y-10"
        >
            <CarouselContent className="-ml-4.5">
                {elements.map((element, i) => (
                    <CarouselItem className="pl-5 md:basis-1/2 lg:basis-1/3 xl:basis-1/4" key={i}>
                        {element}
                    </CarouselItem>
                ))}
            </CarouselContent>

            <div className="flex items-center justify-between border-t pt-4">
                <p className="text-sm lg:text-base">
                    <span className="text-white">{current}</span> of {count}
                </p>

                <div className="space-x-3">
                    <CarouselPrevious />
                    <CarouselNext />
                </div>
            </div>
        </CarouselEmbla>
    );
}

"use client";

import { createContext, useCallback, useContext, useEffect, useState, KeyboardEvent } from "react";
import useEmblaCarousel, { type UseEmblaCarouselType } from "embla-carousel-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";
import { ComponentProps } from "react";
import { ChevronLeft } from "lucide-react";

export type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];

type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    setApi?: (api: CarouselApi) => void;
};

type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;

const CarouselContext = createContext<CarouselContextProps | null>(null);

export function useCarousel() {
    const context = useContext(CarouselContext);

    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />");
    }

    return context;
}

type CarouselComponentProps = CarouselProps & ComponentProps<"div">;

function Carousel({
    opts,
    setApi,
    plugins,
    className,
    children,
    ...props
}: CarouselComponentProps) {
    const [carouselRef, api] = useEmblaCarousel(
        {
            ...opts,
            axis: "x",
        },
        plugins,
    );
    const [canScrollPrev, setCanScrollPrev] = useState(false);
    const [canScrollNext, setCanScrollNext] = useState(false);

    const onSelect = useCallback((api: CarouselApi) => {
        if (!api) {
            return;
        }

        setCanScrollPrev(api.canScrollPrev());
        setCanScrollNext(api.canScrollNext());
    }, []);

    const scrollPrev = useCallback(() => {
        api?.scrollPrev();
    }, [api]);

    const scrollNext = useCallback(() => {
        api?.scrollNext();
    }, [api]);

    const handleKeyDown = useCallback(
        (event: KeyboardEvent<HTMLDivElement>) => {
            if (event.key === "ArrowLeft") {
                event.preventDefault();
                scrollPrev();
            } else if (event.key === "ArrowRight") {
                event.preventDefault();
                scrollNext();
            }
        },
        [scrollPrev, scrollNext],
    );

    useEffect(() => {
        if (!api || !setApi) {
            return;
        }

        setApi(api);
    }, [api, setApi]);

    useEffect(() => {
        if (!api) {
            return;
        }

        onSelect(api);
        api.on("reInit", onSelect);
        api.on("select", onSelect);

        return () => {
            api?.off("select", onSelect);
        };
    }, [api, onSelect]);

    return (
        <CarouselContext.Provider
            value={{
                carouselRef,
                api: api,
                opts,

                scrollPrev,
                scrollNext,
                canScrollPrev,
                canScrollNext,
            }}
        >
            <div
                onKeyDownCapture={handleKeyDown}
                className={cn("relative", className)}
                role="region"
                aria-roledescription="carousel"
                {...props}
            >
                {children}
            </div>
        </CarouselContext.Provider>
    );
}

function CarouselContent({ className, ...props }: ComponentProps<"div">) {
    const { carouselRef } = useCarousel();

    return (
        <div ref={carouselRef} className="overflow-hidden ">
            <div className={cn("-ml-4 flex", className)} {...props} />
        </div>
    );
}

function CarouselItem({ className, ...props }: ComponentProps<"div">) {
    return (
        <div
            role="group"
            aria-roledescription="slide"
            className={cn("min-w-0 shrink-0 grow-0 basis-full pl-4", className)}
            {...props}
        />
    );
}

function CarouselPrevious() {
    const { scrollPrev, canScrollPrev } = useCarousel();

    return (
        <Button
            className={"h-10 w-10 rounded-full p-0"}
            disabled={!canScrollPrev}
            onClick={scrollPrev}
            variant={"outline"}
        >
            <ChevronLeft />
            <span className="sr-only">Previous slide</span>
        </Button>
    );
}

function CarouselNext() {
    const { scrollNext, canScrollNext } = useCarousel();

    return (
        <Button
            className={"h-10 w-10 rounded-full p-0"}
            disabled={!canScrollNext}
            onClick={scrollNext}
            variant={"outline"}
        >
            <ChevronLeft className="rotate-180" />
            <span className="sr-only">Next slide</span>
        </Button>
    );
}

function CarouselDots() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const { api: emblaApi } = useCarousel();

    const onDotButtonClick = useCallback(
        (index: number) => {
            if (!emblaApi) return;

            emblaApi.scrollTo(index);
        },
        [emblaApi],
    );

    const onInit = useCallback(() => {
        if (!emblaApi) return;

        setScrollSnaps(emblaApi.scrollSnapList());
    }, [emblaApi]);

    const onSelect = useCallback(() => {
        if (!emblaApi) return;

        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, [emblaApi]);

    useEffect(() => {
        if (!emblaApi) return;

        onInit();
        onSelect();
        emblaApi.on("reInit", onInit);
        emblaApi.on("reInit", onSelect);
        emblaApi.on("select", onSelect);
    }, [emblaApi, onInit, onSelect]);

    return (
        <div className="hidden sm:flex sm:gap-1.5 ">
            {scrollSnaps.map((_, index) => (
                <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    className={cn(
                        "h-1.5 min-w-5 rounded-full bg-gray-30",
                        index === selectedIndex && "bg-primary",
                    )}
                    onClick={() => onDotButtonClick(index)}
                ></button>
            ))}
        </div>
    );
}

export { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, CarouselDots };

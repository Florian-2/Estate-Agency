import Autoplay from "embla-carousel-autoplay";
import {
    Carousel as CarouselEmbla,
    CarouselApi,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselDots,
} from "@/components/ui/carousel";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useMediaQuery } from "@/hooks";

type Props = {
    images: string[];
};

export function Gallery({ images }: Props) {
    const [mainApi, setMainApi] = useState<CarouselApi>();
    const [thumbnailApi, setThumbnailApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const isDesktop = useMediaQuery("(min-width: 768px)");

    const mainImage = useMemo(
        () =>
            images.map((image, index) => (
                <img
                    src={image}
                    alt={`Carousel Main Image ${index + 1}`}
                    className="h-full w-full cursor-grab rounded-lg object-cover"
                />
            )),
        [images],
    );

    const thumbnailImages = useMemo(
        () =>
            images.map((image, index) => (
                <AspectRatio ratio={isDesktop ? 16 / 9 : 1 / 1}>
                    <img
                        className={cn(
                            "aspec h-full w-full cursor-pointer rounded-lg object-cover opacity-40",
                            index === current && "opacity-100",
                        )}
                        src={image}
                        alt={`Carousel Thumbnail Image ${index + 1}`}
                    />
                </AspectRatio>
            )),
        [images, isDesktop, current],
    );

    useEffect(() => {
        if (!mainApi || !thumbnailApi) {
            return;
        }

        const handleTopSelect = () => {
            const selected = mainApi.selectedScrollSnap();
            setCurrent(selected);
            thumbnailApi.scrollTo(selected);
        };

        const handleBottomSelect = () => {
            const selected = thumbnailApi.selectedScrollSnap();
            setCurrent(selected);
            mainApi.scrollTo(selected);
        };

        mainApi.on("select", handleTopSelect);
        thumbnailApi.on("select", handleBottomSelect);

        return () => {
            mainApi.off("select", handleTopSelect);
            thumbnailApi.off("select", handleBottomSelect);
        };
    }, [mainApi, thumbnailApi]);

    const handleClick = (index: number) => {
        if (!mainApi || !thumbnailApi) {
            return;
        }
        thumbnailApi.scrollTo(index);
        mainApi.scrollTo(index);
        setCurrent(index);
    };

    return (
        <div className="space-y-4 rounded-xl bg-gray-10 p-3 sm:p-5 md:space-y-6 md:p-8 lg:p-11">
            <CarouselEmbla
                setApi={setThumbnailApi}
                opts={{
                    align: "start",
                }}
                className="rounded-lg bg-gray-08 p-2 md:p-3 lg:p-5"
            >
                <CarouselContent className="h-full ">
                    {thumbnailImages.map((element, i) => (
                        <CarouselItem
                            className="basis-1/4 md:basis-1/6"
                            key={i}
                            onClick={() => handleClick(i)}
                        >
                            {element}
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </CarouselEmbla>

            <CarouselEmbla
                setApi={setMainApi}
                opts={{
                    align: "start",
                    loop: true,
                }}
                plugins={[
                    Autoplay({
                        delay: 5000,
                        stopOnInteraction: false,
                        stopOnMouseEnter: true,
                    }),
                ]}
                className="space-y-4 md:space-y-6"
            >
                <CarouselContent className="max-h-[550px]">
                    {mainImage.map((element, i) => (
                        <CarouselItem className="basis-full pl-5 md:basis-1/2" key={i}>
                            {element}
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <div className="flex w-full items-center justify-between gap-2 rounded-full bg-gray-08 p-2.5 md:mx-auto md:w-min">
                    <CarouselPrevious />

                    <CarouselDots />

                    <CarouselNext />
                </div>
            </CarouselEmbla>
        </div>
    );
}

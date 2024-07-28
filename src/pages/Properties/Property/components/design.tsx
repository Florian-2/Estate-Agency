import { DetailsLocation } from "@/data/properties";
import { Separator } from "@radix-ui/react-separator";

type Props = {
    title: string;
    location: DetailsLocation;
};

export function Design({ title, location }: Props) {
    return (
        <div className="flex animate-background flex-col items-center justify-center space-y-3 rounded-lg bg-gradient-test bg-[length:400%_400%] py-10 font-medium *:text-white lg:p-5">
            <h3 className="text-center text-2xl md:text-3xl lg:text-4xl">{title}</h3>
            <Separator className="h-0.5 w-1/2 rounded-lg bg-white" />
            <p className="text-lg lg:text-2xl">
                {location.city} - {location.state}
            </p>
        </div>
    );
}

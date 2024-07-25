import { DetailsLocation, Property } from "@/data/properties";
import { currencyUS } from "@/lib/utils";
import { MapPin } from "lucide-react";

type Props = Pick<Property, "title" | "price"> & {
    location: DetailsLocation;
};

export function HeadingProperty({ title, location, price }: Props) {
    return (
        <div className="flex flex-wrap justify-between *:whitespace-nowrap">
            <div className="flex flex-wrap items-center gap-4">
                <h1 className="text-3xl">{title}</h1>

                <div className="flex items-center gap-2 rounded-lg border p-2.5 text-white">
                    <MapPin size={20} />
                    <p className="text-base text-inherit">
                        {location.state}, {location.city}
                    </p>
                </div>
            </div>

            <div className="flex flex-col">
                <span className="text-gray-60">Price</span>
                <span className="text-2xl font-medium">{currencyUS(price)}</span>
            </div>
        </div>
    );
}

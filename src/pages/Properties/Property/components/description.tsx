import { ReactElement } from "react";
import { Property } from "@/data/properties";
import { capitalize } from "@/lib/utils";
import { BathIcon, BedDoubleIcon, RulerIcon } from "lucide-react";

type Props = {
    property: Property;
};

type InfoProps = {
    type: "bedrooms" | "bathrooms" | "area";
    icon: ReactElement;
    value: string | number;
    suffix?: string;
};

function Info({ type, icon, value, suffix }: InfoProps) {
    return (
        <div className="space-y-2 py-3 first:pb-3 first:pt-0 sm:px-4 sm:py-0 sm:first:px-0">
            <div className="flex items-center gap-1 text-gray-50">
                {icon}
                <p>{capitalize(type)}</p>
            </div>

            <p className=" font-medium text-white">
                {value} {suffix}
            </p>
        </div>
    );
}

export function Description({ property }: Props) {
    return (
        <div className="space-y-2.5 rounded-lg border border-gray-15 p-4 md:p-8">
            <h3 className="text-xl">Description</h3>
            <p>{property.description}</p>

            <div className="flex flex-col divide-y border-t border-gray-15 pt-4 sm:flex-row sm:gap-5 sm:divide-x sm:divide-y-0">
                <Info
                    type="bedrooms"
                    value={property.details.bedrooms}
                    icon={<BedDoubleIcon size={20} />}
                />

                <Info
                    type="bathrooms"
                    value={property.details.bathrooms}
                    icon={<BathIcon size={20} />}
                />

                <Info
                    type="area"
                    value={property.details.area}
                    icon={<RulerIcon size={20} />}
                    suffix="Square Feet"
                />
            </div>
        </div>
    );
}

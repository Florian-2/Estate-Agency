import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Property } from "@/data/properties";

type Props = {
    property: Property;
};

export function PropertyCard({ property }: Props) {
    const price = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        maximumFractionDigits: 0,
    }).format(property.price);

    return (
        <article className="http://192.168.1.176:5173/ space-y-5 rounded-xl border p-5">
            <div className="h-64 w-full overflow-hidden rounded-lg">
                <img
                    src={property.picture}
                    alt={property.title}
                    className="h-full w-full object-cover"
                />
            </div>

            <div className="flex flex-col gap-6 ">
                <div className="space-y-1">
                    <h3 className="text-lg lg:text-xl">{property.title}</h3>
                    <p className="line-clamp-2 text-sm lg:text-base">{property.description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {property.tags.map((tag, i) => (
                        <Badge key={i} variant={"outline"}>
                            {tag}
                        </Badge>
                    ))}
                </div>

                <div className="flex justify-between">
                    <div className="flex-grow ">
                        <p>Price</p>
                        <p className="text-lg font-semibold text-white lg:text-xl">{price}</p>
                    </div>

                    <Button>View Property</Button>
                </div>
            </div>
        </article>
    );
}
import { Loading } from "@/components/ui/loader";
import { Property } from "@/data/properties";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { HeadingProperty } from "./components/heading";
import { Container } from "@/components/sections/ui/container";
import { Gallery } from "./components/gallery";
import { Description } from "./components/description";
import { Design } from "./components/design";
import { ListingPrice } from "./components/details-price/listing-price";

export default function PropertyPage() {
    const { property } = useLoaderData() as { property: Property };

    return (
        <Suspense fallback={<Loading />}>
            <Await resolve={property}>
                {(property: Property) => (
                    <Container>
                        <section className="space-y-7 md:space-y-12">
                            <HeadingProperty {...property} location={property.details.location} />

                            <Gallery images={[property.picture, ...property.details.pictures]} />

                            <div className="flex flex-col gap-10 *:flex-1 lg:flex-row">
                                <Description property={property} />
                                <Design
                                    title={property.title}
                                    location={property.details.location}
                                />
                            </div>
                        </section>

                        <ListingPrice
                            price={property.price}
                            details={property.details.details_price}
                        />
                    </Container>
                )}
            </Await>
        </Suspense>
    );
}

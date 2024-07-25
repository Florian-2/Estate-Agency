import { Loading } from "@/components/ui/loader";
import { Property } from "@/data/properties";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";
import { HeadingProperty } from "./components/heading";
import { Container } from "@/components/sections/ui/container";
import { Gallery } from "./components/gallery";
import { Description } from "./components/description";

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

                            <Description property={property} />
                        </section>
                    </Container>
                )}
            </Await>
        </Suspense>
    );
}

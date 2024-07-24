import { Loading } from "@/components/ui/loader";
import { Property } from "@/data/properties";
import { Suspense } from "react";
import { Await, useLoaderData } from "react-router-dom";

export default function PropertyPage() {
    const { property } = useLoaderData() as { property: Property };

    return (
        <Suspense fallback={<Loading />}>
            <Await resolve={property}>
                {(property) => (
                    <section>
                        <code>
                            <pre>{JSON.stringify(property, undefined, 2)}</pre>
                        </code>
                    </section>
                )}
            </Await>
        </Suspense>
    );
}

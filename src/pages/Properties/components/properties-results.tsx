import { PropertyCard } from "@/components/sections/properties/property-card";
import {
    SectionHeader,
    SectionTitle,
    SectionDescription,
} from "@/components/sections/ui/header-section";
import { Section } from "@/components/sections/ui/section";
import { properties } from "@/data/properties";
import { useSearchParams } from "react-router-dom";

export function PropertiesResults() {
    const [searchParams] = useSearchParams();
    const query = (searchParams.get("query")?.toLowerCase() as string) || "";

    const results =
        query.length > 0
            ? properties.filter((property) => property.title.toLowerCase().includes(query))
            : properties;

    if (!results.length) {
        return <p className="text-center  text-foreground">Not found...</p>;
    }

    return (
        <Section>
            {/* <SectionHeader>
                <SectionTitle>Discover a World of Possibilities</SectionTitle>
                <SectionDescription>
                    Our portfolio of properties is as diverse as your dreams. Explore the following
                    categories to find the perfect property that resonates with your vision of home.
                </SectionDescription>
            </SectionHeader> */}

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results.map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>
        </Section>
    );
}

import { Carousel } from "./ui/carousel";
import { properties } from "@/data/properties";
import { PropertyCard } from "./properties/property-card";
import { SectionHeader, SectionTitle2, SectionDescription } from "./ui/header-section";
import { Section } from "./ui/section";

export function Properties() {
    const propertiesList = properties
        .slice(0, 20)
        .map((property) => <PropertyCard key={property.id} property={property} />);

    return (
        <Section>
            <SectionHeader link={{ label: "View All Properties" }}>
                <SectionTitle2>Featured Properties</SectionTitle2>
                <SectionDescription>
                    Explore our handpicked selection of featured properties. Each listing offers a
                    glimpse into exceptional homes and investments available through Estatein. Click
                    "View All Properties" for more information.
                </SectionDescription>
            </SectionHeader>

            <Carousel elements={propertiesList} />
        </Section>
    );
}

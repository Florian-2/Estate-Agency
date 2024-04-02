import { Carousel } from "./ui/carousel";
import { properties } from "@/data/properties";
import { PropertyCard } from "./properties/property-card";
import { SectionHeader, SectionTitle, SectionDescription } from "./ui/header-section";
import { Section } from "./ui/section";

export function Properties() {
    const propertiesList = properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
    ));

    return (
        <Section>
            <SectionHeader link={{ label: "View All Properties" }}>
                <SectionTitle>Featured Properties</SectionTitle>
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

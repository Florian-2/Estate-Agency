import { Container } from "@/components/sections/ui/container";
import { HeroProperties } from "./components/hero";
import { PropertiesResults } from "./components/properties-results";
import { SearchProperty } from "./components/search-property";

export default function Properties() {
    return (
        <>
            <HeroProperties />
            <SearchProperty />

            <Container>
                <PropertiesResults />
            </Container>
        </>
    );
}

import { Hero } from "@/components/utils/hero/hero";
import { SectionTitle1, SectionDescription } from "@/components/utils/ui/header-section";

export function HeroProperties() {
    return (
        <Hero>
            <SectionTitle1>Find Your Dream Property</SectionTitle1>
            <SectionDescription>
                Welcome to Estatein, where your dream property awaits in every corner of our
                beautiful world. Explore our curated selection of properties, each offering a unique
                story and a chance to redefine your life. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Ipsa quidem, hic maiores officia cupiditate, voluptas nulla
                tempore iure voluptate.
            </SectionDescription>
        </Hero>
    );
}

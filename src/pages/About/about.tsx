import { Container } from "@/components/utils/ui/container";
import { Hero } from "./components/hero";
import { SectionOurValues } from "./components/our-values/section-values";

export default function About() {
    return (
        <Container className="my-2 lg:space-y-32">
            <Hero />
            <SectionOurValues />
        </Container>
    );
}

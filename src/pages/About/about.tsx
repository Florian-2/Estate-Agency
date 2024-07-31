import { Container } from "@/components/utils/ui/container";
import { Hero } from "./components/hero";
import { OurValues } from "./components/our-values/values";
import { Achievements } from "./components/our-achievements/achievements";
import { Teams } from "./components/teams/teams";

export default function About() {
    return (
        <Container className="my-2 lg:space-y-32">
            <Hero />
            <OurValues />
            <Achievements />
            <Teams />
        </Container>
    );
}

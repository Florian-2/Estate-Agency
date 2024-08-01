import { Container } from "@/components/utils/ui/container";
import { Hero } from "./components/hero";
import { OurValues } from "./components/our-values/values";
import { Achievements } from "./components/our-achievements/achievements";
import { Teams } from "./components/teams/teams";
import { Clients } from "./components/our-clients/clients";
import { Experiences } from "./components/our-experiences/experiences";

export default function About() {
    return (
        <Container className="mb-8 mt-2 lg:space-y-32">
            <Hero />
            <OurValues />
            <Achievements />
            <Experiences />
            <Teams />
            <Clients />
        </Container>
    );
}

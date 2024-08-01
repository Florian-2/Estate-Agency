import {
    SectionHeader,
    SectionTitle1,
    SectionDescription,
} from "@/components/utils/ui/header-section";
import { Section } from "@/components/utils/ui/section";
import { ListExperiences } from "./list-experiences";

export function Experiences() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle1>Navigating the Estatein Experience</SectionTitle1>
                <SectionDescription>
                    At Estatein, we've designed a straightforward process to help you find and
                    purchase your dream property with ease. Here's a step-by-step guide to how it
                    all works.
                </SectionDescription>
            </SectionHeader>

            <ListExperiences />
        </Section>
    );
}

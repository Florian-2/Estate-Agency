import {
    SectionHeader,
    SectionTitle1,
    SectionDescription,
} from "@/components/utils/ui/header-section";
import { Section } from "@/components/utils/ui/section";
import { ListTeam } from "./list-team";

export function Teams() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle1>Meet the Estatein Team</SectionTitle1>
                <SectionDescription>
                    At Estatein, our success is driven by the dedication and expertise of our team.
                    Get to know the people behind our mission to make your real estate dreams a
                    reality.
                </SectionDescription>
            </SectionHeader>

            <ListTeam />
        </Section>
    );
}

import {
    SectionHeader,
    SectionTitle1,
    SectionDescription,
} from "@/components/utils/ui/header-section";
import { Section } from "@/components/utils/ui/section";
import { ListAchievements } from "./list-achievements";

export function Achievements() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle1>Our Achievements</SectionTitle1>
                <SectionDescription>
                    Our story is one of continuous growth and evolution. We started as a small team
                    with big dreams, determined to create a real estate platform that transcended
                    the ordinary.
                </SectionDescription>
            </SectionHeader>

            <ListAchievements />
        </Section>
    );
}

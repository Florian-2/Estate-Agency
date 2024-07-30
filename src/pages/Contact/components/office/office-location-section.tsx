import {
    SectionHeader,
    SectionTitle2,
    SectionDescription,
} from "@/components/utils/ui/header-section";
import { Section } from "@/components/utils/ui/section";
import { OfficeTabs } from "./tabs/office-tabs";

export function OfficeLocationSection() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle2>Discover Our Office Locations</SectionTitle2>
                <SectionDescription>
                    Estatein is here to serve you across multiple locations. Whether you're looking
                    to meet our team.
                </SectionDescription>
            </SectionHeader>

            <OfficeTabs />
        </Section>
    );
}

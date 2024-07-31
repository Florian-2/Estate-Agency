import {
    SectionHeader,
    SectionTitle1,
    SectionDescription,
} from "@/components/utils/ui/header-section";
import { ListValues } from "./list-values";

export function OurValues() {
    return (
        <section className="flex flex-col items-center gap-10 lg:flex-row lg:gap-16">
            <SectionHeader className="lg:w-[35%]">
                <SectionTitle1>Our Values</SectionTitle1>
                <SectionDescription>
                    Our story is one of continuous growth and evolution. We started as a small team
                    with big dreams, determined to create a real estate platform that transcended
                    the ordinary.
                </SectionDescription>
            </SectionHeader>

            <ListValues />
        </section>
    );
}

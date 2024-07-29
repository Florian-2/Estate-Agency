import { Carousel } from "@/components/sections/ui/carousel";
import {
    SectionHeader,
    SectionTitle2,
    SectionDescription,
} from "@/components/sections/ui/header-section";
import { Section } from "@/components/sections/ui/section";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/sections/faq/question-card";

export function SectionFaq() {
    const questionsList = questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
    ));

    return (
        <Section>
            <SectionHeader link={{ label: "View All FAQ’s" }}>
                <SectionTitle2>Frequently Asked Questions</SectionTitle2>
                <SectionDescription>
                    Find answers to common questions about Estatein's services, property listings,
                    and the real estate process. We're here to provide clarity and assist you every
                    step of the way.
                </SectionDescription>
            </SectionHeader>

            <Carousel elements={questionsList} />
        </Section>
    );
}

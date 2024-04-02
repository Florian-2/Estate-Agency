import { Carousel } from "./ui/carousel";
import { SectionHeader, SectionTitle, SectionDescription } from "./ui/header-section";
import { Section } from "./ui/section";
import { questions } from "@/data/questions";
import { QuestionCard } from "./faq/question-card";

export function Faq() {
    const questionsList = questions.map((question) => (
        <QuestionCard key={question.id} question={question} />
    ));

    return (
        <Section>
            <SectionHeader link={{ label: "View All FAQ’s" }}>
                <SectionTitle>Frequently Asked Questions</SectionTitle>
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

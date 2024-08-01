import { Carousel } from "@/components/utils/ui/carousel";
import {
    SectionHeader,
    SectionTitle2,
    SectionDescription,
} from "@/components/utils/ui/header-section";
import { Section } from "@/components/utils/ui/section";
import { questions } from "@/data/questions";
import { QuestionCard } from "@/components/utils/faq/question-card";

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

            <Carousel elements={questionsList} className="md:basis-1/2 lg:basis-1/3 xl:basis-1/4" />
        </Section>
    );
}

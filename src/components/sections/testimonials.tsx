import { Carousel } from "./ui/carousel";
import { SectionHeader, SectionTitle, SectionDescription } from "./ui/header-section";
import { Section } from "./ui/section";
import { TestimonialCard } from "./testimonials/testimonials-card";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
    const testimonialsList = testimonials.map((testimonial) => (
        <TestimonialCard key={testimonial.id} client={testimonial} />
    ));

    return (
        <Section>
            <SectionHeader link={{ label: "View All Testimonials" }}>
                <SectionTitle>What Our Clients Say</SectionTitle>
                <SectionDescription>
                    Read the success stories and heartfelt testimonials from our valued clients.
                    Discover why they chose Estatein for their real estate needs.
                </SectionDescription>
            </SectionHeader>

            <Carousel elements={testimonialsList} />
        </Section>
    );
}

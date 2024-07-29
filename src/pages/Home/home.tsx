import { HeroSection } from "@/pages/Home/components";
import { Properties } from "@/components/sections/properties";
import { Testimonials } from "@/components/sections/testimonials";
import { Container } from "@/components/sections/ui/container";
import { SectionFaq } from "@/components/sections/faq/section-faq";

export function HomePage() {
    return (
        <>
            <HeroSection />

            <Container>
                <Properties />
                <Testimonials />
                <SectionFaq />
            </Container>
        </>
    );
}

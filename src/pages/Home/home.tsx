import { HeroSection } from "@/pages/Home/components/hero";
import { Properties } from "@/components/utils/properties/properties";
import { Testimonials } from "@/components/utils/testimonials/testimonials";
import { Container } from "@/components/utils/ui/container";
import { SectionFaq } from "@/components/utils/faq/section-faq";

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

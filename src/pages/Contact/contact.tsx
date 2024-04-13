import { HeroContact } from "./components/hero";
import { Container } from "@/components/sections/ui/container";
import { ContactSection } from "./components/contact/contact-section";
import { OfficeLocationSection } from "./components/office/office-location-section";

export default function Contact() {
    return (
        <>
            <HeroContact />

            <Container>
                <ContactSection />
                <OfficeLocationSection />
            </Container>
        </>
    );
}

import {
    SectionHeader,
    SectionTitle2,
    SectionDescription,
} from "@/components/utils/ui/header-section";
import { Section } from "@/components/utils/ui/section";
import { ContactForm } from "./contact-form";

export function ContactSection() {
    return (
        <Section>
            <SectionHeader>
                <SectionTitle2>Let's Connect</SectionTitle2>
                <SectionDescription>
                    We're excited to connect with you and learn more about your real estate goals.
                    Use the form below to get in touch with Estatein. Whether you're a prospective
                    client, partner, or simply curious about our services, we're here to answer your
                    questions and provide the assistance you need.
                </SectionDescription>
            </SectionHeader>

            <ContactForm />
        </Section>
    );
}

import {
    SectionHeader,
    SectionTitle2,
    SectionDescription,
} from "@/components/sections/ui/header-section";
import { ContactForm } from "./contact-form";

type Props = {
    propertyName: string;
};

export function Contact({ propertyName }: Props) {
    return (
        <section className="flex flex-col gap-10 lg:flex-row">
            <SectionHeader>
                <SectionTitle2>Inquire About "{propertyName}"dsqdsqdq</SectionTitle2>
                <SectionDescription>
                    Interested in this property? Fill out the form below, and our real estate
                    experts will get back to you with more details, including scheduling a viewing
                    and answering any questions you may have.
                </SectionDescription>
            </SectionHeader>

            <ContactForm />
        </section>
    );
}

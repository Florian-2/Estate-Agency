import {
    SectionHeader,
    SectionTitle1,
    SectionDescription,
} from "@/components/utils/ui/header-section";
import { Section } from "@/components/utils/ui/section";
import { Carousel } from "@/components/utils/ui/carousel";
import { ourClients } from "@/data/our-clients";
import { CardClient } from "./card-client";

export function Clients() {
    const clientsCard = ourClients.map((client, i) => <CardClient key={i} {...client} />);

    return (
        <Section>
            <SectionHeader>
                <SectionTitle1>Our Valued Clients</SectionTitle1>
                <SectionDescription>
                    At Estatein, we have had the privilege of working with a diverse range of
                    clients across various industries. Here are some of the clients we've had the
                    pleasure of serving
                </SectionDescription>
            </SectionHeader>

            <Carousel elements={clientsCard} className="basis-full lg:basis-1/2" />
        </Section>
    );
}

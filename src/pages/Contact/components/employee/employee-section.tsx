import {
    SectionHeader,
    SectionTitle2,
    SectionDescription,
} from "@/components/utils/ui/header-section";
import { BoxImages } from "./galery/box-image";
import { Img } from "./galery/img";

export function EmployeeSection() {
    return (
        <section className="grid gap-3 rounded-xl bg-gray-10 p-3 md:grid-cols-2 md:grid-rows-3 md:gap-6 md:p-11">
            <BoxImages>
                <Img src="./office.webp" alt="" />
            </BoxImages>

            <BoxImages>
                <Img src="./team.webp" alt="" />
            </BoxImages>

            <BoxImages>
                <Img src="./work.webp" alt="" />
            </BoxImages>

            <BoxImages className="grid grid-cols-2 grid-rows-1">
                <Img src="./team-man.webp" alt="" />
                <Img src="./team-woman.webp" alt="" />
            </BoxImages>

            <BoxImages>
                <Img src="./meeting.webp" alt="" />
            </BoxImages>

            <SectionHeader className="row-start-5 my-2 self-center md:col-start-1 md:row-start-3">
                <SectionTitle2>Explore Estatein's World</SectionTitle2>
                <SectionDescription>
                    Step inside the world of Estatein, where professionalism meets warmth, and
                    expertise meets passion. Our gallery offers a glimpse into our team and
                    workspaces, inviting you to get to know us better.
                </SectionDescription>
            </SectionHeader>
        </section>
    );
}

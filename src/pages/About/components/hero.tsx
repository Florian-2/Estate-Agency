import {
    SectionHeader,
    SectionTitle1,
    SectionDescription,
} from "@/components/utils/ui/header-section";
import { Statistics } from "@/components/utils/statistics/list-stats";
import houseImgDesktop from "@/assets/house-desktop.webp";
import houseImgLaptop from "@/assets/house-laptop.webp";
import houseImgMobile from "@/assets/house-mobile.webp";
import abstractDesign from "@/assets/abstract-design.svg";

export function Hero() {
    return (
        <section className="flex flex-col-reverse items-center justify-between gap-10 lg:flex-row lg:gap-20 *:lg:flex-1">
            <div className="my-auto space-y-10">
                <SectionHeader>
                    <SectionTitle1>Our Journey</SectionTitle1>
                    <SectionDescription>
                        Our story is one of continuous growth and evolution. We started as a small
                        team with big dreams, determined to create a real estate platform that
                        transcended the ordinary. Over the years, we've expanded our reach, forged
                        valuable partnerships, and gained the trust of countless clients.
                    </SectionDescription>
                </SectionHeader>

                <Statistics />
            </div>

            <div
                className="h-80 w-full rounded-lg border bg-[length:100%_150%] bg-center md:w-3/5 lg:h-auto lg:w-auto"
                style={{ backgroundImage: `url(${abstractDesign})` }}
            >
                <img
                    srcSet={`${houseImgMobile} 358w, ${houseImgLaptop} 690w, ${houseImgDesktop} 920w`}
                    sizes="(min-width: 1024px) 920px,
                    (min-width: 768px) 690px,
                    358px"
                    src={houseImgDesktop}
                    alt="Tower"
                    className="h-full w-full object-cover "
                />
            </div>
        </section>
    );
}

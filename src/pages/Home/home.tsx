import { Faq, HeroSection } from "@/pages/Home/components";
import { ExploreProperties } from "@/components/sections/explore-properties";
import { Properties } from "@/components/sections/properties";
import { Testimonials } from "@/components/sections/testimonials";

export function HomePage() {
    return (
        <>
            <HeroSection />

            <div className="mx-2 flex flex-col items-center lg:mx-4">
                <div className=" mt-10 w-full max-w-screen-2xl space-y-10 lg:mt-20 lg:space-y-24">
                    <Properties />
                    <Testimonials />
                    <Faq />
                </div>
            </div>

            <ExploreProperties />
        </>
    );
}

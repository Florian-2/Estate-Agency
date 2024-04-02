import { Faq } from "@/components/sections/faq";
import { HeroSection } from "@/components/sections/hero";
import { Properties } from "@/components/sections/properties";
import { Testimonials } from "@/components/sections/testimonials";

export function HomePage() {
    return (
        <>
            <HeroSection />

            <div className="mx-auto mt-10 space-y-10 px-2 lg:mt-20 lg:max-w-screen-xl lg:space-y-24 lg:px-4 xl:max-w-screen-2xl">
                <Properties />
                <Testimonials />
                <Faq />
            </div>
        </>
    );
}

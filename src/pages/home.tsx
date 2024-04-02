import { HeroSection } from "@/components/sections/hero";
import { Properties } from "@/components/sections/properties";

export function HomePage() {
    return (
        <>
            <HeroSection />

            <div className="mx-auto mt-10 px-2 lg:mt-20 lg:max-w-screen-xl lg:px-4 xl:max-w-screen-2xl">
                <Properties />
            </div>
        </>
    );
}

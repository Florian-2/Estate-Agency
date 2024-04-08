import { BusinessStatsCard } from "@/components/sections/statistics/business-stats-card";
import { Button } from "@/components/ui/button";
import { statistics } from "@/data/statistics";

import towerDesktop from "@/assets/tower-desktop.webp";
import towerLaptop from "@/assets/tower-laptop.webp";
import towerMobile from "@/assets/tower-mobile.webp";

export function HeroSection() {
    return (
        <div className="mx-auto grid max-w-screen-3xl auto-cols-auto grid-cols-1 lg:max-h-[622px] lg:grid-cols-2 lg:grid-rows-1 xl:max-h-[814px]">
            <section className="flex px-2 lg:items-center lg:justify-center lg:pt-2">
                <div className="w-full space-y-10 lg:max-w-2xl lg:space-y-12">
                    <div className="space-y-4 text-center md:text-start lg:space-y-5">
                        <h1 className="text-3xl lg:text-4xl xl:text-5xl">
                            Discover Your Dream <br /> Property with Estatein
                        </h1>
                        <p className="lg:text-base xl:text-lg">
                            Your journey to finding the perfect property begins here. Explore our
                            listings to find the home that matches your dreams.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4 *:flex-1 md:flex-row md:*:flex-none">
                        <Button variant={"outline"}>Learn More</Button>
                        <Button>Browse Properties</Button>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        {statistics.map((stat, i) => (
                            <BusinessStatsCard key={i} {...stat} />
                        ))}
                    </div>
                </div>
            </section>

            <div className="order-first h-96 p-2 lg:order-last lg:h-full lg:p-0">
                <img
                    srcSet={`${towerMobile} 358w, ${towerLaptop} 690w, ${towerDesktop} 920w`}
                    sizes="(min-width: 1024px) 920px,
                    (min-width: 768px) 690px,
                    358px"
                    src={towerLaptop}
                    alt="Tower"
                    className="h-full w-full rounded-xl object-cover lg:rounded-none"
                />
            </div>
        </div>
    );
}

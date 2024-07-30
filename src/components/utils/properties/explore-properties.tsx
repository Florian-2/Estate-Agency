import { Button } from "@/components/ui/button";
import { Link } from "@/components/navigation";
import { SectionDescription, SectionTitle2 } from "../ui/header-section";
import Squares from "@/assets/squares.svg";

export function ExploreProperties() {
    return (
        <section
            className={
                "relative flex w-full flex-col items-center justify-center overflow-hidden border-t px-2 py-12 md:flex-row lg:py-14"
            }
        >
            <img src={Squares} alt="Squares" className="absolute left-0 top-0 -z-10 scale-y-[-1]" />

            <div className="mx-2 flex max-w-screen-2xl flex-grow flex-col items-end justify-center gap-5 py-4 md:flex-row md:justify-between md:gap-10 lg:mx-4">
                <div className="space-y-2 lg:space-y-3">
                    <SectionTitle2>Start Your Real Estate Journey Today</SectionTitle2>
                    <SectionDescription>
                        Your dream property is just a click away. Whether you're looking for a new
                        home, a strategic investment, or expert real estate advice, Estatein is here
                        to assist you every step of the way. Take the first step towards your real
                        estate goals and explore our available properties or get in touch with our
                        team for personalized assistance.
                    </SectionDescription>
                </div>

                <Button
                    className="w-full self-end text-center text-sm md:w-fit xl:text-base"
                    asChild
                >
                    <Link to="/properties">Explore Properties</Link>
                </Button>
            </div>

            <img
                src={Squares}
                alt="Squares"
                className="absolute bottom-0 right-0 -z-10 scale-x-[-1]"
            />
        </section>
    );
}

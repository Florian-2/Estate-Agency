import { SectionDescription } from "@/components/sections/ui/header-section";

export function Hero() {
    return (
        <section className="border-b bg-gradient-130 from-gray-15/70 to-gray-15/0 px-2 py-14 md:py-24 lg:px-4 lg:py-32">
            <div className="mx-auto max-w-screen-2xl space-y-3.5 text-center md:text-start">
                <h1 className="text-3xl lg:text-4xl">Find Your Dream Property</h1>
                <SectionDescription>
                    Welcome to Estatein, where your dream property awaits in every corner of our
                    beautiful world. Explore our curated selection of properties, each offering a
                    unique story and a chance to redefine your life. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ipsa quidem, hic maiores officia cupiditate,
                    voluptas nulla tempore iure voluptate.
                </SectionDescription>
            </div>
        </section>
    );
}

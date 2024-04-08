import { Hero } from "./components/hero";
import { PropertiesResults } from "./components/properties-results";
import { SearchProperty } from "./components/ui/search-property";

export default function Properties() {
    return (
        <>
            <Hero />
            <SearchProperty />

            <div className="mx-2 flex flex-col items-center lg:mx-4">
                <div className="my-10 w-full max-w-screen-2xl space-y-10 lg:space-y-24">
                    <PropertiesResults />
                </div>
            </div>
        </>
    );
}

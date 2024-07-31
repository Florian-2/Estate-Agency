import { ourValues } from "@/data/our-values";
import { CardValue } from "./card-value";
import { Separator } from "@/components/ui/separator";

export function ListValues() {
    return (
        <div className="w-full rounded-lg bg-gray-10 p-2 lg:w-[65%]">
            <div className="md:grid-rows-test grid grid-cols-1 grid-rows-4 gap-3 divide-y rounded-lg border bg-gray-08 p-6 md:grid-cols-2 md:gap-6 md:divide-y-0 md:p-12">
                <CardValue {...ourValues[0]} />
                <CardValue {...ourValues[1]} />

                <Separator className="hidden md:col-start-1 md:col-end-3 md:block" />

                <CardValue {...ourValues[2]} className="md:row-start-3" />
                <CardValue {...ourValues[3]} className="md:row-start-3" />
            </div>
        </div>
    );
}

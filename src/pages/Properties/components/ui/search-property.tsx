import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Box, CalendarDays, DollarSign, Home, MapPin, Search } from "lucide-react";
import { FormEvent } from "react";

const selects = [
    {
        name: "Location",
        icon: <MapPin size={20} />,
    },
    {
        name: "Property Type",
        icon: <Home size={20} />,
    },
    {
        name: "Property Size",
        icon: <Box size={20} />,
    },
    {
        name: "Pricing Range",
        icon: <DollarSign size={20} />,
    },
    {
        name: "Build Year",
        icon: <CalendarDays size={20} />,
    },
];

export function SearchProperty() {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        window.alert("Ce site ");
    }

    return (
        <div className="mx-2 lg:mx-4 xl:-mt-14 xl:mb-20 ">
            <div className="mx-auto my-8 flex max-w-screen-2xl flex-col items-center justify-center gap-4 *:w-full xl:gap-0">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-6xl rounded-xl bg-gray-10 p-2.5 xl:rounded-b-none"
                >
                    <div className="flex overflow-hidden rounded-xl rounded-b-none border bg-gray-08 p-3.5">
                        <Input
                            placeholder="Search for a property"
                            className="h-auto items-stretch border-none text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
                        />
                        <Button className="gap-2 rounded-lg font-normal">
                            <Search className="w-4 lg:w-4.5" />
                            <span className="hidden md:inline-flex">Find Property</span>
                        </Button>
                    </div>
                </form>

                <div className="flex flex-wrap gap-5 rounded-lg bg-gray-10 p-2.5">
                    {selects.map((select, i) => (
                        <Select key={i}>
                            <SelectTrigger className="h-12 min-w-52 flex-1 gap-2 font-medium text-gray-60">
                                {select.icon}
                                <Separator orientation="vertical" />
                                <SelectValue placeholder={select.name} />
                            </SelectTrigger>

                            <SelectContent>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <SelectItem value={`${select.name.toLowerCase()}-${index}`}>
                                        {select.name} {index}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    ))}
                </div>
            </div>
        </div>
    );
}

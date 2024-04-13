import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
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
    const [, setSearchParams] = useSearchParams();

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const query = new FormData(form).get("query") as string;

        setSearchParams(query ? { query: query ?? "" } : undefined);
    }

    return (
        <div className="mx-2 mt-8 lg:mx-4 xl:-mt-14">
            <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-center gap-4 *:w-full xl:gap-0">
                <form
                    onSubmit={handleSubmit}
                    className="max-w-6xl rounded-xl bg-gray-10 p-2.5 xl:rounded-b-none"
                >
                    <div className="flex overflow-hidden rounded-xl rounded-b-none border bg-gray-08 p-3.5">
                        <Input
                            placeholder="Search for a property"
                            name="query"
                            className="h-auto items-stretch border-none bg-background text-lg focus-visible:ring-0 focus-visible:ring-offset-0"
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
                            <SelectTrigger className="min-w-52 flex-1 gap-2 bg-background">
                                {select.icon}
                                <Separator orientation="vertical" />
                                <SelectValue placeholder={select.name} className="text-red-500" />
                            </SelectTrigger>

                            <SelectContent>
                                {Array.from({ length: 3 }).map((_, index) => (
                                    <SelectItem
                                        key={index}
                                        value={`${select.name.toLowerCase()}-${index}`}
                                    >
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

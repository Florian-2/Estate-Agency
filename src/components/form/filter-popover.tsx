import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Separator } from "@/components/ui/separator";
import { Filter } from "@/data/search/type";
import { FormEvent, useState } from "react";
import { useSearchParams } from "react-router-dom";

type Props = {
    filter: Filter;
};

export function FilterPopover({ filter }: Props) {
    const [searchParams, setSearchParams] = useSearchParams();
    const [isOpen, setIsOpen] = useState(false);

    const [min = filter.valueMinMax[0], max = filter.valueMinMax[1]] = searchParams.has(filter.type)
        ? searchParams.get(filter.type)!.split("-")
        : filter.valueMinMax;

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const formData = new FormData(form);

        const [min, max] = formData.values();

        searchParams.set(filter.type, `${min}-${max}`);
        setSearchParams(searchParams);

        setIsOpen(false);
    }

    function removeFilter() {
        searchParams.delete(filter.type);
        setSearchParams(searchParams);

        setIsOpen(false);
    }

    return (
        <Popover open={isOpen} onOpenChange={setIsOpen}>
            <PopoverTrigger>
                <div className="flex h-full items-center gap-2">
                    {filter.icon}
                    <Separator orientation="vertical" />
                    <span className="whitespace-nowrap">{filter.name}</span>
                </div>
            </PopoverTrigger>

            <PopoverContent className="space-y-2.5">
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <div>
                            <Label htmlFor={filter.type + "_min"}>Min</Label>
                            <Input
                                type="number"
                                name={filter.type + "_min"}
                                defaultValue={min}
                                className="h-10"
                                min={filter.valueMinMax[0]}
                                max={filter.valueMinMax[1]}
                            />
                        </div>

                        <div>
                            <Label htmlFor={filter.type + "_max"}>Max</Label>
                            <Input
                                type="number"
                                name={filter.type + "_max"}
                                defaultValue={max}
                                className="h-10"
                                min={filter.valueMinMax[0]}
                                max={filter.valueMinMax[1]}
                            />
                        </div>
                    </div>

                    <div className="flex gap-2 *:flex-1">
                        <Button type="submit">Apply</Button>
                        <Button type="button" variant={"secondary"} onClick={removeFilter}>
                            Remove
                        </Button>
                    </div>
                </form>
            </PopoverContent>
        </Popover>
    );
}

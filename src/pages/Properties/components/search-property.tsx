import { FormEvent } from "react";
import { useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterX, Search } from "lucide-react";

import { filters } from "@/data/search/filters";
import { selectOptions } from "@/data/search/selects";

import { FilterPopover } from "@/components/form/filter-popover";
import { SelectFilter } from "@/components/form/select-filter";

export function SearchProperty() {
    const [searchParams, setSearchParams] = useSearchParams();
    const defaultValue = searchParams.get("query")?.toString() || undefined;

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const form = e.currentTarget as HTMLFormElement;
        const query = new FormData(form).get("query")?.toString();

        if (query) {
            searchParams.set("query", query);
            setSearchParams(searchParams);
        } else {
            searchParams.delete("query");
            setSearchParams(searchParams);
        }
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
                            defaultValue={defaultValue}
                        />

                        <div className="flex gap-2">
                            <Button className="gap-2 rounded-lg font-normal">
                                <Search className="w-4 lg:w-4.5" />
                                <span className="hidden md:inline-flex">Find Property</span>
                            </Button>

                            {searchParams.size > 0 && (
                                <Button
                                    variant={"outline"}
                                    className="gap-2 rounded-lg font-normal"
                                    onClick={() => setSearchParams()}
                                >
                                    <FilterX className="w-4 lg:w-4.5" />
                                    <span className="hidden md:inline-flex">Reset Filter</span>
                                </Button>
                            )}
                        </div>
                    </div>
                </form>

                <div className="flex flex-wrap gap-5 rounded-lg bg-gray-10 p-2.5 *:flex-1">
                    {selectOptions.map((select, i) => (
                        <SelectFilter key={i} select={select} />
                    ))}

                    {filters.map((filter, i) => (
                        <FilterPopover key={i} filter={filter} />
                    ))}
                </div>
            </div>
        </div>
    );
}

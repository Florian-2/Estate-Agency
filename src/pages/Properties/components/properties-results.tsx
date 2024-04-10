import { Pagination } from "@/components/navigation/pagination";
import { PropertyCard } from "@/components/sections/properties/property-card";
import { properties } from "@/data/properties";
import { useSearchParams } from "react-router-dom";

const PER_PAGES = 10;

export function PropertiesResults() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    const query = (searchParams.get("query")?.toLowerCase() as string) || "";

    const results =
        query.length > 0
            ? properties.filter((property) => property.title.toLowerCase().includes(query))
            : properties;

    const startIndex = (currentPage - 1) * PER_PAGES;
    const endIndex = currentPage * PER_PAGES;

    const totalPages = Math.ceil(results.length / PER_PAGES);

    function handleChangePage(page: string) {
        setSearchParams((params) => {
            params.set("page", page);
            return params;
        });
    }

    if (!results.length) {
        return <p className="my-10 text-center text-foreground">Not found...</p>;
    }

    if (currentPage > totalPages) {
        return (
            <p className="my-10 text-center text-foreground">
                Oops you went too far, go back a notch.
            </p>
        );
    }

    return (
        <div className="mt-10 space-y-20 lg:mt-16">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results.slice(startIndex, endIndex).map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onChangePage={handleChangePage}
                />
            )}
        </div>
    );
}

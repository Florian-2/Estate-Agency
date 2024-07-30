import { Pagination } from "@/components/navigation/pagination";
import { PropertyCard } from "@/components/utils/properties/property-card";
import { properties } from "@/data/properties";
import { filter } from "@/data/search/filters";
import { SearchProperty } from "@/data/search/type";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

const PER_PAGES = 8;

export function PropertiesResults() {
    const [searchParams, setSearchParams] = useSearchParams();
    const currentPage = Number(searchParams.get("page")) || 1;

    // Filtrer les annonces en utilisant les searchParams de l'URL
    const results = useMemo(() => {
        return properties.filter((property) => {
            return Object.values(SearchProperty).every((param) => {
                const paramValue = searchParams.get(param);
                return filter(property, param as SearchProperty, paramValue);
            });
        });
    }, [searchParams]);

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
        <div className="space-y-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {results.slice(startIndex, endIndex).map((property) => (
                    <PropertyCard key={property.id} property={property} />
                ))}
            </div>

            {totalPages > 1 && (
                <Pagination
                    currentPage={currentPage}
                    totalCount={results.length}
                    pageSize={PER_PAGES}
                    onChangePage={handleChangePage}
                />
            )}
        </div>
    );
}

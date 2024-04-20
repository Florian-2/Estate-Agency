import { Button } from "@/components/ui/button";
import {
    Pagination as PaginationBase,
    PaginationContent,
    PaginationItem,
    PaginationEllipsis,
} from "@/components/ui/pagination";
import { DOTS, usePagination } from "@/hooks/use-pagination";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    currentPage: number;
    totalCount: number;
    pageSize: number;
    onChangePage: (page: string) => void;
};

export function Pagination({ currentPage, totalCount, pageSize, onChangePage }: Props) {
    const paginationRange = usePagination({ currentPage, totalCount, pageSize });
    const lastPage = paginationRange && paginationRange[paginationRange.length - 1];

    return (
        <PaginationBase>
            <PaginationContent className="flex flex-col gap-5 md:flex-row">
                <PaginationItem>
                    <Button
                        variant={"outline"}
                        disabled={currentPage === 1}
                        onClick={() => onChangePage(`${currentPage - 1}`)}
                        className="gap-1"
                    >
                        <ChevronLeft size={17} />
                        Previous
                    </Button>
                </PaginationItem>

                <div className="flex flex-wrap justify-center gap-2">
                    {paginationRange?.map((pageNumber, index) => {
                        if (pageNumber === DOTS) {
                            return (
                                <PaginationItem key={index}>
                                    <PaginationEllipsis className="h-full w-full" />
                                </PaginationItem>
                            );
                        }

                        return (
                            <PaginationItem key={index}>
                                <Button
                                    onClick={() => onChangePage(`${pageNumber}`)}
                                    key={index}
                                    variant={"outline"}
                                    className={cn("", currentPage === pageNumber && "bg-gray-10")}
                                >
                                    {pageNumber}
                                </Button>
                            </PaginationItem>
                        );
                    })}
                </div>

                <PaginationItem>
                    <Button
                        variant={"outline"}
                        disabled={currentPage === lastPage}
                        onClick={() => onChangePage(`${currentPage + 1}`)}
                        className="gap-1"
                    >
                        Next
                        <ChevronRight size={17} />
                    </Button>
                </PaginationItem>
            </PaginationContent>
        </PaginationBase>
    );
}

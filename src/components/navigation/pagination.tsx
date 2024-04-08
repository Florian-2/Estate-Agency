import { Button } from "@/components/ui/button";
import {
    Pagination as PaginationBase,
    PaginationContent,
    PaginationItem,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
    currentPage: number;
    totalPages: number;
    onChangePage: (page: string) => void;
};

export function Pagination({ currentPage, totalPages, onChangePage }: Props) {
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

                <div className="flex gap-2">
                    {Array.from({ length: totalPages }).map((_, index) => (
                        <PaginationItem key={index}>
                            <Button
                                onClick={() => onChangePage(`${index + 1}`)}
                                key={index}
                                variant={"outline"}
                                className={cn("", currentPage === index + 1 && "bg-gray-10")}
                            >
                                {index + 1}
                            </Button>
                        </PaginationItem>
                    ))}
                </div>

                <PaginationItem>
                    <Button
                        variant={"outline"}
                        disabled={currentPage === totalPages}
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

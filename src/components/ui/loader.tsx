import { Loader } from "lucide-react";

export function Loading() {
    return (
        <div className="flex min-h-[70vh] items-center justify-center">
            <Loader className="size-7 animate-spin md:size-9 lg:size-11" />
        </div>
    );
}

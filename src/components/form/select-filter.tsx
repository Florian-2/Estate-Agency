import { Separator } from "@/components/ui/separator";
import { Select as SelectType } from "@/data/search/type";
import {
    Select,
    SelectTrigger,
    SelectValue,
    SelectContent,
    SelectItem,
} from "@/components/ui/select";
import { useSearchParams } from "react-router-dom";

type Props = {
    select: SelectType;
};

export function SelectFilter({ select }: Props) {
    const [searchParams, setSearchParams] = useSearchParams();

    function handleValueChange(value: string) {
        if (!value) return;

        console.log(select.type, value);

        searchParams.set(select.type, value);
        setSearchParams(searchParams);
    }

    return (
        <Select onValueChange={handleValueChange}>
            <SelectTrigger>
                <div className="flex h-full items-center gap-2">
                    {select.icon}
                    <Separator orientation="vertical" />
                    <SelectValue placeholder={select.name} />
                </div>
            </SelectTrigger>

            <SelectContent>
                {select.options.map(({ label, value }, index) => (
                    <SelectItem key={index} value={value}>
                        {label}
                    </SelectItem>
                ))}
            </SelectContent>
        </Select>
    );
}

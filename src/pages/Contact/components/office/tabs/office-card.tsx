import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Office } from "@/data/offices";

type Props = {
    office: Office;
};

export function OfficeCard({ office }: Props) {
    return (
        <article className="flex flex-col justify-between space-y-7 rounded-xl border p-9">
            <div className="space-y-3">
                <span className="text-sm lg:text-base">{office.title}</span>
                <address className="text-xl font-semibold not-italic lg:text-2xl">
                    {office.address}
                </address>
                <p>{office.description}</p>
            </div>

            <div className="flex flex-wrap gap-2">
                {office.infos.map((info, i) => (
                    <Badge key={i} variant={"outline"} className="gap-2 bg-gray-10">
                        {info.icon}
                        {info.value}
                    </Badge>
                ))}
            </div>

            <Button>Get Direction</Button>
        </article>
    );
}

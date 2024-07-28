import { Badge } from "@/components/ui/badge";
import { Collapsible, CollapsibleTrigger, CollapsibleContent } from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { DetailPrice as DetailPriceType } from "@/data/properties";
import { currencyUS } from "@/lib/utils";
import { Fragment } from "react/jsx-runtime";

type Props = {
    detail: DetailPriceType;
};

export function DetailPrice({ detail }: Props) {
    return (
        <Collapsible defaultOpen className="rounded-lg border">
            <CollapsibleTrigger className="text-xl">{detail.label}</CollapsibleTrigger>

            <CollapsibleContent asChild>
                <div className="space-y-5 p-7">
                    {detail.fees.map((tax, i) => (
                        <Fragment key={i}>
                            <div className="space-y-3">
                                <p className="text-base">{tax.fee_name}</p>

                                <div className="flex items-center gap-3">
                                    <span className="text-xl">{currencyUS(tax.price)}</span>
                                    <Badge variant={"outline"} className="bg-gray-10 text-gray-60">
                                        {tax.description}
                                    </Badge>
                                </div>
                            </div>

                            <Separator className="last:hidden" />
                        </Fragment>
                    ))}
                </div>
            </CollapsibleContent>
        </Collapsible>
    );
}

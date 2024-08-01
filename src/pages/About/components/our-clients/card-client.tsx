import { Link } from "@/components/navigation";
import { CardBorder } from "@/components/ui/card-border";
import { Separator } from "@/components/ui/separator";
import { OurClient } from "@/data/our-clients";
import { LayoutGrid, Zap } from "lucide-react";

export function CardClient({ category, comment, company, domain, since }: OurClient) {
    return (
        <CardBorder className="h-full grow space-y-7">
            <div className="flex items-center justify-between gap-2">
                <div className="space-y-1">
                    <p className="text-base">Since {since}</p>
                    <h3 className="text-lg md:text-2xl">{company}</h3>
                </div>

                <Link to={"#"} active className="bg-gray-10">
                    Visit Website
                </Link>
            </div>

            <div className="grid-cols-auto-3 grid gap-5 *:space-y-1">
                <div>
                    <div className="flex items-center gap-1 *:text-gray-60">
                        <LayoutGrid size={16} />
                        <span className="text-sm">Domain</span>
                    </div>
                    <p className="text-white">{domain}</p>
                </div>

                <Separator orientation="vertical" />

                <div>
                    <div className="flex items-center gap-1 *:text-gray-60">
                        <Zap size={16} />
                        <span className="text-sm">Category</span>
                    </div>
                    <p className="text-white">{category}</p>
                </div>
            </div>

            <div className="space-y-3 rounded-lg border p-6">
                <p>What They Said 🤗</p>
                <p className="text-white">{comment}</p>
            </div>
        </CardBorder>
    );
}

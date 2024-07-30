import { statistics } from "@/data/statistics";
import { BusinessStatsCard } from "./business-stats-card";

export function Statistics() {
    return (
        <div className="flex flex-wrap gap-4">
            {statistics.map((stat, i) => (
                <BusinessStatsCard key={i} {...stat} />
            ))}
        </div>
    );
}

import { CardBorder } from "@/components/ui/card-border";
import { ourAchievements } from "@/data/achievements";

export function ListAchievements() {
    return (
        <div className="flex flex-col gap-4 *:flex-1 md:flex-row md:gap-7">
            {ourAchievements.map(({ label, description }, i) => (
                <CardBorder key={i} className="flex flex-col justify-between gap-5">
                    <h3 className="text-xl">{label}</h3>
                    <p>{description}</p>
                </CardBorder>
            ))}
        </div>
    );
}

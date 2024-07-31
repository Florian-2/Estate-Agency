import { teams } from "@/data/teams";
import { CardTeam } from "./card-team";

export function ListTeam() {
    return (
        <div className="grid-cols-auto-fit grid gap-5 *:flex-1">
            {teams.map((team, i) => (
                <CardTeam key={i} {...team} />
            ))}
        </div>
    );
}

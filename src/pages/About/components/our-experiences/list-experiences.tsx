import { ourExperiences } from "@/data/experiences";
import { CardExperience } from "./card-experience";

export function ListExperiences() {
    return (
        <div className="grid grid-cols-1 gap-6 *:flex-1 md:grid-cols-2 lg:grid-cols-3">
            {ourExperiences.map((exp, i) => (
                <CardExperience key={i} {...exp} index={i + 1} />
            ))}
        </div>
    );
}

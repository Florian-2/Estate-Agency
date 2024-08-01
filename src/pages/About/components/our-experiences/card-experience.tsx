import { Experience } from "@/data/experiences";

type Props = Experience & {
    index: number;
};

export function CardExperience({ label, description, index }: Props) {
    return (
        <article className="flex flex-col">
            <div className="border-l border-l-primary px-4 py-2.5">
                <p className="text-base text-white">Step {index.toString().padStart(2, "0")}</p>
            </div>

            <div className="border-gradient-wraper flex-grow">
                <div className="gradient-primary h-full space-y-3 p-10">
                    <h3 className="text-lg text-white">{label}</h3>
                    <p className="text-base">{description}</p>
                </div>
            </div>
        </article>
    );
}

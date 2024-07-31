import { Link } from "@/components/navigation";
import { Button } from "@/components/ui/button";
import { Team } from "@/data/teams";
import { Send, Twitter } from "lucide-react";

export function CardTeam({ fullname, urlPicture, job, social }: Team) {
    return (
        <article className="space-y-5 rounded-xl border p-4.5 md:p-6">
            <figure className="w-full overflow-hidden">
                <img
                    src={urlPicture}
                    alt={fullname}
                    className="max-h-60 w-full rounded-lg object-cover"
                />

                <figcaption className="-mt-6 text-center">
                    <Button asChild className="rounded-full px-5 py-2.5">
                        <Link to={social} target="_blank">
                            <Twitter size={20} color="white" fill="white" />
                        </Link>
                    </Button>
                </figcaption>
            </figure>

            <div className="space-y-4">
                <div className="flex flex-col items-center">
                    <h3 className="text-xl">{fullname}</h3>
                    <p className="text-sm md:text-base">{job}</p>
                </div>

                <div className="flex w-full items-center justify-between rounded-full border bg-gray-10 p-2.5 pl-5">
                    <p className="text-white">Say Hello 👋</p>
                    <Button className="rounded-full" size={"icon"}>
                        <Send size={20} />
                    </Button>
                </div>
            </div>
        </article>
    );
}

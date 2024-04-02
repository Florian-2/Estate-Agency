import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Testimonial } from "@/data/testimonials";
import { Star } from "lucide-react";

type Props = {
    client: Testimonial;
};

export function TestimonialCard({ client }: Props) {
    const avatarFallback = `${client.first_name[0]}${client.last_name[0]}`.toUpperCase();

    const stars = Array.from({ length: client.note }).map((_, i) => (
        <div className="rounded-full border bg-gray-10 p-2.5" key={i}>
            <Star color="#FFE500" fill="#FFE500" className="h-3.5 w-3.5 lg:h-4 lg:w-4" />
        </div>
    ));

    return (
        <article className="space-y-6 rounded-xl border p-7 lg:space-y-7">
            <div className="flex gap-2">{stars}</div>

            <div className="space-y-2 lg:space-y-2.5">
                <h4 className="text-lg lg:text-xl">{client.testimonial_title}</h4>
                <p className="line-clamp-3 text-sm font-light text-white lg:text-base">
                    {client.testimonial}
                </p>
            </div>

            <div className="flex items-center gap-2.5">
                <Avatar>
                    <AvatarImage src={client.avatar} />
                    <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>

                <div>
                    <p className="text-base text-white lg:text-lg">
                        {client.first_name} {client.last_name}
                    </p>
                    <p className="text-sm lg:text-base">
                        {client.country}, {client.state}
                    </p>
                </div>
            </div>
        </article>
    );
}

import { GraduationCap, Star, Users } from "lucide-react";
import { ReactElement } from "react";

export interface OurValue {
    label: string;
    description: string;
    icon: ReactElement;
}

export const ourValues: OurValue[] = [
    {
        label: "Trust",
        description:
            "Trust is the cornerstone of every successful real estate transaction.   Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        icon: <Star className="fill-primary text-primary" size={22} />,
    },
    {
        label: "Excellence",
        description:
            "We set the bar high for ourselves. From the properties we list to the services we provide.",
        icon: <GraduationCap className="fill-primary text-primary" size={22} />,
    },
    {
        label: "Client-Centric",
        description:
            "Your dreams and needs are at the center of our universe. We listen, understand.",
        icon: <Users className="fill-primary text-primary" size={22} />,
    },
    {
        label: "Our Commitment",
        description:
            "We are dedicated to providing you with the highest level of service, professionalism.",
        icon: <Star className="fill-primary text-primary" size={22} />,
    },
];

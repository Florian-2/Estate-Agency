import maxPicture from "@/assets/teams/max.webp";
import davidPicture from "@/assets/teams/david.webp";
import michaelPicture from "@/assets/teams/michael.webp";
import sarahPicture from "@/assets/teams/sarah.webp";

export type Team = {
    fullname: string;
    job: string;
    urlPicture: string;
    social: string;
};

export const teams: Team[] = [
    {
        fullname: "Max Mitchell",
        job: "Founder",
        urlPicture: maxPicture,
        social: "https://florian-sicilia.fr/",
    },
    {
        fullname: "Sarah Johnson",
        job: "Chief Real Estate Officer",
        urlPicture: sarahPicture,
        social: "https://florian-sicilia.fr/",
    },
    {
        fullname: "David Brown",
        job: "Head of Property Management",
        urlPicture: davidPicture,
        social: "https://florian-sicilia.fr/",
    },
    {
        fullname: "Michael Turner",
        job: "Legal Counsel",
        urlPicture: michaelPicture,
        social: "https://florian-sicilia.fr/",
    },
];

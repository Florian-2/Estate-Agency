import { Mail, MapPin, Phone } from "lucide-react";

export type Office = (typeof offices)[0];

export enum OfficeType {
    REGIONAL,
    INTERNATIONAL,
}

export const offices = [
    {
        officeType: OfficeType.REGIONAL,
        title: "Regional Offices",
        address: "123 Estatein Plaza, City Center, Metropolis",
        description:
            "Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        infos: [
            {
                id: 1,
                type: "email",
                value: "info@estatein.com",
                icon: <Mail size={20} />,
            },
            {
                id: 2,
                type: "phone",
                value: "+1 (123) 456-7890",
                icon: <Phone size={20} />,
            },
            {
                id: 3,
                type: "location",
                value: "Metropolis",
                icon: <MapPin size={20} />,
            },
        ],
    },
    {
        officeType: OfficeType.REGIONAL,
        title: "Regional Offices",
        address: "45 Rue de l'Immobilière, 75001 Paris",
        description:
            "Our regional office in Paris is located in the heart of the City of Light, offering superior real estate services in the Paris region.",
        infos: [
            {
                id: 1,
                type: "email",
                value: "paris@estatein.com",
                icon: <Mail size={20} />,
            },
            {
                id: 2,
                type: "phone",
                value: "+33 (0)1 23 45 67 89",
                icon: <Phone size={20} />,
            },
            {
                id: 3,
                type: "location",
                value: "Paris",
                icon: <MapPin size={20} />,
            },
        ],
    },
    {
        officeType: OfficeType.INTERNATIONAL,
        title: "International Offices",
        address: "789 Ocean Drive, Suite 101, Miami, FL",
        description:
            "Our Miami branch caters to international clients seeking luxurious properties in the vibrant city of Miami and surrounding areas.",
        infos: [
            {
                id: 1,
                type: "email",
                value: "miami@estatein.com",
                icon: <Mail size={20} />,
            },
            {
                id: 2,
                type: "phone",
                value: "+1 (305) 555-1234",
                icon: <Phone size={20} />,
            },
            {
                id: 3,
                type: "location",
                value: "Miami",
                icon: <MapPin size={20} />,
            },
        ],
    },
    {
        officeType: OfficeType.INTERNATIONAL,
        title: "International Offices",
        address: "2 Chome-1-1 Nihonbashi, Chuo City, Tokyo",
        description:
            "Our Tokyo branch specializes in catering to the unique needs of clients in the bustling real estate market of Tokyo and its surrounding areas.",
        infos: [
            {
                id: 1,
                type: "email",
                value: "tokyo@estatein.com",
                icon: <Mail size={20} />,
            },
            {
                id: 2,
                type: "phone",
                value: "+81 3-1234-5678",
                icon: <Phone size={20} />,
            },
            {
                id: 3,
                type: "location",
                value: "Tokyo",
                icon: <MapPin size={20} />,
            },
        ],
    },
];

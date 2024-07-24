import { MapPin } from "lucide-react";
import { SearchProperty, Select } from "./type";
import { properties } from "../properties";

const initSelects: Select[] = [
    {
        name: "Location",
        type: SearchProperty.LOCATION,
        options: [],
        icon: <MapPin size={20} />,
    },
];

function createSelects() {
    return initSelects.map((select) => {
        switch (select.type) {
            case SearchProperty.LOCATION: {
                const locations = [
                    ...new Set(properties.map((property) => property.details.location.state)),
                ];

                locations.forEach((location) => {
                    select.options.push({
                        label: location,
                        value: location.toLowerCase(),
                    });
                });

                break;
                // return select;
            }

            default:
                console.warn();

                break;
        }

        return select;
    });
}

export const selectOptions = createSelects();

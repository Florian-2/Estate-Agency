import { Home, Box, DollarSign, CalendarDays } from "lucide-react";
import { Property, properties } from "../properties";
import { Filter, SearchProperty } from "./type";

const initFilters: Filter[] = [
    {
        name: "Bedrooms",
        type: SearchProperty.BEDROOMS,
        valueMinMax: [0, 0],
        icon: <Home size={20} />,
    },
    {
        name: "Property Size",
        type: SearchProperty.PROPERTY_SIZE,

        valueMinMax: [0, 0],
        icon: <Box size={20} />,
    },
    {
        name: "Pricing Range",
        type: SearchProperty.PROPERTY_RANGE,
        valueMinMax: [0, 0],
        icon: <DollarSign size={20} />,
    },
    {
        name: "Build Year",
        type: SearchProperty.BUILD_YEAR,
        valueMinMax: [0, 0],
        icon: <CalendarDays size={20} />,
    },
];

function createFilter() {
    let data: number[];

    return initFilters.map((filter) => {
        switch (filter.type) {
            case SearchProperty.BEDROOMS:
                data = properties.map((property) => property.details.bedrooms);
                break;

            case SearchProperty.PROPERTY_SIZE:
                data = properties.map((property) => property.details.area);
                break;

            case SearchProperty.PROPERTY_RANGE:
                data = properties.map((property) => property.price);
                break;

            case SearchProperty.BUILD_YEAR:
                data = properties.map((property) => property.details.build_year);
                break;

            default:
                console.warn();
                break;
        }

        filter.valueMinMax = [Math.min(...data), Math.max(...data)];

        return filter;
    });
}

export const filters: Filter[] = createFilter();

export const filterBy = {
    query: (property: Property, query: string | null) => {
        return !query || property.title.toLowerCase().includes(query.toLowerCase());
    },
    location: (property: Property, location: string | null) => {
        return !location || property.details.location.state.toLowerCase() === location;
    },
    price: (property: Property, prixMin: string | null, prixMax: string | null) => {
        const min = prixMin ? Number(prixMin) : null;
        const max = prixMax ? Number(prixMax) : null;
        return (!min || property.price >= min) && (!max || property.price <= max);
    },
    bedrooms: (property: Property, bedroomsMin: string | null, bedroomsMax: string | null) => {
        const minBedrooms = bedroomsMin ? Number(bedroomsMin) : null;
        const maxBedrooms = bedroomsMax ? Number(bedroomsMax) : null;

        return (
            (!minBedrooms || property.details.bedrooms >= minBedrooms) &&
            (!maxBedrooms || property.details.bedrooms <= maxBedrooms)
        );
    },
    size: (property: Property, minSize: string | null, maxSize: string | null) => {
        const min = minSize ? Number(minSize) : null;
        const max = maxSize ? Number(maxSize) : null;

        return (
            (!min || property.details.bedrooms >= min) && (!max || property.details.bedrooms <= max)
        );
    },
    year: (property: Property, minBuildYear: string | null, maxBuildYear: string | null) => {
        const min = minBuildYear ? Number(minBuildYear) : null;
        const max = maxBuildYear ? Number(maxBuildYear) : null;

        return (
            (!min || property.details.build_year >= min) &&
            (!max || property.details.build_year <= max)
        );
    },
};

export function filter(property: Property, param: SearchProperty, paramValue: string | null) {
    const [min, max] = paramValue ? paramValue.split("-") : [null, null];

    switch (param) {
        case SearchProperty.QUERY:
            return filterBy.query(property, paramValue);
        case SearchProperty.LOCATION:
            return filterBy.location(property, paramValue);

        case SearchProperty.PROPERTY_RANGE: {
            return filterBy.price(property, min, max);
        }
        case SearchProperty.BEDROOMS: {
            return filterBy.bedrooms(property, min, max);
        }
        case SearchProperty.PROPERTY_SIZE: {
            return filterBy.size(property, min, max);
        }
        case SearchProperty.BUILD_YEAR: {
            return filterBy.year(property, min, max);
        }
        default:
            break;
    }
}

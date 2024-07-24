import { ReactElement } from "react";

export enum SearchProperty {
    // INPUT
    QUERY = "query",

    // Select
    LOCATION = "location",

    // Filter
    BEDROOMS = "bedrooms",
    PROPERTY_SIZE = "size",
    PROPERTY_RANGE = "price",
    BUILD_YEAR = "year",
}

export interface Search {
    name: string;
    type: SearchProperty;
    icon: ReactElement;
}

export interface Filter extends Search {
    valueMinMax: [number, number];
}

export interface Select extends Search {
    options: { label: string; value: string }[];
}

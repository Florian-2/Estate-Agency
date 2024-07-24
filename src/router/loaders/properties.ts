import { properties } from "@/data/properties";
import { LoaderFunction, LoaderFunctionArgs, defer, redirect } from "react-router-dom";

export const getPropertyById: LoaderFunction = ({ params }: LoaderFunctionArgs) => {
    const property = properties.find((p) => p.id.toString() === params.id);

    if (!property) {
        return redirect("/properties");
    }

    return defer({
        property,
    });
};

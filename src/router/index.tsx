import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import { getPropertyById } from "./loaders/properties";

import App from "../App";
import { HomePage } from "@/pages/Home/home";
const PropertiesPage = lazy(() => import("@/pages/Properties/properties"));
const PropertyPage = lazy(() => import("@/pages/Properties/Property/property"));
const ContactPage = lazy(() => import("@/pages/Contact/contact"));
const ErrorPage = lazy(() => import("@/pages/error"));
const NotFound = lazy(() => import("@/pages/not-found"));
const InProgress = lazy(() => import("@/pages/progress"));

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "/properties",
                element: <PropertiesPage />,
            },
            {
                path: "/properties/:id",
                loader: getPropertyById,
                element: <PropertyPage />,
            },
            {
                path: "/contact-us",
                element: <ContactPage />,
            },
            {
                path: "/about-us",
                element: <InProgress />,
            },
            {
                path: "/Services",
                element: <InProgress />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

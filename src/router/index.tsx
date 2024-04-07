import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import App from "../App";
import { HomePage } from "@/pages/Home/home";
const AboutPage = lazy(() => import("@/pages/About/about"));
const PropertiesPage = lazy(() => import("@/pages/Properties/properties"));
const ErrorPage = lazy(() => import("@/pages/error"));
const NotFound = lazy(() => import("@/pages/not-found"));

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
                path: "/about-us",
                element: <AboutPage />,
            },
            {
                path: "/properties",
                element: <PropertiesPage />,
            },
            {
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

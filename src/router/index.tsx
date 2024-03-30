import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import App from "../App";
import { HomePage } from "@/pages/home";
const AboutPage = lazy(() => import("@/pages/about"));
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
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

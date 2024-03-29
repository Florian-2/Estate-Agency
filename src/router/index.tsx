import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";

import App from "../App";
import { HomePage } from "@/pages/home";
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
                path: "*",
                element: <NotFound />,
            },
        ],
    },
]);

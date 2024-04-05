import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";
import "./index.css";

const root = document.getElementById("root")!;
root.classList.add("flex", "flex-col", "min-h-screen");

ReactDOM.createRoot(root).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);

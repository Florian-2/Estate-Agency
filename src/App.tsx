import { Outlet } from "react-router-dom";
import { Header } from "./layout/header";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Footer } from "./layout/footer";
import { ExploreProperties } from "./components/sections/explore-properties";
import { Loading } from "./components/ui/loader";

function App() {
    return (
        <>
            <Header />

            <main className="flex-grow">
                <Suspense fallback={<Loading />}>
                    <Outlet />
                </Suspense>
            </main>

            <ExploreProperties />
            <Footer />

            <Toaster />
        </>
    );
}

export default App;

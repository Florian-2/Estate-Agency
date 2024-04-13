import { Outlet } from "react-router-dom";
import { Header } from "./layout/header";
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme/theme-provider";
import { Footer } from "./layout/footer";
import { ExploreProperties } from "./components/sections/explore-properties";

// Voir si on gère le ligth mode ou pas
function App() {
    return (
        <ThemeProvider>
            <Header />

            <main className="flex-grow">
                <Suspense fallback={<p>Chargement...</p>}>
                    <Outlet />
                </Suspense>
            </main>

            <ExploreProperties />
            <Footer />
        </ThemeProvider>
    );
}

export default App;

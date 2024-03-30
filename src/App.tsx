import { Outlet } from "react-router-dom";
import { Header } from "./layout/header";
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme/theme-provider";

// Voir si on gère le ligth mode ou pas
function App() {
    return (
        <ThemeProvider>
            <Header />

            <main className="mx-auto max-w-screen-2xl">
                <Suspense fallback={<p>Chargement...</p>}>
                    <Outlet />
                </Suspense>
            </main>
        </ThemeProvider>
    );
}

export default App;

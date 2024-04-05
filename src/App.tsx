import { Outlet } from "react-router-dom";
import { Header } from "./layout/header";
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme/theme-provider";
import { Footer } from "./layout/footer";

// Voir si on gère le ligth mode ou pas
function App() {
    return (
        <ThemeProvider>
            <Header />

            {/* className="mx-auto max-w-screen-2xl" */}
            <main>
                <Suspense fallback={<p>Chargement...</p>}>
                    <Outlet />
                </Suspense>
            </main>

            <Footer />
        </ThemeProvider>
    );
}

export default App;

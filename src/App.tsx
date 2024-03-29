import { Outlet } from "react-router-dom";
import { Header } from "./layout/header";
import { Suspense } from "react";
import { ThemeProvider } from "./components/theme/theme-provider";

function App() {
    return (
        <ThemeProvider>
            <Header />

            <main>
                <Suspense fallback={<p>Chargement...</p>}>
                    <Outlet />
                </Suspense>
            </main>
        </ThemeProvider>
    );
}

export default App;

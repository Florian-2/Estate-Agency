import logo from "@/assets/logo-desktop.svg";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export function Header() {
    return (
        <header className="flex items-center justify-between">
            <a href="/">
                <img src={logo} alt="Logo Estatein" />
            </a>

            <nav>
                <ul className="flex gap-7">
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About Us</a>
                    </li>
                    <li>
                        <a href="/properties">Properties</a>
                    </li>
                    <li>
                        <a href="/services">Services</a>
                    </li>
                </ul>
            </nav>

            <div>
                <ThemeToggle />
            </div>
        </header>
    );
}

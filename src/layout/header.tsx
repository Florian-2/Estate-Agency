import logo from "@/assets/logo-desktop.svg";
import { Link } from "@/components/nav/link";
import { navigation } from "@/data/navigation";

export function Header() {
    return (
        <header className="bg-gray-10">
            <div className="mx-auto flex h-24 max-w-screen-2xl items-center justify-between">
                <a href="/" className="flex-shrink-0">
                    <img src={logo} alt="Logo Estatein" />
                </a>

                <nav>
                    <ul className="flex gap-1">
                        {navigation.map((link) => (
                            <Link key={link.path} href={link.path}>
                                {link.label}
                            </Link>
                        ))}
                    </ul>
                </nav>

                <div>
                    <Link href={"/contact-us"} active>
                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    );
}

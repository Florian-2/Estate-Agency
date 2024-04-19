import logoDesktop from "@/assets/logo-desktop.svg";
import logoMobile from "@/assets/logo-mobile.svg";
import logoLaptop from "@/assets/logo-laptop.svg";
import { Link, MobileMenu } from "@/components/navigation";
import { navigation } from "@/data/navigation";
import { useMediaQuery } from "@/hooks";
import { Link as RouterLink } from "react-router-dom";

export function Header() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <header className="flex justify-center border-y border-gray-15 bg-gray-10">
            <div className="mx-2 flex h-[68px] max-w-screen-2xl flex-grow items-center justify-between text-sm lg:mx-4 lg:h-20 lg:text-base">
                <RouterLink to="/" className="flex-shrink-0">
                    <img
                        srcSet={`${logoMobile} 94w, ${logoDesktop} 160w`}
                        sizes="(min-width: 1024px) 160px,
                            105px"
                        src={logoLaptop}
                        alt="Logo Estatein"
                    />
                </RouterLink>

                {isDesktop ? (
                    <>
                        <nav>
                            <ul className="flex gap-1">
                                {navigation.map((link) => (
                                    <li key={link.path}>
                                        <Link key={link.path} to={link.path}>
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <Link to={"/contact-us"} active>
                            Contact Us
                        </Link>
                    </>
                ) : (
                    <MobileMenu />
                )}
            </div>
        </header>
    );
}

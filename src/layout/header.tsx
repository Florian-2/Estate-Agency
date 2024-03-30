import logoDesktop from "@/assets/logo-desktop.svg";
import logoMobile from "@/assets/logo-mobile.svg";
import logoLaptop from "@/assets/logo-laptop.svg";
import { Link, MobileMenu } from "@/components/navigation";
import { navigation } from "@/data/navigation";
import { useMediaQuery } from "@/hooks";

export function Header() {
    const isDesktop = useMediaQuery("(min-width: 768px)");

    return (
        <header className="bg-gray-10 px-3">
            <div className="mx-auto flex h-[68px] max-w-screen-2xl items-center justify-between text-sm lg:h-24 lg:text-base">
                <a href="/" className="flex-shrink-0">
                    <img
                        srcSet={`${logoMobile} 94w, ${logoLaptop} 114w , ${logoDesktop} 160w`}
                        sizes="(min-width: 1024px) 160px,
                            (min-width: 768px) 114px,
                            94px"
                        src={logoLaptop}
                        alt="Logo Estatein"
                    />
                </a>

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

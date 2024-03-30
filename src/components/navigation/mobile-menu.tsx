import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { navigation } from "@/data/navigation";
import { MenuIcon } from "lucide-react";
import { Link } from "./link";
import { useState } from "react";

export function MobileMenu() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Drawer direction="right" open={isOpen} onOpenChange={setIsOpen}>
            <DrawerTrigger>
                <MenuIcon />
            </DrawerTrigger>

            <DrawerContent className="h-full bg-gray-10">
                <nav className="p-4">
                    <ul className="flex flex-col gap-1 *:inline-flex">
                        {navigation.map((link) => (
                            <li key={link.path} onClick={() => setIsOpen(false)}>
                                <Link to={link.path} className="w-full">
                                    {link.label}
                                </Link>
                            </li>
                        ))}

                        <li onClick={() => setIsOpen(false)}>
                            <Link to={"/contact-us"} className="w-full">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </nav>
            </DrawerContent>
        </Drawer>
    );
}

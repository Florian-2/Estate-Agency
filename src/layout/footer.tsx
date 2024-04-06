import Logo from "@/assets/logo-laptop.svg";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { footerLinks } from "@/data/links-footer";
import { Linkedin, Twitter, Facebook, Send, MailPlus } from "lucide-react";
import { FormEvent } from "react";
import { Link } from "react-router-dom";

export function Footer() {
    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        form.reset();
    }

    return (
        <>
            <footer className="border-t">
                <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-10 p-20 px-2 lg:flex-row lg:gap-20 lg:px-4">
                    <div className="w-full space-y-5 lg:max-w-80 lg:space-y-6">
                        <img src={Logo} alt="Logo Estatein" />

                        <form onSubmit={handleSubmit} className="flex">
                            <div className="relative w-full text-gray-60 has-[:focus-visible]:text-white">
                                <div className="flex gap-1">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="peer h-fit w-fit py-3.5 pl-12 text-base placeholder:text-gray-60"
                                    />
                                    <Button className="p-4" variant={"outline"}>
                                        <Send fill="white" size={22} color="white" />
                                    </Button>
                                </div>

                                <MailPlus className="absolute left-3 top-1/2 z-10 -translate-y-1/2 transform" />
                            </div>
                        </form>
                    </div>

                    <div className="flex flex-grow flex-wrap gap-10">
                        {footerLinks.map((obj) => (
                            <div key={obj.name} className="flex-auto space-y-6">
                                <p className="text-base lg:text-lg">{obj.name}</p>

                                <ul className="space-y-4 text-sm lg:text-base">
                                    {obj.links.map((link) => (
                                        <li>
                                            <Link
                                                to={link.href}
                                                className="inline-block border-none p-0 hover:underline"
                                            >
                                                {link.label}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </footer>

            <div className="bg-gray-10">
                <div className="mx-auto flex max-w-screen-2xl flex-col-reverse items-center justify-between gap-4 px-2 py-3 sm:flex-row lg:px-4">
                    <div className="flex-col items-center gap-4 text-sm lg:flex-row">
                        @2023 Estatein. All Rights Reserved.
                        <Link to="#" className="hover:underline">
                            Terms & Conditions
                        </Link>
                    </div>

                    <div className="space-x-2">
                        <Button size={"icon"} className="rounded-full bg-gray-08">
                            <Facebook fill="white" strokeWidth={0.5} size={19} />
                        </Button>
                        <Button size={"icon"} className="rounded-full bg-gray-08">
                            <Linkedin fill="white" strokeWidth={0.5} size={19} />
                        </Button>
                        <Button size={"icon"} className="rounded-full bg-gray-08">
                            <Twitter fill="white" strokeWidth={0.5} size={19} />
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

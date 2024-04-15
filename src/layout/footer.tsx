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
            <footer className="mx-2 border-t py-20 lg:mx-4">
                <div className="mx-auto flex w-full max-w-screen-2xl flex-col gap-10 lg:flex-row lg:gap-20">
                    <div className=" space-y-5  lg:space-y-6">
                        <img src={Logo} alt="Logo Estatein" />

                        <form onSubmit={handleSubmit} className="flex lg:max-w-80">
                            <div className="relative w-full text-gray-60 has-[:focus-visible]:text-white">
                                <div className="flex gap-1">
                                    <Input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="h-fit w-full bg-gray-08 py-3.5 pl-12 text-base placeholder:text-gray-60 md:w-fit"
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
                            <div key={obj.name} className="flex flex-grow flex-col xl:items-end ">
                                <div className="space-y-4">
                                    <p className="text-base lg:text-lg">{obj.name}</p>

                                    <ul className="space-y-3 text-sm lg:text-base">
                                        {obj.links.map((link, i) => (
                                            <li key={i}>
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
                            </div>
                        ))}
                    </div>
                </div>
            </footer>

            <div className="bg-gray-10">
                <div className="mx-2 flex justify-center gap-4 py-3 lg:mx-4">
                    <div className="flex max-w-screen-2xl flex-grow flex-col-reverse items-center justify-between gap-2 sm:flex-row">
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
            </div>
        </>
    );
}

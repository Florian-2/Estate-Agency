import { ReactNode } from "react";

type Props = {
    children: ReactNode;
};

export function Hero({ children }: Props) {
    return (
        <section className="border-b bg-gradient-130 from-gray-15/70 to-gray-15/0 px-2 py-14 md:py-24 lg:px-4 lg:py-32">
            <div className="mx-auto max-w-screen-2xl space-y-3.5 text-center md:text-start">
                {children}
            </div>
        </section>
    );
}

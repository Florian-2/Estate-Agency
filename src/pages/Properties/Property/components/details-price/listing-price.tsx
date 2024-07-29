import { DetailPrice as DetailPriceType } from "@/data/properties";
import { DetailPrice } from "./detail-price";
import { currencyUS } from "@/lib/utils";
import {
    SectionHeader,
    SectionTitle2,
    SectionDescription,
} from "@/components/sections/ui/header-section";
import { Note } from "@/components/ui/note";

type Props = {
    price: number;
    details: DetailPriceType[];
};

export function ListingPrice({ price, details }: Props) {
    return (
        <section className="space-y-9">
            <SectionHeader>
                <SectionTitle2>Comprehensive Pricing Details</SectionTitle2>
                <SectionDescription>
                    At Estatein, transparency is key. We want you to have a clear understanding of
                    all costs associated with your property investment. Below, we break down the
                    pricing for Seaside Serenity Villa to help you make an informed decision
                </SectionDescription>
            </SectionHeader>

            <Note message="The figures provided above are estimates and may vary depending on the property, location, and individual circumstances." />

            <div className="flex flex-col gap-10 lg:flex-row">
                <div>
                    <p className="text-base">Listing price</p>
                    <span className="text-3xl font-semibold">{currencyUS(price)}</span>
                </div>

                <div className="flex-grow space-y-5">
                    {details.map((detail, i) => (
                        <DetailPrice key={i} detail={detail} />
                    ))}
                </div>
            </div>
        </section>
    );
}

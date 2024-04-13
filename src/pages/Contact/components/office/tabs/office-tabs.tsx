import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { OfficeType, offices } from "@/data/offices";
import { OfficeCard } from "./office-card";
import { ContainerOfficeList } from "./container-list";

export function OfficeTabs() {
    return (
        <Tabs defaultValue="all" className="space-y-8">
            <TabsList className="w-full sm:max-w-96">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="regional">Regional</TabsTrigger>
                <TabsTrigger value="international">International</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
                <ContainerOfficeList className="grid-col-1 grid gap-7 *:flex-1 lg:grid-cols-2">
                    {offices.map((office, i) => (
                        <OfficeCard key={i} office={office} />
                    ))}
                </ContainerOfficeList>
            </TabsContent>
            <TabsContent value="regional">
                <ContainerOfficeList>
                    {offices
                        .filter((office) => office.officeType === OfficeType.REGIONAL)
                        .map((office, i) => (
                            <OfficeCard key={i} office={office} />
                        ))}
                </ContainerOfficeList>
            </TabsContent>
            <TabsContent value="international">
                <ContainerOfficeList>
                    {offices
                        .filter((office) => office.officeType === OfficeType.INTERNATIONAL)
                        .map((office, i) => (
                            <OfficeCard key={i} office={office} />
                        ))}
                </ContainerOfficeList>
            </TabsContent>
        </Tabs>
    );
}

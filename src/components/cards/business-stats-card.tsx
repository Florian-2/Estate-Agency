type Props = {
    statistic: string;
    label: string;
};

export function BusinessStatsCard({ statistic, label }: Props) {
    return (
        <div className="flex-grow space-y-1 rounded-lg border border-gray-15 bg-gray-10 px-6 py-4 text-center">
            <p className="text-2xl font-semibold lg:text-2xl xl:text-3xl">{statistic}</p>
            <p className="text-gray-60">{label}</p>
        </div>
    );
}

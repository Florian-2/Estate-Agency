type Props = {
    href: string;
    label: string;
};

export function Link({ href, label }: Props) {
    return (
        <a href={href} className="py-3 px-5">
            {label}
        </a>
    );
}

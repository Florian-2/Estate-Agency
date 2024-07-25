type Props = {
    imageSrc: string;
    alt: string;
};

export function Thumb({ imageSrc, alt }: Props) {
    return <img src={imageSrc} lang={alt} className="max-w-44 object-cover" />;
}

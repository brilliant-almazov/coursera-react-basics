interface ImageProps {
    src: string,
    className?: string,
    alt?: string,
}

export function Img({src, className, alt}: ImageProps) {
    return (
        <>
            <img src={src} className={className} alt={alt}/>
        </>
    )
}
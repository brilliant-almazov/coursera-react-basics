interface ImageProps {
    src: string,
    className?: string,
    alt?: string,
}

function Img({src, className, alt}: ImageProps) {
    return (
        <>
            <img src={src} className={className} alt={alt}/>
        </>
    )
}

export default Img;
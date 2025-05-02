import type { ImageProps } from "../props/ImageProps";

export default function Image( { src, style, height, width, alt }: ImageProps )
{
    return (
        <div>
            <img src={src} alt={alt} width={width} height={height} className={style} />
        </div>
    )
}
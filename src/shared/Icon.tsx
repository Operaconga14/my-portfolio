import type { IconProps } from "../props/IconProps";

export default function Icon( { style, name }: IconProps )
{
    return (
        <div className={style}>
            <i className={name}></i>
        </div>
    )
}
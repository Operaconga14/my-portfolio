import type { ExternalLinkProps } from "../props/ExternalLinkPrpops";


export default function ExternalLink( { iconName, styles, text, url }: ExternalLinkProps )
{
    return (
        <div>
            <a className={styles[ 0 ].urlStyle} href={url}>
                {text}
                <i className={`${iconName} ${styles[ 1 ].iconStyle}`}></i>

            </a>
        </div>
    )
}
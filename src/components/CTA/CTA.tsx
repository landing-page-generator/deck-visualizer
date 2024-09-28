import { CTAPRops } from "./CTA.types"
import Image from "next/image"

import styles from "./CTA.module.css"
import { useRouter } from "next/router"
import Link from "next/link"

export const CTA = (props: CTAPRops) => {
    const { link, headline, color, logoURL, homepageLink } = props

    const router = useRouter()

    return (
        <div className={styles.container}>
            <div className={styles.logo} style={{backgroundImage: `url(${logoURL})`}}></div>
            <p className={styles.headline} style={{ color }}>
                {headline}
            </p>
            <button
                style={{ backgroundColor: color }}
                className={styles.link}
                onClick={() => {
                    router.push(link)
                }}
            >
                GET STARTED
            </button>
            <Link href={homepageLink} className={styles.url}>
                {homepageLink}
            </Link>
        </div>
    )
}

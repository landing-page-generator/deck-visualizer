import type { HeroProps } from "./Hero.types"

import styles from "./Hero.module.css"

export const Hero = (props: HeroProps) => {
    const { title, subtitle, imageURL, logoURL, color } = props

    console.log("COLOR", color)
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.logo} style={{backgroundImage: `url(${logoURL})`}}></div>
                <div className={styles.text}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subtitle}>{subtitle}</div>
                </div>
                <div></div>
            </div>
            <div className={styles.image} style={{
                backgroundImage: `url(${imageURL})`,
            }}></div>
            <div className={styles.ribbon} style={{backgroundColor: color }}></div>
        </div>
    )
}

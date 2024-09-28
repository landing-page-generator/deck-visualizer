import type { HeroProps } from "./Hero.types"

import styles from "./Hero.module.css"

export const Hero = (props: HeroProps) => {
    const { title, subtitle, imageURL } = props

    return (
        <div
            className={styles.container}
            style={{
                backgroundImage: `url(${imageURL})`,
            }}
        >
            <p className={styles.title}>{title}</p>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
    )
}

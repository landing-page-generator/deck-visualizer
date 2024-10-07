import type { HeroProps } from "./Hero.types"

import styles from "./Hero.module.css"

export const Hero = (props: HeroProps) => {
    const { title, subtitle, imageURL, logoURL, color } = props

    console.log("COLOR", color)
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <img className={styles.logo} src={logoURL} alt="Logo" width={400} height={50} />
                <div className={styles.text}>
                    <div className={styles.title}>{title}</div>
                    <div className={styles.subtitle}>{subtitle}</div>
                </div>
                <div></div>
            </div>
            {/* <div className={styles.image} style={{
                backgroundImage: `url(${imageURL})`,
            }}></div> */}
            <img className={styles.imageforeground} src={imageURL} />
            <div className={styles.ribbon} style={{backgroundColor: color }}></div>
        </div>
    )
}

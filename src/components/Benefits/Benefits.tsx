import { BenefitsProps } from './Benefits.types'

import styles from './Benefits.module.css'

export const Benefits = (props: BenefitsProps) => {
    const {
        title,
        benefits,
        logoURL,
        color,
    } = props

    return (
        <div style={{position: "relative"}}>
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                <div className={styles.logo} style={{
                    backgroundImage: `url(${logoURL})`
                }}></div>
            </div>
            <div className={styles.features}>
                {benefits.map((feature) => {
                    return (
                        <div className={styles.feature}>
                            <div className={styles.emoji}>{feature.emoji}</div>
                            <div className={styles.featureText}>
                                <p className={styles.featureTitle}>{feature.title}</p>
                                <p className={styles.featureDescription}>{feature.description}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div style={{height: 50}}/>
        </div>
        <div className={styles.ribbon} style={{backgroundColor: color}}></div>
        </div>
    )
}

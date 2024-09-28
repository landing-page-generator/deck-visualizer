import { FeaturesProps } from './Features.types'

import styles from './Features.module.css'

export const Features = (props:  FeaturesProps) => {
    const {
        title,
        features
    } = props

    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            {features.map((feature) => {
                return (
                    <div className={styles.featureContainer}>
                        <p className={styles.featureTitle}>{feature.title}</p>
                        <p className={styles.featureDescription}>{feature.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

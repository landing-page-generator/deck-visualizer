import { BenefitsProps } from './Benefits.types'

import styles from './Benefits.module.css'

export const Benefits = (props:  BenefitsProps) => {
    const {
        title,
        benefits
    } = props

    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            {benefits.map((benefit) => {
                return (
                    <div className={styles.benefitContainer}>
                        <p className={styles.benefitTitle}>{benefit.title}</p>
                        <p className={styles.benefitDescription}>{benefit.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

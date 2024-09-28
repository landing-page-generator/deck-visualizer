import { BenefitsProps } from './Benefits.types'

import styles from './Benefits.module.css'

export const Benefits = (props:  BenefitsProps) => {
    const {
        benefits
    } = props

    return (
        <div className={styles.container}>
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

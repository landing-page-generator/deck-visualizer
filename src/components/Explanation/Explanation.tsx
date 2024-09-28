import { ExplanationProps } from './Explanation.types'

import styles from './Explanation.module.css'

export const Explanation = (props: ExplanationProps) => {
    const {
        title,
        explanations
    } = props

    return (
        <div className={styles.container}>
            <p className={styles.title}>{title}</p>
            {explanations.map((explanation) => {
                return (
                    <div className={styles.explanationContainer}>
                        <p className={styles.explanationTitle}>{explanation.title}</p>
                        <p className={styles.explanationDescription}>{explanation.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

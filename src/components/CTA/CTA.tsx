import { CTAPRops } from './CTA.types'

import styles from './CTA.module.css'

export const CTA = (props: CTAPRops) => {
    const {
        link,
        headline,
        description
    } = props

    return (
        <div className={styles.container}>
            <p className={styles.headline}>{headline}</p>
            <p className={styles.description}>{description}</p>
            <a className={styles.link} href={link}>{link}</a>
        </div>
    )
}

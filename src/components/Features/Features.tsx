import { FeaturesProps } from './Features.types'

import styles from './Features.module.css'

export const Features = (props:  FeaturesProps) => {
    const {
        title,
        features,
        logoURL,
        color,
    } = props

    return (
        <div style={{position: "relative"}}>
        <div className={styles.container}>
            <div className={styles.header}>
                <p className={styles.title}>{title}</p>
                {/* <div className={styles.logo} style={{
                    backgroundImage: `url(${logoURL})`
                }}></div> */}
                <img className={styles.logo} src={logoURL} alt="Logo" width={400} height={50} />
            </div>
            <div className={styles.features}>
                {features.map((feature) => {
                    return (
                        <div className={styles.feature}>
                            <div className={styles.emoji}>{feature.emoji}</div>
                            <p className={styles.featureTitle}>{feature.title}</p>
                            <p className={styles.featureDescription}>{feature.description}</p>
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

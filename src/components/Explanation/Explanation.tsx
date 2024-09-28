import { ExplanationProps } from "./Explanation.types"
import Image from "next/image"

import styles from "./Explanation.module.css"
import { LEFT_BORDER_WIDTH } from "@/shared/constants"

export const Explanation = (props: ExplanationProps) => {
    const { explanations, logoURL, color } = props

    return (
        <div
            className={styles.container}
            style={{
                borderLeft: `${LEFT_BORDER_WIDTH}px solid ${color}`,
            }}
        >
            <div className={styles.header}>
                <p className={styles.title}>How it works</p>
                <Image src={logoURL} alt="Logo" width={400} height={50} />
            </div>
            <div className={styles.cards}>
                {explanations.map((explanation, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <p className={styles.emoji}>{explanation.emoji}</p>
                            <p className={styles.explanationTitle}>
                                {index + 1}
                                {". "}
                                {explanation.title}
                            </p>
                            <p className={styles.explanationDescription}>
                                {explanation.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

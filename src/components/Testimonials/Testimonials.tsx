import { TestimonialProps } from "./Testimonials.types"
import Image from "next/image"

import styles from "./Testimonials.module.css"
import { LEFT_BORDER_WIDTH } from "@/shared/constants"

export const Testimonials = (props: TestimonialProps) => {
    const { testimonials, logoURL, color } = props

    const getRandomNumber = () => {
        return Math.floor(Math.random() * 99) + 1
    }
    return (
        <div
            className={styles.container}
            style={{
                borderLeft: `${LEFT_BORDER_WIDTH}px solid ${color}`,
            }}
        >
            <div className={styles.header}>
                <p className={styles.title}>What our clients say</p>
                <img className={styles.logo} src={logoURL} alt="Logo" width={400} height={50} />
            </div>
            <div className={styles.cards}>
                {testimonials.map((explanation, index) => {
                    return (
                        <div className={styles.card} key={index}>
                            <img className={styles.profile} src={`https://randomuser.me/api/portraits/men/${getRandomNumber()}.jpg`}></img>
                            <p className={styles.explanationTitle}>
                                {explanation.testimonial}
                            </p>
                            <p className={styles.explanationDescription}>
                                {explanation.firstName} {explanation.lastName}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

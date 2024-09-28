import { TestimonialProps as TestimonialsProps } from './Testimonials.types'

import styles from './Explanation.module.css'

export const Testimonials = (props: TestimonialsProps) => {
    const {
        testimonials
    } = props

    return (
        <div className={styles.container}>
            {testimonials.map((testimonials) => {
                return (
                    <div className={styles.testimonialContainer}>
                        <p className={styles.testimonialTitle}>{testimonials.title}</p>
                        <p className={styles.testimonialDescription}>{testimonials.description}</p>
                    </div>
                )
            })}
        </div>
    )
}

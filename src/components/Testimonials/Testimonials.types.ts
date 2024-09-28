import { Shared } from '@/shared/types'

type TestimonialType = {
    firstName: string
    lastName: string
    testimonial: string
}
export type TestimonialProps = Shared & {
    testimonials: TestimonialType[]
}

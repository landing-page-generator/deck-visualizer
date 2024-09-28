import { Shared } from '@/shared/types'

type TestimonialType = {
    title: string
    description: string
    emoji: string
}

export type TestimonialProps = Shared & {
    testimonials: TestimonialType[]
}

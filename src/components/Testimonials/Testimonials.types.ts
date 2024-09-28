type TestimonialType = {
    title: string
    description: string
    emoji: string
}

export type TestimonialProps = {
    logoURL: string
    testimonials: TestimonialType[]
}

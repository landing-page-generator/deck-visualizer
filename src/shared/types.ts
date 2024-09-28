import { BenefitsProps } from '@/components/Benefits/Benefits.types'
import { CTAPRops } from '@/components/CTA/CTA.types'
import { ExplanationProps } from '@/components/Explanation/Explanation.types'
import { FeaturesProps } from '@/components/Features/Features.types'
import { HeroProps } from '@/components/Hero/Hero.types'
import { TestimonialProps } from '@/components/Testimonials/Testimonials.types'

type Hero = {
    type: "HERO",
    component: HeroProps
}

type CTA = {
    type: "CTA",
    component: CTAPRops
}

type Benefits = {
    type: "BENEFITS",
    component: BenefitsProps
}

type Explanation = {
    type: "EXPLANATION",
    component: ExplanationProps
}

type Features = {
    type: "FEATURES",
    component: FeaturesProps
}

type Testimonial = {
    type: "TESTIMONIAL",
    component: TestimonialProps
}

export type SchemaType = {
    logoURL: string
    list: (CTA | Hero | Benefits | Explanation | Features | Testimonial)[]
}

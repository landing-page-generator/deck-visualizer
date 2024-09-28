type BenefitType = {
    title: string
    description: string
    emoji: string
}

export type BenefitsProps = {
    logoURL: string
    benefits: BenefitType[]
}

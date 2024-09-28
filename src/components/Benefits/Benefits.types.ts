import { Shared } from '@/shared/types'

type BenefitType = {
    title: string
    description: string
    emoji: string
}

export type BenefitsProps = Shared & {
    benefits: BenefitType[]
}

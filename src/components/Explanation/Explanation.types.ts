import { Shared } from '@/shared/types'

type ExplanationType = {
    title: string
    description: string
    emoji: string
}

export type ExplanationProps = Shared & {
    explanations: ExplanationType[]
}

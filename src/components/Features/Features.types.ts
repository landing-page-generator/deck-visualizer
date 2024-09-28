import { Shared } from '@/shared/types'

type FeatureType = {
    title: string
    description: string
    emoji: string
}

export type FeaturesProps = Shared & {
    title: string
    logoURL: string
    features: FeatureType[]
}

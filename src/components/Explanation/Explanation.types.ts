type ExplanationType = {
    title: string
    description: string
    emoji: string
}

export type ExplanationProps = {
    logoURL: string
    explanations: ExplanationType[]
}

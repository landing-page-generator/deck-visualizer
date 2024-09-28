import { Benefits } from "@/components/Benefits/Benefits"
import { CTA } from "@/components/CTA"
import { Explanation } from "@/components/Explanation"
import { Features } from "@/components/Features"
import { Hero } from "@/components/Hero/Hero"
import { Testimonials } from "@/components/Testimonials"
import { SchemaType } from "@/shared/types"

import styles from "./styles.module.css"

const Page = () => {
    const data: SchemaType = {
        color: "#6fd7ef",
        logoURL:
            "https://www.offsight.com/_next/static/media/logo.18dc692d.svg",
        list: [
            {
                type: "EXPLANATION",
                component: {
                    logoURL: "",
                    color: '#6fd7ef',
                    explanations: [
                        {
                            emoji: "🚀",
                            title: "Title 1",
                            description: "Sentient Insights gathers social media data from various platforms",
                        },
                        {
                            emoji: "🚀",
                            title: "Title 2",
                            description: "Sentient Insights gathers social media data from various platforms",
                        },
                        {
                            emoji: "🚀",
                            title: "Title 3",
                            description: "Sentient Insights gathers social media data from various platforms",
                        }
                    ],
                },
            },
        ],
    }
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                {data.list.map((item) => {
                    switch (item.type) {
                        case "HERO":
                            return (
                                <Hero
                                    {...item.component}
                                    {...item}
                                    logoURL={data.logoURL}
                                />
                            )
                        case "CTA":
                            return (
                                <CTA
                                    {...item.component}
                                    logoURL={data.logoURL}
                                    {...item}
                                />
                            )
                        case "BENEFITS":
                            return (
                                <Benefits
                                    {...item.component}
                                    logoURL={data.logoURL}
                                    {...item}
                                />
                            )
                        case "EXPLANATION":
                            return (
                                <Explanation
                                    {...item.component}
                                    logoURL={data.logoURL}
                                    {...item}
                                />
                            )
                        case "FEATURES":
                            return (
                                <Features
                                    {...item.component}
                                    logoURL={data.logoURL}
                                    {...item}
                                />
                            )
                        case "TESTIMONIAL":
                            return (
                                <Testimonials
                                    {...item.component}
                                    logoURL={data.logoURL}
                                    {...item}
                                />
                            )
                    }
                })}
            </div>
        </div>
    )
}

export default Page

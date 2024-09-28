import { Benefits } from "@/components/Benefits/Benefits"
import { CTA } from "@/components/CTA"
import { Explanation } from "@/components/Explanation"
import { Features } from "@/components/Features"
import { Hero } from "@/components/Hero/Hero"
import { Testimonials } from "@/components/Testimonials"
import { SchemaType } from "@/shared/types"

import styles from "./styles.module.css"

import sample from './schema.json'

const Page = () => {
    const data: SchemaType = {
        color: sample.color,
        logoURL: sample.logoURL, // @ts-expect-error
        list: sample.list.map((item) => {
            return {
                ...item,
                component: {
                    ...item,
                    logoURL: sample.logoURL,
                },
            }
        })
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
                                />
                            )
                        case "CTA":
                            return (
                                <CTA
                                    {...item.component}
                                    {...item}
                                />
                            )
                        case "BENEFITS":
                            return (
                                <Benefits
                                    {...item.component}
                                    {...item}
                                />
                            )
                        case "EXPLANATION":
                            return (
                                <Explanation
                                    {...item.component}
                                    {...item}
                                />
                            )
                        case "FEATURES":
                            return (
                                <Features
                                    {...item.component}
                                    {...item}
                                />
                            )
                        case "TESTIMONIAL":
                            return (
                                <Testimonials
                                    {...item.component}
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

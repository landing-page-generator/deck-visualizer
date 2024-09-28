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
                                    color={data.color}
                                    {...item.component}
                                    {...item}
                                    logoURL={data.logoURL}
                                />
                            )
                        case "CTA":
                            return (
                                <CTA
                                    color={data.color}
                                    {...item.component}
                                    logoURL={data.logoURL}
                                    {...item}
                                />
                            )
                        case "BENEFITS":
                            return (
                                <Benefits
                                    color={data.color}
                                    {...item.component}
                                    logoURL={data.logoURL}
                                    {...item}
                                />
                            )
                        case "EXPLANATION":
                            return (
                                <Explanation
                                    color={data.color}
                                    {...item.component}
                                    logoURL={data.logoURL}
                                    {...item}
                                />
                            )
                        case "FEATURES":
                            return (
                                <Features
                                    color={data.color}
                                    {...item.component}
                                    logoURL={data.logoURL}
                                    {...item}
                                />
                            )
                        case "TESTIMONIAL":
                            return (
                                <Testimonials
                                    color={data.color}
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

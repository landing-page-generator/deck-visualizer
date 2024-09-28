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
        logoURL: "",
        list: [],
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
                                    logoURL={data.logoURL}
                                />
                            )
                        case "CTA":
                            return (
                                <CTA
                                    {...item.component}
                                    logoURL={data.logoURL}
                                />
                            )
                        case "BENEFITS":
                            return (
                                <Benefits
                                    {...item.component}
                                    logoURL={data.logoURL}
                                />
                            )
                        case "EXPLANATION":
                            return (
                                <Explanation
                                    {...item.component}
                                    logoURL={data.logoURL}
                                />
                            )
                        case "FEATURES":
                            return (
                                <Features
                                    {...item.component}
                                    logoURL={data.logoURL}
                                />
                            )
                        case "TESTIMONIAL":
                            return (
                                <Testimonials
                                    {...item.component}
                                    logoURL={data.logoURL}
                                />
                            )
                    }
                })}
            </div>
        </div>
    )
}

export default Page

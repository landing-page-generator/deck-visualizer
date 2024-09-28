import { Benefits } from "@/components/Benefits/Benefits"
import { CTA } from "@/components/CTA"
import { Explanation } from "@/components/Explanation"
import { Features } from "@/components/Features"
import { Hero } from "@/components/Hero/Hero"
import { Testimonials } from "@/components/Testimonials"
import { SchemaType } from "@/shared/types"

const Page = () => {
    const data: SchemaType = {
        logoURL: "",
        list: [],
    }

    return data.list.map((item) => {
        switch (item.type) {
            case "HERO":
                return <Hero {...item.component} logoURL={data.logoURL} />
            case "CTA":
                return <CTA {...item.component} logoURL={data.logoURL} />
            case "BENEFITS":
                return <Benefits {...item.component} logoURL={data.logoURL} />
            case "EXPLANATION":
                return (
                    <Explanation {...item.component} logoURL={data.logoURL} />
                )
            case "FEATURES":
                return <Features {...item.component} logoURL={data.logoURL} />
            case "TESTIMONIAL":
                return (
                    <Testimonials {...item.component} logoURL={data.logoURL} />
                )
        }
    })
}

export default Page

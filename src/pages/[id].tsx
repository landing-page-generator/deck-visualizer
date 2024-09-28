import { Benefits } from "@/components/Benefits/Benefits"
import { CTA } from "@/components/CTA"
import { Explanation } from "@/components/Explanation"
import { Features } from "@/components/Features"
import { Hero } from "@/components/Hero/Hero"
import { Testimonials } from "@/components/Testimonials"
import { SchemaType } from "@/shared/types"

import styles from "./styles.module.css"

import sample from "./schema.json"
import { supabase } from "@/shared/supabase"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import dynamic from "next/dynamic"

const Deck = dynamic(
    async () => {
        return import("../modules/Deck").then((module) => {
            return module.Deck
        })
    },
    {
        ssr: false,
    },
)

const Page = () => {
    return <Deck />
}

export default Page

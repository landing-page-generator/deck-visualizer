import { Benefits } from '@/components/Benefits/Benefits'
import { CTA } from '@/components/CTA'
import { Explanation } from '@/components/Explanation'
import { Features } from '@/components/Features'
import { Hero } from '@/components/Hero'
import { Testimonials } from '@/components/Testimonials'
import { supabase } from '@/shared/supabase'
import { SchemaType } from '@/shared/types'
import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'

import styles from './deck.module.css'

export const Deck = () => {
    const router = useRouter()
    const [deck, setDeck] = useState<SchemaType | null>(null)

    console.log("==================================")
    console.log(router.query.id)

    const fetchData = async () => {
        const { data: { data }, error } = await supabase
            .from("decks")
            .select("*")
            .eq("id", router.query.id)
            .maybeSingle()

        if (error) {
            console.error("Error fetching data:", error)
        } else {
            console.log("Data:", data)
            setDeck({
                color: data.color,
                logoURL: data.logoURL, // @ts-expect-error
                list: data.list.map((item) => {
                    return {
                        ...item,
                        component: {
                            ...item,
                            logoURL: item.logoURL,
                        },
                    }
                }),
            })
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                {deck?.list.map((item) => {
                    switch (item.type) {
                        case "HERO":
                            return <Hero {...item.component} {...item} />
                        case "CTA":
                            return <CTA {...item.component} {...item} />
                        case "BENEFITS":
                            return <Benefits {...item.component} {...item} />
                        case "EXPLANATION":
                            return <Explanation {...item.component} {...item} />
                        case "FEATURES":
                            return <Features {...item.component} {...item} />
                        case "TESTIMONIAL":
                            return (
                                <Testimonials {...item.component} {...item} />
                            )
                    }
                })}
            </div>
        </div>
    )
}


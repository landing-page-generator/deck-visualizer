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
    const deck ={
        logoURL: "https://example.com/cairo_logo.png",
        color: "#FF5733",
        list: [
            {
                type: "HERO",
                title: "CaiRO: Your Chief AI Revenue Officer",
                subtitle: "Revolutionizing Sales Engagement",
                imageURL: "https://example.com/cairo_logo.png"
            },
            {
                type: "EXPLANATION",
                explanations: [
                    {
                        title: "Our Journey",
                        description: null,
                        emoji: "🚀"
                    },
                    {
                        title: "The CAIRO Project",
                        description: null,
                        emoji: "💡"
                    },
                    {
                        title: "Birth of CaiRO",
                        description: null,
                        emoji: "🎉"
                    }
                ]
            },
            {
                type: "PROBLEM",
                title: "The Problem",
                problems: [
                    {
                        description: "Personalization at Scale is Hard",
                        emoji: "❌"
                    },
                    {
                        description: "63% Struggle with Tailored Experiences [1]",
                        emoji: "📉",
                        citation: "[1] Digital Marketing Executive Survey, 2023"
                    }
                ]
            },
            {
                type: "SOLUTION",
                title: "Our Solution",
                description: "Automated Personalized Sales Decks",
                emoji: "✅"
            },
            {
                type: "EXPLANATION",
                steps: [
                    {
                        title: "How It Works",
                        description: null,
                        emoji: "⚙️"
                    }
                ]
            },
            {
                type: "FEATURES",
                title: "Key Features",
                features: [
                    {
                        title: "Automated Personalization",
                        emoji: "🛠️",
                        description: null
                    },
                    {
                        title: "AI-Driven Insights",
                        emoji: "🤖",
                        description: null
                    },
                    {
                        title: "Lead Scoring",
                        emoji: "🎯",
                        description: null
                    }
                ]
            },
            {
                type: "BENEFITS",
                title: "Benefits",
                features: [
                    {
                        name: "Increase Engagement",
                        emoji: "🚀",
                        description: null
                    },
                    {
                        name: "Boost Efficiency",
                        emoji: "⏱️",
                        description: null
                    },
                    {
                        name: "Gain Competitive Edge",
                        emoji: "🥇",
                        description: null
                    }
                ]
            },
            {
                type: "BENEFITS",
                title: "Market Opportunity",
                features: [
                    {
                        name: "Growing Demand",
                        emoji: "📈",
                        description: "Market to Reach $2.7B by 2027 [2]",
                        citation: "[2] Personalization Software Market Report, 2022"
                    },
                    {
                        name: "AI in Sales",
                        emoji: "🤖",
                        description: "AI Boosts Conversion Rates up to 79% [3]",
                        citation: "[3] AI in Sales Productivity Study, 2023"
                    }
                ]
            },
            {
                type: "BENEFITS",
                title: "Competitive Edge",
                features: [
                    {
                        name: "Limitations of Current Tools",
                        emoji: "🔧",
                        description: null
                    },
                    {
                        name: "CaiRO's Unique Position",
                        emoji: "🚀",
                        description: null
                    }
                ]
            },
            {
                type: "EXPLANATION",
                steps: [
                    {
                        title: "Our Team",
                        description: null,
                        emoji: "👥"
                    }
                ]
            },
            {
                type: "TESTIMONIALS",
                testimonials: [
                    {
                        firstName: "Alex",
                        lastName: "Johnson",
                        testimonial: "38% Increase in Replies [4]",
                        citation: "[4] Internal Pilot Program Data, 2023"
                    }
                ]
            },
            {
                type: "CTA",
                headline: "Experience CaiRO in Action",
                description: null,
                link: "https://example.com/contact"
            }
        ]
    }


    const fetchData = async () => {
        const { data: { data }, error } = await supabase
            .from("decks")
            .select("*")
            .eq("uuid", router.query.id)
            .maybeSingle()

        if (error) {
            console.error("Error fetching data:", error)
        } else {
            console.log("Data:", data)

            // setDeck({
            //     color: data.color,
            //     logoURL: "https://i.ibb.co/WBVCmzZ/SUNDAI-logo.png", // @ts-expect-error
            //     list: data.list.map((item) => {
            //         return {
            //             ...item,
            //             component: {
            //                 ...item,
            //                 logoURL: "https://i.ibb.co/WBVCmzZ/SUNDAI-logo.png",
            //                 color: data.color,
            //             },
            //         }
            //     }),
            // })
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
                        case "TESTIMONIALS":
                            return (
                                <Testimonials {...item.component} {...item} />
                            )
                    }
                })}
            </div>
        </div>
    )
}


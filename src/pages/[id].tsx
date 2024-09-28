import { Hero } from '@/components/Hero/Hero'

import styles from "./styles.module.css"
const Page = () => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <Hero
                    title="This is some title"
                    imageURL="https://images.pexels.com/photos/17887855/pexels-photo-17887855.jpeg"
                    subtitle="This is a subtitle"
                />
                <Hero
                    title="This is some title"
                    imageURL="https://images.pexels.com/photos/17887855/pexels-photo-17887855.jpeg"
                    subtitle="This is a subtitle"
                />
                <Hero
                    title="This is some title"
                    imageURL="https://images.pexels.com/photos/17887855/pexels-photo-17887855.jpeg"
                    subtitle="This is a subtitle"
                />
                <Hero
                    title="This is some title"
                    imageURL="https://images.pexels.com/photos/17887855/pexels-photo-17887855.jpeg"
                    subtitle="This is a subtitle"
                />
                <Hero
                    title="This is some title"
                    imageURL="https://images.pexels.com/photos/17887855/pexels-photo-17887855.jpeg"
                    subtitle="This is a subtitle"
                />
            </div>
        </div>
    )
}

export default Page

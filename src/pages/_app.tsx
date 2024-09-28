import type { AppProps } from "next/app"
import { Raleway } from "next/font/google"
import "./styles.css"

const raleway = Raleway({
    display: "block",
    preload: false,
    weight: ["500", "400"],
})

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${raleway.style.fontFamily};
                }
            `}</style>
            <Component {...pageProps} />
        </>
    )
}

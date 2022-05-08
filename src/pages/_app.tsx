import type { AppProps } from 'next/app'
import emotionReset from 'emotion-reset'
import { Global, css } from '@emotion/react'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
            <Global
                styles={css`
                    ${emotionReset}
                    body {
                        background-color: #212529;
                    }
                `}
            />
        </>
    )
}

export default MyApp

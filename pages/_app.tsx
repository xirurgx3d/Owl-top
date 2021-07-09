import '../styles/globals.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <head>
        <title>wwww</title>
      </head>
      <Component {...pageProps} />
    </>  
  )
}
export default MyApp

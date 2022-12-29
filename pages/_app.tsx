import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nav, Footer, ScrollToTop } from '../components'
import { NextSeo, DefaultSeo } from 'next-seo'

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <NextSeo title='SMARK' />
    <Nav />
    <Component {...pageProps} />
    <Footer />
    <ScrollToTop />
  </>)
}

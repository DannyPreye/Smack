import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nav, Footer, ScrollToTop } from '../components'
import { NextSeo, DefaultSeo } from 'next-seo'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <NextSeo title='SMARK' />
    <Nav />
    <Component {...pageProps} />
    <Analytics />
    <Footer />
    <ScrollToTop />
  </>)
}

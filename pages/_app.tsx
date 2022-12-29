import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Nav, Footer, ScrollToTop } from '../components'
import { NextSeo, DefaultSeo } from 'next-seo'
import { Analytics } from '@vercel/analytics/react';

export default function App({ Component, pageProps }: AppProps) {
  return (<>
    <NextSeo title='SMARK' description='Welcome to SMARK, the premier software development company for businesses looking to leverage the power of artificial intelligence (AI). Our AI-powered website development and digital marketing services are designed to help businesses of all sizes succeed online.
Our team of experts offers custom website design and development, AI-assisted content writing and grammar correction, Twitter profile management with AI-powered tweet scheduling, and full-service digital marketing strategy and execution. Our comprehensive suite of AI products and services is designed to streamline operations, improve efficiency, and drive results.
With SMARK, you can revolutionize your online presence and take your business to the next level. Contact us today to learn more and see how we can help you succeed online.' />
    <Nav />
    <Component {...pageProps} />
    <Analytics />
    <Footer />
    <ScrollToTop />
  </>)
}

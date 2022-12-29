import Head from 'next/head'
import Image from 'next/image'
import { Hero, Services, Blog, About, Subscribe } from '../components'

export default function Home() {
  return (
    <>

      <main className='font-nunito' >
        <Hero />
        <Services />
        <About />
        <Blog />
        <Subscribe />
      </main>
    </>
  )
}

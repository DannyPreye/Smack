import Head from 'next/head'
import Image from 'next/image'
import { Hero, Services, Blog } from '../components'

export default function Home() {
  return (
    <>

      <main className='font-nunito' >
        <Hero />
        <Services />
        <Blog />
      </main>
    </>
  )
}

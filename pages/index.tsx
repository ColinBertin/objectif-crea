import Head from 'next/head'

import NavBar from './ui/navBar/NavBar'
import Banner from './ui/banner/Banner'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Objectif Crea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative w-full h-full">
        {/* <NavBar /> */}
        <Banner />


      </main>

      <footer className="">
        <p></p>
      </footer>
    </div>
  )
}

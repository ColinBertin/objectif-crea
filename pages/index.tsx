import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import NavBar from './ui/navBar'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Objectif Crea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="relative">
        <NavBar />
        <h1 className="top-500 left-500">
          Welcome to Objectif Crea
        </h1>


      </main>

      <footer className={styles.footer}>

      </footer>
    </div>
  )
}

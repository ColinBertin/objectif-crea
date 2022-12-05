import Head from "next/head";

import NavBar from "./components/navBar/NavBar";
import Banner from "./components/banner/Banner";
import Main from "./components/main/Main";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Objectif Crea</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-screen w-screen">
        <header className="h-screen w-screen">
          <NavBar />
          <Banner />
        </header>
        <main className="h-100">
          <Main />
        </main>
      </div>

      <footer className="">
        <p></p>
      </footer>
    </div>
  );
}

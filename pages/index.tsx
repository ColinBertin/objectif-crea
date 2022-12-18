import Head from "next/head";

import NavBar from "../components/navBar/NavBar";
import Banner from "../components/banner/Banner";
import Main from "../components/main/Main";
import Footer from "../components/footer/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Objectif Créa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative h-screen w-screen">
        <header className="h-screen w-screen">
          <NavBar />
          <Banner bg="/bannerImg1.png" />
        </header>
        <main className="h-100">
          <Main />
        </main>
        <Footer />
      </div>
    </div>
  );
}

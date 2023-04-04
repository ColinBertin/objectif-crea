import Head from "next/head";
import NavBar from "../../components/navBar/NavBarTest2";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

export default function Mariage() {
  return (
    <>
      <Head>
        <title>Mariage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <NavBar />
        <Banner bg="/images/banner/mariage.png" />
      </div>
      <Footer />
    </>
  );
}

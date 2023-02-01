import Head from "next/head";
import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

export default function Maternite() {
  return (
    <>
      <Head>
        <title>Maternité</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <NavBar />
        <Banner bg="/images/banner/maternite.jpg" />
      </div>
      <Footer />
    </>
  );
}
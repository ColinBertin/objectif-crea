import Head from "next/head";
import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";

import PhotoAlbum from "react-photo-album";
import {images} from "./img";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export default function Mariage() {

  return (
    <>
      <Head>
        <title>Mariage</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <NavBar />
        <Banner bg="/images/banner/mariage.png" />
      </header>
      <main className="py-20 px-20">
        <PhotoAlbum layout="columns" photos={images} targetRowHeight={150}/>
      </main>
      <Footer />
    </>
  );
}

import Head from "next/head";
import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";

export default function testPage() {
  return (
    <>
      <Head>
        <title>Test</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <NavBar />
        <Banner bg="/bannerImg1.png" />
        <h3>Hello test page</h3>
      </div>
    </>
  );
}

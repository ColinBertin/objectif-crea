import Head from "next/head";
import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import { categories } from "../../helpers";
import CategoryCard from "../../components/main/CategoryCard";

export default function NouveauNee() {
  return (
    <>
      <Head>
        <title>Nouveau née</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <NavBar />
        <Banner bg="/images/banner/nouveauNee.png" />
      </div>
      <div id="intro" className="text-center">
        <div className="px-10 py-8 lg:px-40 lg:py-20 text-white">
          <h3 className="mb-3 text-xl">— WE TAKE THE TIME TO —</h3>
          <p className="text-sm md:text-base leading-9 tracking-wide text-gray-500">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
            commodi quis esse, qui voluptatum distinctio perspiciatis. Ut
            quibusdam amet iste sit veniam, minima recusandae incidunt fugiat,
            voluptatem commodi natus debitis!
          </p>
        </div>
        <div className="justify-items-center pt-12 pb-20 md:pb-32 md:px-24 xl:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12 text-gray-500">
          {categories.map((category, index) => {
            if (category.title !== "Nouveau née") {
              return (
                <CategoryCard
                  key={index}
                  title={category.title}
                  link={category.link}
                  bg={category.bg}
                />
              );
            }
          })}
        </div>
      </div>
      <Footer />
    </>
  );
}

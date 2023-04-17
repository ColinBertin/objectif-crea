import Head from "next/head";
import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import { categories } from "../../helpers";
import CategoryCard from "../../components/main/CategoryCard";

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
      <div className="justify-items-center pt-12 pb-20 md:pb-32 md:px-24 xl:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12 text-gray-500">
        {categories.map((category, index) => {
          if (category.title !== "Mariage") {
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
      <Footer />
    </>
  );
}

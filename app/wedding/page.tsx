import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import Masonry from "../../components/masonry/Masonry";
import { categories } from "../../helpers";
import CategoryCard from "../../components/main/CategoryCard";

export const metadata = {
  title: "Mariage",
};

export default function WeddingPage() {
  return (
    <>
      <div>
        <NavBar />
        <Banner bg="/images/banner/mariage.png" />
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
        <div className="px-10 pb-8 md:px-24 md:pb-20">
          <Masonry category={4} />
        </div>
        <>
          <div className="pt-8 md:pt-20 mb-3">
            <h4 className="uppercase text-white">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
            </h4>
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
        </>
      </div>
      <Footer />
    </>
  );
}

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
  const filteredCategories = () => {
    return categories.filter((cat) => cat.title !== "Mariage");
  };

  return (
    <>
      <div>
        <NavBar />
        <Banner bg="/images/banner/mariageBig.png" title="Mariage" />
      </div>
      <div id="intro" className="text-center">
        <div className="px-10 py-8 lg:px-40 lg:py-20 text-white">
          <h3 className="mb-3 text-xl">
            Capturer l&apos;Inoubliable : Photographie de Mariage Artistique et
            Emotive
          </h3>
          <p className="text-sm md:text-base lg:text-lg leading-9 tracking-wide text-gray-300">
            Découvrez l&apos;art de capturer les moments magiques de votre
            journée spéciale. En tant que spécialiste de la photographie de
            mariage, je crée des souvenirs intemporels qui racontent votre
            histoire d&apos;amour unique. Laissez-moi immortaliser la joie, les
            larmes et les rires de votre mariage, transformant chaque instant en
            une œuvre d&apos;art.
          </p>
        </div>
        <div className="px-10 pb-8 md:px-24 md:pb-20">
          <Masonry category={4} />
        </div>
        <div className="bg-gray-500">
          <h3 className="pt-8 md:pt-20 mb-3 uppercase text-white tracking-wide">
            Catégories
          </h3>
          <div
            className={`pt-12 pb-20 md:pb-32 md:px-24 xl:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-${
              filteredCategories().length > 3 ? 4 : 3
            } gap-10 md:gap-12 text-gray-300 place-items-center`}
          >
            {filteredCategories().map((category) => {
              return (
                <CategoryCard
                  key={category.title}
                  title={category.title}
                  link={category.link}
                  bg={category.bg}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

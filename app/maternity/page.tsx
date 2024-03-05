import NavBar from "../../components/navBar/NavBar";
import Banner from "../../components/banner/Banner";
import Footer from "../../components/footer/Footer";
import { categories } from "../../helpers";
import CategoryCard from "../../components/main/CategoryCard";
import Masonry from "../../components/masonry/Masonry";
import TopButton from "../../components/topButton/TopButton";

export const metadata = {
  title: "Maternité",
};

export default function MaternityPage() {
  const filteredCategories = () => {
    return categories.filter((cat) => cat.title !== "Maternité");
  };

  return (
    <>
      <div>
        <NavBar />
        <Banner bg="/images/banner/materniteSmall.jpg" title="Maternité" />
      </div>
      <div id="intro" className="text-center">
        <div className="px-10 py-8 lg:px-40 lg:py-20 text-white">
          <h3 className="mb-3 text-xl">
            Célébrer le Voyage de la Maternité : Photographie Émotionnelle et
            Authentique
          </h3>
          <p className="text-base text-start md:text-center lg:text-lg leading-7 tracking-wide text-gray-300">
            Embarquez dans le voyage émotionnel de la maternité avec des
            photographies qui capturent la beauté et la force de cette
            expérience unique. De la grossesse à l&apos;accueil de la nouvelle
            vie, je suis là pour saisir les moments les plus tendres et
            significatifs de cette période extraordinaire de votre vie.
          </p>
        </div>
        <div className="px-10 pb-8 md:px-24 md:pb-20">
          <Masonry category={2} />
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
      <TopButton />
    </>
  );
}

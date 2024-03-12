import Banner from "../../components/banner/Banner";
import { categories } from "../../helpers";
import CategoryCard from "../../components/main/CategoryCard";
import Masonry from "../../components/masonry/Masonry";

export const metadata = {
  title: "Nouveau né",
};

export default function NewBornPage() {
  const filteredCategories = () => {
    return categories.filter((cat) => cat.title !== "Nouveau Né");
  };

  return (
    <>
      <Banner bg="/images/banner/nouveauNeSmall.png" title="Nouveau né" />
      <div id="intro" className="text-center">
        <div className="px-10 py-8 lg:px-40 lg:py-20 text-white">
          <h4 className="mb-3 text-white">
            Les Premiers Jours : Capturer la Douceur des Nouveaux Nés
          </h4>
          <p className="text-lg text-start md:text-center md:text-xl leading-9 tracking-wide text-gray-300">
            Immortalisez la douceur, la pureté et les détails si précieux des
            premiers jours de votre nouveau-né avec des photographies qui
            parlent au cœur. Spécialisé dans la photographie de nouveaux nés, je
            crée un environnement chaleureux et sécurisé pour capturer les
            expressions uniques et les premiers moments de vie de votre bébé.
          </p>
        </div>
        <div className="px-10 pb-8 md:px-24 md:pb-20">
          <Masonry category={3} />
        </div>
        <div className="bg-gray-500">
          <h4 className="pt-8 md:pt-20 mb-3 uppercase text-white tracking-wide">
            Catégories
          </h4>
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
    </>
  );
}

import CategoryCard from "../components/main/CategoryCard";
import { categories } from "../helpers";
import TopButton from "../components/topButton/TopButton";

export default function Main() {
  return (
    <>
      <div id="intro" className="text-center">
        <div className="px-10 py-8 lg:px-40 lg:py-20 text-white">
          <h3 className="mb-3 text-xl">WE TAKE THE TIME TO</h3>
          <p className="text-base leading-9 tracking-wide text-gray-300">
            Chez Objectif CréA, transformer vos visions en chefs-d&apos;œuvre
            est l&apos;essence même de notre passion. Notre mission est de
            donner vie à vos projets créatifs, en alliant excellence et
            personnalisation pour créer des œuvres qui vous ressemblent.
          </p>
          {/* <p className="text-base leading-9 tracking-wide text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            corrupti maxime sapiente autem accusamus dolore, sunt facilis.
            Laborum et id distinctio. Ullam sunt iusto, quae provident voluptate
            animi debitis perspiciatis.
          </p> */}
        </div>
        <div className="justify-items-center pt-12 pb-20 md:pb-32 md:px-24 xl:px-36 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12 text-gray-300">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              link={category.link}
              bg={category.bg}
            />
          ))}
        </div>
      </div>
      <TopButton />
    </>
  );
}

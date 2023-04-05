import CategoryCard from "./CategoryCard";

export default function Main() {
  const categories = [
    {
      title: "Mariage",
      link: "/wedding",
      bg: "/images/banner/mariage.png",
    },
    {
      title: "Maternité",
      link: "/maternity",
      bg: "/images/banner/maternite.jpg",
    },
    {
      title: "Nouveau née",
      link: "/newBorn",
      bg: "/images/banner/nouveauNee.png",
    },
    {
      title: "Évènement",
      link: "/evenment",
      bg: "/images/banner/evenement.png",
    },
    {
      title: "Landscape",
    },
    {
      title: "Landscape",
    },
    {
      title: "Landscape",
    },
    {
      title: "Landscape",
    },
  ];

  return (
    <div id="intro" className="text-center">
      <div className="px-10 py-8 lg:px-40 lg:py-20 text-white">
        <h3 className="mb-3 text-xl">— WE TAKE THE TIME TO —</h3>
        <p className="text-sm md:text-base leading-9 tracking-wide text-gray-500">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          commodi quis esse, qui voluptatum distinctio perspiciatis. Ut
          quibusdam amet iste sit veniam, minima recusandae incidunt fugiat,
          voluptatem commodi natus debitis!
        </p>
        <p className="text-sm md:text-base leading-9 tracking-wide text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          corrupti maxime sapiente autem accusamus dolore, sunt facilis. Laborum
          et id distinctio. Ullam sunt iusto, quae provident voluptate animi
          debitis perspiciatis.
        </p>
      </div>
      <div className="pt-12 pb-20 md:pb-32 md:px-24 xl:px-48 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 md:gap-12 place-items-center text-gray-500">
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
  );
}

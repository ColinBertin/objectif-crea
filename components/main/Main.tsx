import CategoryCard from "./CategoryCard";

export default function Main() {
  return (
    <div className="text-center py-9">
      <div className="mt-36 px-80">
        <h3 className="mb-3 text-xl">— WE TAKE THE TIME TO —</h3>
        <p className="leading-9 tracking-wide">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          commodi quis esse, qui voluptatum distinctio perspiciatis. Ut
          quibusdam amet iste sit veniam, minima recusandae incidunt fugiat,
          voluptatem commodi natus debitis!
        </p>
        <p className="leading-9 tracking-wide">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
          corrupti maxime sapiente autem accusamus dolore, sunt facilis. Laborum
          et id distinctio. Ullam sunt iusto, quae provident voluptate animi
          debitis perspiciatis.
        </p>
      </div>
      <div className="grid lg:grid-rows-2 sm:grid-rows-4 lg:grid-flow-col gap-6 my-36 mx-12 p-12 place-items-center">
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
        <CategoryCard />
      </div>
    </div>
  );
}

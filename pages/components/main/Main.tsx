import CategoryCard from "./CategoryCard";

export default function Main() {
  return (
    <div className="h-96 text-center pt-28 pb-20 py-9">
      <div className="px-80">
        <h2 className="mb-3">— WE TAKE THE TIME TO —</h2>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam
          commodi quis esse, qui voluptatum distinctio perspiciatis. Ut
          quibusdam amet iste sit veniam, minima recusandae incidunt fugiat,
          voluptatem commodi natus debitis!
        </p>
        <p>
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

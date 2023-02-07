import Image from "next/image";
import Link from "next/link";

type categoryCard = {
  title: string;
  link?: string;
  bg?: string;
};

export default function CategoryCard({ title, link, bg }: categoryCard) {
  return (
    <div className="max-w-sm w-full hover:shadow-[0_4px_50px_5px_rgba(100,100,100,0.2)]">
      <Link
        className="relative block h-40 bg-white object-fill"
        href={link ? link : "/"}
      >
        <Image
          className=""
          src={bg ? bg : "/images/banner/bannerImg1.png"}
          fill
          alt={title}
        />
      </Link>
      <div className="flex flex-row py-5 bg-gray-800">
        <h5 className="m-auto">
          <Link href={link ? link : "/"}>{title}</Link>
        </h5>
      </div>
    </div>
  );
}

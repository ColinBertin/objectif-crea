"use client";
import Image from "next/image";
import Link from "next/link";

type categoryCard = {
  title: string;
  link?: string;
  bg?: string;
};

export default function CategoryCard({ title, link, bg }: categoryCard) {
  return (
    <div className="max-w-xs w-full hover:shadow-[0_4px_50px_5px_rgba(100,100,100,0.2)] ease-in duration-200">
      <Link href={link ? link : "/"}>
        <div className="relative block h-40 bg-white object-fill">
          <Image
            className=""
            src={bg ? bg : "/images/banner/bannerImg1small.png"}
            alt={title}
            fill
            style={{ objectFit: "cover" }}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className="flex flex-row py-5 bg-gray-800">
          <h5 className="m-auto text-lg md:text-xl">{title}</h5>
        </div>
      </Link>
    </div>
  );
}

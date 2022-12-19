import Image from 'next/image';
import Link from 'next/link'

type categoryCard = {
  title: string;
  link?: string;
  bg?: string;
}

export default function CategoryCard({title, link, bg}: categoryCard) {
  return (
    <div className="max-w-sm w-11/12 md:w-auto">
      <Link className="relative block h-48 bg-white object-fill" href={link ? link : "/"}>
        <Image
          className="hover:backdrop-blur-sm hover:bg-white/30"
          src={bg ? bg : "/images/banner/bannerImg1.png"}
          fill
          alt=""
        />
      </Link>
      <div className="flex flex-row py-5 px-24 bg-gray-800">
        <h5 className="m-auto"><Link href={link ? link : "/"}>{title}</Link></h5>
      </div>
    </div>
  );
}

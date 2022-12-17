import Image from 'next/image';
import Link from 'next/link'

type categoryCard = {
  title: string
}

export default function CategoryCard({title}: categoryCard) {
  return (
    <div className="max-w-sm w-auto">
      <Link className="relative block h-48 bg-white object-fill" href={"/"}>
        <Image
          className="hover:backdrop-blur-sm hover:bg-white/30"
          src="/bannerImg1.png"
          fill
          alt=""
        />
      </Link>
      <div className="flex flex-row py-5 px-24 bg-gray-800">
        <h5 className="m-auto">{title}</h5>
      </div>
    </div>
  );
}

import Image from 'next/image';

export default function CategoryCard() {
  return (
    <div className="max-w-sm w-auto">
      <a className="relative block h-52 bg-white object-fill" href={"/"}>
        <Image
          className=""
          src="/bannerImg1.png"
          fill
          alt=""
        />
      </a>
      <div className="flex flex-row py-8 px-24 bg-gray-800">
        <h4 className="m-auto">LANDSCAPE</h4>
      </div>
    </div>
  );
}

import Image from 'next/image';

export default function CategoryCard() {
  return (
    <div className="max-w-sm shadow-md shadow-gray-600/10">
      <a className="relative block h-52 bg-white object-fill" href="#">
        <Image
          className=""
          src="/bannerImg1.png"
          fill
          alt=""
        />
      </a>
      <div className="flex flex-row h-24 w-96 bg-gray-800">
        <h3 className="m-auto">LANDSCAPE</h3>
      </div>
    </div>
  );
}

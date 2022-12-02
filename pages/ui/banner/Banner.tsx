import Image from "next/image";

export default function Banner() {
  return (
    <div className="h-screen">
      <div className="fixed overflow-hidden h-screen w-screen -z-1">
      <Image
        alt="objectif créa"
        src="/bannerImg1.png"
        quality={100}
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <h1 className="m-0 text-2xl text-center align-middle z-10 pt-50">Do you see me?</h1>
      </div>
    </div>
  );
}

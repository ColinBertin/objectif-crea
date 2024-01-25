"use client";

import Link from "next/link";
import { BsChevronCompactDown } from "react-icons/bs";
import { handleScroll } from "../../helpers";

type banner = {
  bg: string;
};

export default function Banner({ bg }: banner) {
  const test = () => {
    console.log("hello");
  };

  return (
    <div
      id="banner"
      className="w-screen h-screen"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.60), rgba(0,0,0,0.60)), url(${bg})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen text-white px-10 md:px-16 lg:px-20">
        <h1 className="text-center text-xl sm:text-2xl md:text-4xl tracking-widest mb-10">
          NOTRE OBJECTIF EST DE RÉALISER VOTRE PROJET CRÉATIF !
        </h1>

        <Link href={"#intro"} onClick={handleScroll}>
          <BsChevronCompactDown className="h-8 w-8 md:h-12 md:w-12 hover:text-gray-500" />
        </Link>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { BsChevronCompactDown } from "react-icons/bs";
import { handleScroll } from "../../helpers";

type banner = {
  bg: string;
  title?: string;
};

export default function Banner({ bg, title }: banner) {
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
        {title && (
          <h3 className="mb-10 text-xl uppercase">
            — Objectif Créa Collection —
          </h3>
        )}
        <h1 className="text-center text-xl sm:text-2xl md:text-4xl lg:text-6xl xl:text-8xl tracking-widest mb-10 uppercase">
          {title
            ? `${title}`
            : "NOTRE OBJECTIF EST DE RÉALISER VOTRE PROJET CRÉATIF !"}
        </h1>

        <Link href={"#intro"} onClick={handleScroll}>
          <BsChevronCompactDown className="h-8 w-8 md:h-12 md:w-12 hover:text-gray-300" />
        </Link>
      </div>
    </div>
  );
}

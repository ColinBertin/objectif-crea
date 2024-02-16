"use client";
import clsx from "clsx";
import Link from "next/link";
import { handleScroll } from "../../helpers";
import { Transition } from "@headlessui/react";
import { useEffect } from "react";

type menuProps = {
  menuState: boolean;
  handleNavbar?: () => void;
};

export default function Menu({ menuState, handleNavbar }: menuProps) {
  useEffect(() => {
    if (menuState) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }
  }, [menuState]);

  return (
    <>
      {/* DESKTOP MENU */}
      <ul
        className={clsx(
          "h-screen w-1/2 md:w-auto md:h-auto md:flex hidden md:block"
        )}
      >
        <li className="pb-6 md:pb-0 md:py-0 text-md text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
          <Link href={"/about-me"}>À Propos</Link>
        </li>
      </ul>
      {/* MOBILE PHONE MENU */}
      <Transition
        show={menuState}
        className="w-full flex justify-center items-center"
        enter="transition ease-in-out duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-in-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <ul
          className={clsx(
            menuState ? "flex flex-col justify-center -mt-20 mb-20" : "hidden",
            "h-screen w-1/2 md:hidden"
          )}
        >
          <li className="pb-6 text-xl text-white py-6 text-center border-b-2 hover:text-gray-300">
            <Link href={"/wedding"} onClick={handleNavbar}>
              Mariage
            </Link>
          </li>
          <li className="pb-6 text-xl text-white py-6 text-center border-b-2 hover:text-gray-300">
            <Link href={"/maternity"} onClick={handleNavbar}>
              Maternité
            </Link>
          </li>
          <li className="pb-6 text-xl text-white py-6 text-center border-b-2 hover:text-gray-300">
            <Link href={"/newBorn"} onClick={handleNavbar}>
              Nouveau Né
            </Link>
          </li>
          <li className="pb-6 text-xl text-white py-6 text-center border-b-2 hover:text-gray-300">
            <Link href={"/event"} onClick={handleNavbar}>
              Évènement
            </Link>
          </li>
          <li className="pb-6 text-white py-6 text-center border-b-2 hover:text-gray-300">
            <Link href={"/"} onClick={handleNavbar}>
              À propos
            </Link>
          </li>
        </ul>
      </Transition>
    </>
  );
}

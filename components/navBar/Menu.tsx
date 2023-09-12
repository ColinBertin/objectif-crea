"use client"
import clsx from "clsx";
import Link from "next/link";
import { handleScroll } from "../../helpers";
import { Transition } from "@headlessui/react";

type menuProps = {
  menuState: boolean;
  handleNavbar?: () => void;
};

export default function Menu({ menuState, handleNavbar }: menuProps) {
  return (
    <>
      {/* DESKTOP MENU */}
      <ul
        className={clsx(
          "h-screen w-1/2 md:w-auto md:h-auto md:flex hidden md:block"
        )}
      >
        <li className="pb-6 md:pb-0 md:py-0 text-xl text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
          <Link href={"#banner"} onClick={handleScroll}>
            Top
          </Link>
        </li>
        <li className="pb-6 md:pb-0 md:py-0 text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
          <Link href={"/"}>À propos</Link>
        </li>
        <li className="pb-6 md:pb-0 md:py-0 text-xl text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
          <Link href={"/"}>Contact</Link>
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
          <li className="pb-6 text-white py-6 text-center border-b-2 hover:text-gray-300">
            <Link href={"/"} onClick={handleNavbar}>
              À propos
            </Link>
          </li>
          <li className="pb-6 text-xl text-white py-6 text-center border-b-2 hover:text-gray-300">
            <Link href={"/"} onClick={handleNavbar}>
              Contact
            </Link>
          </li>
        </ul>
        </Transition>
    </>
  );
}

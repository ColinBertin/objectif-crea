"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Menu from "./Menu";
import { Transition } from "@headlessui/react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 bg-gray-800 flex justify-between px-6 py-2 z-50">
        {/* LOGO */}
        <Link className="inline" href={"/"}>
          <Image
            src="/images/logos/logoW.png"
            alt="logo"
            quality={60}
            width={40}
            height={40}
          />
        </Link>
        {/* HAMBURGER BUTTON */}
        <button
          className="text-white rounded-md outline-none"
          onClick={handleNavbar}
        >
          {navbar ? (
            <IoCloseOutline className="h-6 w-6 md:h-8 md:w-8" />
          ) : (
            <RxHamburgerMenu className="h-6 w-6 md:h-8 md:w-8" />
          )}
        </button>
      </nav>
      {/* MENU ITEMS */}
      <Transition
        show={navbar}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu menuState={navbar} handleNavbar={handleNavbar} />
      </Transition>
    </>
  );
}

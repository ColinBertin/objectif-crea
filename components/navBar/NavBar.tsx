"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "./Menu";
import { Transition } from "@headlessui/react";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-10 bg-gray-700">
      <div className="w-full justify-between md:items-center md:flex mx-auto">
        <div className="flex justify-between px-6 py-2">
          {/* LOGO */}
          <Link href={"/"}>
            <Image
              src="/images/logos/fullLogo.png"
              alt="logo"
              quality={60}
              width={150}
              height={100}
            />
          </Link>
          {/* HAMBURGER BUTTON FOR MOBILE */}
          <button
            className="md:hidden text-white rounded-md outline-none"
            onClick={handleNavbar}
          >
            {navbar ? (
              <AiOutlineClose className="h-6 w-6 md:h-8 md:w-8" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6 md:h-8 md:w-8" />
            )}
          </button>
        </div>
        <div className="px-6">
          <Transition
            show={navbar}
            className=" w-full flex justify-center items-center"
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Menu menuState={navbar} handleNavbar={handleNavbar} />
          </Transition>
        </div>
      </div>
    </nav>
  );
}

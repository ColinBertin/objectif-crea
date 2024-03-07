"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import Menu from "./Menu";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-30 bg-gray-800 flex justify-between px-6 py-2">
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
        {/* HAMBURGER BUTTON FOR MOBILE */}
        <button
          className="text-white rounded-md outline-none"
          onClick={handleNavbar}
        >
          {navbar ? (
            <AiOutlineClose className="h-6 w-6 md:h-8 md:w-8" />
          ) : (
            <GiHamburgerMenu className="h-6 w-6 md:h-8 md:w-8" />
          )}
        </button>
      </nav>
      <div className="flex justify-center items-center px-6 mt-12 bg-gray-800">
        <Menu menuState={navbar} handleNavbar={handleNavbar} />
      </div>
    </>
  );
}

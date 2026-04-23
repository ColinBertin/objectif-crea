"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoCloseOutline } from "react-icons/io5";
import Menu from "./Menu";
import { Transition } from "@headlessui/react";

const sections = [
  { title: "Home", href: "/" },
  { title: "Mariage", href: "/wedding" },
  { title: "Maternité", href: "/maternity" },
  { title: "Nouveau Né", href: "/newborn" },
  { title: "Évènement", href: "/event" },
  { title: "À propos", href: "/about-me" },
];

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);
  const pathname = usePathname();
  const isSamePath = (p: string) => pathname?.endsWith(p);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <nav className="w-full fixed top-0 left-0 bg-gray-800 flex justify-between items-center px-6 py-2 z-50">
        {/* LOGO */}
        <Link className="inline cursor-pointer" href={"/"}>
          <Image
            src="/images/logos/logo.png"
            alt="logo"
            quality={60}
            width={40}
            height={40}
          />
        </Link>

        {/* DESKTOP NAV LINKS */}
        <ul className="hidden md:flex gap-8">
          {sections.map((section) => (
            <Link key={section.title} href={section.href}>
              <li
                className={`${
                  isSamePath(section.href)
                    ? "text-gold-500 border-gold-500"
                    : "text-white border-transparent"
                } text-sm border-b pb-0.5 hover:text-gold-500 hover:border-gold-500 cursor-pointer transition-colors duration-150`}
              >
                {section.title}
              </li>
            </Link>
          ))}
        </ul>

        {/* HAMBURGER BUTTON — mobile only */}
        <button
          className="md:hidden text-white rounded-md outline-none hover:text-gold-500 transition ease-in duration-100 cursor-pointer"
          onClick={handleNavbar}
        >
          {navbar ? (
            <IoCloseOutline className="h-6 w-6" />
          ) : (
            <RxHamburgerMenu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <Transition
        show={navbar}
        enter="transition ease-out duration-100"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition ease-in duration-75"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Menu menuState={navbar} handleNavbar={handleNavbar} />
      </Transition>
    </>
  );
}

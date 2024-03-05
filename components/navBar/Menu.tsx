"use client";
import clsx from "clsx";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { handleScroll } from "../../helpers";

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

  const pathname = usePathname();
  const isSamePath = (p: string) => pathname?.endsWith(p);

  const sections = [
    {
      title: "Mariage",
      href: "/wedding",
    },
    {
      title: "Maternité",
      href: "/maternity",
    },
    {
      title: "Nouveau Né",
      href: "/newBorn",
    },
    {
      title: "Évènement",
      href: "/event",
    },
    {
      title: "À propos",
      href: "/about-me",
    },
    // {
    //   title: "Contact",
    //   href: "/about-me/#contact-form",
    // },
  ];

  return (
    <>
      {/* DESKTOP MENU */}
      <ul
        className={clsx(
          "h-screen w-1/2 md:w-auto md:h-auto md:flex hidden md:block"
        )}
      >
        {pathname?.endsWith("/about-me") ? (
          <li className="pb-6 md:pb-0 md:py-0 text-md text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
            <Link href={"#contact-form"} onClick={handleScroll}>
              Contact
            </Link>
          </li>
        ) : (
          <li className="pb-6 md:pb-0 md:py-0 text-md text-white py-6 md:px-4 text-center border-b-2 md:border-b-0 md:hover:text-gray-300">
            <Link href={"/about-me"}>À Propos</Link>
          </li>
        )}
      </ul>
      {/* MOBILE PHONE MENU */}
      <Transition
        show={menuState}
        className="w-full flex justify-center items-center"
        enter="transition ease-in duration-300 transform"
        enterFrom="-translate-x-full"
        enterTo="translate-x-0"
        leave="transition ease-out duration-300 transform"
        leaveFrom="translate-x-0"
        leaveTo="-translate-x-full"
      >
        <ul
          className={clsx(
            menuState ? "flex flex-col justify-center -mt-20 mb-20" : "hidden",
            "h-screen w-1/2 md:hidden"
          )}
        >
          {sections.map((section) => (
            <li
              key={section.title}
              className={`${
                isSamePath(section.href)
                  ? "text-gold-500 border-gold-500"
                  : "text-white"
              } pb-6 text-xl py-6 text-center border-b-2 hover:text-gray-300`}
            >
              <Link href={section.href} onClick={handleNavbar}>
                {section.title}
              </Link>
            </li>
          ))}
        </ul>
      </Transition>
    </>
  );
}

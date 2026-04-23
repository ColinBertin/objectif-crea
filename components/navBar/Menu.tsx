"use client";
import clsx from "clsx";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";

type menuProps = {
  menuState: boolean;
  handleNavbar?: () => void;
};

export default function Menu({ menuState, handleNavbar }: menuProps) {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleNavbar?.();
      }
    };

    if (menuState) {
      document.addEventListener("click", handleClickOutside);
      if (!window.matchMedia("(min-width: 768px)").matches) {
        document.body.style.overflow = "hidden";
      }
    } else {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
      document.body.style.overflow = "";
    };
  }, [menuState, handleNavbar]);

  const pathname = usePathname();
  const isSamePath = (p: string) => pathname?.endsWith(p);

  const sections = [
    {
      title: "Home",
      href: "/",
    },
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
      href: "/newborn",
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
    <div
      ref={dropdownRef}
      className={clsx(
        "fixed top-14 left-0 md:left-auto md:top-14 md:right-5 h-[calc(100vh-3.5rem)] w-screen md:w-52 md:h-auto",
        "flex flex-col justify-center px-20 md:px-6 md:pt-2 md:pb-6 bg-gray-800 z-40 md:shadow-[0_4px_50px_5px_rgba(100,100,100,0.1)] md:rounded"
      )}
    >
      <ul className="text-center md:text-start">
        {sections.map((section) => (
          <Link key={section.title} href={section.href} onClick={handleNavbar}>
            <li
              className={`${
                isSamePath(section.href)
                  ? "text-gold-500 border-gold-500"
                  : "text-white border-white md:border-gray-200"
              } text-xl md:text-base py-5 md:py-3 border-b-2 md:border-b hover:text-gold-500 hover:border-gold-500 cursor-pointer`}
            >
              {section.title}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}

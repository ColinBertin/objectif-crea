"use client";
import clsx from "clsx";
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

type menuProps = {
  menuState: boolean;
  handleNavbar?: () => void;
};

export default function Menu({ menuState, handleNavbar }: menuProps) {
  useEffect(() => {
    if (menuState) {
      document.body.classList.add("overflow-y-hidden", "md:overflow-y-auto");
    } else {
      document.body.classList.remove("overflow-y-hidden", "md:overflow-y-auto");
    }
  }, [menuState]);

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
    <div
      className={clsx(
        menuState
          ? "h-screen w-screen fixed md:h-auto md:w-64 md:top-10 md:right-5"
          : "hidden",
        "flex flex-col justify-center px-20 md:px-8 bg-gray-800 md:mt-8 md:pt-2 md:pb-6 z-40 md:shadow-[0_4px_50px_5px_rgba(100,100,100,0.1)] md:rounded"
      )}
    >
      <ul
        className={clsx(
          menuState && "-mt-16 md:mt-0",
          "text-center md:text-start"
        )}
      >
        {sections.map((section) => (
          <li
            key={section.title}
            className={`${
              isSamePath(section.href)
                ? "text-gold-500 border-gold-500"
                : "text-white border-white md:border-gray-200 hover:text-gray-200 hover:border-gray-200"
            } text-xl md:text-base py-5 md:py-3 border-b-2 md:border-b`}
          >
            <Link href={section.href} onClick={handleNavbar}>
              {section.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

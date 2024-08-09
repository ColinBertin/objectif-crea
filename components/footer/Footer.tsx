"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import clsx from "clsx";

export default function Footer() {
  const platforms = [
    {
      name: "facebook",
      href: "https://www.facebook.com/profile.php?id=100077455703233",
      icon: <FaFacebookF size={20} />,
    },
    {
      name: "instagram",
      href: "https://www.instagram.com/objectif_crea",
      icon: <AiFillInstagram size={20} />,
    },
    // {
    //   name: "linkedin",
    //   href: "https://www.linkedin.com/in/objectif-cr%C3%A9a-756144255/",
    //   icon: <AiFillLinkedin size={20} />,
    // },
    // {
    //   name: "twitter",
    //   href: "https://twitter.com/ObjectifCrea",
    //   icon: <AiOutlineTwitter size={20} />,
    // },
  ];

  return (
    <footer className="flex justify-between items-center flex-wrap md:block bg-gray-800 px-6 sm:px-12 py-6">
      <div className="flex items-center">
        <Link className="cursor-pointer" href={"/"}>
          <Image
            src="/images/logos/logoW.png"
            alt="logo"
            quality={60}
            width={50}
            height={50}
          />
        </Link>
      </div>
      <div className="flex justify-between items-end">
        <p className="hidden md:inline-block text-gray-300 text-sm">
          © Copyright 2012 - 2022 | All Rights Reserved
        </p>
        <ul className="flex text-gray-600 text-white">
          {platforms.map((platform, i) => (
            <Link key={platform.name} href={platform.href} target={"_blank"}>
              <li
                className={clsx(
                  i !== platforms.length - 1 && "mr-2 sm:mr-3 md:mr-4",
                  "text-md p-2 md:p-3 rounded bg-gray-300 hover:bg-gold-500 transition ease-in-out duration-200 transform cursor-pointer"
                )}
              >
                {platform.icon}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </footer>
  );
}

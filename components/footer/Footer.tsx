"use client";

import Image from "next/image";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import {
  // AiOutlineTwitter,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

export default function Footer() {
  // const router = useRouter()
  // const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
  //   e.preventDefault();
  //   router.push("/");
  // };

  return (
    <footer className="flex justify-between items-center flex-wrap md:block bg-gray-800 px-6 sm:px-12 py-6">
      <Link href={"/"}>
        <Image
          src="/images/logos/logoW.png"
          alt="logo"
          quality={60}
          width={50}
          height={50}
        />
      </Link>
      <div className="flex justify-between">
        <p className="hidden md:inline-block text-gray-300 my-auto text-sm">
          © Copyright 2012 - 2022 | All Rights Reserved
        </p>
        <ul className="flex text-gray-600">
          <Link
            href="https://www.facebook.com/profile.php?id=100077455703233"
            target={"_blank"}
          >
            <li className="mr-2 sm:mr-3 md:mr-4 text-md p-2 md:p-3 rounded bg-gray-700 hover:bg-gray-300 transition ease-in-out duration-200 transform">
              <FaFacebookF size={20} />
            </li>
          </Link>
          {/* <Link href="https://twitter.com/ObjectifCrea" target={"_blank"}>
            <li className="mr-2 sm:mr-3 md:mr-4 text-md p-2 md:p-3 rounded bg-gray-700 hover:bg-gray-300">
              <AiOutlineTwitter size={20} />
            </li>
          </Link> */}
          <Link
            href="https://www.instagram.com/objectif_crea"
            target={"_blank"}
          >
            <li className="mr-2 sm:mr-3 md:mr-4 text-md p-2 md:p-3 rounded bg-gray-700 hover:bg-gray-300 transition ease-in-out duration-200 transform">
              <AiFillInstagram size={20} />
            </li>
          </Link>
          <Link
            href="https://www.linkedin.com/in/objectif-cr%C3%A9a-756144255/"
            target={"_blank"}
          >
            <li className="text-md p-2 md:p-3 rounded bg-gray-700 hover:bg-gray-300 transition ease-in-out duration-200 transform">
              <AiFillLinkedin size={20} />
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}

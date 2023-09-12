"use client"

import Image from "next/image";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineTwitter,
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
    <footer className="bg-gray-800 px-12 py-10">
      <div className="mb-4">
        <Link className="m-0 p-0" href={"/"}>
          <Image
            src="/images/logos/fullLogo.png"
            alt="logo"
            quality={60}
            width={150}
            height={100}
          />
        </Link>
      </div>
      <div className="flex justify-between">
        <p className="hidden md:inline-block text-gray-500 my-auto text-sm">
          © Copyright 2012 - 2022 | All Rights Reserved
        </p>
        <ul className="flex text-gray-600">
          <Link
            href="https://www.facebook.com/profile.php?id=100077455703233"
            target={"_blank"}
          >
            <li className="mr-4 text-md p-3 rounded bg-gray-700 hover:bg-gray-500">
              <FaFacebookF size={30} />
            </li>
          </Link>
          <Link href="https://twitter.com/ObjectifCrea" target={"_blank"}>
            <li className="mr-4 text-md p-3 rounded bg-gray-700 hover:bg-gray-500">
              <AiOutlineTwitter size={30} />
            </li>
          </Link>
          <Link
            href="https://www.instagram.com/objectif_crea"
            target={"_blank"}
          >
            <li className="mr-4 text-md p-3 rounded bg-gray-700 hover:bg-gray-500">
              <AiFillInstagram size={30} />
            </li>
          </Link>
          <Link href="https://www.linkedin.com/in/objectif-cr%C3%A9a-756144255/" target={"_blank"}>
            <li className="text-md p-3 rounded bg-gray-700 hover:bg-gray-500">
              <AiFillLinkedin size={30} />
            </li>
          </Link>
        </ul>
      </div>
    </footer>
  );
}

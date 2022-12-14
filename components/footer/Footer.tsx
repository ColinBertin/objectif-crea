import Image from "next/image";
import router from "next/router";
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillInstagram, AiFillYoutube } from 'react-icons/ai';

export default function Footer() {

  const handleClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    e.preventDefault()
    router.push('/')
  }

  return (
    <footer className="bg-gray-800 px-12 py-10">
      <div className="mb-4">
      <a className="m-0 p-0" href={"/"} onClick={handleClick}>
      <Image
          src="/fullLogo.png"
          alt="logo"
          quality={60}
          width={180}
          height={130}
        />
      </a>
      </div>
      <div className="flex justify-between">
        <p className="hidden md:inline-block text-gray-500 my-auto text-sm">© Copyright 2012 - 2022 | All Rights Reserved</p>
        <ul className="flex text-gray-600">
          <li className="mr-4 text-md p-3 rounded bg-gray-700"><FaFacebookF size={30}/></li>
          <li className="mr-4 text-md p-3 rounded bg-gray-700"><AiOutlineTwitter size={30}/></li>
          <li className="mr-4 text-md p-3 rounded bg-gray-700"><AiFillInstagram size={30}/></li>
          <li className="text-md p-3 rounded bg-gray-700"><AiFillYoutube size={30}/></li>
        </ul>
      </div>
    </footer>
  );
}

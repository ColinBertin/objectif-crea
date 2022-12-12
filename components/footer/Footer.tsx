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
    <footer className="bg-gray-800 px-14 py-16">
      <div className="mb-10">
      <a className="m-0 p-0" href={"/"} onClick={handleClick}>
        <Image
          src="/fullLogo.png"
          alt="logo"
          quality={60}
          width={250}
          height={200}
        />
      </a>
      </div>
      <div className="flex justify-between">
        <p className="hidden md:inline-block">© Copyright 2012 - 2022 | All Rights Reserved</p>
        <ul className="flex">
          <li className="mr-4 text-md"><FaFacebookF size={40}/></li>
          <li className="mr-4 text-md"><AiOutlineTwitter size={40}/></li>
          <li className="mr-4 text-md"><AiFillInstagram size={40}/></li>
          <li className="text-md"><AiFillYoutube size={40}/></li>
        </ul>
      </div>
    </footer>
  );
}
